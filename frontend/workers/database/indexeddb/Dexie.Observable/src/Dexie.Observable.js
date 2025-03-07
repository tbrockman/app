/* ==========================================================================
 *                           dexie-observable.js
 * ==========================================================================
 *
 * Dexie addon for observing database changes not just on local db instance
 * but also on other instances, tabs and windows.
 *
 * Comprises a base framework for dexie-syncable.js
 *
 * By David Fahlander, david.fahlander@gmail.com,
 *    Nikolas Poniros, https://github.com/nponiros
 *
 * ==========================================================================
 *
 * Version {version}, {date}
 *
 * https://dexie.org
 *
 * Apache License Version 2.0, January 2004, http://www.apache.org/licenses/
 *
 */
import Dexie from 'dexie';
import { createUUID, nop, promisableChain } from './utils';

import initOverrideCreateTransaction from './override-create-transaction';
import initWakeupObservers from './wakeup-observers';
import initCrudMonitor from './hooks/crud-monitor';
import initOnStorage from './on-storage';
import initOverrideOpen from './override-open';
import initIntercomm from './intercomm';

import overrideParseStoresSpec from './override-parse-stores-spec';

import deleteOldChanges from './delete-old-changes';

const global = self;

/** class DatabaseChange
 *
 *  Object contained by the _changes table.
 */
const DatabaseChange = Dexie.defineClass({
    rev: Number, // Auto-incremented primary key
    source: String, // Optional source creating the change. Set if transaction.source was set when doing the operation.
    table: String, // Table name
    key: Object, // Primary key. Any type.
    type: Number, // 1 = CREATE, 2 = UPDATE, 3 = DELETE
    obj: Object, // CREATE: obj contains the object created.
    mods: Object, // UPDATE: mods contains the modifications made to the object.
    oldObj: Object, // DELETE: oldObj contains the object deleted. UPDATE: oldObj contains the old object before updates applied.
});

// Import some usable helper functions
const override = Dexie.override;
const Promise = Dexie.Promise;
let browserIsShuttingDown = false;

const hasChanges = {};
const lastPollTimestamp = {};
const isHibernating = {};
const HIBERNATE_MULTIPLIER = process.env.platform === 'desktop' ? 60 : 10;

/** Dexie addon for change tracking and real-time observation.
 *
 * @param {Dexie} db
 */
function Observable(db) {
    if (!/^(3|4)\./.test(Dexie.version))
        throw new Error(`Missing dexie version 3.x or 4.x`);
    if (db.observable) {
        if (db.observable.version !== '{version}')
            throw new Error(`Mixed versions of dexie-observable`);
        return; // Addon already active.
    }

    const NODE_TIMEOUT = process.env.platform === 'desktop' ? 25_000 : 5_000; // 20 seconds before local db instances are timed out. This is so that old changes can be deleted when not needed and to garbage collect old _syncNodes objects.
    const HIBERNATE_GRACE_PERIOD =
        process.env.platform === 'desktop' ? 23_000 : 3_000; // 20 seconds
    // LOCAL_POLL: The time to wait before polling local db for changes and cleaning up old nodes.
    // Polling for changes is a fallback only needed in certain circomstances (when the onstorage event doesnt reach all listeners - when different browser windows doesnt share the same process)
    const LOCAL_POLL = 1000; // 500 ms. In real-world there will be this value + the time it takes to poll(). A small value is needed in Workers where we cannot rely on storage event.
    const HEARTBEAT_INTERVAL = NODE_TIMEOUT - 1000;

    const localStorage = Observable.localStorageImpl;

    /** class SyncNode
     *
     * Object contained in the _syncNodes table.
     */
    const SyncNode = Dexie.defineClass({
        // id: Number,
        myRevision: Number,
        type: String, // "local" or "remote"
        lastHeartBeat: Number,
        deleteTimeStamp: Number, // In case lastHeartBeat is too old, a value of now + HIBERNATE_GRACE_PERIOD will be set here. If reached before node wakes up, node will be deleted.
        url: String, // Only applicable for "remote" nodes. Only used in Dexie.Syncable.
        isMaster: Number, // 1 if true. Not using Boolean because it's not possible to index Booleans in IE implementation of IDB.

        // Below properties should be extended in Dexie.Syncable. Not here. They apply to remote nodes only (type == "remote"):
        syncProtocol: String, // Tells which implementation of ISyncProtocol to use for remote syncing.
        syncContext: null,
        syncOptions: Object,
        connected: false, // FIXTHIS: Remove! Replace with status.
        status: Number,
        appliedRemoteRevision: null,
        remoteBaseRevisions: [{ local: Number, remote: null }],
        dbUploadState: {
            tablesToUpload: [String],
            currentTable: String,
            currentKey: null,
            localBaseRevision: Number,
        },
    });

    db.observable = { version: '{version}' };
    db.observable.SyncNode = SyncNode;

    const wakeupObservers = initWakeupObservers(db, Observable, localStorage);
    const overrideCreateTransaction = initOverrideCreateTransaction(
        db,
        wakeupObservers,
    );

    let crudMonitorCallback = () => {};
    if (process.env.platform === 'desktop') {
        hasChanges[db.name] = false;
        lastPollTimestamp[db.name] = Date.now();
        isHibernating[db.name] = false;
        crudMonitorCallback = () => {
            hasChanges[db.name] = true;
            const dateDiff = Date.now() - lastPollTimestamp[db.name];
            if (
                !isHibernating[db.name] ||
                dateDiff > HIBERNATE_MULTIPLIER * LOCAL_POLL - LOCAL_POLL
            )
                return;
            clearTimeout(pollHandle);
            if (dateDiff < LOCAL_POLL) {
                pollHandle = setTimeout(poll, Math.max(200, dateDiff));
                return;
            }
            pollHandle = setTimeout(() => {
                poll();
            }, 200);
        };
    }
    const crudMonitor = initCrudMonitor(db, crudMonitorCallback);
    const overrideOpen = initOverrideOpen(db, SyncNode, crudMonitor);

    const mySyncNode = { node: null };

    const intercomm = initIntercomm(
        db,
        Observable,
        SyncNode,
        mySyncNode,
        localStorage,
    );
    const onIntercomm = intercomm.onIntercomm;
    const consumeIntercommMessages = intercomm.consumeIntercommMessages;

    // Allow other addons to access the local sync node. May be needed by Dexie.Syncable.
    Object.defineProperty(db, '_localSyncNode', {
        get() {
            return mySyncNode.node;
        },
    });

    let pollHandle = null;
    let heartbeatHandle = null;

    if (Dexie.fake) {
        // This code will never run.
        // It's here just to enable auto-complete in visual studio - helps a lot when writing code.
        db.version(1).stores({
            _syncNodes: '++id,myRevision,lastHeartBeat',
            _changes: '++rev',
            _intercomm: '++id,destinationNode',
            _uncommittedChanges: '++id,node',
        });
        db._syncNodes.mapToClass(SyncNode);
        db._changes.mapToClass(DatabaseChange);
        mySyncNode.node = new SyncNode({
            myRevision: 0,
            type: 'local',
            lastHeartBeat: Date.now(),
            deleteTimeStamp: null,
        });
    }

    //
    // Override parsing the stores to add "_changes" and "_syncNodes" tables.
    // It also adds UUID support for the primary key and sets tables as observable tables.
    //
    db.Version.prototype._parseStoresSpec = override(
        db.Version.prototype._parseStoresSpec,
        overrideParseStoresSpec,
    );

    // changes event on db:
    db.on.addEventType({
        changes: 'asap',
        cleanup: [promisableChain, nop], // fire (nodesTable, changesTable, trans). Hook called when cleaning up nodes. Subscribers may return a Promise to to more stuff. May do additional stuff if local sync node is master.
        message: 'asap',
    });

    //
    // Override transaction creation to always include the "_changes" store when any observable store is involved.
    //
    db._createTransaction = override(
        db._createTransaction,
        overrideCreateTransaction,
    );

    // If Observable.latestRevsion[db.name] is undefined, set it to 0 so that comparing against it always works.
    // You might think that it will always be undefined before this call, but in case another Dexie instance in the same
    // window with the same database name has been created already, this static property will already be set correctly.
    Observable.latestRevision[db.name] =
        Observable.latestRevision[db.name] || 0;

    //
    // Override open to setup hooks for db changes and map the _syncNodes table to class
    //
    db.open = override(db.open, overrideOpen);

    db.close = override(db.close, function (origClose) {
        return function () {
            if (db.dynamicallyOpened()) return origClose.apply(this, arguments); // Don't observe dynamically opened databases.
            // Teardown our framework.
            if (wakeupObservers.timeoutHandle) {
                clearTimeout(wakeupObservers.timeoutHandle);
                delete wakeupObservers.timeoutHandle;
            }
            Observable.on('latestRevisionIncremented').unsubscribe(
                onLatestRevisionIncremented,
            );
            Observable.on('suicideNurseCall').unsubscribe(onSuicide);
            Observable.on('intercomm').unsubscribe(onIntercomm);
            Observable.on('beforeunload').unsubscribe(onBeforeUnload);
            // Inform other db instances in same window that we are dying:
            if (mySyncNode.node && mySyncNode.node.id) {
                Observable.on.suicideNurseCall.fire(
                    db.name,
                    mySyncNode.node.id,
                );
                // Inform other windows as well:
                if (localStorage) {
                    localStorage.setItem(
                        'Dexie.Observable/deadnode:' +
                            mySyncNode.node.id.toString() +
                            '/' +
                            db.name,
                        'dead',
                    ); // In IE, this will also wakeup our own window. cleanup() may trigger twice per other db instance. But that doesnt to anything.
                }
                mySyncNode.node.deleteTimeStamp = 1; // One millisecond after 1970. Makes it occur in the past but still keeps it truthy.
                mySyncNode.node.lastHeartBeat = 0;
                db._syncNodes.put(mySyncNode.node); // This async operation may be cancelled since the browser is closing down now.
                mySyncNode.node = null;
            }

            if (pollHandle) clearTimeout(pollHandle);
            pollHandle = null;
            if (heartbeatHandle) clearTimeout(heartbeatHandle);
            heartbeatHandle = null;
            return origClose.apply(this, arguments);
        };
    });

    // Override Dexie.delete() in order to delete Observable.latestRevision[db.name].
    db.delete = override(db.delete, function (origDelete) {
        return function () {
            return origDelete.apply(this, arguments).then(function (result) {
                // Reset Observable.latestRevision[db.name]
                Observable.latestRevision[db.name] = 0;
                return result;
            });
        };
    });

    // When db opens, make sure to start monitor any changes before other db operations will start.
    db.on(
        'ready',
        function startObserving() {
            if (db.dynamicallyOpened()) return db; // Don't observe dynamically opened databases.

            return db
                .table('_changes')
                .orderBy('rev')
                .last(function (lastChange) {
                    // Since startObserving() is called before database open() method, this will be the first database operation enqueued to db.
                    // Therefore we know that the retrieved value will be This query will
                    const latestRevision = lastChange ? lastChange.rev : 0;
                    mySyncNode.node = new SyncNode({
                        myRevision: latestRevision,
                        type: 'local',
                        lastHeartBeat: Date.now(),
                        deleteTimeStamp: null,
                        isMaster: 0,
                    });
                    if (Observable.latestRevision[db.name] < latestRevision) {
                        // Side track . For correctness whenever setting Observable.latestRevision[db.name] we must make sure the event is fired if increased:
                        // There are other db instances in same window that hasnt yet been informed about a new revision
                        Observable.latestRevision[db.name] = latestRevision;
                        Dexie.ignoreTransaction(function () {
                            Observable.on.latestRevisionIncremented.fire(
                                latestRevision,
                            );
                        });
                    }
                    // Add new sync node or if this is a reopening of the database after a close() call, update it.
                    return db._syncNodes
                        .put(mySyncNode.node)
                        .then(
                            Dexie.ignoreTransaction(() => {
                                // By default, this node will become master unless we discover an existing, up-to-date master
                                let mySyncNodeShouldBecomeMaster = 1;
                                return db._syncNodes
                                    .orderBy('isMaster')
                                    .reverse()
                                    .modify(existingNode => {
                                        if (existingNode.isMaster) {
                                            // acreom custom code
                                            if (
                                                db.context?.$config
                                                    ?.platform === 'desktop'
                                            ) {
                                                existingNode.isMaster = 0;
                                            } else if (
                                                existingNode.lastHeartBeat <
                                                Date.now() - NODE_TIMEOUT
                                            ) {
                                                // Existing master record is out-of-date; demote it
                                                existingNode.isMaster = 0;
                                            } else {
                                                // An existing up-to-date master record exists, so it will remain master
                                                mySyncNodeShouldBecomeMaster = 0;
                                            }
                                        }

                                        // The local node reference may be unassigned at any point by a database close() operation
                                        if (!mySyncNode.node) return;

                                        // Assign the local node state
                                        // This is guaranteed to apply *after* any existing master records have been inspected, due to the orderBy clause
                                        if (
                                            existingNode.id ===
                                            mySyncNode.node.id
                                        ) {
                                            existingNode.isMaster =
                                                mySyncNode.node.isMaster =
                                                    mySyncNodeShouldBecomeMaster;
                                        }
                                    });
                            }),
                        )
                        .then(() => {
                            Observable.on(
                                'latestRevisionIncremented',
                                onLatestRevisionIncremented,
                            ); // Wakeup when a new revision is available.
                            Observable.on('beforeunload', onBeforeUnload);
                            Observable.on('suicideNurseCall', onSuicide);
                            Observable.on('intercomm', onIntercomm);
                            // Start polling for changes and do cleanups:
                            pollHandle = setTimeout(poll, LOCAL_POLL);
                            // Start heartbeat
                            heartbeatHandle = setTimeout(
                                heartbeat,
                                HEARTBEAT_INTERVAL,
                            );
                        })
                        .then(function () {
                            cleanup();
                        });
                });
        },
        true,
    ); // True means the on(ready) event will survive a db reopening (db.close() / db.open()).

    let handledRevision = 0;

    function onLatestRevisionIncremented(dbname, latestRevision) {
        if (dbname === db.name) {
            if (handledRevision >= latestRevision) return; // Make sure to only run once per revision. (Workaround for IE triggering storage event on same window)
            handledRevision = latestRevision;
            Dexie.vip(function () {
                readChanges(latestRevision).catch('DatabaseClosedError', () => {
                    // Handle database closed error gracefully while reading changes.
                    // Don't trigger 'unhandledrejection'.
                    // Even though we intercept the close() method, it might be called when in the middle of
                    // reading changes and then that flow will cancel with DatabaseClosedError.
                });
            });
        }
    }

    function readChanges(latestRevision, recursion, wasPartial) {
        // Whenever changes are read, fire db.on("changes") with the array of changes. Eventually, limit the array to 1000 entries or so (an entire database is
        // downloaded from server AFTER we are initiated. For example, if first sync call fails, then after a while we get reconnected. However, that scenario
        // should be handled in case database is totally empty we should fail if sync is not available)
        if (!recursion && readChanges.ongoingOperation) {
            // We are already reading changes. Prohibit a parallell execution of this which would lead to duplicate trigging of 'changes' event.
            // Instead, the callback in toArray() will always check Observable.latestRevision[db.name] to see if it has changed and if so, re-launch readChanges().
            // The caller should get the Promise instance from the ongoing operation so that the then() method will resolve when operation is finished.
            return readChanges.ongoingOperation;
        }

        let partial = false;
        const ourSyncNode = mySyncNode.node; // Because mySyncNode can suddenly be set to null on database close, and worse, can be set to a new value if database is reopened.
        if (!ourSyncNode) {
            return Promise.reject(new Dexie.DatabaseClosedError());
        }
        const LIMIT = 1000;
        const promise = db._changes
            .where('rev')
            .above(ourSyncNode.myRevision)
            .limit(LIMIT)
            .toArray(function (changes) {
                if (changes.length > 0) {
                    const lastChange = changes[changes.length - 1];
                    partial = changes.length === LIMIT;
                    db.on('changes').fire(changes, partial);
                    ourSyncNode.myRevision = lastChange.rev;
                } else if (wasPartial) {
                    // No more changes, BUT since we have triggered on('changes') with partial = true,
                    // we HAVE TO trigger changes again with empty list and partial = false
                    db.on('changes').fire([], false);
                }

                let ourNodeStillExists = false;
                return db._syncNodes
                    .where(':id')
                    .equals(ourSyncNode.id)
                    .modify(syncNode => {
                        ourNodeStillExists = true;
                        syncNode.lastHeartBeat = Date.now(); // Update heart beat (not nescessary, but why not!)
                        syncNode.deleteTimeStamp = null; // Reset "deleteTimeStamp" flag if it was there.
                        syncNode.myRevision = Math.max(
                            syncNode.myRevision,
                            ourSyncNode.myRevision,
                        );
                    })
                    .then(() => {
                        return ourNodeStillExists;
                    });
            })
            .then(ourNodeStillExists => {
                if (!ourNodeStillExists) {
                    // My node has been deleted. We must have been lazy and got removed by another node.
                    if (browserIsShuttingDown) {
                        throw new Error('Browser is shutting down');
                    } else {
                        db.close();
                        console.error('Out of sync'); // TODO: What to do? Reload the page?
                        if (global.location) global.location.reload(true);
                        throw new Error('Out of sync'); // Will make current promise reject
                    }
                }

                // Check if more changes have come since we started reading changes in the first place. If so, relaunch readChanges and let the ongoing promise not
                // resolve until all changes have been read.
                if (
                    partial ||
                    Observable.latestRevision[db.name] > ourSyncNode.myRevision
                ) {
                    // Either there were more than 1000 changes or additional changes where added while we were reading these changes,
                    // In either case, call readChanges() again until we're done.
                    return readChanges(
                        Observable.latestRevision[db.name],
                        (recursion || 0) + 1,
                        partial,
                    );
                }
            })
            .finally(function () {
                delete readChanges.ongoingOperation;
            });

        if (!recursion) {
            readChanges.ongoingOperation = promise;
        }
        return promise;
    }

    /**
     * The reason we need heartbeat in parallell with poll() is due to the risk of long-running
     * transactions while syncing changes from server to client in Dexie.Syncable. That transaction will
     * include _changes (which will block readChanges()) but not _syncNodes. So this heartbeat will go on
     * during that changes are being applied and update our lastHeartBeat property while poll() is waiting.
     * When cleanup() (who also is blocked by the sync) wakes up, it won't kill the master node because this
     * heartbeat job will have updated the master node's heartbeat during the long-running sync transaction.
     *
     * If we did not have this heartbeat, and a server send lots of changes that took more than NODE_TIMEOUT
     * (20 seconds), another node waking up after the sync would kill the master node and take over because
     * it would believe it was dead.
     */
    function heartbeat() {
        heartbeatHandle = null;
        const currentInstance = mySyncNode.node && mySyncNode.node.id;
        if (!currentInstance) return;
        db.transaction('rw!', db._syncNodes, () => {
            db._syncNodes.where({ id: currentInstance }).first(ourSyncNode => {
                if (!ourSyncNode) {
                    db.on('close').fire(
                        'closing db because of nonexisting sync node',
                    );
                    // We do not exist anymore. Call db.close() to teardown polls etc.
                    if (db.isOpen()) db.close();
                    return;
                }
                ourSyncNode.lastHeartBeat = Date.now();
                ourSyncNode.deleteTimeStamp = null; // Reset "deleteTimeStamp" flag if it was there.
                return db._syncNodes.put(ourSyncNode);
            });
        })
            .catch('DatabaseClosedError', () => {
                // Ignore silently
            })
            .finally(() => {
                if (
                    mySyncNode.node &&
                    mySyncNode.node.id === currentInstance &&
                    db.isOpen()
                ) {
                    heartbeatHandle = setTimeout(heartbeat, HEARTBEAT_INTERVAL);
                }
            });
    }

    function poll() {
        lastPollTimestamp[db.name] = Date.now();
        const currentInstance = mySyncNode.node && mySyncNode.node.id;
        if (!currentInstance) return;
        if (process.env.platform === 'desktop') {
            if (!hasChanges[db.name]) {
                isHibernating[db.name] = true;
                if (
                    mySyncNode.node &&
                    mySyncNode.node.id === currentInstance &&
                    db.isOpen()
                ) {
                    pollHandle = setTimeout(
                        poll,
                        HIBERNATE_MULTIPLIER * LOCAL_POLL,
                    );
                }
                return;
            }
            hasChanges[db.name] = false;
            isHibernating[db.name] = false;
        }
        Dexie.vip(function () {
            // VIP ourselves. Otherwise we might not be able to consume intercomm messages from master node before database has finished opening. This would make DB stall forever. Cannot rely on storage-event since it may not always work in some browsers of different processes.
            readChanges(Observable.latestRevision[db.name])
                .then(cleanup)
                .then(consumeIntercommMessages)
                .catch('DatabaseClosedError', () => {
                    // Handle database closed error gracefully while reading changes.
                    // Don't trigger 'unhandledrejection'.
                    // Even though we intercept the close() method, it might be called when in the middle of
                    // reading changes and then that flow will cancel with DatabaseClosedError.
                })
                .finally(function () {
                    // Poll again in given interval:
                    if (
                        mySyncNode.node &&
                        mySyncNode.node.id === currentInstance &&
                        db.isOpen()
                    ) {
                        pollHandle = setTimeout(
                            poll,
                            LOCAL_POLL +
                                Math.floor(Math.random() * (LOCAL_POLL * 0.5)),
                        );
                    }
                });
        });
    }

    function cleanup() {
        const ourSyncNode = mySyncNode.node;
        if (!ourSyncNode)
            return Promise.reject(new Dexie.DatabaseClosedError());
        return db.transaction(
            'rw',
            '_syncNodes',
            '_changes',
            '_intercomm',
            function () {
                // Cleanup dead local nodes that has no heartbeat for over a minute
                // Dont do the following:
                // nodes.where("lastHeartBeat").below(Date.now() - NODE_TIMEOUT).and(function (node) { return node.type == "local"; }).delete();
                // Because client may have been in hybernate mode and recently woken up. That would lead to deletion of all nodes.
                // Instead, we should mark any old nodes for deletion in a minute or so. If they still dont wakeup after that minute we could consider them dead.
                let weBecameMaster = false;
                db._syncNodes
                    .where('lastHeartBeat')
                    .below(Date.now() - NODE_TIMEOUT)
                    .filter(node => node.type === 'local')
                    .modify(function (node) {
                        if (
                            node.deleteTimeStamp &&
                            node.deleteTimeStamp < Date.now()
                        ) {
                            // Delete the node.
                            delete this.value;
                            // Cleanup localStorage "deadnode:" entry for this node (localStorage API was used to wakeup other windows (onstorage event) - an event type missing in indexedDB.)
                            if (localStorage) {
                                localStorage.removeItem(
                                    'Dexie.Observable/deadnode:' +
                                        node.id +
                                        '/' +
                                        db.name,
                                );
                            }
                            // Check if we are deleting a master node
                            if (node.isMaster) {
                                // The node we are deleting is master. We must take over that role.
                                // OK to call nodes.update(). No need to call Dexie.vip() because nodes is opened in existing transaction!
                                db._syncNodes.update(ourSyncNode, {
                                    isMaster: 1,
                                });
                                weBecameMaster = true;
                            }
                            // Cleanup intercomm messages destinated to the node being deleted.
                            // Those that waits for reply should be redirected to us.
                            db._intercomm
                                .where({ destinationNode: node.id })
                                .modify(function (msg) {
                                    if (msg.wantReply)
                                        msg.destinationNode = ourSyncNode.id;
                                    // Delete the message from DB and if someone is waiting for reply, let ourselved answer the request.
                                    else delete this.value;
                                });
                        } else if (!node.deleteTimeStamp) {
                            // Mark the node for deletion
                            node.deleteTimeStamp =
                                Date.now() + HIBERNATE_GRACE_PERIOD;
                        }
                    })
                    .then(function () {
                        // Cleanup old revisions that no node is interested of.
                        Observable.deleteOldChanges(db);
                        return db.on('cleanup').fire(weBecameMaster);
                    });
            },
        );
    }

    function onBeforeUnload() {
        // Mark our own sync node for deletion.
        if (!mySyncNode.node) return;
        browserIsShuttingDown = true;
        mySyncNode.node.deleteTimeStamp = 1; // One millisecond after 1970. Makes it occur in the past but still keeps it truthy.
        mySyncNode.node.lastHeartBeat = 0;
        db._syncNodes.put(mySyncNode.node); // This async operation may be cancelled since the browser is closing down now.
        Observable.wereTheOneDying = true; // If other nodes in same window wakes up by this call, make sure they dont start taking over mastership and stuff...
        // Inform other windows that we're gone, so that they may take over our role if needed. Setting localStorage item below will trigger Observable.onStorage, which will trigger onSuicie() below:
        if (localStorage) {
            localStorage.setItem(
                'Dexie.Observable/deadnode:' +
                    mySyncNode.node.id.toString() +
                    '/' +
                    db.name,
                'dead',
            ); // In IE, this will also wakeup our own window. However, that is doublechecked in nursecall subscriber below.
        }
    }

    function onSuicide(dbname, nodeID) {
        if (dbname === db.name && !Observable.wereTheOneDying) {
            // Make sure it's dead indeed. Second bullet. Why? Because it has marked itself for deletion in the onbeforeunload event, which is fired just before window dies.
            // It's own call to put() may have been cancelled.
            // Note also that in IE, this event may be called twice, but that doesnt harm!
            Dexie.vip(function () {
                db._syncNodes
                    .update(nodeID, { deleteTimeStamp: 1, lastHeartBeat: 0 })
                    .then(cleanup);
            });
        }
    }
}

//
// Static properties and methods
//

Observable.version = '{version}';
Observable.latestRevision = {}; // Latest revision PER DATABASE. Example: Observable.latestRevision.FriendsDB = 37;
Observable.on = Dexie.Events(
    null,
    'latestRevisionIncremented',
    'suicideNurseCall',
    'intercomm',
    'beforeunload',
); // fire(dbname, value);
Observable.createUUID = createUUID;

Observable.deleteOldChanges = deleteOldChanges;

Observable._onStorage = initOnStorage(Observable);

Observable._onBeforeUnload = function () {
    Observable.on.beforeunload.fire();
};

try {
    Observable.localStorageImpl = global.localStorage;
} catch (ex) {}

//
// Map window events to static events in Dexie.Observable:
//
if (global?.addEventListener) {
    global.addEventListener('storage', Observable._onStorage);
    global.addEventListener('beforeunload', Observable._onBeforeUnload);
}

if (Dexie.Observable) {
    if (Dexie.Observable.version !== '{version}') {
        throw new Error(`Mixed versions of dexie-observable`);
    }
} else {
    // Register addon:
    Dexie.Observable = Observable;
    Dexie.addons.push(Observable);
}

export default Dexie.Observable;
