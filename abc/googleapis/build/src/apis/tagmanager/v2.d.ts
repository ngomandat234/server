/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace tagmanager_v2 {
    export interface Options extends GlobalOptions {
        version: 'v2';
    }
    interface StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient | BaseExternalAccountClient | GoogleAuth;
        /**
         * V1 error format.
         */
        '$.xgafv'?: string;
        /**
         * OAuth access token.
         */
        access_token?: string;
        /**
         * Data format for response.
         */
        alt?: string;
        /**
         * JSONP
         */
        callback?: string;
        /**
         * Selector specifying which fields to include in a partial response.
         */
        fields?: string;
        /**
         * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
         */
        key?: string;
        /**
         * OAuth 2.0 token for the current user.
         */
        oauth_token?: string;
        /**
         * Returns response with indentations and line breaks.
         */
        prettyPrint?: boolean;
        /**
         * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
         */
        quotaUser?: string;
        /**
         * Legacy upload protocol for media (e.g. "media", "multipart").
         */
        uploadType?: string;
        /**
         * Upload protocol for media (e.g. "raw", "multipart").
         */
        upload_protocol?: string;
    }
    /**
     * Tag Manager API
     *
     * This API allows clients to access and modify container and tag configuration.
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const tagmanager = google.tagmanager('v2');
     * ```
     */
    export class Tagmanager {
        context: APIRequestContext;
        accounts: Resource$Accounts;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * Represents a Google Tag Manager Account.
     */
    export interface Schema$Account {
        /**
         * The Account ID uniquely identifies the GTM Account.
         */
        accountId?: string | null;
        /**
         * The fingerprint of the GTM Account as computed at storage time. This value is recomputed whenever the account is modified.
         */
        fingerprint?: string | null;
        /**
         * Account display name. @mutable tagmanager.accounts.create @mutable tagmanager.accounts.update
         */
        name?: string | null;
        /**
         * GTM Account's API relative path.
         */
        path?: string | null;
        /**
         * Whether the account shares data anonymously with Google and others. This flag enables benchmarking by sharing your data in an anonymous form. Google will remove all identifiable information about your website, combine the data with hundreds of other anonymous sites and report aggregate trends in the benchmarking service. @mutable tagmanager.accounts.create @mutable tagmanager.accounts.update
         */
        shareData?: boolean | null;
        /**
         * Auto generated link to the tag manager UI
         */
        tagManagerUrl?: string | null;
    }
    /**
     * Defines the Google Tag Manager Account access permissions.
     */
    export interface Schema$AccountAccess {
        /**
         * Whether the user has no access, user access, or admin access to an account. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update
         */
        permission?: string | null;
    }
    /**
     * Built-in variables are a special category of variables that are pre-created and non-customizable. They provide common functionality like accessing propeties of the gtm data layer, monitoring clicks, or accessing elements of a page URL.
     */
    export interface Schema$BuiltInVariable {
        /**
         * GTM Account ID.
         */
        accountId?: string | null;
        /**
         * GTM Container ID.
         */
        containerId?: string | null;
        /**
         * Name of the built-in variable to be used to refer to the built-in variable.
         */
        name?: string | null;
        /**
         * GTM BuiltInVariable's API relative path.
         */
        path?: string | null;
        /**
         * Type of built-in variable. @required.tagmanager.accounts.containers.workspaces.built_in_variable.update @mutable tagmanager.accounts.containers.workspaces.built_in_variable.update
         */
        type?: string | null;
        /**
         * GTM Workspace ID.
         */
        workspaceId?: string | null;
    }
    export interface Schema$Client {
        /**
         * GTM Account ID.
         */
        accountId?: string | null;
        /**
         * The Client ID uniquely identifies the GTM client.
         */
        clientId?: string | null;
        /**
         * GTM Container ID.
         */
        containerId?: string | null;
        /**
         * The fingerprint of the GTM Client as computed at storage time. This value is recomputed whenever the client is modified.
         */
        fingerprint?: string | null;
        /**
         * Client display name. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update
         */
        name?: string | null;
        /**
         * User notes on how to apply this tag in the container. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
         */
        notes?: string | null;
        /**
         * The client's parameters. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update
         */
        parameter?: Schema$Parameter[];
        /**
         * Parent folder id.
         */
        parentFolderId?: string | null;
        /**
         * GTM client's API relative path.
         */
        path?: string | null;
        /**
         * Priority determines relative firing order. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update
         */
        priority?: number | null;
        /**
         * Auto generated link to the tag manager UI
         */
        tagManagerUrl?: string | null;
        /**
         * Client type. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update
         */
        type?: string | null;
        /**
         * GTM Workspace ID.
         */
        workspaceId?: string | null;
    }
    /**
     * Represents a predicate.
     */
    export interface Schema$Condition {
        /**
         * A list of named parameters (key/value), depending on the condition's type. Notes: - For binary operators, include parameters named arg0 and arg1 for specifying the left and right operands, respectively. - At this time, the left operand (arg0) must be a reference to a variable. - For case-insensitive Regex matching, include a boolean parameter named ignore_case that is set to true. If not specified or set to any other value, the matching will be case sensitive. - To negate an operator, include a boolean parameter named negate boolean parameter that is set to true. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
         */
        parameter?: Schema$Parameter[];
        /**
         * The type of operator for this condition. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
         */
        type?: string | null;
    }
    /**
     * Represents a Google Tag Manager Container, which specifies the platform tags will run on, manages workspaces, and retains container versions.
     */
    export interface Schema$Container {
        /**
         * GTM Account ID.
         */
        accountId?: string | null;
        /**
         * The Container ID uniquely identifies the GTM Container.
         */
        containerId?: string | null;
        /**
         * List of domain names associated with the Container. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update
         */
        domainName?: string[] | null;
        /**
         * The fingerprint of the GTM Container as computed at storage time. This value is recomputed whenever the account is modified.
         */
        fingerprint?: string | null;
        /**
         * Container display name. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update
         */
        name?: string | null;
        /**
         * Container Notes. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update
         */
        notes?: string | null;
        /**
         * GTM Container's API relative path.
         */
        path?: string | null;
        /**
         * Container Public ID.
         */
        publicId?: string | null;
        /**
         * Auto generated link to the tag manager UI
         */
        tagManagerUrl?: string | null;
        /**
         * List of Usage Contexts for the Container. Valid values include: web, android, or ios. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update
         */
        usageContext?: string[] | null;
    }
    /**
     * Defines the Google Tag Manager Container access permissions.
     */
    export interface Schema$ContainerAccess {
        /**
         * GTM Container ID. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update
         */
        containerId?: string | null;
        /**
         * List of Container permissions. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update
         */
        permission?: string | null;
    }
    /**
     * Represents a Google Tag Manager Container Version.
     */
    export interface Schema$ContainerVersion {
        /**
         * GTM Account ID.
         */
        accountId?: string | null;
        /**
         * The built-in variables in the container that this version was taken from.
         */
        builtInVariable?: Schema$BuiltInVariable[];
        /**
         * The clients in the container that this version was taken from.
         */
        client?: Schema$Client[];
        /**
         * The container that this version was taken from.
         */
        container?: Schema$Container;
        /**
         * GTM Container ID.
         */
        containerId?: string | null;
        /**
         * The Container Version ID uniquely identifies the GTM Container Version.
         */
        containerVersionId?: string | null;
        /**
         * The custom templates in the container that this version was taken from.
         */
        customTemplate?: Schema$CustomTemplate[];
        /**
         * A value of true indicates this container version has been deleted.
         */
        deleted?: boolean | null;
        /**
         * Container version description. @mutable tagmanager.accounts.containers.versions.update
         */
        description?: string | null;
        /**
         * The fingerprint of the GTM Container Version as computed at storage time. This value is recomputed whenever the container version is modified.
         */
        fingerprint?: string | null;
        /**
         * The folders in the container that this version was taken from.
         */
        folder?: Schema$Folder[];
        /**
         * Container version display name. @mutable tagmanager.accounts.containers.versions.update
         */
        name?: string | null;
        /**
         * GTM ContainerVersions's API relative path.
         */
        path?: string | null;
        /**
         * The tags in the container that this version was taken from.
         */
        tag?: Schema$Tag[];
        /**
         * Auto generated link to the tag manager UI
         */
        tagManagerUrl?: string | null;
        /**
         * The triggers in the container that this version was taken from.
         */
        trigger?: Schema$Trigger[];
        /**
         * The variables in the container that this version was taken from.
         */
        variable?: Schema$Variable[];
        /**
         * The zones in the container that this version was taken from.
         */
        zone?: Schema$Zone[];
    }
    /**
     * Represents a Google Tag Manager Container Version Header.
     */
    export interface Schema$ContainerVersionHeader {
        /**
         * GTM Account ID.
         */
        accountId?: string | null;
        /**
         * GTM Container ID.
         */
        containerId?: string | null;
        /**
         * The Container Version ID uniquely identifies the GTM Container Version.
         */
        containerVersionId?: string | null;
        /**
         * A value of true indicates this container version has been deleted.
         */
        deleted?: boolean | null;
        /**
         * Container version display name.
         */
        name?: string | null;
        /**
         * Number of clients in the container version.
         */
        numClients?: string | null;
        /**
         * Number of custom templates in the container version.
         */
        numCustomTemplates?: string | null;
        /**
         * Number of macros in the container version.
         */
        numMacros?: string | null;
        /**
         * Number of rules in the container version.
         */
        numRules?: string | null;
        /**
         * Number of tags in the container version.
         */
        numTags?: string | null;
        /**
         * Number of triggers in the container version.
         */
        numTriggers?: string | null;
        /**
         * Number of variables in the container version.
         */
        numVariables?: string | null;
        /**
         * Number of zones in the container version.
         */
        numZones?: string | null;
        /**
         * GTM Container Versions's API relative path.
         */
        path?: string | null;
    }
    export interface Schema$CreateBuiltInVariableResponse {
        /**
         * List of created built-in variables.
         */
        builtInVariable?: Schema$BuiltInVariable[];
    }
    /**
     * Options for new container versions.
     */
    export interface Schema$CreateContainerVersionRequestVersionOptions {
        /**
         * The name of the container version to be created.
         */
        name?: string | null;
        /**
         * The notes of the container version to be created.
         */
        notes?: string | null;
    }
    /**
     * Create container versions response.
     */
    export interface Schema$CreateContainerVersionResponse {
        /**
         * Compiler errors or not.
         */
        compilerError?: boolean | null;
        /**
         * The container version created.
         */
        containerVersion?: Schema$ContainerVersion;
        /**
         * Auto generated workspace path created as a result of version creation. This field should only be populated if the created version was not a quick preview.
         */
        newWorkspacePath?: string | null;
        /**
         * Whether version creation failed when syncing the workspace to the latest container version.
         */
        syncStatus?: Schema$SyncStatus;
    }
    /**
     * Represents a Google Tag Manager Custom Template's contents.
     */
    export interface Schema$CustomTemplate {
        /**
         * GTM Account ID.
         */
        accountId?: string | null;
        /**
         * GTM Container ID.
         */
        containerId?: string | null;
        /**
         * The fingerprint of the GTM Custom Template as computed at storage time. This value is recomputed whenever the template is modified.
         */
        fingerprint?: string | null;
        /**
         * A reference to the Community Template Gallery entry.
         */
        galleryReference?: Schema$GalleryReference;
        /**
         * Custom Template display name.
         */
        name?: string | null;
        /**
         * GTM Custom Template's API relative path.
         */
        path?: string | null;
        /**
         * Auto generated link to the tag manager UI
         */
        tagManagerUrl?: string | null;
        /**
         * The custom template in text format.
         */
        templateData?: string | null;
        /**
         * The Custom Template ID uniquely identifies the GTM custom template.
         */
        templateId?: string | null;
        /**
         * GTM Workspace ID.
         */
        workspaceId?: string | null;
    }
    /**
     * A workspace entity that may represent a tag, trigger, variable, or folder in addition to its status in the workspace.
     */
    export interface Schema$Entity {
        /**
         * Represents how the entity has been changed in the workspace.
         */
        changeStatus?: string | null;
        /**
         * The client being represented by the entity.
         */
        client?: Schema$Client;
        /**
         * The folder being represented by the entity.
         */
        folder?: Schema$Folder;
        /**
         * The tag being represented by the entity.
         */
        tag?: Schema$Tag;
        /**
         * The trigger being represented by the entity.
         */
        trigger?: Schema$Trigger;
        /**
         * The variable being represented by the entity.
         */
        variable?: Schema$Variable;
    }
    /**
     * Represents a Google Tag Manager Environment. Note that a user can create, delete and update environments of type USER, but can only update the enable_debug and url fields of environments of other types.
     */
    export interface Schema$Environment {
        /**
         * GTM Account ID.
         */
        accountId?: string | null;
        /**
         * The environment authorization code.
         */
        authorizationCode?: string | null;
        /**
         * The last update time-stamp for the authorization code.
         */
        authorizationTimestamp?: string | null;
        /**
         * GTM Container ID.
         */
        containerId?: string | null;
        /**
         * Represents a link to a container version.
         */
        containerVersionId?: string | null;
        /**
         * The environment description. Can be set or changed only on USER type environments. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update
         */
        description?: string | null;
        /**
         * Whether or not to enable debug by default for the environment. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update
         */
        enableDebug?: boolean | null;
        /**
         * GTM Environment ID uniquely identifies the GTM Environment.
         */
        environmentId?: string | null;
        /**
         * The fingerprint of the GTM environment as computed at storage time. This value is recomputed whenever the environment is modified.
         */
        fingerprint?: string | null;
        /**
         * The environment display name. Can be set or changed only on USER type environments. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update
         */
        name?: string | null;
        /**
         * GTM Environment's API relative path.
         */
        path?: string | null;
        /**
         * Auto generated link to the tag manager UI
         */
        tagManagerUrl?: string | null;
        /**
         * The type of this environment.
         */
        type?: string | null;
        /**
         * Default preview page url for the environment. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update
         */
        url?: string | null;
        /**
         * Represents a link to a quick preview of a workspace.
         */
        workspaceId?: string | null;
    }
    /**
     * Represents a Google Tag Manager Folder.
     */
    export interface Schema$Folder {
        /**
         * GTM Account ID.
         */
        accountId?: string | null;
        /**
         * GTM Container ID.
         */
        containerId?: string | null;
        /**
         * The fingerprint of the GTM Folder as computed at storage time. This value is recomputed whenever the folder is modified.
         */
        fingerprint?: string | null;
        /**
         * The Folder ID uniquely identifies the GTM Folder.
         */
        folderId?: string | null;
        /**
         * Folder display name. @mutable tagmanager.accounts.containers.workspaces.folders.create @mutable tagmanager.accounts.containers.workspaces.folders.update
         */
        name?: string | null;
        /**
         * User notes on how to apply this folder in the container. @mutable tagmanager.accounts.containers.workspaces.folders.create @mutable tagmanager.accounts.containers.workspaces.folders.update
         */
        notes?: string | null;
        /**
         * GTM Folder's API relative path.
         */
        path?: string | null;
        /**
         * Auto generated link to the tag manager UI
         */
        tagManagerUrl?: string | null;
        /**
         * GTM Workspace ID.
         */
        workspaceId?: string | null;
    }
    /**
     * Represents a Google Tag Manager Folder's contents.
     */
    export interface Schema$FolderEntities {
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
        /**
         * The list of tags inside the folder.
         */
        tag?: Schema$Tag[];
        /**
         * The list of triggers inside the folder.
         */
        trigger?: Schema$Trigger[];
        /**
         * The list of variables inside the folder.
         */
        variable?: Schema$Variable[];
    }
    /**
     * Represents the link between a custom template and an entry on the Community Template Gallery site.
     */
    export interface Schema$GalleryReference {
        /**
         * The name of the host for the community gallery template.
         */
        host?: string | null;
        /**
         * If a user has manually edited the community gallery template.
         */
        isModified?: boolean | null;
        /**
         * The name of the owner for the community gallery template.
         */
        owner?: string | null;
        /**
         * The name of the repository for the community gallery template.
         */
        repository?: string | null;
        /**
         * The signature of the community gallery template as computed at import time. This value is recomputed whenever the template is updated from the gallery.
         */
        signature?: string | null;
        /**
         * The version of the community gallery template.
         */
        version?: string | null;
    }
    /**
     * The changes that have occurred in the workspace since the base container version.
     */
    export interface Schema$GetWorkspaceStatusResponse {
        /**
         * The merge conflict after sync.
         */
        mergeConflict?: Schema$MergeConflict[];
        /**
         * Entities that have been changed in the workspace.
         */
        workspaceChange?: Schema$Entity[];
    }
    /**
     * List Accounts Response.
     */
    export interface Schema$ListAccountsResponse {
        /**
         * List of GTM Accounts that a user has access to.
         */
        account?: Schema$Account[];
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
    }
    export interface Schema$ListClientsResponse {
        /**
         * All GTM Clients of a GTM Container.
         */
        client?: Schema$Client[];
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
    }
    /**
     * List Containers Response.
     */
    export interface Schema$ListContainersResponse {
        /**
         * All Containers of a GTM Account.
         */
        container?: Schema$Container[];
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
    }
    /**
     * List container versions response.
     */
    export interface Schema$ListContainerVersionsResponse {
        /**
         * All container version headers of a GTM Container.
         */
        containerVersionHeader?: Schema$ContainerVersionHeader[];
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
    }
    /**
     * A list of enabled built-in variables.
     */
    export interface Schema$ListEnabledBuiltInVariablesResponse {
        /**
         * All GTM BuiltInVariables of a GTM container.
         */
        builtInVariable?: Schema$BuiltInVariable[];
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
    }
    /**
     * List Environments Response.
     */
    export interface Schema$ListEnvironmentsResponse {
        /**
         * All Environments of a GTM Container.
         */
        environment?: Schema$Environment[];
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
    }
    /**
     * List Folders Response.
     */
    export interface Schema$ListFoldersResponse {
        /**
         * All GTM Folders of a GTM Container.
         */
        folder?: Schema$Folder[];
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
    }
    /**
     * List Tags Response.
     */
    export interface Schema$ListTagsResponse {
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
        /**
         * All GTM Tags of a GTM Container.
         */
        tag?: Schema$Tag[];
    }
    export interface Schema$ListTemplatesResponse {
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
        /**
         * All GTM Custom Templates of a GTM Container.
         */
        template?: Schema$CustomTemplate[];
    }
    /**
     * List triggers response.
     */
    export interface Schema$ListTriggersResponse {
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
        /**
         * All GTM Triggers of a GTM Container.
         */
        trigger?: Schema$Trigger[];
    }
    /**
     * List user permissions response.
     */
    export interface Schema$ListUserPermissionsResponse {
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
        /**
         * All GTM UserPermissions of a GTM Account.
         */
        userPermission?: Schema$UserPermission[];
    }
    /**
     * List Variables Response.
     */
    export interface Schema$ListVariablesResponse {
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
        /**
         * All GTM Variables of a GTM Container.
         */
        variable?: Schema$Variable[];
    }
    /**
     * A list of workspaces in a container.
     */
    export interface Schema$ListWorkspacesResponse {
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
        /**
         * All Workspaces of a GTM Container.
         */
        workspace?: Schema$Workspace[];
    }
    export interface Schema$ListZonesResponse {
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string | null;
        /**
         * All GTM Zones of a GTM Container.
         */
        zone?: Schema$Zone[];
    }
    /**
     * Represents a merge conflict.
     */
    export interface Schema$MergeConflict {
        /**
         * The base version entity (since the latest sync operation) that has conflicting changes compared to the workspace. If this field is missing, it means the workspace entity is deleted from the base version.
         */
        entityInBaseVersion?: Schema$Entity;
        /**
         * The workspace entity that has conflicting changes compared to the base version. If an entity is deleted in a workspace, it will still appear with a deleted change status.
         */
        entityInWorkspace?: Schema$Entity;
    }
    /**
     * Represents a Google Tag Manager Parameter.
     */
    export interface Schema$Parameter {
        /**
         * The named key that uniquely identifies a parameter. Required for top-level parameters, as well as map values. Ignored for list values. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
         */
        key?: string | null;
        /**
         * This list parameter's parameters (keys will be ignored). @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
         */
        list?: Schema$Parameter[];
        /**
         * This map parameter's parameters (must have keys; keys must be unique). @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
         */
        map?: Schema$Parameter[];
        /**
         * The parameter type. Valid values are: - boolean: The value represents a boolean, represented as 'true' or 'false' - integer: The value represents a 64-bit signed integer value, in base 10 - list: A list of parameters should be specified - map: A map of parameters should be specified - template: The value represents any text; this can include variable references (even variable references that might return non-string types) - trigger_reference: The value represents a trigger, represented as the trigger id - tag_reference: The value represents a tag, represented as the tag name @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
         */
        type?: string | null;
        /**
         * A parameter's value (may contain variable references such as "{{myVariable\}\}") as appropriate to the specified type. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
         */
        value?: string | null;
    }
    /**
     * Publish container version response.
     */
    export interface Schema$PublishContainerVersionResponse {
        /**
         * Compiler errors or not.
         */
        compilerError?: boolean | null;
        /**
         * The container version created.
         */
        containerVersion?: Schema$ContainerVersion;
    }
    /**
     * Response to quick previewing a workspace.
     */
    export interface Schema$QuickPreviewResponse {
        /**
         * Were there compiler errors or not.
         */
        compilerError?: boolean | null;
        /**
         * The quick previewed container version.
         */
        containerVersion?: Schema$ContainerVersion;
        /**
         * Whether quick previewing failed when syncing the workspace to the latest container version.
         */
        syncStatus?: Schema$SyncStatus;
    }
    /**
     * The result of reverting a built-in variable in a workspace.
     */
    export interface Schema$RevertBuiltInVariableResponse {
        /**
         * Whether the built-in variable is enabled after reversion.
         */
        enabled?: boolean | null;
    }
    /**
     * The result of reverting a client in a workspace.
     */
    export interface Schema$RevertClientResponse {
        /**
         * Client as it appears in the latest container version since the last workspace synchronization operation. If no client is present, that means the client was deleted in the latest container version.
         */
        client?: Schema$Client;
    }
    /**
     * The result of reverting folder changes in a workspace.
     */
    export interface Schema$RevertFolderResponse {
        /**
         * Folder as it appears in the latest container version since the last workspace synchronization operation. If no folder is present, that means the folder was deleted in the latest container version.
         */
        folder?: Schema$Folder;
    }
    /**
     * The result of reverting a tag in a workspace.
     */
    export interface Schema$RevertTagResponse {
        /**
         * Tag as it appears in the latest container version since the last workspace synchronization operation. If no tag is present, that means the tag was deleted in the latest container version.
         */
        tag?: Schema$Tag;
    }
    /**
     * The result of reverting a template in a workspace.
     */
    export interface Schema$RevertTemplateResponse {
        /**
         * Template as it appears in the latest container version since the last workspace synchronization operation. If no template is present, that means the template was deleted in the latest container version.
         */
        template?: Schema$CustomTemplate;
    }
    /**
     * The result of reverting a trigger in a workspace.
     */
    export interface Schema$RevertTriggerResponse {
        /**
         * Trigger as it appears in the latest container version since the last workspace synchronization operation. If no trigger is present, that means the trigger was deleted in the latest container version.
         */
        trigger?: Schema$Trigger;
    }
    /**
     * The result of reverting a variable in a workspace.
     */
    export interface Schema$RevertVariableResponse {
        /**
         * Variable as it appears in the latest container version since the last workspace synchronization operation. If no variable is present, that means the variable was deleted in the latest container version.
         */
        variable?: Schema$Variable;
    }
    /**
     * The result of reverting a zone in a workspace.
     */
    export interface Schema$RevertZoneResponse {
        /**
         * Zone as it appears in the latest container version since the last workspace synchronization operation. If no zone is present, that means the zone was deleted in the latest container version.
         */
        zone?: Schema$Zone;
    }
    /**
     * Represents a reference to atag that fires before another tag in order to set up dependencies.
     */
    export interface Schema$SetupTag {
        /**
         * If true, fire the main tag if and only if the setup tag fires successfully. If false, fire the main tag regardless of setup tag firing status.
         */
        stopOnSetupFailure?: boolean | null;
        /**
         * The name of the setup tag.
         */
        tagName?: string | null;
    }
    /**
     * The status of a workspace after synchronization.
     */
    export interface Schema$SyncStatus {
        /**
         * Synchornization operation detected a merge conflict.
         */
        mergeConflict?: boolean | null;
        /**
         * An error occurred during the synchronization operation.
         */
        syncError?: boolean | null;
    }
    /**
     * A response after synchronizing the workspace to the latest container version.
     */
    export interface Schema$SyncWorkspaceResponse {
        /**
         * The merge conflict after sync. If this field is not empty, the sync is still treated as successful. But a version cannot be created until all conflicts are resolved.
         */
        mergeConflict?: Schema$MergeConflict[];
        /**
         * Indicates whether synchronization caused a merge conflict or sync error.
         */
        syncStatus?: Schema$SyncStatus;
    }
    /**
     * Represents a Google Tag Manager Tag.
     */
    export interface Schema$Tag {
        /**
         * GTM Account ID.
         */
        accountId?: string | null;
        /**
         * Blocking rule IDs. If any of the listed rules evaluate to true, the tag will not fire. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
         */
        blockingRuleId?: string[] | null;
        /**
         * Blocking trigger IDs. If any of the listed triggers evaluate to true, the tag will not fire. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
         */
        blockingTriggerId?: string[] | null;
        /**
         * Consent settings of a tag. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
         */
        consentSettings?: Schema$TagConsentSetting;
        /**
         * GTM Container ID.
         */
        containerId?: string | null;
        /**
         * The fingerprint of the GTM Tag as computed at storage time. This value is recomputed whenever the tag is modified.
         */
        fingerprint?: string | null;
        /**
         * Firing rule IDs. A tag will fire when any of the listed rules are true and all of its blockingRuleIds (if any specified) are false. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
         */
        firingRuleId?: string[] | null;
        /**
         * Firing trigger IDs. A tag will fire when any of the listed triggers are true and all of its blockingTriggerIds (if any specified) are false. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
         */
        firingTriggerId?: string[] | null;
        /**
         * If set to true, this tag will only fire in the live environment (e.g. not in preview or debug mode). @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
         */
        liveOnly?: boolean | null;
        /**
         * A map of key-value pairs of tag metadata to be included in the event data for tag monitoring. Notes: - This parameter must be type MAP. - Each parameter in the map are type TEMPLATE, however cannot contain variable references. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
         */
        monitoringMetadata?: Schema$Parameter;
        /**
         * If non-empty, then the tag display name will be included in the monitoring metadata map using the key specified. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
         */
        monitoringMetadataTagNameKey?: string | null;
        /**
         * Tag display name. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
         */
        name?: string | null;
        /**
         * User notes on how to apply this tag in the container. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
         */
        notes?: string | null;
        /**
         * The tag's parameters. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
         */
        parameter?: Schema$Parameter[];
        /**
         * Parent folder id.
         */
        parentFolderId?: string | null;
        /**
         * GTM Tag's API relative path.
         */
        path?: string | null;
        /**
         * Indicates whether the tag is paused, which prevents the tag from firing. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
         */
        paused?: boolean | null;
        /**
         * User defined numeric priority of the tag. Tags are fired asynchronously in order of priority. Tags with higher numeric value fire first. A tag's priority can be a positive or negative value. The default value is 0. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
         */
        priority?: Schema$Parameter;
        /**
         * The end timestamp in milliseconds to schedule a tag. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
         */
        scheduleEndMs?: string | null;
        /**
         * The start timestamp in milliseconds to schedule a tag. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
         */
        scheduleStartMs?: string | null;
        /**
         * The list of setup tags. Currently we only allow one.
         */
        setupTag?: Schema$SetupTag[];
        /**
         * Option to fire this tag.
         */
        tagFiringOption?: string | null;
        /**
         * The Tag ID uniquely identifies the GTM Tag.
         */
        tagId?: string | null;
        /**
         * Auto generated link to the tag manager UI
         */
        tagManagerUrl?: string | null;
        /**
         * The list of teardown tags. Currently we only allow one.
         */
        teardownTag?: Schema$TeardownTag[];
        /**
         * GTM Tag Type. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update
         */
        type?: string | null;
        /**
         * GTM Workspace ID.
         */
        workspaceId?: string | null;
    }
    export interface Schema$TagConsentSetting {
        /**
         * The tag's consent status. If set to NEEDED, the runtime will check that the consent types specified by the consent_type field have been granted.
         */
        consentStatus?: string | null;
        /**
         * The type of consents to check for during tag firing if in the consent NEEDED state. This parameter must be of type LIST where each list item is of type STRING.
         */
        consentType?: Schema$Parameter;
    }
    /**
     * Represents a tag that fires after another tag in order to tear down dependencies.
     */
    export interface Schema$TeardownTag {
        /**
         * If true, fire the teardown tag if and only if the main tag fires successfully. If false, fire the teardown tag regardless of main tag firing status.
         */
        stopTeardownOnFailure?: boolean | null;
        /**
         * The name of the teardown tag.
         */
        tagName?: string | null;
    }
    /**
     * Represents a Google Tag Manager Trigger
     */
    export interface Schema$Trigger {
        /**
         * GTM Account ID.
         */
        accountId?: string | null;
        /**
         * Used in the case of auto event tracking. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
         */
        autoEventFilter?: Schema$Condition[];
        /**
         * Whether or not we should only fire tags if the form submit or link click event is not cancelled by some other event handler (e.g. because of validation). Only valid for Form Submission and Link Click triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
         */
        checkValidation?: Schema$Parameter;
        /**
         * GTM Container ID.
         */
        containerId?: string | null;
        /**
         * A visibility trigger minimum continuous visible time (in milliseconds). Only valid for AMP Visibility trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
         */
        continuousTimeMinMilliseconds?: Schema$Parameter;
        /**
         * Used in the case of custom event, which is fired iff all Conditions are true. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
         */
        customEventFilter?: Schema$Condition[];
        /**
         * Name of the GTM event that is fired. Only valid for Timer triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
         */
        eventName?: Schema$Parameter;
        /**
         * The trigger will only fire iff all Conditions are true. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
         */
        filter?: Schema$Condition[];
        /**
         * The fingerprint of the GTM Trigger as computed at storage time. This value is recomputed whenever the trigger is modified.
         */
        fingerprint?: string | null;
        /**
         * List of integer percentage values for scroll triggers. The trigger will fire when each percentage is reached when the view is scrolled horizontally. Only valid for AMP scroll triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
         */
        horizontalScrollPercentageList?: Schema$Parameter;
        /**
         * Time between triggering recurring Timer Events (in milliseconds). Only valid for Timer triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
         */
        interval?: Schema$Parameter;
        /**
         * Time between Timer Events to fire (in seconds). Only valid for AMP Timer trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
         */
        intervalSeconds?: Schema$Parameter;
        /**
         * Limit of the number of GTM events this Timer Trigger will fire. If no limit is set, we will continue to fire GTM events until the user leaves the page. Only valid for Timer triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
         */
        limit?: Schema$Parameter;
        /**
         * Max time to fire Timer Events (in seconds). Only valid for AMP Timer trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
         */
        maxTimerLengthSeconds?: Schema$Parameter;
        /**
         * Trigger display name. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
         */
        name?: string | null;
        /**
         * User notes on how to apply this trigger in the container. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
         */
        notes?: string | null;
        /**
         * Additional parameters. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
         */
        parameter?: Schema$Parameter[];
        /**
         * Parent folder id.
         */
        parentFolderId?: string | null;
        /**
         * GTM Trigger's API relative path.
         */
        path?: string | null;
        /**
         * A click trigger CSS selector (i.e. "a", "button" etc.). Only valid for AMP Click trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
         */
        selector?: Schema$Parameter;
        /**
         * Auto generated link to the tag manager UI
         */
        tagManagerUrl?: string | null;
        /**
         * A visibility trigger minimum total visible time (in milliseconds). Only valid for AMP Visibility trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
         */
        totalTimeMinMilliseconds?: Schema$Parameter;
        /**
         * The Trigger ID uniquely identifies the GTM Trigger.
         */
        triggerId?: string | null;
        /**
         * Defines the data layer event that causes this trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
         */
        type?: string | null;
        /**
         * Globally unique id of the trigger that auto-generates this (a Form Submit, Link Click or Timer listener) if any. Used to make incompatible auto-events work together with trigger filtering based on trigger ids. This value is populated during output generation since the tags implied by triggers don't exist until then. Only valid for Form Submit, Link Click and Timer triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
         */
        uniqueTriggerId?: Schema$Parameter;
        /**
         * List of integer percentage values for scroll triggers. The trigger will fire when each percentage is reached when the view is scrolled vertically. Only valid for AMP scroll triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
         */
        verticalScrollPercentageList?: Schema$Parameter;
        /**
         * A visibility trigger CSS selector (i.e. "#id"). Only valid for AMP Visibility trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
         */
        visibilitySelector?: Schema$Parameter;
        /**
         * A visibility trigger maximum percent visibility. Only valid for AMP Visibility trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
         */
        visiblePercentageMax?: Schema$Parameter;
        /**
         * A visibility trigger minimum percent visibility. Only valid for AMP Visibility trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
         */
        visiblePercentageMin?: Schema$Parameter;
        /**
         * Whether or not we should delay the form submissions or link opening until all of the tags have fired (by preventing the default action and later simulating the default action). Only valid for Form Submission and Link Click triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
         */
        waitForTags?: Schema$Parameter;
        /**
         * How long to wait (in milliseconds) for tags to fire when 'waits_for_tags' above evaluates to true. Only valid for Form Submission and Link Click triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
         */
        waitForTagsTimeout?: Schema$Parameter;
        /**
         * GTM Workspace ID.
         */
        workspaceId?: string | null;
    }
    /**
     * Represents a user's permissions to an account and its container.
     */
    export interface Schema$UserPermission {
        /**
         * GTM Account access permissions. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update
         */
        accountAccess?: Schema$AccountAccess;
        /**
         * The Account ID uniquely identifies the GTM Account.
         */
        accountId?: string | null;
        /**
         * GTM Container access permissions. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update
         */
        containerAccess?: Schema$ContainerAccess[];
        /**
         * User's email address. @mutable tagmanager.accounts.permissions.create
         */
        emailAddress?: string | null;
        /**
         * GTM UserPermission's API relative path.
         */
        path?: string | null;
    }
    /**
     * Represents a Google Tag Manager Variable.
     */
    export interface Schema$Variable {
        /**
         * GTM Account ID.
         */
        accountId?: string | null;
        /**
         * GTM Container ID.
         */
        containerId?: string | null;
        /**
         * For mobile containers only: A list of trigger IDs for disabling conditional variables; the variable is enabled if one of the enabling trigger is true while all the disabling trigger are false. Treated as an unordered set. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update
         */
        disablingTriggerId?: string[] | null;
        /**
         * For mobile containers only: A list of trigger IDs for enabling conditional variables; the variable is enabled if one of the enabling triggers is true while all the disabling triggers are false. Treated as an unordered set. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update
         */
        enablingTriggerId?: string[] | null;
        /**
         * The fingerprint of the GTM Variable as computed at storage time. This value is recomputed whenever the variable is modified.
         */
        fingerprint?: string | null;
        /**
         * Option to convert a variable value to other value.
         */
        formatValue?: Schema$VariableFormatValue;
        /**
         * Variable display name. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update
         */
        name?: string | null;
        /**
         * User notes on how to apply this variable in the container. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update
         */
        notes?: string | null;
        /**
         * The variable's parameters. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update
         */
        parameter?: Schema$Parameter[];
        /**
         * Parent folder id.
         */
        parentFolderId?: string | null;
        /**
         * GTM Variable's API relative path.
         */
        path?: string | null;
        /**
         * The end timestamp in milliseconds to schedule a variable. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update
         */
        scheduleEndMs?: string | null;
        /**
         * The start timestamp in milliseconds to schedule a variable. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update
         */
        scheduleStartMs?: string | null;
        /**
         * Auto generated link to the tag manager UI
         */
        tagManagerUrl?: string | null;
        /**
         * GTM Variable Type. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update
         */
        type?: string | null;
        /**
         * The Variable ID uniquely identifies the GTM Variable.
         */
        variableId?: string | null;
        /**
         * GTM Workspace ID.
         */
        workspaceId?: string | null;
    }
    export interface Schema$VariableFormatValue {
        /**
         * The option to convert a string-type variable value to either lowercase or uppercase.
         */
        caseConversionType?: string | null;
        /**
         * The value to convert if a variable value is false.
         */
        convertFalseToValue?: Schema$Parameter;
        /**
         * The value to convert if a variable value is null.
         */
        convertNullToValue?: Schema$Parameter;
        /**
         * The value to convert if a variable value is true.
         */
        convertTrueToValue?: Schema$Parameter;
        /**
         * The value to convert if a variable value is undefined.
         */
        convertUndefinedToValue?: Schema$Parameter;
    }
    /**
     * Represents a Google Tag Manager Container Workspace.
     */
    export interface Schema$Workspace {
        /**
         * GTM Account ID.
         */
        accountId?: string | null;
        /**
         * GTM Container ID.
         */
        containerId?: string | null;
        /**
         * Workspace description. @mutable tagmanager.accounts.containers.workspaces.create @mutable tagmanager.accounts.containers.workspaces.update
         */
        description?: string | null;
        /**
         * The fingerprint of the GTM Workspace as computed at storage time. This value is recomputed whenever the workspace is modified.
         */
        fingerprint?: string | null;
        /**
         * Workspace display name. @mutable tagmanager.accounts.containers.workspaces.create @mutable tagmanager.accounts.containers.workspaces.update
         */
        name?: string | null;
        /**
         * GTM Workspace's API relative path.
         */
        path?: string | null;
        /**
         * Auto generated link to the tag manager UI
         */
        tagManagerUrl?: string | null;
        /**
         * The Workspace ID uniquely identifies the GTM Workspace.
         */
        workspaceId?: string | null;
    }
    /**
     * Represents a Google Tag Manager Zone's contents.
     */
    export interface Schema$Zone {
        /**
         * GTM Account ID.
         */
        accountId?: string | null;
        /**
         * This Zone's boundary.
         */
        boundary?: Schema$ZoneBoundary;
        /**
         * Containers that are children of this Zone.
         */
        childContainer?: Schema$ZoneChildContainer[];
        /**
         * GTM Container ID.
         */
        containerId?: string | null;
        /**
         * The fingerprint of the GTM Zone as computed at storage time. This value is recomputed whenever the zone is modified.
         */
        fingerprint?: string | null;
        /**
         * Zone display name.
         */
        name?: string | null;
        /**
         * User notes on how to apply this zone in the container.
         */
        notes?: string | null;
        /**
         * Additional parameters.
         */
        parameter?: Schema$Parameter[];
        /**
         * GTM Zone's API relative path.
         */
        path?: string | null;
        /**
         * Auto generated link to the tag manager UI
         */
        tagManagerUrl?: string | null;
        /**
         * This Zone's type restrictions.
         */
        typeRestriction?: Schema$ZoneTypeRestriction;
        /**
         * GTM Workspace ID.
         */
        workspaceId?: string | null;
        /**
         * The Zone ID uniquely identifies the GTM Zone.
         */
        zoneId?: string | null;
    }
    /**
     * Represents a Zone's boundaries.
     */
    export interface Schema$ZoneBoundary {
        /**
         * The conditions that, when conjoined, make up the boundary.
         */
        condition?: Schema$Condition[];
        /**
         * Custom evaluation trigger IDs. A zone will evaluate its boundary conditions when any of the listed triggers are true.
         */
        customEvaluationTriggerId?: string[] | null;
    }
    /**
     * Represents a child container of a Zone.
     */
    export interface Schema$ZoneChildContainer {
        /**
         * The zone's nickname for the child container.
         */
        nickname?: string | null;
        /**
         * The child container's public id.
         */
        publicId?: string | null;
    }
    /**
     * Represents a Zone's type restrictions.
     */
    export interface Schema$ZoneTypeRestriction {
        /**
         * True if type restrictions have been enabled for this Zone.
         */
        enable?: boolean | null;
        /**
         * List of type public ids that have been whitelisted for use in this Zone.
         */
        whitelistedTypeId?: string[] | null;
    }
    export class Resource$Accounts {
        context: APIRequestContext;
        containers: Resource$Accounts$Containers;
        user_permissions: Resource$Accounts$User_permissions;
        constructor(context: APIRequestContext);
        /**
         * Gets a GTM Account.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containers',
         *       'https://www.googleapis.com/auth/tagmanager.manage.accounts',
         *       'https://www.googleapis.com/auth/tagmanager.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.get({
         *     // GTM Accounts's API relative path. Example: accounts/{account_id\}
         *     path: 'accounts/my-account',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "fingerprint": "my_fingerprint",
         *   //   "name": "my_name",
         *   //   "path": "my_path",
         *   //   "shareData": false,
         *   //   "tagManagerUrl": "my_tagManagerUrl"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Get, options?: MethodOptions): GaxiosPromise<Schema$Account>;
        get(params: Params$Resource$Accounts$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Get, options: MethodOptions | BodyResponseCallback<Schema$Account>, callback: BodyResponseCallback<Schema$Account>): void;
        get(params: Params$Resource$Accounts$Get, callback: BodyResponseCallback<Schema$Account>): void;
        get(callback: BodyResponseCallback<Schema$Account>): void;
        /**
         * Lists all GTM Accounts that a user has access to.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containers',
         *       'https://www.googleapis.com/auth/tagmanager.manage.accounts',
         *       'https://www.googleapis.com/auth/tagmanager.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.list({
         *     // Continuation token for fetching the next page of results.
         *     pageToken: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "account": [],
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$List, options?: MethodOptions): GaxiosPromise<Schema$ListAccountsResponse>;
        list(params: Params$Resource$Accounts$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$List, options: MethodOptions | BodyResponseCallback<Schema$ListAccountsResponse>, callback: BodyResponseCallback<Schema$ListAccountsResponse>): void;
        list(params: Params$Resource$Accounts$List, callback: BodyResponseCallback<Schema$ListAccountsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListAccountsResponse>): void;
        /**
         * Updates a GTM Account.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.manage.accounts'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.update({
         *     // When provided, this fingerprint must match the fingerprint of the account in storage.
         *     fingerprint: 'placeholder-value',
         *     // GTM Accounts's API relative path. Example: accounts/{account_id\}
         *     path: 'accounts/my-account',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "accountId": "my_accountId",
         *       //   "fingerprint": "my_fingerprint",
         *       //   "name": "my_name",
         *       //   "path": "my_path",
         *       //   "shareData": false,
         *       //   "tagManagerUrl": "my_tagManagerUrl"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "fingerprint": "my_fingerprint",
         *   //   "name": "my_name",
         *   //   "path": "my_path",
         *   //   "shareData": false,
         *   //   "tagManagerUrl": "my_tagManagerUrl"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Update, options?: MethodOptions): GaxiosPromise<Schema$Account>;
        update(params: Params$Resource$Accounts$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Update, options: MethodOptions | BodyResponseCallback<Schema$Account>, callback: BodyResponseCallback<Schema$Account>): void;
        update(params: Params$Resource$Accounts$Update, callback: BodyResponseCallback<Schema$Account>): void;
        update(callback: BodyResponseCallback<Schema$Account>): void;
    }
    export interface Params$Resource$Accounts$Get extends StandardParameters {
        /**
         * GTM Accounts's API relative path. Example: accounts/{account_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$List extends StandardParameters {
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
    }
    export interface Params$Resource$Accounts$Update extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the account in storage.
         */
        fingerprint?: string;
        /**
         * GTM Accounts's API relative path. Example: accounts/{account_id\}
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Account;
    }
    export class Resource$Accounts$Containers {
        context: APIRequestContext;
        environments: Resource$Accounts$Containers$Environments;
        versions: Resource$Accounts$Containers$Versions;
        version_headers: Resource$Accounts$Containers$Version_headers;
        workspaces: Resource$Accounts$Containers$Workspaces;
        constructor(context: APIRequestContext);
        /**
         * Creates a Container.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.create({
         *     // GTM Account's API relative path. Example: accounts/{account_id\}.
         *     parent: 'accounts/my-account',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "accountId": "my_accountId",
         *       //   "containerId": "my_containerId",
         *       //   "domainName": [],
         *       //   "fingerprint": "my_fingerprint",
         *       //   "name": "my_name",
         *       //   "notes": "my_notes",
         *       //   "path": "my_path",
         *       //   "publicId": "my_publicId",
         *       //   "tagManagerUrl": "my_tagManagerUrl",
         *       //   "usageContext": []
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "containerId": "my_containerId",
         *   //   "domainName": [],
         *   //   "fingerprint": "my_fingerprint",
         *   //   "name": "my_name",
         *   //   "notes": "my_notes",
         *   //   "path": "my_path",
         *   //   "publicId": "my_publicId",
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "usageContext": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Accounts$Containers$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Containers$Create, options?: MethodOptions): GaxiosPromise<Schema$Container>;
        create(params: Params$Resource$Accounts$Containers$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Containers$Create, options: MethodOptions | BodyResponseCallback<Schema$Container>, callback: BodyResponseCallback<Schema$Container>): void;
        create(params: Params$Resource$Accounts$Containers$Create, callback: BodyResponseCallback<Schema$Container>): void;
        create(callback: BodyResponseCallback<Schema$Container>): void;
        /**
         * Deletes a Container.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.delete.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.delete({
         *     // GTM Container's API relative path. Example: accounts/{account_id\}/containers/{container_id\}
         *     path: 'accounts/my-account/containers/my-container',
         *   });
         *   console.log(res.data);
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Containers$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Containers$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Containers$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a Container.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containers',
         *       'https://www.googleapis.com/auth/tagmanager.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.get({
         *     // GTM Container's API relative path. Example: accounts/{account_id\}/containers/{container_id\}
         *     path: 'accounts/my-account/containers/my-container',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "containerId": "my_containerId",
         *   //   "domainName": [],
         *   //   "fingerprint": "my_fingerprint",
         *   //   "name": "my_name",
         *   //   "notes": "my_notes",
         *   //   "path": "my_path",
         *   //   "publicId": "my_publicId",
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "usageContext": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Containers$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Containers$Get, options?: MethodOptions): GaxiosPromise<Schema$Container>;
        get(params: Params$Resource$Accounts$Containers$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Containers$Get, options: MethodOptions | BodyResponseCallback<Schema$Container>, callback: BodyResponseCallback<Schema$Container>): void;
        get(params: Params$Resource$Accounts$Containers$Get, callback: BodyResponseCallback<Schema$Container>): void;
        get(callback: BodyResponseCallback<Schema$Container>): void;
        /**
         * Lists all Containers that belongs to a GTM Account.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containers',
         *       'https://www.googleapis.com/auth/tagmanager.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.list({
         *     // Continuation token for fetching the next page of results.
         *     pageToken: 'placeholder-value',
         *     // GTM Accounts's API relative path. Example: accounts/{account_id\}.
         *     parent: 'accounts/my-account',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "container": [],
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$List, options?: MethodOptions): GaxiosPromise<Schema$ListContainersResponse>;
        list(params: Params$Resource$Accounts$Containers$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$List, options: MethodOptions | BodyResponseCallback<Schema$ListContainersResponse>, callback: BodyResponseCallback<Schema$ListContainersResponse>): void;
        list(params: Params$Resource$Accounts$Containers$List, callback: BodyResponseCallback<Schema$ListContainersResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListContainersResponse>): void;
        /**
         * Updates a Container.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.update({
         *     // When provided, this fingerprint must match the fingerprint of the container in storage.
         *     fingerprint: 'placeholder-value',
         *     // GTM Container's API relative path. Example: accounts/{account_id\}/containers/{container_id\}
         *     path: 'accounts/my-account/containers/my-container',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "accountId": "my_accountId",
         *       //   "containerId": "my_containerId",
         *       //   "domainName": [],
         *       //   "fingerprint": "my_fingerprint",
         *       //   "name": "my_name",
         *       //   "notes": "my_notes",
         *       //   "path": "my_path",
         *       //   "publicId": "my_publicId",
         *       //   "tagManagerUrl": "my_tagManagerUrl",
         *       //   "usageContext": []
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "containerId": "my_containerId",
         *   //   "domainName": [],
         *   //   "fingerprint": "my_fingerprint",
         *   //   "name": "my_name",
         *   //   "notes": "my_notes",
         *   //   "path": "my_path",
         *   //   "publicId": "my_publicId",
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "usageContext": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Containers$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Containers$Update, options?: MethodOptions): GaxiosPromise<Schema$Container>;
        update(params: Params$Resource$Accounts$Containers$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Containers$Update, options: MethodOptions | BodyResponseCallback<Schema$Container>, callback: BodyResponseCallback<Schema$Container>): void;
        update(params: Params$Resource$Accounts$Containers$Update, callback: BodyResponseCallback<Schema$Container>): void;
        update(callback: BodyResponseCallback<Schema$Container>): void;
    }
    export interface Params$Resource$Accounts$Containers$Create extends StandardParameters {
        /**
         * GTM Account's API relative path. Example: accounts/{account_id\}.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Container;
    }
    export interface Params$Resource$Accounts$Containers$Delete extends StandardParameters {
        /**
         * GTM Container's API relative path. Example: accounts/{account_id\}/containers/{container_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Get extends StandardParameters {
        /**
         * GTM Container's API relative path. Example: accounts/{account_id\}/containers/{container_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$List extends StandardParameters {
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * GTM Accounts's API relative path. Example: accounts/{account_id\}.
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$Containers$Update extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the container in storage.
         */
        fingerprint?: string;
        /**
         * GTM Container's API relative path. Example: accounts/{account_id\}/containers/{container_id\}
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Container;
    }
    export class Resource$Accounts$Containers$Environments {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a GTM Environment.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.environments.create({
         *     // GTM Container's API relative path. Example: accounts/{account_id\}/containers/{container_id\}
         *     parent: 'accounts/my-account/containers/my-container',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "accountId": "my_accountId",
         *       //   "authorizationCode": "my_authorizationCode",
         *       //   "authorizationTimestamp": "my_authorizationTimestamp",
         *       //   "containerId": "my_containerId",
         *       //   "containerVersionId": "my_containerVersionId",
         *       //   "description": "my_description",
         *       //   "enableDebug": false,
         *       //   "environmentId": "my_environmentId",
         *       //   "fingerprint": "my_fingerprint",
         *       //   "name": "my_name",
         *       //   "path": "my_path",
         *       //   "tagManagerUrl": "my_tagManagerUrl",
         *       //   "type": "my_type",
         *       //   "url": "my_url",
         *       //   "workspaceId": "my_workspaceId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "authorizationCode": "my_authorizationCode",
         *   //   "authorizationTimestamp": "my_authorizationTimestamp",
         *   //   "containerId": "my_containerId",
         *   //   "containerVersionId": "my_containerVersionId",
         *   //   "description": "my_description",
         *   //   "enableDebug": false,
         *   //   "environmentId": "my_environmentId",
         *   //   "fingerprint": "my_fingerprint",
         *   //   "name": "my_name",
         *   //   "path": "my_path",
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "type": "my_type",
         *   //   "url": "my_url",
         *   //   "workspaceId": "my_workspaceId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Accounts$Containers$Environments$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Containers$Environments$Create, options?: MethodOptions): GaxiosPromise<Schema$Environment>;
        create(params: Params$Resource$Accounts$Containers$Environments$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Containers$Environments$Create, options: MethodOptions | BodyResponseCallback<Schema$Environment>, callback: BodyResponseCallback<Schema$Environment>): void;
        create(params: Params$Resource$Accounts$Containers$Environments$Create, callback: BodyResponseCallback<Schema$Environment>): void;
        create(callback: BodyResponseCallback<Schema$Environment>): void;
        /**
         * Deletes a GTM Environment.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.environments.delete({
         *     // GTM Environment's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/environments/{environment_id\}
         *     path: 'accounts/my-account/containers/my-container/environments/my-environment',
         *   });
         *   console.log(res.data);
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Containers$Environments$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Containers$Environments$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Environments$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Containers$Environments$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Environments$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a GTM Environment.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containers',
         *       'https://www.googleapis.com/auth/tagmanager.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.environments.get({
         *     // GTM Environment's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/environments/{environment_id\}
         *     path: 'accounts/my-account/containers/my-container/environments/my-environment',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "authorizationCode": "my_authorizationCode",
         *   //   "authorizationTimestamp": "my_authorizationTimestamp",
         *   //   "containerId": "my_containerId",
         *   //   "containerVersionId": "my_containerVersionId",
         *   //   "description": "my_description",
         *   //   "enableDebug": false,
         *   //   "environmentId": "my_environmentId",
         *   //   "fingerprint": "my_fingerprint",
         *   //   "name": "my_name",
         *   //   "path": "my_path",
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "type": "my_type",
         *   //   "url": "my_url",
         *   //   "workspaceId": "my_workspaceId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Containers$Environments$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Containers$Environments$Get, options?: MethodOptions): GaxiosPromise<Schema$Environment>;
        get(params: Params$Resource$Accounts$Containers$Environments$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Containers$Environments$Get, options: MethodOptions | BodyResponseCallback<Schema$Environment>, callback: BodyResponseCallback<Schema$Environment>): void;
        get(params: Params$Resource$Accounts$Containers$Environments$Get, callback: BodyResponseCallback<Schema$Environment>): void;
        get(callback: BodyResponseCallback<Schema$Environment>): void;
        /**
         * Lists all GTM Environments of a GTM Container.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containers',
         *       'https://www.googleapis.com/auth/tagmanager.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.environments.list({
         *     // Continuation token for fetching the next page of results.
         *     pageToken: 'placeholder-value',
         *     // GTM Container's API relative path. Example: accounts/{account_id\}/containers/{container_id\}
         *     parent: 'accounts/my-account/containers/my-container',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "environment": [],
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Environments$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Environments$List, options?: MethodOptions): GaxiosPromise<Schema$ListEnvironmentsResponse>;
        list(params: Params$Resource$Accounts$Containers$Environments$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Environments$List, options: MethodOptions | BodyResponseCallback<Schema$ListEnvironmentsResponse>, callback: BodyResponseCallback<Schema$ListEnvironmentsResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Environments$List, callback: BodyResponseCallback<Schema$ListEnvironmentsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListEnvironmentsResponse>): void;
        /**
         * Re-generates the authorization code for a GTM Environment.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.publish'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.environments.reauthorize({
         *     // GTM Environment's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/environments/{environment_id\}
         *     path: 'accounts/my-account/containers/my-container/environments/my-environment',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "accountId": "my_accountId",
         *       //   "authorizationCode": "my_authorizationCode",
         *       //   "authorizationTimestamp": "my_authorizationTimestamp",
         *       //   "containerId": "my_containerId",
         *       //   "containerVersionId": "my_containerVersionId",
         *       //   "description": "my_description",
         *       //   "enableDebug": false,
         *       //   "environmentId": "my_environmentId",
         *       //   "fingerprint": "my_fingerprint",
         *       //   "name": "my_name",
         *       //   "path": "my_path",
         *       //   "tagManagerUrl": "my_tagManagerUrl",
         *       //   "type": "my_type",
         *       //   "url": "my_url",
         *       //   "workspaceId": "my_workspaceId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "authorizationCode": "my_authorizationCode",
         *   //   "authorizationTimestamp": "my_authorizationTimestamp",
         *   //   "containerId": "my_containerId",
         *   //   "containerVersionId": "my_containerVersionId",
         *   //   "description": "my_description",
         *   //   "enableDebug": false,
         *   //   "environmentId": "my_environmentId",
         *   //   "fingerprint": "my_fingerprint",
         *   //   "name": "my_name",
         *   //   "path": "my_path",
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "type": "my_type",
         *   //   "url": "my_url",
         *   //   "workspaceId": "my_workspaceId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        reauthorize(params: Params$Resource$Accounts$Containers$Environments$Reauthorize, options: StreamMethodOptions): GaxiosPromise<Readable>;
        reauthorize(params?: Params$Resource$Accounts$Containers$Environments$Reauthorize, options?: MethodOptions): GaxiosPromise<Schema$Environment>;
        reauthorize(params: Params$Resource$Accounts$Containers$Environments$Reauthorize, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        reauthorize(params: Params$Resource$Accounts$Containers$Environments$Reauthorize, options: MethodOptions | BodyResponseCallback<Schema$Environment>, callback: BodyResponseCallback<Schema$Environment>): void;
        reauthorize(params: Params$Resource$Accounts$Containers$Environments$Reauthorize, callback: BodyResponseCallback<Schema$Environment>): void;
        reauthorize(callback: BodyResponseCallback<Schema$Environment>): void;
        /**
         * Updates a GTM Environment.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.environments.update({
         *     // When provided, this fingerprint must match the fingerprint of the environment in storage.
         *     fingerprint: 'placeholder-value',
         *     // GTM Environment's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/environments/{environment_id\}
         *     path: 'accounts/my-account/containers/my-container/environments/my-environment',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "accountId": "my_accountId",
         *       //   "authorizationCode": "my_authorizationCode",
         *       //   "authorizationTimestamp": "my_authorizationTimestamp",
         *       //   "containerId": "my_containerId",
         *       //   "containerVersionId": "my_containerVersionId",
         *       //   "description": "my_description",
         *       //   "enableDebug": false,
         *       //   "environmentId": "my_environmentId",
         *       //   "fingerprint": "my_fingerprint",
         *       //   "name": "my_name",
         *       //   "path": "my_path",
         *       //   "tagManagerUrl": "my_tagManagerUrl",
         *       //   "type": "my_type",
         *       //   "url": "my_url",
         *       //   "workspaceId": "my_workspaceId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "authorizationCode": "my_authorizationCode",
         *   //   "authorizationTimestamp": "my_authorizationTimestamp",
         *   //   "containerId": "my_containerId",
         *   //   "containerVersionId": "my_containerVersionId",
         *   //   "description": "my_description",
         *   //   "enableDebug": false,
         *   //   "environmentId": "my_environmentId",
         *   //   "fingerprint": "my_fingerprint",
         *   //   "name": "my_name",
         *   //   "path": "my_path",
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "type": "my_type",
         *   //   "url": "my_url",
         *   //   "workspaceId": "my_workspaceId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Containers$Environments$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Containers$Environments$Update, options?: MethodOptions): GaxiosPromise<Schema$Environment>;
        update(params: Params$Resource$Accounts$Containers$Environments$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Containers$Environments$Update, options: MethodOptions | BodyResponseCallback<Schema$Environment>, callback: BodyResponseCallback<Schema$Environment>): void;
        update(params: Params$Resource$Accounts$Containers$Environments$Update, callback: BodyResponseCallback<Schema$Environment>): void;
        update(callback: BodyResponseCallback<Schema$Environment>): void;
    }
    export interface Params$Resource$Accounts$Containers$Environments$Create extends StandardParameters {
        /**
         * GTM Container's API relative path. Example: accounts/{account_id\}/containers/{container_id\}
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Environment;
    }
    export interface Params$Resource$Accounts$Containers$Environments$Delete extends StandardParameters {
        /**
         * GTM Environment's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/environments/{environment_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Environments$Get extends StandardParameters {
        /**
         * GTM Environment's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/environments/{environment_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Environments$List extends StandardParameters {
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * GTM Container's API relative path. Example: accounts/{account_id\}/containers/{container_id\}
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$Containers$Environments$Reauthorize extends StandardParameters {
        /**
         * GTM Environment's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/environments/{environment_id\}
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Environment;
    }
    export interface Params$Resource$Accounts$Containers$Environments$Update extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the environment in storage.
         */
        fingerprint?: string;
        /**
         * GTM Environment's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/environments/{environment_id\}
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Environment;
    }
    export class Resource$Accounts$Containers$Versions {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Deletes a Container Version.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containerversions',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.versions.delete({
         *     // GTM ContainerVersion's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/versions/{version_id\}
         *     path: 'accounts/my-account/containers/my-container/versions/my-version',
         *   });
         *   console.log(res.data);
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Containers$Versions$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Containers$Versions$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Versions$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Containers$Versions$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Versions$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a Container Version.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containers',
         *       'https://www.googleapis.com/auth/tagmanager.edit.containerversions',
         *       'https://www.googleapis.com/auth/tagmanager.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.versions.get({
         *     // The GTM ContainerVersion ID. Specify published to retrieve the currently published version.
         *     containerVersionId: 'placeholder-value',
         *     // GTM ContainerVersion's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/versions/{version_id\}
         *     path: 'accounts/my-account/containers/my-container/versions/my-version',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "builtInVariable": [],
         *   //   "client": [],
         *   //   "container": {},
         *   //   "containerId": "my_containerId",
         *   //   "containerVersionId": "my_containerVersionId",
         *   //   "customTemplate": [],
         *   //   "deleted": false,
         *   //   "description": "my_description",
         *   //   "fingerprint": "my_fingerprint",
         *   //   "folder": [],
         *   //   "name": "my_name",
         *   //   "path": "my_path",
         *   //   "tag": [],
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "trigger": [],
         *   //   "variable": [],
         *   //   "zone": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Containers$Versions$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Containers$Versions$Get, options?: MethodOptions): GaxiosPromise<Schema$ContainerVersion>;
        get(params: Params$Resource$Accounts$Containers$Versions$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Containers$Versions$Get, options: MethodOptions | BodyResponseCallback<Schema$ContainerVersion>, callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        get(params: Params$Resource$Accounts$Containers$Versions$Get, callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        get(callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        /**
         * Gets the live (i.e. published) container version
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containers',
         *       'https://www.googleapis.com/auth/tagmanager.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.versions.live({
         *     // GTM Container's API relative path. Example: accounts/{account_id\}/containers/{container_id\}
         *     parent: 'accounts/my-account/containers/my-container',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "builtInVariable": [],
         *   //   "client": [],
         *   //   "container": {},
         *   //   "containerId": "my_containerId",
         *   //   "containerVersionId": "my_containerVersionId",
         *   //   "customTemplate": [],
         *   //   "deleted": false,
         *   //   "description": "my_description",
         *   //   "fingerprint": "my_fingerprint",
         *   //   "folder": [],
         *   //   "name": "my_name",
         *   //   "path": "my_path",
         *   //   "tag": [],
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "trigger": [],
         *   //   "variable": [],
         *   //   "zone": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        live(params: Params$Resource$Accounts$Containers$Versions$Live, options: StreamMethodOptions): GaxiosPromise<Readable>;
        live(params?: Params$Resource$Accounts$Containers$Versions$Live, options?: MethodOptions): GaxiosPromise<Schema$ContainerVersion>;
        live(params: Params$Resource$Accounts$Containers$Versions$Live, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        live(params: Params$Resource$Accounts$Containers$Versions$Live, options: MethodOptions | BodyResponseCallback<Schema$ContainerVersion>, callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        live(params: Params$Resource$Accounts$Containers$Versions$Live, callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        live(callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        /**
         * Publishes a Container Version.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.publish'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.versions.publish({
         *     // When provided, this fingerprint must match the fingerprint of the container version in storage.
         *     fingerprint: 'placeholder-value',
         *     // GTM ContainerVersion's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/versions/{version_id\}
         *     path: 'accounts/my-account/containers/my-container/versions/my-version',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "compilerError": false,
         *   //   "containerVersion": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        publish(params: Params$Resource$Accounts$Containers$Versions$Publish, options: StreamMethodOptions): GaxiosPromise<Readable>;
        publish(params?: Params$Resource$Accounts$Containers$Versions$Publish, options?: MethodOptions): GaxiosPromise<Schema$PublishContainerVersionResponse>;
        publish(params: Params$Resource$Accounts$Containers$Versions$Publish, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        publish(params: Params$Resource$Accounts$Containers$Versions$Publish, options: MethodOptions | BodyResponseCallback<Schema$PublishContainerVersionResponse>, callback: BodyResponseCallback<Schema$PublishContainerVersionResponse>): void;
        publish(params: Params$Resource$Accounts$Containers$Versions$Publish, callback: BodyResponseCallback<Schema$PublishContainerVersionResponse>): void;
        publish(callback: BodyResponseCallback<Schema$PublishContainerVersionResponse>): void;
        /**
         * Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.versions.set_latest({
         *     // GTM ContainerVersion's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/versions/{version_id\}
         *     path: 'accounts/my-account/containers/my-container/versions/my-version',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "builtInVariable": [],
         *   //   "client": [],
         *   //   "container": {},
         *   //   "containerId": "my_containerId",
         *   //   "containerVersionId": "my_containerVersionId",
         *   //   "customTemplate": [],
         *   //   "deleted": false,
         *   //   "description": "my_description",
         *   //   "fingerprint": "my_fingerprint",
         *   //   "folder": [],
         *   //   "name": "my_name",
         *   //   "path": "my_path",
         *   //   "tag": [],
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "trigger": [],
         *   //   "variable": [],
         *   //   "zone": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        set_latest(params: Params$Resource$Accounts$Containers$Versions$Set_latest, options: StreamMethodOptions): GaxiosPromise<Readable>;
        set_latest(params?: Params$Resource$Accounts$Containers$Versions$Set_latest, options?: MethodOptions): GaxiosPromise<Schema$ContainerVersion>;
        set_latest(params: Params$Resource$Accounts$Containers$Versions$Set_latest, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        set_latest(params: Params$Resource$Accounts$Containers$Versions$Set_latest, options: MethodOptions | BodyResponseCallback<Schema$ContainerVersion>, callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        set_latest(params: Params$Resource$Accounts$Containers$Versions$Set_latest, callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        set_latest(callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        /**
         * Undeletes a Container Version.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containerversions',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.versions.undelete({
         *     // GTM ContainerVersion's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/versions/{version_id\}
         *     path: 'accounts/my-account/containers/my-container/versions/my-version',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "builtInVariable": [],
         *   //   "client": [],
         *   //   "container": {},
         *   //   "containerId": "my_containerId",
         *   //   "containerVersionId": "my_containerVersionId",
         *   //   "customTemplate": [],
         *   //   "deleted": false,
         *   //   "description": "my_description",
         *   //   "fingerprint": "my_fingerprint",
         *   //   "folder": [],
         *   //   "name": "my_name",
         *   //   "path": "my_path",
         *   //   "tag": [],
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "trigger": [],
         *   //   "variable": [],
         *   //   "zone": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        undelete(params: Params$Resource$Accounts$Containers$Versions$Undelete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        undelete(params?: Params$Resource$Accounts$Containers$Versions$Undelete, options?: MethodOptions): GaxiosPromise<Schema$ContainerVersion>;
        undelete(params: Params$Resource$Accounts$Containers$Versions$Undelete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        undelete(params: Params$Resource$Accounts$Containers$Versions$Undelete, options: MethodOptions | BodyResponseCallback<Schema$ContainerVersion>, callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        undelete(params: Params$Resource$Accounts$Containers$Versions$Undelete, callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        undelete(callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        /**
         * Updates a Container Version.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containerversions',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.versions.update({
         *     // When provided, this fingerprint must match the fingerprint of the container version in storage.
         *     fingerprint: 'placeholder-value',
         *     // GTM ContainerVersion's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/versions/{version_id\}
         *     path: 'accounts/my-account/containers/my-container/versions/my-version',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "accountId": "my_accountId",
         *       //   "builtInVariable": [],
         *       //   "client": [],
         *       //   "container": {},
         *       //   "containerId": "my_containerId",
         *       //   "containerVersionId": "my_containerVersionId",
         *       //   "customTemplate": [],
         *       //   "deleted": false,
         *       //   "description": "my_description",
         *       //   "fingerprint": "my_fingerprint",
         *       //   "folder": [],
         *       //   "name": "my_name",
         *       //   "path": "my_path",
         *       //   "tag": [],
         *       //   "tagManagerUrl": "my_tagManagerUrl",
         *       //   "trigger": [],
         *       //   "variable": [],
         *       //   "zone": []
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "builtInVariable": [],
         *   //   "client": [],
         *   //   "container": {},
         *   //   "containerId": "my_containerId",
         *   //   "containerVersionId": "my_containerVersionId",
         *   //   "customTemplate": [],
         *   //   "deleted": false,
         *   //   "description": "my_description",
         *   //   "fingerprint": "my_fingerprint",
         *   //   "folder": [],
         *   //   "name": "my_name",
         *   //   "path": "my_path",
         *   //   "tag": [],
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "trigger": [],
         *   //   "variable": [],
         *   //   "zone": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Containers$Versions$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Containers$Versions$Update, options?: MethodOptions): GaxiosPromise<Schema$ContainerVersion>;
        update(params: Params$Resource$Accounts$Containers$Versions$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Containers$Versions$Update, options: MethodOptions | BodyResponseCallback<Schema$ContainerVersion>, callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        update(params: Params$Resource$Accounts$Containers$Versions$Update, callback: BodyResponseCallback<Schema$ContainerVersion>): void;
        update(callback: BodyResponseCallback<Schema$ContainerVersion>): void;
    }
    export interface Params$Resource$Accounts$Containers$Versions$Delete extends StandardParameters {
        /**
         * GTM ContainerVersion's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/versions/{version_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Versions$Get extends StandardParameters {
        /**
         * The GTM ContainerVersion ID. Specify published to retrieve the currently published version.
         */
        containerVersionId?: string;
        /**
         * GTM ContainerVersion's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/versions/{version_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Versions$Live extends StandardParameters {
        /**
         * GTM Container's API relative path. Example: accounts/{account_id\}/containers/{container_id\}
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$Containers$Versions$Publish extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the container version in storage.
         */
        fingerprint?: string;
        /**
         * GTM ContainerVersion's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/versions/{version_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Versions$Set_latest extends StandardParameters {
        /**
         * GTM ContainerVersion's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/versions/{version_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Versions$Undelete extends StandardParameters {
        /**
         * GTM ContainerVersion's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/versions/{version_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Versions$Update extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the container version in storage.
         */
        fingerprint?: string;
        /**
         * GTM ContainerVersion's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/versions/{version_id\}
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ContainerVersion;
    }
    export class Resource$Accounts$Containers$Version_headers {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets the latest container version header
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containers',
         *       'https://www.googleapis.com/auth/tagmanager.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.version_headers.latest({
         *     // GTM Container's API relative path. Example: accounts/{account_id\}/containers/{container_id\}
         *     parent: 'accounts/my-account/containers/my-container',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "containerId": "my_containerId",
         *   //   "containerVersionId": "my_containerVersionId",
         *   //   "deleted": false,
         *   //   "name": "my_name",
         *   //   "numClients": "my_numClients",
         *   //   "numCustomTemplates": "my_numCustomTemplates",
         *   //   "numMacros": "my_numMacros",
         *   //   "numRules": "my_numRules",
         *   //   "numTags": "my_numTags",
         *   //   "numTriggers": "my_numTriggers",
         *   //   "numVariables": "my_numVariables",
         *   //   "numZones": "my_numZones",
         *   //   "path": "my_path"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        latest(params: Params$Resource$Accounts$Containers$Version_headers$Latest, options: StreamMethodOptions): GaxiosPromise<Readable>;
        latest(params?: Params$Resource$Accounts$Containers$Version_headers$Latest, options?: MethodOptions): GaxiosPromise<Schema$ContainerVersionHeader>;
        latest(params: Params$Resource$Accounts$Containers$Version_headers$Latest, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        latest(params: Params$Resource$Accounts$Containers$Version_headers$Latest, options: MethodOptions | BodyResponseCallback<Schema$ContainerVersionHeader>, callback: BodyResponseCallback<Schema$ContainerVersionHeader>): void;
        latest(params: Params$Resource$Accounts$Containers$Version_headers$Latest, callback: BodyResponseCallback<Schema$ContainerVersionHeader>): void;
        latest(callback: BodyResponseCallback<Schema$ContainerVersionHeader>): void;
        /**
         * Lists all Container Versions of a GTM Container.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containers',
         *       'https://www.googleapis.com/auth/tagmanager.edit.containerversions',
         *       'https://www.googleapis.com/auth/tagmanager.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.version_headers.list({
         *     // Also retrieve deleted (archived) versions when true.
         *     includeDeleted: 'placeholder-value',
         *     // Continuation token for fetching the next page of results.
         *     pageToken: 'placeholder-value',
         *     // GTM Container's API relative path. Example: accounts/{account_id\}/containers/{container_id\}
         *     parent: 'accounts/my-account/containers/my-container',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "containerVersionHeader": [],
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Version_headers$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Version_headers$List, options?: MethodOptions): GaxiosPromise<Schema$ListContainerVersionsResponse>;
        list(params: Params$Resource$Accounts$Containers$Version_headers$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Version_headers$List, options: MethodOptions | BodyResponseCallback<Schema$ListContainerVersionsResponse>, callback: BodyResponseCallback<Schema$ListContainerVersionsResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Version_headers$List, callback: BodyResponseCallback<Schema$ListContainerVersionsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListContainerVersionsResponse>): void;
    }
    export interface Params$Resource$Accounts$Containers$Version_headers$Latest extends StandardParameters {
        /**
         * GTM Container's API relative path. Example: accounts/{account_id\}/containers/{container_id\}
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$Containers$Version_headers$List extends StandardParameters {
        /**
         * Also retrieve deleted (archived) versions when true.
         */
        includeDeleted?: boolean;
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * GTM Container's API relative path. Example: accounts/{account_id\}/containers/{container_id\}
         */
        parent?: string;
    }
    export class Resource$Accounts$Containers$Workspaces {
        context: APIRequestContext;
        built_in_variables: Resource$Accounts$Containers$Workspaces$Built_in_variables;
        clients: Resource$Accounts$Containers$Workspaces$Clients;
        folders: Resource$Accounts$Containers$Workspaces$Folders;
        tags: Resource$Accounts$Containers$Workspaces$Tags;
        templates: Resource$Accounts$Containers$Workspaces$Templates;
        triggers: Resource$Accounts$Containers$Workspaces$Triggers;
        variables: Resource$Accounts$Containers$Workspaces$Variables;
        zones: Resource$Accounts$Containers$Workspaces$Zones;
        constructor(context: APIRequestContext);
        /**
         * Creates a Workspace.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.create({
         *     // GTM parent Container's API relative path. Example: accounts/{account_id\}/containers/{container_id\}
         *     parent: 'accounts/my-account/containers/my-container',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "accountId": "my_accountId",
         *       //   "containerId": "my_containerId",
         *       //   "description": "my_description",
         *       //   "fingerprint": "my_fingerprint",
         *       //   "name": "my_name",
         *       //   "path": "my_path",
         *       //   "tagManagerUrl": "my_tagManagerUrl",
         *       //   "workspaceId": "my_workspaceId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "containerId": "my_containerId",
         *   //   "description": "my_description",
         *   //   "fingerprint": "my_fingerprint",
         *   //   "name": "my_name",
         *   //   "path": "my_path",
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "workspaceId": "my_workspaceId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Accounts$Containers$Workspaces$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Containers$Workspaces$Create, options?: MethodOptions): GaxiosPromise<Schema$Workspace>;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Create, options: MethodOptions | BodyResponseCallback<Schema$Workspace>, callback: BodyResponseCallback<Schema$Workspace>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Create, callback: BodyResponseCallback<Schema$Workspace>): void;
        create(callback: BodyResponseCallback<Schema$Workspace>): void;
        /**
         * Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containerversions',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.create_version({
         *     // GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "name": "my_name",
         *       //   "notes": "my_notes"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "compilerError": false,
         *   //   "containerVersion": {},
         *   //   "newWorkspacePath": "my_newWorkspacePath",
         *   //   "syncStatus": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create_version(params: Params$Resource$Accounts$Containers$Workspaces$Create_version, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create_version(params?: Params$Resource$Accounts$Containers$Workspaces$Create_version, options?: MethodOptions): GaxiosPromise<Schema$CreateContainerVersionResponse>;
        create_version(params: Params$Resource$Accounts$Containers$Workspaces$Create_version, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create_version(params: Params$Resource$Accounts$Containers$Workspaces$Create_version, options: MethodOptions | BodyResponseCallback<Schema$CreateContainerVersionResponse>, callback: BodyResponseCallback<Schema$CreateContainerVersionResponse>): void;
        create_version(params: Params$Resource$Accounts$Containers$Workspaces$Create_version, callback: BodyResponseCallback<Schema$CreateContainerVersionResponse>): void;
        create_version(callback: BodyResponseCallback<Schema$CreateContainerVersionResponse>): void;
        /**
         * Deletes a Workspace.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.delete.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.delete({
         *     // GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace',
         *   });
         *   console.log(res.data);
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Containers$Workspaces$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a Workspace.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containers',
         *       'https://www.googleapis.com/auth/tagmanager.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.get({
         *     // GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "containerId": "my_containerId",
         *   //   "description": "my_description",
         *   //   "fingerprint": "my_fingerprint",
         *   //   "name": "my_name",
         *   //   "path": "my_path",
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "workspaceId": "my_workspaceId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Containers$Workspaces$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Containers$Workspaces$Get, options?: MethodOptions): GaxiosPromise<Schema$Workspace>;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Get, options: MethodOptions | BodyResponseCallback<Schema$Workspace>, callback: BodyResponseCallback<Schema$Workspace>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Get, callback: BodyResponseCallback<Schema$Workspace>): void;
        get(callback: BodyResponseCallback<Schema$Workspace>): void;
        /**
         * Finds conflicting and modified entities in the workspace.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containers',
         *       'https://www.googleapis.com/auth/tagmanager.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.getStatus({
         *     // GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "mergeConflict": [],
         *   //   "workspaceChange": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getStatus(params: Params$Resource$Accounts$Containers$Workspaces$Getstatus, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getStatus(params?: Params$Resource$Accounts$Containers$Workspaces$Getstatus, options?: MethodOptions): GaxiosPromise<Schema$GetWorkspaceStatusResponse>;
        getStatus(params: Params$Resource$Accounts$Containers$Workspaces$Getstatus, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getStatus(params: Params$Resource$Accounts$Containers$Workspaces$Getstatus, options: MethodOptions | BodyResponseCallback<Schema$GetWorkspaceStatusResponse>, callback: BodyResponseCallback<Schema$GetWorkspaceStatusResponse>): void;
        getStatus(params: Params$Resource$Accounts$Containers$Workspaces$Getstatus, callback: BodyResponseCallback<Schema$GetWorkspaceStatusResponse>): void;
        getStatus(callback: BodyResponseCallback<Schema$GetWorkspaceStatusResponse>): void;
        /**
         * Lists all Workspaces that belong to a GTM Container.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containers',
         *       'https://www.googleapis.com/auth/tagmanager.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.list({
         *     // Continuation token for fetching the next page of results.
         *     pageToken: 'placeholder-value',
         *     // GTM parent Container's API relative path. Example: accounts/{account_id\}/containers/{container_id\}
         *     parent: 'accounts/my-account/containers/my-container',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "workspace": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Workspaces$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Workspaces$List, options?: MethodOptions): GaxiosPromise<Schema$ListWorkspacesResponse>;
        list(params: Params$Resource$Accounts$Containers$Workspaces$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$List, options: MethodOptions | BodyResponseCallback<Schema$ListWorkspacesResponse>, callback: BodyResponseCallback<Schema$ListWorkspacesResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$List, callback: BodyResponseCallback<Schema$ListWorkspacesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListWorkspacesResponse>): void;
        /**
         * Quick previews a workspace by creating a fake container version from all entities in the provided workspace.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containerversions',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.quick_preview({
         *     // GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "compilerError": false,
         *   //   "containerVersion": {},
         *   //   "syncStatus": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        quick_preview(params: Params$Resource$Accounts$Containers$Workspaces$Quick_preview, options: StreamMethodOptions): GaxiosPromise<Readable>;
        quick_preview(params?: Params$Resource$Accounts$Containers$Workspaces$Quick_preview, options?: MethodOptions): GaxiosPromise<Schema$QuickPreviewResponse>;
        quick_preview(params: Params$Resource$Accounts$Containers$Workspaces$Quick_preview, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        quick_preview(params: Params$Resource$Accounts$Containers$Workspaces$Quick_preview, options: MethodOptions | BodyResponseCallback<Schema$QuickPreviewResponse>, callback: BodyResponseCallback<Schema$QuickPreviewResponse>): void;
        quick_preview(params: Params$Resource$Accounts$Containers$Workspaces$Quick_preview, callback: BodyResponseCallback<Schema$QuickPreviewResponse>): void;
        quick_preview(callback: BodyResponseCallback<Schema$QuickPreviewResponse>): void;
        /**
         * Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.resolve_conflict({
         *     // When provided, this fingerprint must match the fingerprint of the entity_in_workspace in the merge conflict.
         *     fingerprint: 'placeholder-value',
         *     // GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "changeStatus": "my_changeStatus",
         *       //   "client": {},
         *       //   "folder": {},
         *       //   "tag": {},
         *       //   "trigger": {},
         *       //   "variable": {}
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        resolve_conflict(params: Params$Resource$Accounts$Containers$Workspaces$Resolve_conflict, options: StreamMethodOptions): GaxiosPromise<Readable>;
        resolve_conflict(params?: Params$Resource$Accounts$Containers$Workspaces$Resolve_conflict, options?: MethodOptions): GaxiosPromise<void>;
        resolve_conflict(params: Params$Resource$Accounts$Containers$Workspaces$Resolve_conflict, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        resolve_conflict(params: Params$Resource$Accounts$Containers$Workspaces$Resolve_conflict, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        resolve_conflict(params: Params$Resource$Accounts$Containers$Workspaces$Resolve_conflict, callback: BodyResponseCallback<void>): void;
        resolve_conflict(callback: BodyResponseCallback<void>): void;
        /**
         * Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.sync({
         *     // GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "mergeConflict": [],
         *   //   "syncStatus": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        sync(params: Params$Resource$Accounts$Containers$Workspaces$Sync, options: StreamMethodOptions): GaxiosPromise<Readable>;
        sync(params?: Params$Resource$Accounts$Containers$Workspaces$Sync, options?: MethodOptions): GaxiosPromise<Schema$SyncWorkspaceResponse>;
        sync(params: Params$Resource$Accounts$Containers$Workspaces$Sync, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        sync(params: Params$Resource$Accounts$Containers$Workspaces$Sync, options: MethodOptions | BodyResponseCallback<Schema$SyncWorkspaceResponse>, callback: BodyResponseCallback<Schema$SyncWorkspaceResponse>): void;
        sync(params: Params$Resource$Accounts$Containers$Workspaces$Sync, callback: BodyResponseCallback<Schema$SyncWorkspaceResponse>): void;
        sync(callback: BodyResponseCallback<Schema$SyncWorkspaceResponse>): void;
        /**
         * Updates a Workspace.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.update({
         *     // When provided, this fingerprint must match the fingerprint of the workspace in storage.
         *     fingerprint: 'placeholder-value',
         *     // GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "accountId": "my_accountId",
         *       //   "containerId": "my_containerId",
         *       //   "description": "my_description",
         *       //   "fingerprint": "my_fingerprint",
         *       //   "name": "my_name",
         *       //   "path": "my_path",
         *       //   "tagManagerUrl": "my_tagManagerUrl",
         *       //   "workspaceId": "my_workspaceId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "containerId": "my_containerId",
         *   //   "description": "my_description",
         *   //   "fingerprint": "my_fingerprint",
         *   //   "name": "my_name",
         *   //   "path": "my_path",
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "workspaceId": "my_workspaceId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Containers$Workspaces$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Containers$Workspaces$Update, options?: MethodOptions): GaxiosPromise<Schema$Workspace>;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Update, options: MethodOptions | BodyResponseCallback<Schema$Workspace>, callback: BodyResponseCallback<Schema$Workspace>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Update, callback: BodyResponseCallback<Schema$Workspace>): void;
        update(callback: BodyResponseCallback<Schema$Workspace>): void;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Create extends StandardParameters {
        /**
         * GTM parent Container's API relative path. Example: accounts/{account_id\}/containers/{container_id\}
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Workspace;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Create_version extends StandardParameters {
        /**
         * GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CreateContainerVersionRequestVersionOptions;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Delete extends StandardParameters {
        /**
         * GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Get extends StandardParameters {
        /**
         * GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Getstatus extends StandardParameters {
        /**
         * GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$List extends StandardParameters {
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * GTM parent Container's API relative path. Example: accounts/{account_id\}/containers/{container_id\}
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Quick_preview extends StandardParameters {
        /**
         * GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Resolve_conflict extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the entity_in_workspace in the merge conflict.
         */
        fingerprint?: string;
        /**
         * GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Entity;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Sync extends StandardParameters {
        /**
         * GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Update extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the workspace in storage.
         */
        fingerprint?: string;
        /**
         * GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Workspace;
    }
    export class Resource$Accounts$Containers$Workspaces$Built_in_variables {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates one or more GTM Built-In Variables.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await tagmanager.accounts.containers.workspaces.built_in_variables.create({
         *       // GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         *       parent:
         *         'accounts/my-account/containers/my-container/workspaces/my-workspace',
         *       // The types of built-in variables to enable.
         *       type: 'placeholder-value',
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "builtInVariable": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Create, options?: MethodOptions): GaxiosPromise<Schema$CreateBuiltInVariableResponse>;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Create, options: MethodOptions | BodyResponseCallback<Schema$CreateBuiltInVariableResponse>, callback: BodyResponseCallback<Schema$CreateBuiltInVariableResponse>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Create, callback: BodyResponseCallback<Schema$CreateBuiltInVariableResponse>): void;
        create(callback: BodyResponseCallback<Schema$CreateBuiltInVariableResponse>): void;
        /**
         * Deletes one or more GTM Built-In Variables.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await tagmanager.accounts.containers.workspaces.built_in_variables.delete({
         *       // GTM BuiltInVariable's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/built_in_variables
         *       path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/built_in_variables',
         *       // The types of built-in variables to delete.
         *       type: 'placeholder-value',
         *     });
         *   console.log(res.data);
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Lists all the enabled Built-In Variables of a GTM Container.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containers',
         *       'https://www.googleapis.com/auth/tagmanager.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await tagmanager.accounts.containers.workspaces.built_in_variables.list({
         *       // Continuation token for fetching the next page of results.
         *       pageToken: 'placeholder-value',
         *       // GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         *       parent:
         *         'accounts/my-account/containers/my-container/workspaces/my-workspace',
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "builtInVariable": [],
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$List, options?: MethodOptions): GaxiosPromise<Schema$ListEnabledBuiltInVariablesResponse>;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$List, options: MethodOptions | BodyResponseCallback<Schema$ListEnabledBuiltInVariablesResponse>, callback: BodyResponseCallback<Schema$ListEnabledBuiltInVariablesResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$List, callback: BodyResponseCallback<Schema$ListEnabledBuiltInVariablesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListEnabledBuiltInVariablesResponse>): void;
        /**
         * Reverts changes to a GTM Built-In Variables in a GTM Workspace.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await tagmanager.accounts.containers.workspaces.built_in_variables.revert({
         *       // GTM BuiltInVariable's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/built_in_variables
         *       path: 'accounts/my-account/containers/my-container/workspaces/my-workspace',
         *       // The type of built-in variable to revert.
         *       type: 'placeholder-value',
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "enabled": false
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Revert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        revert(params?: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Revert, options?: MethodOptions): GaxiosPromise<Schema$RevertBuiltInVariableResponse>;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Revert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Revert, options: MethodOptions | BodyResponseCallback<Schema$RevertBuiltInVariableResponse>, callback: BodyResponseCallback<Schema$RevertBuiltInVariableResponse>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Revert, callback: BodyResponseCallback<Schema$RevertBuiltInVariableResponse>): void;
        revert(callback: BodyResponseCallback<Schema$RevertBuiltInVariableResponse>): void;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Create extends StandardParameters {
        /**
         * GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         */
        parent?: string;
        /**
         * The types of built-in variables to enable.
         */
        type?: string[];
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Delete extends StandardParameters {
        /**
         * GTM BuiltInVariable's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/built_in_variables
         */
        path?: string;
        /**
         * The types of built-in variables to delete.
         */
        type?: string[];
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$List extends StandardParameters {
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Built_in_variables$Revert extends StandardParameters {
        /**
         * GTM BuiltInVariable's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/built_in_variables
         */
        path?: string;
        /**
         * The type of built-in variable to revert.
         */
        type?: string;
    }
    export class Resource$Accounts$Containers$Workspaces$Clients {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a GTM Client.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.clients.create({
         *     // GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         *     parent:
         *       'accounts/my-account/containers/my-container/workspaces/my-workspace',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "accountId": "my_accountId",
         *       //   "clientId": "my_clientId",
         *       //   "containerId": "my_containerId",
         *       //   "fingerprint": "my_fingerprint",
         *       //   "name": "my_name",
         *       //   "notes": "my_notes",
         *       //   "parameter": [],
         *       //   "parentFolderId": "my_parentFolderId",
         *       //   "path": "my_path",
         *       //   "priority": 0,
         *       //   "tagManagerUrl": "my_tagManagerUrl",
         *       //   "type": "my_type",
         *       //   "workspaceId": "my_workspaceId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "clientId": "my_clientId",
         *   //   "containerId": "my_containerId",
         *   //   "fingerprint": "my_fingerprint",
         *   //   "name": "my_name",
         *   //   "notes": "my_notes",
         *   //   "parameter": [],
         *   //   "parentFolderId": "my_parentFolderId",
         *   //   "path": "my_path",
         *   //   "priority": 0,
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "type": "my_type",
         *   //   "workspaceId": "my_workspaceId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Containers$Workspaces$Clients$Create, options?: MethodOptions): GaxiosPromise<Schema$Client>;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Create, options: MethodOptions | BodyResponseCallback<Schema$Client>, callback: BodyResponseCallback<Schema$Client>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Create, callback: BodyResponseCallback<Schema$Client>): void;
        create(callback: BodyResponseCallback<Schema$Client>): void;
        /**
         * Deletes a GTM Client.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.clients.delete({
         *     // GTM Client's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/clients/{client_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/clients/my-client',
         *   });
         *   console.log(res.data);
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Containers$Workspaces$Clients$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a GTM Client.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containers',
         *       'https://www.googleapis.com/auth/tagmanager.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.clients.get({
         *     // GTM Client's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/clients/{client_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/clients/my-client',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "clientId": "my_clientId",
         *   //   "containerId": "my_containerId",
         *   //   "fingerprint": "my_fingerprint",
         *   //   "name": "my_name",
         *   //   "notes": "my_notes",
         *   //   "parameter": [],
         *   //   "parentFolderId": "my_parentFolderId",
         *   //   "path": "my_path",
         *   //   "priority": 0,
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "type": "my_type",
         *   //   "workspaceId": "my_workspaceId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Containers$Workspaces$Clients$Get, options?: MethodOptions): GaxiosPromise<Schema$Client>;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Get, options: MethodOptions | BodyResponseCallback<Schema$Client>, callback: BodyResponseCallback<Schema$Client>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Get, callback: BodyResponseCallback<Schema$Client>): void;
        get(callback: BodyResponseCallback<Schema$Client>): void;
        /**
         * Lists all GTM Clients of a GTM container workspace.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containers',
         *       'https://www.googleapis.com/auth/tagmanager.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.clients.list({
         *     // Continuation token for fetching the next page of results.
         *     pageToken: 'placeholder-value',
         *     // GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         *     parent:
         *       'accounts/my-account/containers/my-container/workspaces/my-workspace',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "client": [],
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Workspaces$Clients$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Workspaces$Clients$List, options?: MethodOptions): GaxiosPromise<Schema$ListClientsResponse>;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Clients$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Clients$List, options: MethodOptions | BodyResponseCallback<Schema$ListClientsResponse>, callback: BodyResponseCallback<Schema$ListClientsResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Clients$List, callback: BodyResponseCallback<Schema$ListClientsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListClientsResponse>): void;
        /**
         * Reverts changes to a GTM Client in a GTM Workspace.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.clients.revert({
         *     // When provided, this fingerprint must match the fingerprint of the client in storage.
         *     fingerprint: 'placeholder-value',
         *     // GTM Client's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/clients/{client_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/clients/my-client',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "client": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Revert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        revert(params?: Params$Resource$Accounts$Containers$Workspaces$Clients$Revert, options?: MethodOptions): GaxiosPromise<Schema$RevertClientResponse>;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Revert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Revert, options: MethodOptions | BodyResponseCallback<Schema$RevertClientResponse>, callback: BodyResponseCallback<Schema$RevertClientResponse>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Revert, callback: BodyResponseCallback<Schema$RevertClientResponse>): void;
        revert(callback: BodyResponseCallback<Schema$RevertClientResponse>): void;
        /**
         * Updates a GTM Client.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.clients.update({
         *     // When provided, this fingerprint must match the fingerprint of the client in storage.
         *     fingerprint: 'placeholder-value',
         *     // GTM Client's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/clients/{client_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/clients/my-client',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "accountId": "my_accountId",
         *       //   "clientId": "my_clientId",
         *       //   "containerId": "my_containerId",
         *       //   "fingerprint": "my_fingerprint",
         *       //   "name": "my_name",
         *       //   "notes": "my_notes",
         *       //   "parameter": [],
         *       //   "parentFolderId": "my_parentFolderId",
         *       //   "path": "my_path",
         *       //   "priority": 0,
         *       //   "tagManagerUrl": "my_tagManagerUrl",
         *       //   "type": "my_type",
         *       //   "workspaceId": "my_workspaceId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "clientId": "my_clientId",
         *   //   "containerId": "my_containerId",
         *   //   "fingerprint": "my_fingerprint",
         *   //   "name": "my_name",
         *   //   "notes": "my_notes",
         *   //   "parameter": [],
         *   //   "parentFolderId": "my_parentFolderId",
         *   //   "path": "my_path",
         *   //   "priority": 0,
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "type": "my_type",
         *   //   "workspaceId": "my_workspaceId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Containers$Workspaces$Clients$Update, options?: MethodOptions): GaxiosPromise<Schema$Client>;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Update, options: MethodOptions | BodyResponseCallback<Schema$Client>, callback: BodyResponseCallback<Schema$Client>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Clients$Update, callback: BodyResponseCallback<Schema$Client>): void;
        update(callback: BodyResponseCallback<Schema$Client>): void;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Clients$Create extends StandardParameters {
        /**
         * GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Client;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Clients$Delete extends StandardParameters {
        /**
         * GTM Client's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/clients/{client_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Clients$Get extends StandardParameters {
        /**
         * GTM Client's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/clients/{client_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Clients$List extends StandardParameters {
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Clients$Revert extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the client in storage.
         */
        fingerprint?: string;
        /**
         * GTM Client's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/clients/{client_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Clients$Update extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the client in storage.
         */
        fingerprint?: string;
        /**
         * GTM Client's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/clients/{client_id\}
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Client;
    }
    export class Resource$Accounts$Containers$Workspaces$Folders {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a GTM Folder.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.folders.create({
         *     // GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         *     parent:
         *       'accounts/my-account/containers/my-container/workspaces/my-workspace',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "accountId": "my_accountId",
         *       //   "containerId": "my_containerId",
         *       //   "fingerprint": "my_fingerprint",
         *       //   "folderId": "my_folderId",
         *       //   "name": "my_name",
         *       //   "notes": "my_notes",
         *       //   "path": "my_path",
         *       //   "tagManagerUrl": "my_tagManagerUrl",
         *       //   "workspaceId": "my_workspaceId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "containerId": "my_containerId",
         *   //   "fingerprint": "my_fingerprint",
         *   //   "folderId": "my_folderId",
         *   //   "name": "my_name",
         *   //   "notes": "my_notes",
         *   //   "path": "my_path",
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "workspaceId": "my_workspaceId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Containers$Workspaces$Folders$Create, options?: MethodOptions): GaxiosPromise<Schema$Folder>;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Create, options: MethodOptions | BodyResponseCallback<Schema$Folder>, callback: BodyResponseCallback<Schema$Folder>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Create, callback: BodyResponseCallback<Schema$Folder>): void;
        create(callback: BodyResponseCallback<Schema$Folder>): void;
        /**
         * Deletes a GTM Folder.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.folders.delete({
         *     // GTM Folder's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/folders/{folder_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/folders/my-folder',
         *   });
         *   console.log(res.data);
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Containers$Workspaces$Folders$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * List all entities in a GTM Folder.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containers',
         *       'https://www.googleapis.com/auth/tagmanager.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.folders.entities({
         *     // Continuation token for fetching the next page of results.
         *     pageToken: 'placeholder-value',
         *     // GTM Folder's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/folders/{folder_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/folders/my-folder',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "tag": [],
         *   //   "trigger": [],
         *   //   "variable": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        entities(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Entities, options: StreamMethodOptions): GaxiosPromise<Readable>;
        entities(params?: Params$Resource$Accounts$Containers$Workspaces$Folders$Entities, options?: MethodOptions): GaxiosPromise<Schema$FolderEntities>;
        entities(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Entities, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        entities(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Entities, options: MethodOptions | BodyResponseCallback<Schema$FolderEntities>, callback: BodyResponseCallback<Schema$FolderEntities>): void;
        entities(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Entities, callback: BodyResponseCallback<Schema$FolderEntities>): void;
        entities(callback: BodyResponseCallback<Schema$FolderEntities>): void;
        /**
         * Gets a GTM Folder.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containers',
         *       'https://www.googleapis.com/auth/tagmanager.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.folders.get({
         *     // GTM Folder's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/folders/{folder_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/folders/my-folder',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "containerId": "my_containerId",
         *   //   "fingerprint": "my_fingerprint",
         *   //   "folderId": "my_folderId",
         *   //   "name": "my_name",
         *   //   "notes": "my_notes",
         *   //   "path": "my_path",
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "workspaceId": "my_workspaceId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Containers$Workspaces$Folders$Get, options?: MethodOptions): GaxiosPromise<Schema$Folder>;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Get, options: MethodOptions | BodyResponseCallback<Schema$Folder>, callback: BodyResponseCallback<Schema$Folder>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Get, callback: BodyResponseCallback<Schema$Folder>): void;
        get(callback: BodyResponseCallback<Schema$Folder>): void;
        /**
         * Lists all GTM Folders of a Container.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containers',
         *       'https://www.googleapis.com/auth/tagmanager.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.folders.list({
         *     // Continuation token for fetching the next page of results.
         *     pageToken: 'placeholder-value',
         *     // GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         *     parent:
         *       'accounts/my-account/containers/my-container/workspaces/my-workspace',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "folder": [],
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Workspaces$Folders$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Workspaces$Folders$List, options?: MethodOptions): GaxiosPromise<Schema$ListFoldersResponse>;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Folders$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Folders$List, options: MethodOptions | BodyResponseCallback<Schema$ListFoldersResponse>, callback: BodyResponseCallback<Schema$ListFoldersResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Folders$List, callback: BodyResponseCallback<Schema$ListFoldersResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListFoldersResponse>): void;
        /**
         * Moves entities to a GTM Folder.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await tagmanager.accounts.containers.workspaces.folders.move_entities_to_folder(
         *       {
         *         // GTM Folder's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/folders/{folder_id\}
         *         path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/folders/my-folder',
         *         // The tags to be moved to the folder.
         *         tagId: 'placeholder-value',
         *         // The triggers to be moved to the folder.
         *         triggerId: 'placeholder-value',
         *         // The variables to be moved to the folder.
         *         variableId: 'placeholder-value',
         *
         *         // Request body metadata
         *         requestBody: {
         *           // request body parameters
         *           // {
         *           //   "accountId": "my_accountId",
         *           //   "containerId": "my_containerId",
         *           //   "fingerprint": "my_fingerprint",
         *           //   "folderId": "my_folderId",
         *           //   "name": "my_name",
         *           //   "notes": "my_notes",
         *           //   "path": "my_path",
         *           //   "tagManagerUrl": "my_tagManagerUrl",
         *           //   "workspaceId": "my_workspaceId"
         *           // }
         *         },
         *       }
         *     );
         *   console.log(res.data);
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        move_entities_to_folder(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Move_entities_to_folder, options: StreamMethodOptions): GaxiosPromise<Readable>;
        move_entities_to_folder(params?: Params$Resource$Accounts$Containers$Workspaces$Folders$Move_entities_to_folder, options?: MethodOptions): GaxiosPromise<void>;
        move_entities_to_folder(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Move_entities_to_folder, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        move_entities_to_folder(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Move_entities_to_folder, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        move_entities_to_folder(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Move_entities_to_folder, callback: BodyResponseCallback<void>): void;
        move_entities_to_folder(callback: BodyResponseCallback<void>): void;
        /**
         * Reverts changes to a GTM Folder in a GTM Workspace.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.folders.revert({
         *     // When provided, this fingerprint must match the fingerprint of the tag in storage.
         *     fingerprint: 'placeholder-value',
         *     // GTM Folder's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/folders/{folder_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/folders/my-folder',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "folder": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Revert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        revert(params?: Params$Resource$Accounts$Containers$Workspaces$Folders$Revert, options?: MethodOptions): GaxiosPromise<Schema$RevertFolderResponse>;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Revert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Revert, options: MethodOptions | BodyResponseCallback<Schema$RevertFolderResponse>, callback: BodyResponseCallback<Schema$RevertFolderResponse>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Revert, callback: BodyResponseCallback<Schema$RevertFolderResponse>): void;
        revert(callback: BodyResponseCallback<Schema$RevertFolderResponse>): void;
        /**
         * Updates a GTM Folder.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.folders.update({
         *     // When provided, this fingerprint must match the fingerprint of the folder in storage.
         *     fingerprint: 'placeholder-value',
         *     // GTM Folder's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/folders/{folder_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/folders/my-folder',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "accountId": "my_accountId",
         *       //   "containerId": "my_containerId",
         *       //   "fingerprint": "my_fingerprint",
         *       //   "folderId": "my_folderId",
         *       //   "name": "my_name",
         *       //   "notes": "my_notes",
         *       //   "path": "my_path",
         *       //   "tagManagerUrl": "my_tagManagerUrl",
         *       //   "workspaceId": "my_workspaceId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "containerId": "my_containerId",
         *   //   "fingerprint": "my_fingerprint",
         *   //   "folderId": "my_folderId",
         *   //   "name": "my_name",
         *   //   "notes": "my_notes",
         *   //   "path": "my_path",
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "workspaceId": "my_workspaceId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Containers$Workspaces$Folders$Update, options?: MethodOptions): GaxiosPromise<Schema$Folder>;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Update, options: MethodOptions | BodyResponseCallback<Schema$Folder>, callback: BodyResponseCallback<Schema$Folder>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Folders$Update, callback: BodyResponseCallback<Schema$Folder>): void;
        update(callback: BodyResponseCallback<Schema$Folder>): void;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Folders$Create extends StandardParameters {
        /**
         * GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Folder;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Folders$Delete extends StandardParameters {
        /**
         * GTM Folder's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/folders/{folder_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Folders$Entities extends StandardParameters {
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * GTM Folder's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/folders/{folder_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Folders$Get extends StandardParameters {
        /**
         * GTM Folder's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/folders/{folder_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Folders$List extends StandardParameters {
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Folders$Move_entities_to_folder extends StandardParameters {
        /**
         * GTM Folder's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/folders/{folder_id\}
         */
        path?: string;
        /**
         * The tags to be moved to the folder.
         */
        tagId?: string[];
        /**
         * The triggers to be moved to the folder.
         */
        triggerId?: string[];
        /**
         * The variables to be moved to the folder.
         */
        variableId?: string[];
        /**
         * Request body metadata
         */
        requestBody?: Schema$Folder;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Folders$Revert extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the tag in storage.
         */
        fingerprint?: string;
        /**
         * GTM Folder's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/folders/{folder_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Folders$Update extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the folder in storage.
         */
        fingerprint?: string;
        /**
         * GTM Folder's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/folders/{folder_id\}
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Folder;
    }
    export class Resource$Accounts$Containers$Workspaces$Tags {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a GTM Tag.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.tags.create({
         *     // GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         *     parent:
         *       'accounts/my-account/containers/my-container/workspaces/my-workspace',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "accountId": "my_accountId",
         *       //   "blockingRuleId": [],
         *       //   "blockingTriggerId": [],
         *       //   "consentSettings": {},
         *       //   "containerId": "my_containerId",
         *       //   "fingerprint": "my_fingerprint",
         *       //   "firingRuleId": [],
         *       //   "firingTriggerId": [],
         *       //   "liveOnly": false,
         *       //   "monitoringMetadata": {},
         *       //   "monitoringMetadataTagNameKey": "my_monitoringMetadataTagNameKey",
         *       //   "name": "my_name",
         *       //   "notes": "my_notes",
         *       //   "parameter": [],
         *       //   "parentFolderId": "my_parentFolderId",
         *       //   "path": "my_path",
         *       //   "paused": false,
         *       //   "priority": {},
         *       //   "scheduleEndMs": "my_scheduleEndMs",
         *       //   "scheduleStartMs": "my_scheduleStartMs",
         *       //   "setupTag": [],
         *       //   "tagFiringOption": "my_tagFiringOption",
         *       //   "tagId": "my_tagId",
         *       //   "tagManagerUrl": "my_tagManagerUrl",
         *       //   "teardownTag": [],
         *       //   "type": "my_type",
         *       //   "workspaceId": "my_workspaceId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "blockingRuleId": [],
         *   //   "blockingTriggerId": [],
         *   //   "consentSettings": {},
         *   //   "containerId": "my_containerId",
         *   //   "fingerprint": "my_fingerprint",
         *   //   "firingRuleId": [],
         *   //   "firingTriggerId": [],
         *   //   "liveOnly": false,
         *   //   "monitoringMetadata": {},
         *   //   "monitoringMetadataTagNameKey": "my_monitoringMetadataTagNameKey",
         *   //   "name": "my_name",
         *   //   "notes": "my_notes",
         *   //   "parameter": [],
         *   //   "parentFolderId": "my_parentFolderId",
         *   //   "path": "my_path",
         *   //   "paused": false,
         *   //   "priority": {},
         *   //   "scheduleEndMs": "my_scheduleEndMs",
         *   //   "scheduleStartMs": "my_scheduleStartMs",
         *   //   "setupTag": [],
         *   //   "tagFiringOption": "my_tagFiringOption",
         *   //   "tagId": "my_tagId",
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "teardownTag": [],
         *   //   "type": "my_type",
         *   //   "workspaceId": "my_workspaceId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Containers$Workspaces$Tags$Create, options?: MethodOptions): GaxiosPromise<Schema$Tag>;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Create, options: MethodOptions | BodyResponseCallback<Schema$Tag>, callback: BodyResponseCallback<Schema$Tag>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Create, callback: BodyResponseCallback<Schema$Tag>): void;
        create(callback: BodyResponseCallback<Schema$Tag>): void;
        /**
         * Deletes a GTM Tag.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.tags.delete({
         *     // GTM Tag's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/tags/{tag_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/tags/my-tag',
         *   });
         *   console.log(res.data);
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Containers$Workspaces$Tags$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a GTM Tag.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containers',
         *       'https://www.googleapis.com/auth/tagmanager.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.tags.get({
         *     // GTM Tag's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/tags/{tag_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/tags/my-tag',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "blockingRuleId": [],
         *   //   "blockingTriggerId": [],
         *   //   "consentSettings": {},
         *   //   "containerId": "my_containerId",
         *   //   "fingerprint": "my_fingerprint",
         *   //   "firingRuleId": [],
         *   //   "firingTriggerId": [],
         *   //   "liveOnly": false,
         *   //   "monitoringMetadata": {},
         *   //   "monitoringMetadataTagNameKey": "my_monitoringMetadataTagNameKey",
         *   //   "name": "my_name",
         *   //   "notes": "my_notes",
         *   //   "parameter": [],
         *   //   "parentFolderId": "my_parentFolderId",
         *   //   "path": "my_path",
         *   //   "paused": false,
         *   //   "priority": {},
         *   //   "scheduleEndMs": "my_scheduleEndMs",
         *   //   "scheduleStartMs": "my_scheduleStartMs",
         *   //   "setupTag": [],
         *   //   "tagFiringOption": "my_tagFiringOption",
         *   //   "tagId": "my_tagId",
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "teardownTag": [],
         *   //   "type": "my_type",
         *   //   "workspaceId": "my_workspaceId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Containers$Workspaces$Tags$Get, options?: MethodOptions): GaxiosPromise<Schema$Tag>;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Get, options: MethodOptions | BodyResponseCallback<Schema$Tag>, callback: BodyResponseCallback<Schema$Tag>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Get, callback: BodyResponseCallback<Schema$Tag>): void;
        get(callback: BodyResponseCallback<Schema$Tag>): void;
        /**
         * Lists all GTM Tags of a Container.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containers',
         *       'https://www.googleapis.com/auth/tagmanager.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.tags.list({
         *     // Continuation token for fetching the next page of results.
         *     pageToken: 'placeholder-value',
         *     // GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         *     parent:
         *       'accounts/my-account/containers/my-container/workspaces/my-workspace',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "tag": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Workspaces$Tags$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Workspaces$Tags$List, options?: MethodOptions): GaxiosPromise<Schema$ListTagsResponse>;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Tags$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Tags$List, options: MethodOptions | BodyResponseCallback<Schema$ListTagsResponse>, callback: BodyResponseCallback<Schema$ListTagsResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Tags$List, callback: BodyResponseCallback<Schema$ListTagsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListTagsResponse>): void;
        /**
         * Reverts changes to a GTM Tag in a GTM Workspace.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.tags.revert({
         *     // When provided, this fingerprint must match the fingerprint of thetag in storage.
         *     fingerprint: 'placeholder-value',
         *     // GTM Tag's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/tags/{tag_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/tags/my-tag',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "tag": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Revert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        revert(params?: Params$Resource$Accounts$Containers$Workspaces$Tags$Revert, options?: MethodOptions): GaxiosPromise<Schema$RevertTagResponse>;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Revert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Revert, options: MethodOptions | BodyResponseCallback<Schema$RevertTagResponse>, callback: BodyResponseCallback<Schema$RevertTagResponse>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Revert, callback: BodyResponseCallback<Schema$RevertTagResponse>): void;
        revert(callback: BodyResponseCallback<Schema$RevertTagResponse>): void;
        /**
         * Updates a GTM Tag.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.tags.update({
         *     // When provided, this fingerprint must match the fingerprint of the tag in storage.
         *     fingerprint: 'placeholder-value',
         *     // GTM Tag's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/tags/{tag_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/tags/my-tag',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "accountId": "my_accountId",
         *       //   "blockingRuleId": [],
         *       //   "blockingTriggerId": [],
         *       //   "consentSettings": {},
         *       //   "containerId": "my_containerId",
         *       //   "fingerprint": "my_fingerprint",
         *       //   "firingRuleId": [],
         *       //   "firingTriggerId": [],
         *       //   "liveOnly": false,
         *       //   "monitoringMetadata": {},
         *       //   "monitoringMetadataTagNameKey": "my_monitoringMetadataTagNameKey",
         *       //   "name": "my_name",
         *       //   "notes": "my_notes",
         *       //   "parameter": [],
         *       //   "parentFolderId": "my_parentFolderId",
         *       //   "path": "my_path",
         *       //   "paused": false,
         *       //   "priority": {},
         *       //   "scheduleEndMs": "my_scheduleEndMs",
         *       //   "scheduleStartMs": "my_scheduleStartMs",
         *       //   "setupTag": [],
         *       //   "tagFiringOption": "my_tagFiringOption",
         *       //   "tagId": "my_tagId",
         *       //   "tagManagerUrl": "my_tagManagerUrl",
         *       //   "teardownTag": [],
         *       //   "type": "my_type",
         *       //   "workspaceId": "my_workspaceId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "blockingRuleId": [],
         *   //   "blockingTriggerId": [],
         *   //   "consentSettings": {},
         *   //   "containerId": "my_containerId",
         *   //   "fingerprint": "my_fingerprint",
         *   //   "firingRuleId": [],
         *   //   "firingTriggerId": [],
         *   //   "liveOnly": false,
         *   //   "monitoringMetadata": {},
         *   //   "monitoringMetadataTagNameKey": "my_monitoringMetadataTagNameKey",
         *   //   "name": "my_name",
         *   //   "notes": "my_notes",
         *   //   "parameter": [],
         *   //   "parentFolderId": "my_parentFolderId",
         *   //   "path": "my_path",
         *   //   "paused": false,
         *   //   "priority": {},
         *   //   "scheduleEndMs": "my_scheduleEndMs",
         *   //   "scheduleStartMs": "my_scheduleStartMs",
         *   //   "setupTag": [],
         *   //   "tagFiringOption": "my_tagFiringOption",
         *   //   "tagId": "my_tagId",
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "teardownTag": [],
         *   //   "type": "my_type",
         *   //   "workspaceId": "my_workspaceId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Containers$Workspaces$Tags$Update, options?: MethodOptions): GaxiosPromise<Schema$Tag>;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Update, options: MethodOptions | BodyResponseCallback<Schema$Tag>, callback: BodyResponseCallback<Schema$Tag>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Tags$Update, callback: BodyResponseCallback<Schema$Tag>): void;
        update(callback: BodyResponseCallback<Schema$Tag>): void;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Tags$Create extends StandardParameters {
        /**
         * GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Tag;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Tags$Delete extends StandardParameters {
        /**
         * GTM Tag's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/tags/{tag_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Tags$Get extends StandardParameters {
        /**
         * GTM Tag's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/tags/{tag_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Tags$List extends StandardParameters {
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Tags$Revert extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of thetag in storage.
         */
        fingerprint?: string;
        /**
         * GTM Tag's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/tags/{tag_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Tags$Update extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the tag in storage.
         */
        fingerprint?: string;
        /**
         * GTM Tag's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/tags/{tag_id\}
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Tag;
    }
    export class Resource$Accounts$Containers$Workspaces$Templates {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a GTM Custom Template.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.templates.create({
         *     // GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         *     parent:
         *       'accounts/my-account/containers/my-container/workspaces/my-workspace',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "accountId": "my_accountId",
         *       //   "containerId": "my_containerId",
         *       //   "fingerprint": "my_fingerprint",
         *       //   "galleryReference": {},
         *       //   "name": "my_name",
         *       //   "path": "my_path",
         *       //   "tagManagerUrl": "my_tagManagerUrl",
         *       //   "templateData": "my_templateData",
         *       //   "templateId": "my_templateId",
         *       //   "workspaceId": "my_workspaceId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "containerId": "my_containerId",
         *   //   "fingerprint": "my_fingerprint",
         *   //   "galleryReference": {},
         *   //   "name": "my_name",
         *   //   "path": "my_path",
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "templateData": "my_templateData",
         *   //   "templateId": "my_templateId",
         *   //   "workspaceId": "my_workspaceId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Containers$Workspaces$Templates$Create, options?: MethodOptions): GaxiosPromise<Schema$CustomTemplate>;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Create, options: MethodOptions | BodyResponseCallback<Schema$CustomTemplate>, callback: BodyResponseCallback<Schema$CustomTemplate>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Create, callback: BodyResponseCallback<Schema$CustomTemplate>): void;
        create(callback: BodyResponseCallback<Schema$CustomTemplate>): void;
        /**
         * Deletes a GTM Template.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.templates.delete({
         *     // GTM Custom Template's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/templates/{template_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/templates/my-template',
         *   });
         *   console.log(res.data);
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Containers$Workspaces$Templates$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a GTM Template.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containers',
         *       'https://www.googleapis.com/auth/tagmanager.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.templates.get({
         *     // GTM Custom Template's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/templates/{template_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/templates/my-template',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "containerId": "my_containerId",
         *   //   "fingerprint": "my_fingerprint",
         *   //   "galleryReference": {},
         *   //   "name": "my_name",
         *   //   "path": "my_path",
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "templateData": "my_templateData",
         *   //   "templateId": "my_templateId",
         *   //   "workspaceId": "my_workspaceId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Containers$Workspaces$Templates$Get, options?: MethodOptions): GaxiosPromise<Schema$CustomTemplate>;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Get, options: MethodOptions | BodyResponseCallback<Schema$CustomTemplate>, callback: BodyResponseCallback<Schema$CustomTemplate>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Get, callback: BodyResponseCallback<Schema$CustomTemplate>): void;
        get(callback: BodyResponseCallback<Schema$CustomTemplate>): void;
        /**
         * Lists all GTM Templates of a GTM container workspace.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containers',
         *       'https://www.googleapis.com/auth/tagmanager.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.templates.list({
         *     // Continuation token for fetching the next page of results.
         *     pageToken: 'placeholder-value',
         *     // GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         *     parent:
         *       'accounts/my-account/containers/my-container/workspaces/my-workspace',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "template": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Workspaces$Templates$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Workspaces$Templates$List, options?: MethodOptions): GaxiosPromise<Schema$ListTemplatesResponse>;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Templates$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Templates$List, options: MethodOptions | BodyResponseCallback<Schema$ListTemplatesResponse>, callback: BodyResponseCallback<Schema$ListTemplatesResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Templates$List, callback: BodyResponseCallback<Schema$ListTemplatesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListTemplatesResponse>): void;
        /**
         * Reverts changes to a GTM Template in a GTM Workspace.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.templates.revert({
         *     // When provided, this fingerprint must match the fingerprint of the template in storage.
         *     fingerprint: 'placeholder-value',
         *     // GTM Custom Template's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/templates/{template_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/templates/my-template',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "template": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Revert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        revert(params?: Params$Resource$Accounts$Containers$Workspaces$Templates$Revert, options?: MethodOptions): GaxiosPromise<Schema$RevertTemplateResponse>;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Revert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Revert, options: MethodOptions | BodyResponseCallback<Schema$RevertTemplateResponse>, callback: BodyResponseCallback<Schema$RevertTemplateResponse>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Revert, callback: BodyResponseCallback<Schema$RevertTemplateResponse>): void;
        revert(callback: BodyResponseCallback<Schema$RevertTemplateResponse>): void;
        /**
         * Updates a GTM Template.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.templates.update({
         *     // When provided, this fingerprint must match the fingerprint of the templates in storage.
         *     fingerprint: 'placeholder-value',
         *     // GTM Custom Template's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/templates/{template_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/templates/my-template',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "accountId": "my_accountId",
         *       //   "containerId": "my_containerId",
         *       //   "fingerprint": "my_fingerprint",
         *       //   "galleryReference": {},
         *       //   "name": "my_name",
         *       //   "path": "my_path",
         *       //   "tagManagerUrl": "my_tagManagerUrl",
         *       //   "templateData": "my_templateData",
         *       //   "templateId": "my_templateId",
         *       //   "workspaceId": "my_workspaceId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "containerId": "my_containerId",
         *   //   "fingerprint": "my_fingerprint",
         *   //   "galleryReference": {},
         *   //   "name": "my_name",
         *   //   "path": "my_path",
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "templateData": "my_templateData",
         *   //   "templateId": "my_templateId",
         *   //   "workspaceId": "my_workspaceId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Containers$Workspaces$Templates$Update, options?: MethodOptions): GaxiosPromise<Schema$CustomTemplate>;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Update, options: MethodOptions | BodyResponseCallback<Schema$CustomTemplate>, callback: BodyResponseCallback<Schema$CustomTemplate>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Templates$Update, callback: BodyResponseCallback<Schema$CustomTemplate>): void;
        update(callback: BodyResponseCallback<Schema$CustomTemplate>): void;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Templates$Create extends StandardParameters {
        /**
         * GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CustomTemplate;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Templates$Delete extends StandardParameters {
        /**
         * GTM Custom Template's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/templates/{template_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Templates$Get extends StandardParameters {
        /**
         * GTM Custom Template's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/templates/{template_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Templates$List extends StandardParameters {
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Templates$Revert extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the template in storage.
         */
        fingerprint?: string;
        /**
         * GTM Custom Template's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/templates/{template_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Templates$Update extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the templates in storage.
         */
        fingerprint?: string;
        /**
         * GTM Custom Template's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/templates/{template_id\}
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CustomTemplate;
    }
    export class Resource$Accounts$Containers$Workspaces$Triggers {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a GTM Trigger.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.triggers.create({
         *     // GTM Workspaces's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         *     parent:
         *       'accounts/my-account/containers/my-container/workspaces/my-workspace',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "accountId": "my_accountId",
         *       //   "autoEventFilter": [],
         *       //   "checkValidation": {},
         *       //   "containerId": "my_containerId",
         *       //   "continuousTimeMinMilliseconds": {},
         *       //   "customEventFilter": [],
         *       //   "eventName": {},
         *       //   "filter": [],
         *       //   "fingerprint": "my_fingerprint",
         *       //   "horizontalScrollPercentageList": {},
         *       //   "interval": {},
         *       //   "intervalSeconds": {},
         *       //   "limit": {},
         *       //   "maxTimerLengthSeconds": {},
         *       //   "name": "my_name",
         *       //   "notes": "my_notes",
         *       //   "parameter": [],
         *       //   "parentFolderId": "my_parentFolderId",
         *       //   "path": "my_path",
         *       //   "selector": {},
         *       //   "tagManagerUrl": "my_tagManagerUrl",
         *       //   "totalTimeMinMilliseconds": {},
         *       //   "triggerId": "my_triggerId",
         *       //   "type": "my_type",
         *       //   "uniqueTriggerId": {},
         *       //   "verticalScrollPercentageList": {},
         *       //   "visibilitySelector": {},
         *       //   "visiblePercentageMax": {},
         *       //   "visiblePercentageMin": {},
         *       //   "waitForTags": {},
         *       //   "waitForTagsTimeout": {},
         *       //   "workspaceId": "my_workspaceId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "autoEventFilter": [],
         *   //   "checkValidation": {},
         *   //   "containerId": "my_containerId",
         *   //   "continuousTimeMinMilliseconds": {},
         *   //   "customEventFilter": [],
         *   //   "eventName": {},
         *   //   "filter": [],
         *   //   "fingerprint": "my_fingerprint",
         *   //   "horizontalScrollPercentageList": {},
         *   //   "interval": {},
         *   //   "intervalSeconds": {},
         *   //   "limit": {},
         *   //   "maxTimerLengthSeconds": {},
         *   //   "name": "my_name",
         *   //   "notes": "my_notes",
         *   //   "parameter": [],
         *   //   "parentFolderId": "my_parentFolderId",
         *   //   "path": "my_path",
         *   //   "selector": {},
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "totalTimeMinMilliseconds": {},
         *   //   "triggerId": "my_triggerId",
         *   //   "type": "my_type",
         *   //   "uniqueTriggerId": {},
         *   //   "verticalScrollPercentageList": {},
         *   //   "visibilitySelector": {},
         *   //   "visiblePercentageMax": {},
         *   //   "visiblePercentageMin": {},
         *   //   "waitForTags": {},
         *   //   "waitForTagsTimeout": {},
         *   //   "workspaceId": "my_workspaceId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Containers$Workspaces$Triggers$Create, options?: MethodOptions): GaxiosPromise<Schema$Trigger>;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Create, options: MethodOptions | BodyResponseCallback<Schema$Trigger>, callback: BodyResponseCallback<Schema$Trigger>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Create, callback: BodyResponseCallback<Schema$Trigger>): void;
        create(callback: BodyResponseCallback<Schema$Trigger>): void;
        /**
         * Deletes a GTM Trigger.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.triggers.delete({
         *     // GTM Trigger's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/triggers/{trigger_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/triggers/my-trigger',
         *   });
         *   console.log(res.data);
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Containers$Workspaces$Triggers$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a GTM Trigger.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containers',
         *       'https://www.googleapis.com/auth/tagmanager.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.triggers.get({
         *     // GTM Trigger's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/triggers/{trigger_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/triggers/my-trigger',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "autoEventFilter": [],
         *   //   "checkValidation": {},
         *   //   "containerId": "my_containerId",
         *   //   "continuousTimeMinMilliseconds": {},
         *   //   "customEventFilter": [],
         *   //   "eventName": {},
         *   //   "filter": [],
         *   //   "fingerprint": "my_fingerprint",
         *   //   "horizontalScrollPercentageList": {},
         *   //   "interval": {},
         *   //   "intervalSeconds": {},
         *   //   "limit": {},
         *   //   "maxTimerLengthSeconds": {},
         *   //   "name": "my_name",
         *   //   "notes": "my_notes",
         *   //   "parameter": [],
         *   //   "parentFolderId": "my_parentFolderId",
         *   //   "path": "my_path",
         *   //   "selector": {},
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "totalTimeMinMilliseconds": {},
         *   //   "triggerId": "my_triggerId",
         *   //   "type": "my_type",
         *   //   "uniqueTriggerId": {},
         *   //   "verticalScrollPercentageList": {},
         *   //   "visibilitySelector": {},
         *   //   "visiblePercentageMax": {},
         *   //   "visiblePercentageMin": {},
         *   //   "waitForTags": {},
         *   //   "waitForTagsTimeout": {},
         *   //   "workspaceId": "my_workspaceId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Containers$Workspaces$Triggers$Get, options?: MethodOptions): GaxiosPromise<Schema$Trigger>;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Get, options: MethodOptions | BodyResponseCallback<Schema$Trigger>, callback: BodyResponseCallback<Schema$Trigger>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Get, callback: BodyResponseCallback<Schema$Trigger>): void;
        get(callback: BodyResponseCallback<Schema$Trigger>): void;
        /**
         * Lists all GTM Triggers of a Container.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containers',
         *       'https://www.googleapis.com/auth/tagmanager.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.triggers.list({
         *     // Continuation token for fetching the next page of results.
         *     pageToken: 'placeholder-value',
         *     // GTM Workspaces's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         *     parent:
         *       'accounts/my-account/containers/my-container/workspaces/my-workspace',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "trigger": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Workspaces$Triggers$List, options?: MethodOptions): GaxiosPromise<Schema$ListTriggersResponse>;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$List, options: MethodOptions | BodyResponseCallback<Schema$ListTriggersResponse>, callback: BodyResponseCallback<Schema$ListTriggersResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$List, callback: BodyResponseCallback<Schema$ListTriggersResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListTriggersResponse>): void;
        /**
         * Reverts changes to a GTM Trigger in a GTM Workspace.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.triggers.revert({
         *     // When provided, this fingerprint must match the fingerprint of the trigger in storage.
         *     fingerprint: 'placeholder-value',
         *     // GTM Trigger's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/triggers/{trigger_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/triggers/my-trigger',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "trigger": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Revert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        revert(params?: Params$Resource$Accounts$Containers$Workspaces$Triggers$Revert, options?: MethodOptions): GaxiosPromise<Schema$RevertTriggerResponse>;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Revert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Revert, options: MethodOptions | BodyResponseCallback<Schema$RevertTriggerResponse>, callback: BodyResponseCallback<Schema$RevertTriggerResponse>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Revert, callback: BodyResponseCallback<Schema$RevertTriggerResponse>): void;
        revert(callback: BodyResponseCallback<Schema$RevertTriggerResponse>): void;
        /**
         * Updates a GTM Trigger.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.triggers.update({
         *     // When provided, this fingerprint must match the fingerprint of the trigger in storage.
         *     fingerprint: 'placeholder-value',
         *     // GTM Trigger's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/triggers/{trigger_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/triggers/my-trigger',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "accountId": "my_accountId",
         *       //   "autoEventFilter": [],
         *       //   "checkValidation": {},
         *       //   "containerId": "my_containerId",
         *       //   "continuousTimeMinMilliseconds": {},
         *       //   "customEventFilter": [],
         *       //   "eventName": {},
         *       //   "filter": [],
         *       //   "fingerprint": "my_fingerprint",
         *       //   "horizontalScrollPercentageList": {},
         *       //   "interval": {},
         *       //   "intervalSeconds": {},
         *       //   "limit": {},
         *       //   "maxTimerLengthSeconds": {},
         *       //   "name": "my_name",
         *       //   "notes": "my_notes",
         *       //   "parameter": [],
         *       //   "parentFolderId": "my_parentFolderId",
         *       //   "path": "my_path",
         *       //   "selector": {},
         *       //   "tagManagerUrl": "my_tagManagerUrl",
         *       //   "totalTimeMinMilliseconds": {},
         *       //   "triggerId": "my_triggerId",
         *       //   "type": "my_type",
         *       //   "uniqueTriggerId": {},
         *       //   "verticalScrollPercentageList": {},
         *       //   "visibilitySelector": {},
         *       //   "visiblePercentageMax": {},
         *       //   "visiblePercentageMin": {},
         *       //   "waitForTags": {},
         *       //   "waitForTagsTimeout": {},
         *       //   "workspaceId": "my_workspaceId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "autoEventFilter": [],
         *   //   "checkValidation": {},
         *   //   "containerId": "my_containerId",
         *   //   "continuousTimeMinMilliseconds": {},
         *   //   "customEventFilter": [],
         *   //   "eventName": {},
         *   //   "filter": [],
         *   //   "fingerprint": "my_fingerprint",
         *   //   "horizontalScrollPercentageList": {},
         *   //   "interval": {},
         *   //   "intervalSeconds": {},
         *   //   "limit": {},
         *   //   "maxTimerLengthSeconds": {},
         *   //   "name": "my_name",
         *   //   "notes": "my_notes",
         *   //   "parameter": [],
         *   //   "parentFolderId": "my_parentFolderId",
         *   //   "path": "my_path",
         *   //   "selector": {},
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "totalTimeMinMilliseconds": {},
         *   //   "triggerId": "my_triggerId",
         *   //   "type": "my_type",
         *   //   "uniqueTriggerId": {},
         *   //   "verticalScrollPercentageList": {},
         *   //   "visibilitySelector": {},
         *   //   "visiblePercentageMax": {},
         *   //   "visiblePercentageMin": {},
         *   //   "waitForTags": {},
         *   //   "waitForTagsTimeout": {},
         *   //   "workspaceId": "my_workspaceId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Containers$Workspaces$Triggers$Update, options?: MethodOptions): GaxiosPromise<Schema$Trigger>;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Update, options: MethodOptions | BodyResponseCallback<Schema$Trigger>, callback: BodyResponseCallback<Schema$Trigger>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Triggers$Update, callback: BodyResponseCallback<Schema$Trigger>): void;
        update(callback: BodyResponseCallback<Schema$Trigger>): void;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Triggers$Create extends StandardParameters {
        /**
         * GTM Workspaces's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Trigger;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Triggers$Delete extends StandardParameters {
        /**
         * GTM Trigger's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/triggers/{trigger_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Triggers$Get extends StandardParameters {
        /**
         * GTM Trigger's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/triggers/{trigger_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Triggers$List extends StandardParameters {
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * GTM Workspaces's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Triggers$Revert extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the trigger in storage.
         */
        fingerprint?: string;
        /**
         * GTM Trigger's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/triggers/{trigger_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Triggers$Update extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the trigger in storage.
         */
        fingerprint?: string;
        /**
         * GTM Trigger's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/triggers/{trigger_id\}
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Trigger;
    }
    export class Resource$Accounts$Containers$Workspaces$Variables {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a GTM Variable.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.variables.create({
         *     // GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         *     parent:
         *       'accounts/my-account/containers/my-container/workspaces/my-workspace',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "accountId": "my_accountId",
         *       //   "containerId": "my_containerId",
         *       //   "disablingTriggerId": [],
         *       //   "enablingTriggerId": [],
         *       //   "fingerprint": "my_fingerprint",
         *       //   "formatValue": {},
         *       //   "name": "my_name",
         *       //   "notes": "my_notes",
         *       //   "parameter": [],
         *       //   "parentFolderId": "my_parentFolderId",
         *       //   "path": "my_path",
         *       //   "scheduleEndMs": "my_scheduleEndMs",
         *       //   "scheduleStartMs": "my_scheduleStartMs",
         *       //   "tagManagerUrl": "my_tagManagerUrl",
         *       //   "type": "my_type",
         *       //   "variableId": "my_variableId",
         *       //   "workspaceId": "my_workspaceId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "containerId": "my_containerId",
         *   //   "disablingTriggerId": [],
         *   //   "enablingTriggerId": [],
         *   //   "fingerprint": "my_fingerprint",
         *   //   "formatValue": {},
         *   //   "name": "my_name",
         *   //   "notes": "my_notes",
         *   //   "parameter": [],
         *   //   "parentFolderId": "my_parentFolderId",
         *   //   "path": "my_path",
         *   //   "scheduleEndMs": "my_scheduleEndMs",
         *   //   "scheduleStartMs": "my_scheduleStartMs",
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "type": "my_type",
         *   //   "variableId": "my_variableId",
         *   //   "workspaceId": "my_workspaceId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Containers$Workspaces$Variables$Create, options?: MethodOptions): GaxiosPromise<Schema$Variable>;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Create, options: MethodOptions | BodyResponseCallback<Schema$Variable>, callback: BodyResponseCallback<Schema$Variable>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Create, callback: BodyResponseCallback<Schema$Variable>): void;
        create(callback: BodyResponseCallback<Schema$Variable>): void;
        /**
         * Deletes a GTM Variable.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.variables.delete({
         *     // GTM Variable's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/variables/{variable_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/variables/my-variable',
         *   });
         *   console.log(res.data);
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Containers$Workspaces$Variables$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a GTM Variable.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containers',
         *       'https://www.googleapis.com/auth/tagmanager.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.variables.get({
         *     // GTM Variable's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/variables/{variable_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/variables/my-variable',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "containerId": "my_containerId",
         *   //   "disablingTriggerId": [],
         *   //   "enablingTriggerId": [],
         *   //   "fingerprint": "my_fingerprint",
         *   //   "formatValue": {},
         *   //   "name": "my_name",
         *   //   "notes": "my_notes",
         *   //   "parameter": [],
         *   //   "parentFolderId": "my_parentFolderId",
         *   //   "path": "my_path",
         *   //   "scheduleEndMs": "my_scheduleEndMs",
         *   //   "scheduleStartMs": "my_scheduleStartMs",
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "type": "my_type",
         *   //   "variableId": "my_variableId",
         *   //   "workspaceId": "my_workspaceId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Containers$Workspaces$Variables$Get, options?: MethodOptions): GaxiosPromise<Schema$Variable>;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Get, options: MethodOptions | BodyResponseCallback<Schema$Variable>, callback: BodyResponseCallback<Schema$Variable>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Get, callback: BodyResponseCallback<Schema$Variable>): void;
        get(callback: BodyResponseCallback<Schema$Variable>): void;
        /**
         * Lists all GTM Variables of a Container.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containers',
         *       'https://www.googleapis.com/auth/tagmanager.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.variables.list({
         *     // Continuation token for fetching the next page of results.
         *     pageToken: 'placeholder-value',
         *     // GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         *     parent:
         *       'accounts/my-account/containers/my-container/workspaces/my-workspace',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "variable": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Workspaces$Variables$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Workspaces$Variables$List, options?: MethodOptions): GaxiosPromise<Schema$ListVariablesResponse>;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Variables$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Variables$List, options: MethodOptions | BodyResponseCallback<Schema$ListVariablesResponse>, callback: BodyResponseCallback<Schema$ListVariablesResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Variables$List, callback: BodyResponseCallback<Schema$ListVariablesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListVariablesResponse>): void;
        /**
         * Reverts changes to a GTM Variable in a GTM Workspace.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.variables.revert({
         *     // When provided, this fingerprint must match the fingerprint of the variable in storage.
         *     fingerprint: 'placeholder-value',
         *     // GTM Variable's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/variables/{variable_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/variables/my-variable',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "variable": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Revert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        revert(params?: Params$Resource$Accounts$Containers$Workspaces$Variables$Revert, options?: MethodOptions): GaxiosPromise<Schema$RevertVariableResponse>;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Revert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Revert, options: MethodOptions | BodyResponseCallback<Schema$RevertVariableResponse>, callback: BodyResponseCallback<Schema$RevertVariableResponse>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Revert, callback: BodyResponseCallback<Schema$RevertVariableResponse>): void;
        revert(callback: BodyResponseCallback<Schema$RevertVariableResponse>): void;
        /**
         * Updates a GTM Variable.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.variables.update({
         *     // When provided, this fingerprint must match the fingerprint of the variable in storage.
         *     fingerprint: 'placeholder-value',
         *     // GTM Variable's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/variables/{variable_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/variables/my-variable',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "accountId": "my_accountId",
         *       //   "containerId": "my_containerId",
         *       //   "disablingTriggerId": [],
         *       //   "enablingTriggerId": [],
         *       //   "fingerprint": "my_fingerprint",
         *       //   "formatValue": {},
         *       //   "name": "my_name",
         *       //   "notes": "my_notes",
         *       //   "parameter": [],
         *       //   "parentFolderId": "my_parentFolderId",
         *       //   "path": "my_path",
         *       //   "scheduleEndMs": "my_scheduleEndMs",
         *       //   "scheduleStartMs": "my_scheduleStartMs",
         *       //   "tagManagerUrl": "my_tagManagerUrl",
         *       //   "type": "my_type",
         *       //   "variableId": "my_variableId",
         *       //   "workspaceId": "my_workspaceId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "containerId": "my_containerId",
         *   //   "disablingTriggerId": [],
         *   //   "enablingTriggerId": [],
         *   //   "fingerprint": "my_fingerprint",
         *   //   "formatValue": {},
         *   //   "name": "my_name",
         *   //   "notes": "my_notes",
         *   //   "parameter": [],
         *   //   "parentFolderId": "my_parentFolderId",
         *   //   "path": "my_path",
         *   //   "scheduleEndMs": "my_scheduleEndMs",
         *   //   "scheduleStartMs": "my_scheduleStartMs",
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "type": "my_type",
         *   //   "variableId": "my_variableId",
         *   //   "workspaceId": "my_workspaceId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Containers$Workspaces$Variables$Update, options?: MethodOptions): GaxiosPromise<Schema$Variable>;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Update, options: MethodOptions | BodyResponseCallback<Schema$Variable>, callback: BodyResponseCallback<Schema$Variable>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Variables$Update, callback: BodyResponseCallback<Schema$Variable>): void;
        update(callback: BodyResponseCallback<Schema$Variable>): void;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Variables$Create extends StandardParameters {
        /**
         * GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Variable;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Variables$Delete extends StandardParameters {
        /**
         * GTM Variable's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/variables/{variable_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Variables$Get extends StandardParameters {
        /**
         * GTM Variable's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/variables/{variable_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Variables$List extends StandardParameters {
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Variables$Revert extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the variable in storage.
         */
        fingerprint?: string;
        /**
         * GTM Variable's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/variables/{variable_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Variables$Update extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the variable in storage.
         */
        fingerprint?: string;
        /**
         * GTM Variable's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/variables/{variable_id\}
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Variable;
    }
    export class Resource$Accounts$Containers$Workspaces$Zones {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a GTM Zone.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.zones.create({
         *     // GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         *     parent:
         *       'accounts/my-account/containers/my-container/workspaces/my-workspace',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "accountId": "my_accountId",
         *       //   "boundary": {},
         *       //   "childContainer": [],
         *       //   "containerId": "my_containerId",
         *       //   "fingerprint": "my_fingerprint",
         *       //   "name": "my_name",
         *       //   "notes": "my_notes",
         *       //   "parameter": [],
         *       //   "path": "my_path",
         *       //   "tagManagerUrl": "my_tagManagerUrl",
         *       //   "typeRestriction": {},
         *       //   "workspaceId": "my_workspaceId",
         *       //   "zoneId": "my_zoneId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "boundary": {},
         *   //   "childContainer": [],
         *   //   "containerId": "my_containerId",
         *   //   "fingerprint": "my_fingerprint",
         *   //   "name": "my_name",
         *   //   "notes": "my_notes",
         *   //   "parameter": [],
         *   //   "path": "my_path",
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "typeRestriction": {},
         *   //   "workspaceId": "my_workspaceId",
         *   //   "zoneId": "my_zoneId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Containers$Workspaces$Zones$Create, options?: MethodOptions): GaxiosPromise<Schema$Zone>;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Create, options: MethodOptions | BodyResponseCallback<Schema$Zone>, callback: BodyResponseCallback<Schema$Zone>): void;
        create(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Create, callback: BodyResponseCallback<Schema$Zone>): void;
        create(callback: BodyResponseCallback<Schema$Zone>): void;
        /**
         * Deletes a GTM Zone.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.zones.delete({
         *     // GTM Zone's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/zones/{zone_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/zones/my-zone',
         *   });
         *   console.log(res.data);
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Containers$Workspaces$Zones$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a GTM Zone.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containers',
         *       'https://www.googleapis.com/auth/tagmanager.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.zones.get({
         *     // GTM Zone's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/zones/{zone_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/zones/my-zone',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "boundary": {},
         *   //   "childContainer": [],
         *   //   "containerId": "my_containerId",
         *   //   "fingerprint": "my_fingerprint",
         *   //   "name": "my_name",
         *   //   "notes": "my_notes",
         *   //   "parameter": [],
         *   //   "path": "my_path",
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "typeRestriction": {},
         *   //   "workspaceId": "my_workspaceId",
         *   //   "zoneId": "my_zoneId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Containers$Workspaces$Zones$Get, options?: MethodOptions): GaxiosPromise<Schema$Zone>;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Get, options: MethodOptions | BodyResponseCallback<Schema$Zone>, callback: BodyResponseCallback<Schema$Zone>): void;
        get(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Get, callback: BodyResponseCallback<Schema$Zone>): void;
        get(callback: BodyResponseCallback<Schema$Zone>): void;
        /**
         * Lists all GTM Zones of a GTM container workspace.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/tagmanager.edit.containers',
         *       'https://www.googleapis.com/auth/tagmanager.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.zones.list({
         *     // Continuation token for fetching the next page of results.
         *     pageToken: 'placeholder-value',
         *     // GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         *     parent:
         *       'accounts/my-account/containers/my-container/workspaces/my-workspace',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "zone": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$Containers$Workspaces$Zones$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$Containers$Workspaces$Zones$List, options?: MethodOptions): GaxiosPromise<Schema$ListZonesResponse>;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Zones$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Zones$List, options: MethodOptions | BodyResponseCallback<Schema$ListZonesResponse>, callback: BodyResponseCallback<Schema$ListZonesResponse>): void;
        list(params: Params$Resource$Accounts$Containers$Workspaces$Zones$List, callback: BodyResponseCallback<Schema$ListZonesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListZonesResponse>): void;
        /**
         * Reverts changes to a GTM Zone in a GTM Workspace.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.zones.revert({
         *     // When provided, this fingerprint must match the fingerprint of the zone in storage.
         *     fingerprint: 'placeholder-value',
         *     // GTM Zone's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/zones/{zone_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/zones/my-zone',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "zone": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Revert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        revert(params?: Params$Resource$Accounts$Containers$Workspaces$Zones$Revert, options?: MethodOptions): GaxiosPromise<Schema$RevertZoneResponse>;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Revert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Revert, options: MethodOptions | BodyResponseCallback<Schema$RevertZoneResponse>, callback: BodyResponseCallback<Schema$RevertZoneResponse>): void;
        revert(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Revert, callback: BodyResponseCallback<Schema$RevertZoneResponse>): void;
        revert(callback: BodyResponseCallback<Schema$RevertZoneResponse>): void;
        /**
         * Updates a GTM Zone.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.edit.containers'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.containers.workspaces.zones.update({
         *     // When provided, this fingerprint must match the fingerprint of the zone in storage.
         *     fingerprint: 'placeholder-value',
         *     // GTM Zone's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/zones/{zone_id\}
         *     path: 'accounts/my-account/containers/my-container/workspaces/my-workspace/zones/my-zone',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "accountId": "my_accountId",
         *       //   "boundary": {},
         *       //   "childContainer": [],
         *       //   "containerId": "my_containerId",
         *       //   "fingerprint": "my_fingerprint",
         *       //   "name": "my_name",
         *       //   "notes": "my_notes",
         *       //   "parameter": [],
         *       //   "path": "my_path",
         *       //   "tagManagerUrl": "my_tagManagerUrl",
         *       //   "typeRestriction": {},
         *       //   "workspaceId": "my_workspaceId",
         *       //   "zoneId": "my_zoneId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountId": "my_accountId",
         *   //   "boundary": {},
         *   //   "childContainer": [],
         *   //   "containerId": "my_containerId",
         *   //   "fingerprint": "my_fingerprint",
         *   //   "name": "my_name",
         *   //   "notes": "my_notes",
         *   //   "parameter": [],
         *   //   "path": "my_path",
         *   //   "tagManagerUrl": "my_tagManagerUrl",
         *   //   "typeRestriction": {},
         *   //   "workspaceId": "my_workspaceId",
         *   //   "zoneId": "my_zoneId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Containers$Workspaces$Zones$Update, options?: MethodOptions): GaxiosPromise<Schema$Zone>;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Update, options: MethodOptions | BodyResponseCallback<Schema$Zone>, callback: BodyResponseCallback<Schema$Zone>): void;
        update(params: Params$Resource$Accounts$Containers$Workspaces$Zones$Update, callback: BodyResponseCallback<Schema$Zone>): void;
        update(callback: BodyResponseCallback<Schema$Zone>): void;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Zones$Create extends StandardParameters {
        /**
         * GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Zone;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Zones$Delete extends StandardParameters {
        /**
         * GTM Zone's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/zones/{zone_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Zones$Get extends StandardParameters {
        /**
         * GTM Zone's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/zones/{zone_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Zones$List extends StandardParameters {
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * GTM Workspace's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Zones$Revert extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the zone in storage.
         */
        fingerprint?: string;
        /**
         * GTM Zone's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/zones/{zone_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$Containers$Workspaces$Zones$Update extends StandardParameters {
        /**
         * When provided, this fingerprint must match the fingerprint of the zone in storage.
         */
        fingerprint?: string;
        /**
         * GTM Zone's API relative path. Example: accounts/{account_id\}/containers/{container_id\}/workspaces/{workspace_id\}/zones/{zone_id\}
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Zone;
    }
    export class Resource$Accounts$User_permissions {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a user's Account & Container access.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.manage.users'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.user_permissions.create({
         *     // GTM Account's API relative path. Example: accounts/{account_id\}
         *     parent: 'accounts/my-account',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "accountAccess": {},
         *       //   "accountId": "my_accountId",
         *       //   "containerAccess": [],
         *       //   "emailAddress": "my_emailAddress",
         *       //   "path": "my_path"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountAccess": {},
         *   //   "accountId": "my_accountId",
         *   //   "containerAccess": [],
         *   //   "emailAddress": "my_emailAddress",
         *   //   "path": "my_path"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Accounts$User_permissions$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$User_permissions$Create, options?: MethodOptions): GaxiosPromise<Schema$UserPermission>;
        create(params: Params$Resource$Accounts$User_permissions$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$User_permissions$Create, options: MethodOptions | BodyResponseCallback<Schema$UserPermission>, callback: BodyResponseCallback<Schema$UserPermission>): void;
        create(params: Params$Resource$Accounts$User_permissions$Create, callback: BodyResponseCallback<Schema$UserPermission>): void;
        create(callback: BodyResponseCallback<Schema$UserPermission>): void;
        /**
         * Removes a user from the account, revoking access to it and all of its containers.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.manage.users'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.user_permissions.delete({
         *     // GTM UserPermission's API relative path. Example: accounts/{account_id\}/user_permissions/{user_permission_id\}
         *     path: 'accounts/my-account/user_permissions/my-user_permission',
         *   });
         *   console.log(res.data);
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Accounts$User_permissions$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$User_permissions$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Accounts$User_permissions$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$User_permissions$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$User_permissions$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a user's Account & Container access.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.manage.users'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.user_permissions.get({
         *     // GTM UserPermission's API relative path. Example: accounts/{account_id\}/user_permissions/{user_permission_id\}
         *     path: 'accounts/my-account/user_permissions/my-user_permission',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountAccess": {},
         *   //   "accountId": "my_accountId",
         *   //   "containerAccess": [],
         *   //   "emailAddress": "my_emailAddress",
         *   //   "path": "my_path"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$User_permissions$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$User_permissions$Get, options?: MethodOptions): GaxiosPromise<Schema$UserPermission>;
        get(params: Params$Resource$Accounts$User_permissions$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$User_permissions$Get, options: MethodOptions | BodyResponseCallback<Schema$UserPermission>, callback: BodyResponseCallback<Schema$UserPermission>): void;
        get(params: Params$Resource$Accounts$User_permissions$Get, callback: BodyResponseCallback<Schema$UserPermission>): void;
        get(callback: BodyResponseCallback<Schema$UserPermission>): void;
        /**
         * List all users that have access to the account along with Account and Container user access granted to each of them.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.manage.users'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.user_permissions.list({
         *     // Continuation token for fetching the next page of results.
         *     pageToken: 'placeholder-value',
         *     // GTM Accounts's API relative path. Example: accounts/{account_id\}
         *     parent: 'accounts/my-account',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "userPermission": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$User_permissions$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$User_permissions$List, options?: MethodOptions): GaxiosPromise<Schema$ListUserPermissionsResponse>;
        list(params: Params$Resource$Accounts$User_permissions$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$User_permissions$List, options: MethodOptions | BodyResponseCallback<Schema$ListUserPermissionsResponse>, callback: BodyResponseCallback<Schema$ListUserPermissionsResponse>): void;
        list(params: Params$Resource$Accounts$User_permissions$List, callback: BodyResponseCallback<Schema$ListUserPermissionsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListUserPermissionsResponse>): void;
        /**
         * Updates a user's Account & Container access.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/tagmanager.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const tagmanager = google.tagmanager('v2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/tagmanager.manage.users'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await tagmanager.accounts.user_permissions.update({
         *     // GTM UserPermission's API relative path. Example: accounts/{account_id\}/user_permissions/{user_permission_id\}
         *     path: 'accounts/my-account/user_permissions/my-user_permission',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "accountAccess": {},
         *       //   "accountId": "my_accountId",
         *       //   "containerAccess": [],
         *       //   "emailAddress": "my_emailAddress",
         *       //   "path": "my_path"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountAccess": {},
         *   //   "accountId": "my_accountId",
         *   //   "containerAccess": [],
         *   //   "emailAddress": "my_emailAddress",
         *   //   "path": "my_path"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$User_permissions$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$User_permissions$Update, options?: MethodOptions): GaxiosPromise<Schema$UserPermission>;
        update(params: Params$Resource$Accounts$User_permissions$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$User_permissions$Update, options: MethodOptions | BodyResponseCallback<Schema$UserPermission>, callback: BodyResponseCallback<Schema$UserPermission>): void;
        update(params: Params$Resource$Accounts$User_permissions$Update, callback: BodyResponseCallback<Schema$UserPermission>): void;
        update(callback: BodyResponseCallback<Schema$UserPermission>): void;
    }
    export interface Params$Resource$Accounts$User_permissions$Create extends StandardParameters {
        /**
         * GTM Account's API relative path. Example: accounts/{account_id\}
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$UserPermission;
    }
    export interface Params$Resource$Accounts$User_permissions$Delete extends StandardParameters {
        /**
         * GTM UserPermission's API relative path. Example: accounts/{account_id\}/user_permissions/{user_permission_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$User_permissions$Get extends StandardParameters {
        /**
         * GTM UserPermission's API relative path. Example: accounts/{account_id\}/user_permissions/{user_permission_id\}
         */
        path?: string;
    }
    export interface Params$Resource$Accounts$User_permissions$List extends StandardParameters {
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * GTM Accounts's API relative path. Example: accounts/{account_id\}
         */
        parent?: string;
    }
    export interface Params$Resource$Accounts$User_permissions$Update extends StandardParameters {
        /**
         * GTM UserPermission's API relative path. Example: accounts/{account_id\}/user_permissions/{user_permission_id\}
         */
        path?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$UserPermission;
    }
    export {};
}
