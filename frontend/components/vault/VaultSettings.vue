<template>
    <div class="vault-settings">
        <div class="vault-settings--option-wrapper">
            <div
                class="vault-settings--image"
                :title="vaultName"
                :style="{
                    backgroundColor: $store.getters['vault/color'](vault.id),
                }"
            >
                <span>{{ name[0] || '#' }}</span>
            </div>
            <div class="">
                <div class="vault-settings--subtitle">Vault Name</div>
                <div class="vault-settings--input">
                    <button
                        ref="changeColorButton"
                        class="vault-settings--color-button"
                        :class="{ open: colorPickerOpen }"
                        @click="colorPickerHandler"
                    >
                        <span
                            :style="{
                                background: $store.getters['vault/color'](
                                    vault.id,
                                ),
                            }"
                        >
                        </span>
                    </button>
                    <input
                        type="text"
                        :value="name"
                        @input="updateName($event.target?.value)"
                        @blur="saveName($event.target?.value)"
                    />
                </div>
            </div>
        </div>
        <div class="divider"></div>
        <div class="vault-settings--storage">
            <div class="vault-settings--location--subtitle section-title">
                Storage
            </div>
            <button
                v-if="vault.type === 'remote'"
                :disabled="true"
                class="vault-settings--location--text description"
            >
                <p @contextmenu.stop.prevent="handleDebugContextMenu">
                    acreom cloud ({{ email }})
                </p>
            </button>
            <button
                v-else
                class="vault-settings--location--text description"
                :title="vault.filepath"
                @click="openVaultFolder"
            >
                <p>{{ vault.filepath }}</p>
                <ExternalLinkIcon class="icon" size="20" />
            </button>
        </div>
        <div v-if="isElectron && vault.type === 'remote'" class="divider"></div>
        <div
            v-if="isElectron && vault.type === 'remote'"
            class="vault-settings--location"
        >
            <div class="vault-settings--location--subtitle section-title">
                Sync Vault with Folder on Your Device
            </div>

            <label class="vault-settings--location--switch">
                <div
                    class="vault-settings--location--switch--title description"
                >
                    Vault data is stored in .md files. Changes to those files
                    are synced to acreom.
                </div>
                <div class="vault-settings--location--switch--toggle">
                    <CSwitch
                        id="local-sync"
                        :value="localSyncValue"
                        :disabled="!isOkay"
                        @input="updateLocalSync"
                    />
                </div>
                <div v-if="filepathError">
                    {{ filepathError }}
                </div>
            </label>

            <div v-if="vault.filepath">
                <button
                    class="vault-settings--location--text description"
                    :title="vault.filepath"
                    @click="openVaultFolder"
                >
                    <p>{{ vault.filepath }}</p>
                    <ExternalLinkIcon class="icon" size="20" />
                </button>
            </div>
        </div>
        <div class="divider"></div>
        <div class="vault-settings--danger-zone">
            <div class="vault-settings--danger-zone--subtitle">Danger Zone</div>
            <div
                v-if="vault.type === 'remote'"
                class="vault-settings--danger-zone--subsection"
            >
                <div class="vault-settings--danger-zone--subsection--left">
                    <div class="section-title">Permanently Delete Vault</div>
                    <div class="description">
                        Delete vault and all of its data
                    </div>
                </div>
                <button class="danger-button" @click="deleteVaultHandler">
                    Delete Vault
                </button>
            </div>
            <div v-else class="vault-settings--danger-zone--subsection">
                <div class="vault-settings--danger-zone--subsection--left">
                    <div class="section-title">Remove Vault</div>
                    <div class="description">Remove vault from acreom</div>
                </div>
                <button class="danger-button" @click="deleteVaultHandler">
                    Remove Vault
                </button>
            </div>
            <div
                v-if="isElectron"
                class="vault-settings--danger-zone--subsection"
            >
                <div class="vault-settings--danger-zone--subsection--left">
                    <div class="section-title">Change Vault Type</div>
                    <div class="description">
                        This will affect vault functionality
                    </div>
                </div>
                <button
                    class="danger-button"
                    :disabled="
                        vault?.status?.state === 'LOADING' ||
                        (isEncryptionEnabled && !isEncryptionUnlocked)
                    "
                    @click="changeVaultType"
                >
                    Change Vault Type
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ExternalLinkIcon } from '@vue-hero-icons/solid';
import { isElectron } from '~/helpers/is-electron';
import { SafeElectronWindow } from '~/@types';
import AColorPicker from '~/components/system/AColorPicker.vue';
import { DatabaseServiceAction, ServiceKey, VAULT_COLORS } from '~/constants';
import CSwitch from '~/components/CSwitch.vue';
import { IVault } from '~/workers/database/indexeddb/types';
import MirrorContextMenu from '~/components/context-menu/MirrorContextMenu.vue';
import { TrackEvent } from '~/helpers/decorators';
import {
    TrackingAction,
    TrackingActionSource,
    TrackingActionSourceMeta,
    TrackingType,
} from '~/@types/tracking';

@Component({
    name: 'VaultSettings',
    components: {
        ExternalLinkIcon,
        CSwitch,
        MirrorContextMenu,
    },
})
export default class VaultSettings extends Vue {
    @Prop({
        default: null,
    })
    selectedVault!: string | null;

    $refs!: { changeColorButton: HTMLButtonElement };
    loading: boolean = false;
    filepath: string | null = null;
    filepathError: string | null = null;
    isElectron = isElectron();
    name: string = '';
    colorPickerOpen: boolean = false;

    get localSyncValue() {
        return !!this.vault?.filepath;
    }

    get isOkay() {
        const vaultStatus = this.$store.getters['vault/vaultStatus'](
            this.vault.id,
        );
        return (
            !vaultStatus?.deviceStatus ||
            vaultStatus?.deviceStatus?.state === 'okay'
        );
    }

    async handleDebugContextMenu(e: MouseEvent) {
        await this.$contextMenu.show(e, {
            component: MirrorContextMenu,
        });
    }

    @TrackEvent(TrackingType.VAULT, {
        action: TrackingAction.DELETE,
    })
    async deleteVault() {
        try {
            const activeVault = { ...this.vault } as IVault;
            const remainingVaults = this.$entities.vault
                .list()
                .filter((vault: IVault) => vault.id !== activeVault.id);
            if (remainingVaults.length) {
                await this.$entities.vault.activate(remainingVaults[0].id);
                this.$emit('vault:select', remainingVaults[0].id);
            }

            if (remainingVaults.length === 0) {
                await this.$vfm.hideAll();
            }
            await this.$entities.vault.delete(activeVault.id);
            this.$tracking.trackEvent('vault', {
                action: 'delete',
                entity_id: activeVault.id,
                type: activeVault.type,
            });

            this.$vfm.hideAll();
        } catch (error) {
            this.$sentry.captureException(error);
            console.log(error);
        }
    }

    deleteVaultHandler() {
        this.$vfm.show({
            component: () =>
                import(
                    '@/components/modal/SettingsModal/VaultHelpers/VaultDeleteModal.vue'
                ),
            bind: {
                vault: this.vault,
            },
            on: {
                'vault:delete': () => {
                    this.deleteVault();
                },
            },
        });
    }

    changeVaultType() {
        this.$vfm.show({
            component: () =>
                import(
                    '@/components/modal/SettingsModal/VaultHelpers/VaultChangeTypeModal.vue'
                ),
            bind: {
                vault: this.vault,
            },
            on: {
                'vault:change-type': async (type: string) => {
                    if (type === 'local') {
                        await this.$entities.vault.turnOffCloudSync(
                            this.vault.id,
                        );
                        await this.$entities.vault.saveToStore({
                            id: this.vault.id,
                            type,
                        });
                        if (!this.vault.filepath) {
                            await this.setFilepath();
                            if (!this.vault.filepath) return;
                            await this.$entities.vault.createVaultFolder(
                                this.vault.filepath,
                            );
                            this.$entities.vault.syncToDisk(this.vault.id);
                        }

                        this.$tracking.trackEventV2(TrackingType.VAULT, {
                            action: TrackingAction.CHANGE_TYPE,
                            sourceMeta: TrackingActionSourceMeta.LOCAL,
                        });
                        return;
                    }

                    await this.$entities.vault.saveToStore({
                        id: this.vault.id,
                        type,
                    });
                    await this.$entities.vault.turnOnCloudSync(this.vault.id);

                    this.$tracking.trackEventV2(TrackingType.VAULT, {
                        action: TrackingAction.CHANGE_TYPE,
                        sourceMeta: TrackingActionSourceMeta.REMOTE,
                    });
                },
            },
        });
    }

    async openDialog(
        meta: { canCreate: boolean } = { canCreate: false },
    ): Promise<string | null> {
        return await (window as SafeElectronWindow).electron.selectDirectory(
            meta,
        );
    }

    async updateLocalSync() {
        if (!this.localSyncValue) {
            await this.setFilepath();
            if (!this.vault.filepath) return;
            await this.$entities.vault.createVaultFolder(this.vault.filepath);
            this.$entities.vault.syncToDisk(this.vault.id);
            this.$tracking.trackEventV2(TrackingType.VAULT, {
                action: TrackingAction.ENABLE_LOCAL_SYNC,
            });
        } else {
            this.$vfm.show({
                component: () =>
                    import(
                        '@/components/modal/SettingsModal/VaultHelpers/VaultSyncOffModal.vue'
                    ),
                bind: {
                    vault: this.vault,
                },
                on: {
                    'vault:sync-off': () => {
                        this.$entities.vault.saveToStore({
                            id: this.vault.id,
                            filepath: undefined,
                        });
                        this.filepath = null;
                        this.$entities.vault.removeFilepathFromEntities(
                            this.vault.id,
                        );
                        this.$tracking.trackEventV2(TrackingType.VAULT, {
                            action: TrackingAction.DISABLE_LOCAL_SYNC,
                        });
                    },
                },
            });
        }
    }

    async setFilepath() {
        const filepath = await this.openDialog({ canCreate: true });
        if (!filepath) {
            this.filepathError = null;
            this.filepath = null;
            return;
        }
        const sep = this.$config.os === 'windows' ? '\\' : '/';
        this.filepath = `${filepath}${sep}${this.vault.name}`;
        const exists = await this.$serviceRegistry.invoke(
            ServiceKey.DEVICE,
            'entity:exists',
            {
                filepath: this.filepath,
                callerContext: 'VaultSettings.vue setFilePath exists',
            },
        );
        if (exists) {
            const isFolderEmpty = await this.$serviceRegistry.invoke(
                ServiceKey.DEVICE,
                'vault:isFolderEmpty',
                {
                    path: this.filepath,
                    callerContext:
                        'VaultSettings.vue setFilePath isFolderEmpty',
                },
            );
            if (!isFolderEmpty) {
                this.filepathError = 'Select empty folder';
                this.filepath = null;
                return;
            }
        }
        this.filepathError = null;
        await this.$entities.vault.saveToStore({
            id: this.vault.id,
            filepath: this.filepath,
        });
    }

    openVaultFolder() {
        if (!isElectron() || !this.vault.filepath) return;

        (window as SafeElectronWindow).electron.showItemInFolder(
            this.vault.filepath,
        );
    }

    saveName() {
        if (this.name === '') {
            this.name = this.vault.name || 'Untitled vault';
        }
        this.$entities.vault.saveToStore({
            id: this.vault.id,
            name: this.name,
        });
    }

    updateName(name: string) {
        this.name = name;
    }

    get vault(): IVault {
        if (this.selectedVault === null) {
            return {} as IVault;
        }
        return {
            // filepath: this.filepath!,
            ...(this.$entities.vault.byId(this.selectedVault) || {}),
        } as IVault;
    }

    get user() {
        return this.$store.getters['auth/user'];
    }

    get email() {
        return this.user?.email ?? '';
    }

    isEncryptionUnlocked: boolean = false;

    get isEncryptionEnabled() {
        return !!this.$store.getters['user/user']?.privateKeys;
    }

    getEncryptionUnlockedState(): Promise<boolean | null> {
        return this.$serviceRegistry.invoke(
            ServiceKey.DATABASE,
            DatabaseServiceAction.DID_RESTORE_SESSION_KEY,
            {
                callerContext: 'VaultSettings.vue getEncryptionUnlockedState',
            },
        );
    }

    async mounted() {
        this.name = this.vault?.name ?? '';
        this.filepath = this.vault.filepath!;
        this.isEncryptionUnlocked = !!(await this.getEncryptionUnlockedState());
    }

    get vaultName() {
        const id = this.$entities.vault.active?.id ?? '';
        const vault = this.$entities.vault.byId(id);

        return vault?.name ?? '';
    }

    colorPickerHandler() {
        this.colorPickerOpen = true;
        this.$dropdown.show({
            // @ts-ignore
            parent: this.$refs.changeColorButton,
            component: AColorPicker,
            bind: {
                'colors-old': VAULT_COLORS.map(color => ({ id: color, color })),
                value: this.$store.getters['vault/color'](this.vault.id),
            },
            on: {
                select: (value: string) => {
                    this.$tracking.trackEventV2(TrackingType.VAULT, {
                        action: TrackingAction.CHANGE_COLOR,
                        source: TrackingActionSource.SETTINGS,
                    });
                    this.$entities.vault.saveToStore({
                        id: this.vault.id,
                        color: value,
                    });
                },
            },
            popperOptions: {
                placement: 'bottom-end',
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [6, 0],
                        },
                    },
                ],
            },
            onClose: () => {
                this.colorPickerOpen = false;
            },
        });
    }
}
</script>

<style lang="scss" scoped>
.section-title {
    @include font12-600;
    color: var(--settings-modal-title-color);
    margin-bottom: 4px;
}

.description {
    @include font12-500;
    cursor: default;
    color: var(--settings-modal-option-description-color);
}

.danger-button {
    @include animateBackgroundColor;
    padding: 4px 30px;
    outline: none;
    background: var(--settings-modal-button-primary-bg-color);
    border-radius: 6px;
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    color: var(--settings-modal-button-danger-text-color);

    &:hover {
        background: var(--settings-modal-button-danger-bg-color__hover);
        color: var(--settings-modal-button-danger-text-color__hover);
    }
}

.divider {
    margin: 12px 0px;
    height: 1px;
    background: var(--tab-divider-color);
}

.vault-settings {
    &--name {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 20px;
        padding-bottom: 8px;

        &--image {
            width: 76px;
            height: 76px;
            color: var(--vault-settings-image-text-color);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
            font-weight: 500;
            font-size: 36px;
            line-height: 155.2%;
        }
    }

    &--color-button {
        flex-shrink: 0;
        outline: none;
        display: block;
        padding: 6px;
        background-color: var(--vault-settings-input-bg-color);
        border-radius: 6px;

        &.open,
        &:hover {
            @include frostedGlassButton;
        }

        span {
            display: block;
            width: 16px;
            height: 16px;
            border-radius: 50%;
        }
    }

    &--image {
        height: 76px;
        width: 76px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        font-size: 45px;
        line-height: 155.2%;
        color: var(--vault-settings-image-text-color);
    }

    &--option-wrapper {
        display: flex;
        align-items: center;
        gap: 18px;
        margin-bottom: 30px;
    }

    &--subtitle {
        @include font12-600;
        color: var(--settings-modal-title-color);
        margin-bottom: 4px;
    }

    &--storage {
        padding: 8px 0 8px;
    }

    &--location {
        padding: 8px 0 8px;

        &--text {
            max-width: 484px;
            color: var(--settings-modal-option-description-color);
            outline: none;
            background: none !important;

            p {
                @include ellipsis;
                font-weight: 500;
                font-size: 13px;
                line-height: 18px;
            }

            &:not(:disabled):hover {
                color: var(--vault-settings-location-text-color__hover);
                background: none !important;
            }

            .icon {
                flex-shrink: 0;
            }

            display: flex;
            align-items: center;
            gap: 6px;
        }

        &--switch {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;

            &--title {
                max-width: 280px;
            }
        }
    }

    &--export {
        &--subtitle {
        }

        &--text {
            margin-bottom: 8px;
        }

        &--button {
            margin-bottom: 5px;
        }
    }

    &--danger-zone {
        padding-top: 8px;

        &--subtitle {
            @include font12-600;
            color: var(--settings-modal-title-color);
            margin-bottom: 14px;
        }

        &--subsection {
            display: flex;
            justify-content: space-between;
            align-items: center;

            &:not(:last-of-type) {
                margin-bottom: 16px;
            }
        }
    }

    &--input {
        display: flex;
        align-items: center;
        gap: 4px;

        button {
        }

        input {
            @include inputMetaStyles;
            @include font12-500;
            max-width: 280px;
            padding: 5px 11px;
            background: var(--vault-settings-input-bg-color);
            width: 100%;
            color: var(--vault-settings-input-text-color);
            border-radius: 6px;
            outline: none;

            &::placeholder {
                color: var(--vault-settings-input-placeholder-color);
            }
        }
    }
}
</style>
