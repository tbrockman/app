export enum DEVICE_ACTIONS {
    FILE_EXISTS = 'file-exists',
    PARSE_FILEPATH = 'parse-filepath',
    IS_DIR = 'is-dir',

    DOCUMENT_READ = 'doc-read',
    DOCUMENT_BATCH_READ = 'doc-batch-read',
    DOCUMENT_CREATE = 'doc-create',
    DOCUMENT_UPDATE = 'doc-update',
    DOCUMENT_REMOVE = 'doc-remove',

    ENTITY_READ = 'entity-read',
    ENTITY_BATCH_READ = 'entity-batch-read',
    ENTITY_CREATE = 'entity-create',
    ENTITY_CREATE_BATCH = 'entity-create-batch',
    ENTITY_UPDATE = 'entity-update',
    ENTITY_REMOVE = 'entity-remove',

    ATTACHMENT_EXISTS = 'attachment-exists',
    ATTACHMENT_READ = 'attachment-read',
    ATTACHMENT_COPY = 'attachment-copy',
    ATTACHMENT_CREATE = 'attachment-create',
    ATTACHMENT_CREATE_BATCH = 'attachment-create-batch',
    ATTACHMENT_DELETE = 'attachment-delete',

    PROJECT_READ = 'project-read',
    PROJECT_LIST = 'project-list',
    PROJECT_LIST_RECURSIVE = 'project-list-recursive',
    PROJECT_CREATE = 'project-create',
    PROJECT_CREATE_BATCH = 'project-create-batch',
    PROJECT_UPDATE = 'project-update',
    PROJECT_REMOVE = 'project-remove',

    TASK_CREATE = 'task-create',
    TASK_UPDATE = 'task-update',
    TASK_REMOVE = 'task-remove',

    IMAGE_READ = 'image-read',
    IMAGE_CREATE = 'image-create',
    IMAGE_REMOVE = 'image-remove',
    MEDIA_MAP = 'image-media-map',

    VAULT_EXISTS = 'vault-exists',
    VAULT_LIST = 'vault-list',
    VAULT_CHANGE = 'vault-change',
    VAULT_WATCH_REGISTER = 'vault-watch-register',
    VAULT_WATCH_REMOVE = 'vault-watch-remove',
    VAULT_INITIAL_LOAD = 'vault-initial-load',
    VAULT_LOCAL_CHANGES_LOAD = 'vault-local-changes-load',
    VAULT_CONTENT_MAP = 'vault-content-map',
    GET_VAULT_STRUCTURE = 'vault-structure',
    CREATE_ROOT_FOLDER = 'vault-create-root-folder',

    ASSISTANT_QUICKADD = 'assistant-quickadd',
    ASSISTANT_ACTIVE = 'assistant-active',
    AI_ASSISTANT_PROMPT = 'ai-assistant-prompt',
    AI_ASSISTANT_ACTIVE = 'ai-assistant-active',

    ASSISTANT_ASSET_FETCH = 'assistant-asset-fetch',
    ASSISTANT_ASSET_FETCH_CANCEL = 'assistant-asset-fetch-cancel',
    ASSISTANT_ASSET_STATUS = 'assistant-asset-status',
    ASSISTANT_ASSET_DELETE = 'assistant-asset-delete',

    APPLE_CALENDAR_EVENTS = 'apple-calendar-events',
    APPLE_CALENDAR_CALENDARS = 'apple-calendar-calendars',
    APPLE_CALENDAR_REQUEST_ACCESS = 'apple-calendar-request-access',
    APPLE_CALENDAR_ACCESS_STATUS = 'apple-calendar-access-status',
    APPLE_CALENDAR_OPEN_PREFERENCES = 'apple-calendar-open-preferences',

    FOLDER_CREATE = 'folder-create',
    IS_FOLDER_EMPTY = 'folder-is-empty',
    SAVE_AS = 'save-as',
    WATCH = 'watch',

    NOTIFICATION_INITIALIZE = 'notification-initialize',
    NOTIFICATION_SCHEDULE = 'notification-schedule',
    NOTIFICATION_UPDATE_EVENT = 'notification-update-event',
    NOTIFICATION_UPDATE_INTEGRATION = 'notification-update-integration',
    NOTIFICATION_UPDATE_LOCAL_CONFIG = 'notification-update-local-config',
}

export enum EntityKind {
    DOCUMENT = 'document',
    EVENT = 'event',
    TASK = 'task',
    CONFIG = 'config',
    UNKNOWN = 'unknown',
}

export const ALLOWED_DOCUMENT_EXTENSIONS = ['.md'];
export const ALLOWED_MEDIA_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.gif'];

export const SENTRY_DSN =
    'https://618487f0a8614a0eb6f21a7e917752ac@o1191562.ingest.sentry.io/6312991';

export enum IntegrationType {
    GITHUB = 'github',
    ICS_CALENDAR = 'ics_calendar',
    GOOGLE_CALENDAR = 'google_calendar',
    JIRA = 'jira',
    APPLE_CALENDAR = 'apple_calendar',
}
