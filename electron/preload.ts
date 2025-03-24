import { contextBridge, ipcRenderer, shell } from 'electron';
import {
    AssistantDriver,
    AttachmentDriver,
    EntityDriver,
    ImageDriver,
    MessagingDriver,
    NetworkDriver,
    NotificationDriver,
    ProjectDriver,
    VaultDriver,
    AIDriver,
    AssistantAssetManagerDriver,
    AppleCalendarSyncDriver,
} from '@/driver/drivers';
import { DEVICE_ACTIONS } from '@/constants/electron-constants';
import { isTest } from '@/helpers/utils';
import { AssistantAssetProgress } from '@/driver/ai/controls/constants';

if (isTest) {
    // @ts-ignore
    import('wdio-electron-service/preload');
}

function onFactory() {
    const callbacks: Record<string, Function[]> = {};

    ipcRenderer.on('received-link', (_: any, { action, data }: any) => {
        (callbacks['received-link'] || []).forEach(callback => {
            callback(action, data);
        });
    });

    ipcRenderer.on('window-show', (_: any, data: any) => {
        (callbacks['window-show'] || []).forEach(callback => {
            callback(data);
        });
    });

    ipcRenderer.on('quick-capture', (_: any, { text }: any) => {
        (callbacks['quick-capture'] || []).forEach(cb => {
            cb(text);
        });
    });

    ipcRenderer.on('track-event', (_: any, eventType: any, eventProperties: any) => {
        (callbacks['track-event'] || []).forEach(cb => {
            cb(eventType, eventProperties);
        });
    });

    ipcRenderer.on('quick-capture-page', (_: any, { page }: any) => {
        (callbacks['quick-capture-page'] || []).forEach(cb => {
            cb(page);
        });
    });

    ipcRenderer.on('logging', (_: any, data: any) => {
        (callbacks.logging || []).forEach(callback => {
            callback(data);
        });
    });

    ipcRenderer.on('auto-updater-error', (_: any, data: any) => {
        (callbacks['auto-updater-error'] || []).forEach(callback => {
            callback(data);
        });
    });

    ipcRenderer.on('checking-for-update', (_: any, data: any) => {
        (callbacks['checking-for-update'] || []).forEach(callback => {
            callback(data);
        });
    });

    ipcRenderer.on('update-not-available', (_: any, data: any) => {
        (callbacks['update-not-available'] || []).forEach(callback => {
            callback(data);
        });
    });

    ipcRenderer.on('update-available', (_: any, data: any) => {
        (callbacks['update-available'] || []).forEach(callback => {
            callback(data);
        });
    });

    ipcRenderer.on('download-progress', (_: any, data: any) => {
        (callbacks['download-progress'] || []).forEach(callback => {
            callback(data);
        });
    });

    ipcRenderer.on('download-start', (_: any, data: any) => {
        (callbacks['download-start'] || []).forEach(callback => {
            callback(data);
        });
    });

    ipcRenderer.on('download-end', (_: any, data: any) => {
        (callbacks['download-end'] || []).forEach(callback => {
            callback(data);
        });
    });

    ipcRenderer.on('update-downloaded', (_: any, data: any) => {
        (callbacks['update-downloaded'] || []).forEach(callback => {
            callback(data);
        });
    });

    ipcRenderer.on('login', (_: any, data: any) => {
        (callbacks.login || []).forEach(callback => {
            callback(data);
        });
    });

    ipcRenderer.on('focus', () => {
        (callbacks.focus || []).forEach(cb => {
            cb();
        });
    });

    ipcRenderer.on('blur', () => {
        (callbacks.blur || []).forEach(cb => {
            cb();
        });
    });

    ipcRenderer.on('maximize', () => {
        (callbacks.maximize || []).forEach(cb => {
            cb();
        });
    });

    ipcRenderer.on('unmaximize', () => {
        (callbacks.unmaximize || []).forEach(cb => {
            cb();
        });
    });

    ipcRenderer.on('vault-initial-load', (_: any, data: any) => {
        (callbacks.logging || []).forEach(callback => {
            callback(data);
        });
    });

    ipcRenderer.on('new-document', () => {
        (callbacks['new-document'] || []).forEach(cb => {
            cb();
        });
    });

    ipcRenderer.on('open-event', (_: any, id: string) => {
        (callbacks['open-event'] || []).forEach(cb => {
            cb(id);
        });
    });

    ipcRenderer.on('open-task', (_: any, id: string) => {
        (callbacks['open-task'] || []).forEach(cb => {
            cb(id);
        });
    });

    ipcRenderer.on('open-preferences', (_: any, id: string) => {
        (callbacks['open-preferences'] || []).forEach(cb => {
            cb(id);
        });
    });

    ipcRenderer.on('new-day', () => {
        (callbacks['new-day'] || []).forEach(cb => {
            cb();
        });
    });

    ipcRenderer.on('system:suspend', () => {
        (callbacks['system:suspend'] || []).forEach(cb => {
            cb();
        });
    });

    ipcRenderer.on('system:resume', () => {
        (callbacks['system:resume'] || []).forEach(cb => {
            cb();
        });
    });

    ipcRenderer.on('system:theme', (_: any, shouldUseDarkColors: boolean) => {
        (callbacks['system:theme'] || []).forEach(cb => {
            cb(shouldUseDarkColors);
        });
    });

    ipcRenderer.on('apple-calendar-sync', () => {
        (callbacks['apple-calendar-sync'] || []).forEach(cb => {
            cb();
        });
    });

    ipcRenderer.on('electron-log', (_: any, data: string) => {
        (callbacks['electron-log'] || []).forEach(cb => {
            cb(data);
        });
    });

    ipcRenderer.on('ai-stream-data', (_: any, { reply }: any) => {
        (callbacks['ai-stream-data'] || []).forEach(callback => {
            callback(reply);
        });
    });

    ipcRenderer.on(
        'ai-emit-source-documents',
        (_: any, { sourceDocuments }: any) => {
            (callbacks['ai-emit-source-documents'] || []).forEach(callback => {
                callback(sourceDocuments);
            });
        },
    );

    ipcRenderer.on('ai-stream-end', (_: any) => {
        (callbacks['ai-stream-end'] || []).forEach(callback => {
            callback();
        });
    });

    ipcRenderer.on('ai-stream-final', (_: any, { reply }: any) => {
        (callbacks['ai-stream-final'] || []).forEach(callback => {
            callback(reply);
        });
    });

    ipcRenderer.on(
        AssistantAssetProgress.FETCH_MODEL_PROGRESS,
        (_: any, data: any) => {
            (
                callbacks[AssistantAssetProgress.FETCH_MODEL_PROGRESS] || []
            ).forEach(callback => {
                callback(data);
            });
        },
    );

    ipcRenderer.on(
        AssistantAssetProgress.FETCH_MODEL_END,
        (_: any, data: any) => {
            (callbacks[AssistantAssetProgress.FETCH_MODEL_END] || []).forEach(
                callback => {
                    callback(data);
                },
            );
        },
    );

    return {
        on: (action: string, callback: Function) => {
            if (!callbacks[action]) {
                callbacks[action] = [];
            }
            callbacks[action].push(callback);
        },
        off: (action: string) => {
            delete callbacks[action];
        },
    };
}

contextBridge.exposeInMainWorld('electron', {
    isTest,
    ...onFactory(),
    crypto: {
        encrypt: (data: string) => {
            return ipcRenderer.invoke('encrypt', data);
        },
        decrypt: (data: string) => {
            return ipcRenderer.invoke('decrypt', data);
        },
    },
    openExternal: (url: string) => {
        return shell.openExternal(url);
    },
    watch: (path: string) => {
        return ipcRenderer.invoke('watch', path);
    },
    showItemInFolder: (path: string) => {
        ipcRenderer.invoke('show-in-finder', path);
    },
    selectDirectory: (meta: {
        canCreate: boolean;
        buttonLabel?: string;
    }): Promise<null | string> => {
        return ipcRenderer.invoke('open-directory', meta); // null | string
    },
    saveAs: (
        data: Blob | string,
        filename: string,
        type: 'string' | 'blob',
    ) => {
        return ipcRenderer.invoke(DEVICE_ACTIONS.SAVE_AS, {
            data,
            filename,
            type,
        });
    },
    createFolder: (path: string, folderName: string) => {
        return ipcRenderer.invoke(DEVICE_ACTIONS.FOLDER_CREATE, {
            path,
            folderName,
        });
    },
    maximize: () => {
        ipcRenderer.invoke('maximize');
    },
    minimize: () => {
        ipcRenderer.invoke('minimize');
    },
    close: () => {
        ipcRenderer.invoke('close');
    },
    focusState: () => {
        return ipcRenderer.invoke('get-focus-state');
    },
    isWindowMaximized: () => {
        return ipcRenderer.invoke('get-maximized-state');
    },
    updateAndRestart: () => {
        ipcRenderer.invoke('update-and-restart');
    },
    restart: () => {
        ipcRenderer.invoke('restart');
    },
    openExternalLogin: (url: string) => {
        return ipcRenderer.invoke('open-external-login', url);
    },
    closeExternalLogin: () => {
        ipcRenderer.invoke('close-external-login');
    },
    login: (authData: { access_token: string; refresh_token: string }) => {
        ipcRenderer.invoke('login', authData);
    },
    addIntegration: (data: string) => {
        ipcRenderer.invoke('add-integration', data);
    },
    openSystemPreferences: (pane: string) => {
        ipcRenderer.invoke('open-system-preferences', pane);
    },
    setTray: (value: boolean) => {
        ipcRenderer.send(value ? 'enable-tray' : 'disable-tray');
    },
    checkForUpdates() {
        return ipcRenderer.invoke('check-for-update');
    },
    openDevTools() {
        ipcRenderer.invoke('open-dev-tools');
    },
    setQCShortcut: (oldShortcut: string, newShortcut: string) => {
        ipcRenderer.send(
            'quick-capture-set-shortcut',
            oldShortcut,
            newShortcut,
        );
    },
    createBridge: () => {
        const channel = new MessageChannel();
        window.postMessage('bridge-port', '*', [channel.port2]);
        channel.port1.onmessage = (event: MessageEvent) => {
            ipcRenderer.postMessage(event.data, {}, event.ports as any);
        };
    },
    store: {
        get(val) {
            return ipcRenderer.sendSync('electron-store-get', val);
        },
        set(property, val) {
            ipcRenderer.send('electron-store-set', property, val);
        },
        delete(property) {
            ipcRenderer.send('electron-store-delete', property);
        },
    },
    testUtil: {
        getTestPath(): string {
            return ipcRenderer.sendSync('get-test-path');
        },
    },
    getOSArch(): string | null {
        return ipcRenderer.sendSync('get-os-arch');
    }
});

contextBridge.exposeInMainWorld('devicedriver', {
    Assistant: AssistantDriver,
    AppleCalendarSync: AppleCalendarSyncDriver,
    AI: AIDriver,
    AssistantAssetManager: AssistantAssetManagerDriver,
    Attachment: AttachmentDriver,
    Project: ProjectDriver,
    Entity: EntityDriver,
    Messaging: MessagingDriver,
    Vault: VaultDriver,
    Image: ImageDriver,
    Notification: NotificationDriver,
    Network: NetworkDriver,
});
