<template>
    <div class="vault--actions__wrapper">
        <div class="vault--actions">
            <button
                v-if="isElectron"
                class="vault--actions--button"
                :disabled="loadingOpenExisting"
                @click="createVault"
            >
                <div class="vault--actions--button--icon">
                    <InterfaceAddSquare class="icon" size="28" />
                </div>
                <div class="vault--actions--button--text">
                    <div class="vault--actions--button--text--title">
                        New Vault
                    </div>
                    <div class="vault--actions--button--text--subtitle">
                        Start with clean slate
                    </div>
                </div>
            </button>

            <button
                class="vault--actions--button"
                :disabled="loadingOpenExisting"
                data-e2e="create-vault-data"
                @click="openExistingFolder"
            >
                <div class="vault--actions--button--icon">
                    <InterfaceFileFolder class="icon" size="28" />
                </div>
                <div class="vault--actions--button--text">
                    <div class="vault--actions--button--text--title">
                        Open Existing Vault
                    </div>
                    <div class="vault--actions--button--text--subtitle">
                        Select folder with markdown notes
                    </div>
                </div>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { v4 } from 'uuid';
import { CloudIcon, DesktopComputerIcon } from '@vue-hero-icons/solid';
import { SafeElectronWindow } from '~/@types';
import { isElectron } from '~/helpers/is-electron';
import { DatabaseServiceAction, ServiceKey } from '~/constants';
import InterfaceAddSquare from '~/components/streamline/InterfaceAddSquare.vue';
import InterfaceFileFolder from '~/components/streamline/InterfaceFileFolder.vue';

@Component({
    components: {
        InterfaceFileFolder,
        InterfaceAddSquare,
        CloudIcon,
        DesktopComputerIcon,
    },
    name: 'NewVaultButtons',
})
export default class NewVaultButtons extends Vue {
    loadingCreateNew: boolean = false;
    loadingOpenExisting: boolean = false;
    isElectron: boolean = isElectron();

    openExistingFolder() {
        if (this.isTest()) {
            this.openTestVault();
            return;
        }

        this.openVault();
    }

    async openTestVault() {
        // @ts-ignore
        const vaultPath = window.__test_path;

        const id = v4();

        const newLocalVault = {
            id,
            name: 'Kek',
            type: 'local',
            filepath: vaultPath,
            status: 'new',
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        await this.$store.dispatch('vault/update', newLocalVault);
        await this.$store.dispatch('vault/activate', { id, redirect: false });

        this.$serviceRegistry.emit(
            ServiceKey.DEVICE,
            'vault:loadNewVault',
            newLocalVault,
        );

        this.$emit('open');
    }

    get loggedIn() {
        return this.$store.getters['auth/loggedIn'];
    }

    isTest() {
        return (window as SafeElectronWindow).electron?.isTest;
    }

    get user() {
        return this.$store.getters['auth/user'];
    }

    get email() {
        if (this.user) {
            if (this.user.email) return this.user.email;
            else return this.user.username;
        }

        return '';
    }

    async openDialog(
        meta: { canCreate: boolean; buttonLabel?: string } = {
            canCreate: false,
        },
    ): Promise<string | null> {
        // @ts-ignore
        return await (window as SafeElectronWindow).electron.selectDirectory(
            meta,
        );
    }

    get vaults() {
        const vaults = this.$store.getters['vault/list'];
        const localVaults = vaults.filter(({ type }: any) => type === 'local');
        const remoteVaults = vaults.filter(
            ({ type }: any) => type === 'remote',
        );
        return [...localVaults, ...remoteVaults];
    }

    async openVault() {
        this.loadingOpenExisting = true;
        const vaultPath = await this.openDialog({
            canCreate: true,
            buttonLabel: 'Choose Folder',
        });
        if (!vaultPath) {
            this.loadingOpenExisting = false;
            return;
        }

        const name = vaultPath
            .split(this.$config.os === 'windows' ? '\\' : '/')
            .pop();

        this.$utils.onboarding.setNewVaultPath(vaultPath);
        this.$utils.onboarding.setNewVaultName(name || '');
        this.$utils.onboarding.setNewVaultOpenExisting(true);

        this.loadingOpenExisting = false;
        this.$emit('open');
    }

    createVault() {
        this.$emit('new');
    }
}
</script>

<style lang="scss" scoped>
.vault--actions {
    margin: 0 auto;
    user-select: none;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    width: 100%;

    &--button {
        outline: none;
        border-radius: 20px;
        padding: 53px 22px 42px;
        width: 100%;
        background: var(--new-vault-button-bg-color);

        &:not(:disabled):hover {
            background: var(--new-vault-button-bg-color__hover);
        }

        &:disabled {
            opacity: 0.5;
        }

        &--icon {
            width: 60px;
            height: 60px;
            margin: 0 auto 20px;
            color: var(--new-vault-button-icon-color);
            display: flex;
            align-items: center;
            justify-content: center;
            background: $blueGrey500-16;
            border-radius: 20px;
        }

        &--text {
            color: var(--new-vault-button-subtext-color);
            text-align: left;

            &--title {
                @include font12-700;
                color: var(--new-vault-button-text-color);
                text-align: center;
                margin-bottom: 7px;
            }

            &--subtitle {
                @include font12-500;
                text-align: center;
            }
        }
    }
}
</style>
