/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace firebase_v1beta1 {
    export interface Options extends GlobalOptions {
        version: 'v1beta1';
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
     * Firebase Management API
     *
     * The Firebase Management API enables programmatic setup and management of Firebase projects, including a project&#39;s Firebase resources and Firebase apps.
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const firebase = google.firebase('v1beta1');
     * ```
     */
    export class Firebase {
        context: APIRequestContext;
        availableProjects: Resource$Availableprojects;
        operations: Resource$Operations;
        projects: Resource$Projects;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * All fields are required.
     */
    export interface Schema$AddFirebaseRequest {
        /**
         * Deprecated. Instead, to set a Project's default GCP resource location, call [`FinalizeDefaultLocation`](../projects.defaultLocation/finalize) after you add Firebase resources to the GCP `Project`. The ID of the Project's default GCP resource location. The location must be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations).
         */
        locationId?: string | null;
    }
    export interface Schema$AddGoogleAnalyticsRequest {
        /**
         * The ID for the existing [Google Analytics account](http://www.google.com/analytics/) that you want to link with the `FirebaseProject`. Specifying this field will provision a new Google Analytics property in your Google Analytics account and associate the new property with the `FirebaseProject`.
         */
        analyticsAccountId?: string | null;
        /**
         * The ID for the existing Google Analytics property that you want to associate with the `FirebaseProject`.
         */
        analyticsPropertyId?: string | null;
    }
    export interface Schema$AdminSdkConfig {
        /**
         * The default Firebase Realtime Database URL.
         */
        databaseURL?: string | null;
        /**
         * The ID of the Project's default GCP resource location. The location is one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). This field is omitted if the default GCP resource location has not been finalized yet. To set a Project's default GCP resource location, call [`FinalizeDefaultLocation`](../projects.defaultLocation/finalize) after you add Firebase resources to the Project.
         */
        locationId?: string | null;
        /**
         * Immutable. A user-assigned unique identifier for the `FirebaseProject`. This identifier may appear in URLs or names for some Firebase resources associated with the Project, but it should generally be treated as a convenience alias to reference the Project.
         */
        projectId?: string | null;
        /**
         * The default Cloud Storage for Firebase storage bucket name.
         */
        storageBucket?: string | null;
    }
    export interface Schema$AnalyticsDetails {
        /**
         * The Analytics Property object associated with the specified `FirebaseProject`. This object contains the details of the Google Analytics property associated with the Project.
         */
        analyticsProperty?: Schema$AnalyticsProperty;
        /**
         *  - For `AndroidApps` and `IosApps`: a map of `app` to `streamId` for each Firebase App in the specified `FirebaseProject`. Each `app` and `streamId` appears only once. - For `WebApps`: a map of `app` to `streamId` and `measurementId` for each `WebApp` in the specified `FirebaseProject`. Each `app`, `streamId`, and `measurementId` appears only once.
         */
        streamMappings?: Schema$StreamMapping[];
    }
    /**
     * Details of a Google Analytics property
     */
    export interface Schema$AnalyticsProperty {
        /**
         * Output only. The ID of the [Google Analytics account](https://www.google.com/analytics/) for the Google Analytics property associated with the specified FirebaseProject.
         */
        analyticsAccountId?: string | null;
        /**
         * The display name of the Google Analytics property associated with the specified `FirebaseProject`.
         */
        displayName?: string | null;
        /**
         * The globally unique, Google-assigned identifier of the Google Analytics property associated with the specified `FirebaseProject`. If you called [`AddGoogleAnalytics`](../../v1beta1/projects/addGoogleAnalytics) to link the `FirebaseProject` with a Google Analytics account, the value in this `id` field is the same as the ID of the property either specified or provisioned with that call to `AddGoogleAnalytics`.
         */
        id?: string | null;
    }
    /**
     * Details of a Firebase App for Android.
     */
    export interface Schema$AndroidApp {
        /**
         * The key_id of the GCP ApiKey associated with this App. If set must have no restrictions, or only have restrictions that are valid for the associated Firebase App. Cannot be set in create requests, instead an existing valid API Key will be chosen, or if no valid API Keys exist, one will be provisioned for you. Cannot be set to an empty value in update requests.
         */
        apiKeyId?: string | null;
        /**
         * Output only. Immutable. The globally unique, Firebase-assigned identifier for the `AndroidApp`. This identifier should be treated as an opaque token, as the data format is not specified.
         */
        appId?: string | null;
        /**
         * The user-assigned display name for the `AndroidApp`.
         */
        displayName?: string | null;
        /**
         * The resource name of the AndroidApp, in the format: projects/ PROJECT_IDENTIFIER/androidApps/APP_ID * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.androidApps#AndroidApp.FIELDS.app_id)).
         */
        name?: string | null;
        /**
         * Immutable. The canonical package name of the Android app as would appear in the Google Play Developer Console.
         */
        packageName?: string | null;
        /**
         * Output only. Immutable. A user-assigned unique identifier of the parent FirebaseProject for the `AndroidApp`.
         */
        projectId?: string | null;
        /**
         * Output only. The lifecycle state of the App.
         */
        state?: string | null;
    }
    /**
     * Configuration metadata of a single Firebase App for Android.
     */
    export interface Schema$AndroidAppConfig {
        /**
         * The contents of the JSON configuration file.
         */
        configFileContents?: string | null;
        /**
         * The filename that the configuration artifact for the `AndroidApp` is typically saved as. For example: `google-services.json`
         */
        configFilename?: string | null;
    }
    /**
     * The default resources associated with the Project.
     */
    export interface Schema$DefaultResources {
        /**
         * The default Firebase Hosting site name, in the format: PROJECT_ID Though rare, your `projectId` might already be used as the name for an existing Hosting site in another project (learn more about creating non-default, [additional sites](https://firebase.google.com/docs/hosting/multisites)). In these cases, your `projectId` is appended with a hyphen then five alphanumeric characters to create your default Hosting site name. For example, if your `projectId` is `myproject123`, your default Hosting site name might be: `myproject123-a5c16`
         */
        hostingSite?: string | null;
        /**
         * The ID of the Project's default GCP resource location. The location is one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). This field is omitted if the default GCP resource location has not been finalized yet. To set a Project's default GCP resource location, call [`FinalizeDefaultLocation`](../projects.defaultLocation/finalize) after you add Firebase resources to the Project.
         */
        locationId?: string | null;
        /**
         * The default Firebase Realtime Database instance name, in the format: PROJECT_ID Though rare, your `projectId` might already be used as the name for an existing Realtime Database instance in another project (learn more about [database sharding](https://firebase.google.com/docs/database/usage/sharding)). In these cases, your `projectId` is appended with a hyphen then five alphanumeric characters to create your default Realtime Database instance name. For example, if your `projectId` is `myproject123`, your default database instance name might be: `myproject123-a5c16`
         */
        realtimeDatabaseInstance?: string | null;
        /**
         * The default Cloud Storage for Firebase storage bucket, in the format: PROJECT_ID.appspot.com
         */
        storageBucket?: string | null;
    }
    /**
     * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
     */
    export interface Schema$Empty {
    }
    export interface Schema$FinalizeDefaultLocationRequest {
        /**
         * The ID of the Project's default GCP resource location. The location must be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations).
         */
        locationId?: string | null;
    }
    /**
     * A high-level summary of an App.
     */
    export interface Schema$FirebaseAppInfo {
        /**
         * Output only. Immutable. The globally unique, Firebase-assigned identifier for the `WebApp`. This identifier should be treated as an opaque token, as the data format is not specified.
         */
        appId?: string | null;
        /**
         * The user-assigned display name of the Firebase App.
         */
        displayName?: string | null;
        /**
         * The resource name of the Firebase App, in the format: projects/PROJECT_ID /iosApps/APP_ID or projects/PROJECT_ID/androidApps/APP_ID or projects/ PROJECT_ID/webApps/APP_ID
         */
        name?: string | null;
        /**
         * Output only. Immutable. The platform-specific identifier of the App. *Note:* For most use cases, use `appId`, which is the canonical, globally unique identifier for referencing an App. This string is derived from a native identifier for each platform: `packageName` for an `AndroidApp`, `bundleId` for an `IosApp`, and `webId` for a `WebApp`. Its contents should be treated as opaque, as the native identifier format may change as platforms evolve. This string is only unique within a `FirebaseProject` and its associated Apps.
         */
        namespace?: string | null;
        /**
         * The platform of the Firebase App.
         */
        platform?: string | null;
        /**
         * Output only. The lifecycle state of the App.
         */
        state?: string | null;
    }
    /**
     * A `FirebaseProject` is the top-level Firebase entity. It is the container for Firebase Apps, Firebase Hosting sites, storage systems (Firebase Realtime Database, Cloud Firestore, Cloud Storage buckets), and other Firebase and Google Cloud Platform (GCP) resources. You create a `FirebaseProject` by calling AddFirebase and specifying an *existing* [GCP `Project`](https://cloud.google.com/resource-manager/reference/rest/v1/projects). This adds Firebase resources to the existing GCP `Project`. Since a FirebaseProject is actually also a GCP `Project`, a `FirebaseProject` has the same underlying GCP identifiers (`projectNumber` and `projectId`). This allows for easy interop with Google APIs.
     */
    export interface Schema$FirebaseProject {
        /**
         * The user-assigned display name of the Project.
         */
        displayName?: string | null;
        /**
         * The resource name of the Project, in the format: projects/PROJECT_IDENTIFIER PROJECT_IDENTIFIER: the Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`.
         */
        name?: string | null;
        /**
         * Immutable. A user-assigned unique identifier for the Project. This identifier may appear in URLs or names for some Firebase resources associated with the Project, but it should generally be treated as a convenience alias to reference the Project.
         */
        projectId?: string | null;
        /**
         * Immutable. The globally unique, Google-assigned canonical identifier for the Project. Use this identifier when configuring integrations and/or making API calls to Firebase or third-party services.
         */
        projectNumber?: string | null;
        /**
         * The default Firebase resources associated with the Project.
         */
        resources?: Schema$DefaultResources;
        /**
         * Output only. The lifecycle state of the Project. Updates to the state must be performed via com.google.cloudresourcemanager.v1.Projects.DeleteProject and com.google.cloudresourcemanager.v1.Projects.UndeleteProject
         */
        state?: string | null;
    }
    /**
     * Details of a Firebase App for iOS.
     */
    export interface Schema$IosApp {
        /**
         * The key_id of the GCP ApiKey associated with this App. If set must have no restrictions, or only have restrictions that are valid for the associated Firebase App. Cannot be set in create requests, instead an existing valid API Key will be chosen, or if no valid API Keys exist, one will be provisioned for you. Cannot be set to an empty value in update requests.
         */
        apiKeyId?: string | null;
        /**
         * Output only. Immutable. The globally unique, Firebase-assigned identifier for the `IosApp`. This identifier should be treated as an opaque token, as the data format is not specified.
         */
        appId?: string | null;
        /**
         * The automatically generated Apple ID assigned to the iOS app by Apple in the iOS App Store.
         */
        appStoreId?: string | null;
        /**
         * Immutable. The canonical bundle ID of the iOS app as it would appear in the iOS AppStore.
         */
        bundleId?: string | null;
        /**
         * The user-assigned display name for the `IosApp`.
         */
        displayName?: string | null;
        /**
         * The resource name of the IosApp, in the format: projects/PROJECT_IDENTIFIER /iosApps/APP_ID * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.iosApps#IosApp.FIELDS.app_id)).
         */
        name?: string | null;
        /**
         * Output only. Immutable. A user-assigned unique identifier of the parent FirebaseProject for the `IosApp`.
         */
        projectId?: string | null;
        /**
         * Output only. The lifecycle state of the App.
         */
        state?: string | null;
        /**
         * The Apple Developer Team ID associated with the App in the App Store.
         */
        teamId?: string | null;
    }
    /**
     * Configuration metadata of a single Firebase App for iOS.
     */
    export interface Schema$IosAppConfig {
        /**
         * The content of the XML configuration file.
         */
        configFileContents?: string | null;
        /**
         * The filename that the configuration artifact for the `IosApp` is typically saved as. For example: `GoogleService-Info.plist`
         */
        configFilename?: string | null;
    }
    export interface Schema$ListAndroidAppsResponse {
        /**
         * List of each `AndroidApp` associated with the specified `FirebaseProject`.
         */
        apps?: Schema$AndroidApp[];
        /**
         * If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent call to `ListAndroidApps` to find the next group of Apps. Page tokens are short-lived and should not be persisted.
         */
        nextPageToken?: string | null;
    }
    export interface Schema$ListAvailableLocationsResponse {
        /**
         * One page of results from a call to `ListAvailableLocations`.
         */
        locations?: Schema$Location[];
        /**
         * If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results and all available locations have been listed. This token can be used in a subsequent call to `ListAvailableLocations` to find more locations. Page tokens are short-lived and should not be persisted.
         */
        nextPageToken?: string | null;
    }
    export interface Schema$ListAvailableProjectsResponse {
        /**
         * If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent calls to `ListAvailableProjects` to find the next group of Projects. Page tokens are short-lived and should not be persisted.
         */
        nextPageToken?: string | null;
        /**
         * The list of GCP `Projects` which can have Firebase resources added to them.
         */
        projectInfo?: Schema$ProjectInfo[];
    }
    export interface Schema$ListFirebaseProjectsResponse {
        /**
         * If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent calls to `ListFirebaseProjects` to find the next group of Projects. Page tokens are short-lived and should not be persisted.
         */
        nextPageToken?: string | null;
        /**
         * One page of the list of Projects that are accessible to the caller.
         */
        results?: Schema$FirebaseProject[];
    }
    export interface Schema$ListIosAppsResponse {
        /**
         * List of each `IosApp` associated with the specified `FirebaseProject`.
         */
        apps?: Schema$IosApp[];
        /**
         * If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent call to `ListIosApps` to find the next group of Apps. Page tokens are short-lived and should not be persisted.
         */
        nextPageToken?: string | null;
    }
    export interface Schema$ListShaCertificatesResponse {
        /**
         * The list of each `ShaCertificate` associated with the `AndroidApp`.
         */
        certificates?: Schema$ShaCertificate[];
    }
    export interface Schema$ListWebAppsResponse {
        /**
         * List of each `WebApp` associated with the specified `FirebaseProject`.
         */
        apps?: Schema$WebApp[];
        /**
         * If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent call to `ListWebApps` to find the next group of Apps. Page tokens are short-lived and should not be persisted.
         */
        nextPageToken?: string | null;
    }
    /**
     * A GCP resource location that can be selected for a FirebaseProject.
     */
    export interface Schema$Location {
        /**
         * Products and services that are available in the GCP resource location.
         */
        features?: string[] | null;
        /**
         * The ID of the GCP resource location. It will be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations#types).
         */
        locationId?: string | null;
        /**
         * Indicates whether the GCP resource location is a [regional or multi-regional location](https://firebase.google.com/docs/projects/locations#types) for data replication.
         */
        type?: string | null;
    }
    /**
     * This is proto2's version of MessageSet.
     */
    export interface Schema$MessageSet {
    }
    /**
     * This resource represents a long-running operation that is the result of a network API call.
     */
    export interface Schema$Operation {
        /**
         * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
         */
        done?: boolean | null;
        /**
         * The error result of the operation in case of failure or cancellation.
         */
        error?: Schema$Status;
        /**
         * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
         */
        metadata?: {
            [key: string]: any;
        } | null;
        /**
         * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id\}`.
         */
        name?: string | null;
        /**
         * The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
         */
        response?: {
            [key: string]: any;
        } | null;
    }
    /**
     * A reference to a Google Cloud Platform (GCP) `Project`.
     */
    export interface Schema$ProjectInfo {
        /**
         * The user-assigned display name of the GCP `Project`, for example: `My App`
         */
        displayName?: string | null;
        /**
         * The ID of the Project's default GCP resource location. The location is one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). Not all Projects will have this field populated. If it is not populated, it means that the Project does not yet have a default GCP resource location. To set a Project's default GCP resource location, call [`FinalizeDefaultLocation`](../projects.defaultLocation/finalize) after you add Firebase resources to the Project.
         */
        locationId?: string | null;
        /**
         * The resource name of the GCP `Project` to which Firebase resources can be added, in the format: projects/PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
         */
        project?: string | null;
    }
    export interface Schema$RemoveAnalyticsRequest {
        /**
         * Optional. The ID of the Google Analytics property associated with the specified `FirebaseProject`. - If not set, then the Google Analytics property that is currently associated with the specified `FirebaseProject` is removed. - If set, and the specified `FirebaseProject` is currently associated with a *different* Google Analytics property, then the response is a `412 Precondition Failed` error.
         */
        analyticsPropertyId?: string | null;
    }
    export interface Schema$SearchFirebaseAppsResponse {
        /**
         * One page of results from a call to `SearchFirebaseApps`.
         */
        apps?: Schema$FirebaseAppInfo[];
        /**
         * If the result list is too large to fit in a single response, then a token is returned. This token can be used in a subsequent calls to `SearchFirebaseApps` to find the next group of Apps. Page tokens are short-lived and should not be persisted.
         */
        nextPageToken?: string | null;
    }
    /**
     * A SHA-1 or SHA-256 certificate associated with the AndroidApp.
     */
    export interface Schema$ShaCertificate {
        /**
         * The type of SHA certificate encoded in the hash.
         */
        certType?: string | null;
        /**
         * The resource name of the ShaCertificate for the AndroidApp, in the format: projects/PROJECT_IDENTIFIER/androidApps/APP_ID/sha/SHA_HASH * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.androidApps#AndroidApp.FIELDS.app_id)). * SHA_HASH: the certificate hash for the App (see [`shaHash`](../projects.androidApps.sha#ShaCertificate.FIELDS.sha_hash)).
         */
        name?: string | null;
        /**
         * The certificate hash for the `AndroidApp`.
         */
        shaHash?: string | null;
    }
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    export interface Schema$Status {
        /**
         * The status code, which should be an enum value of google.rpc.Code.
         */
        code?: number | null;
        /**
         * A list of messages that carry the error details. There is a common set of message types for APIs to use.
         */
        details?: Array<{
            [key: string]: any;
        }> | null;
        /**
         * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
         */
        message?: string | null;
    }
    /**
     * Wire-format for a Status object
     */
    export interface Schema$StatusProto {
        /**
         * The canonical error code (see codes.proto) that most closely corresponds to this status. May be missing.
         */
        canonicalCode?: number | null;
        /**
         * Numeric code drawn from the space specified below. Often, this is the canonical error space, and code is drawn from google3/util/task/codes.proto
         */
        code?: number | null;
        /**
         * Detail message
         */
        message?: string | null;
        /**
         * message_set associates an arbitrary proto message with the status.
         */
        messageSet?: Schema$MessageSet;
        /**
         * The following are usually only present when code != 0 Space to which this status belongs
         */
        space?: string | null;
    }
    /**
     * A mapping of a Firebase App to a Google Analytics data stream
     */
    export interface Schema$StreamMapping {
        /**
         * The resource name of the Firebase App associated with the Google Analytics data stream, in the format: projects/PROJECT_IDENTIFIER/androidApps/APP_ID or projects/PROJECT_IDENTIFIER/iosApps/APP_ID or projects/PROJECT_IDENTIFIER /webApps/APP_ID Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
         */
        app?: string | null;
        /**
         * Applicable for Firebase Web Apps only. The unique Google-assigned identifier of the Google Analytics web stream associated with the Firebase Web App. Firebase SDKs use this ID to interact with Google Analytics APIs. Learn more about this ID and Google Analytics web streams in the [Analytics documentation](https://support.google.com/analytics/answer/9304153).
         */
        measurementId?: string | null;
        /**
         * The unique Google-assigned identifier of the Google Analytics data stream associated with the Firebase App. Learn more about Google Analytics data streams in the [Analytics documentation](https://support.google.com/analytics/answer/9303323).
         */
        streamId?: string | null;
    }
    /**
     * Details of a Firebase App for the web.
     */
    export interface Schema$WebApp {
        /**
         * The key_id of the GCP ApiKey associated with this App. If set must have no restrictions, or only have restrictions that are valid for the associated Firebase App. Cannot be set in create requests, instead an existing valid API Key will be chosen, or if no valid API Keys exist, one will be provisioned for you. Cannot be set to an empty value in update requests.
         */
        apiKeyId?: string | null;
        /**
         * Output only. Immutable. The globally unique, Firebase-assigned identifier for the `WebApp`. This identifier should be treated as an opaque token, as the data format is not specified.
         */
        appId?: string | null;
        /**
         * The URLs where the `WebApp` is hosted.
         */
        appUrls?: string[] | null;
        /**
         * The user-assigned display name for the `WebApp`.
         */
        displayName?: string | null;
        /**
         * The resource name of the WebApp, in the format: projects/PROJECT_IDENTIFIER /webApps/APP_ID * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.webApps#WebApp.FIELDS.app_id)).
         */
        name?: string | null;
        /**
         * Output only. Immutable. A user-assigned unique identifier of the parent FirebaseProject for the `WebApp`.
         */
        projectId?: string | null;
        /**
         * Output only. The lifecycle state of the App.
         */
        state?: string | null;
        /**
         * Output only. Immutable. A unique, Firebase-assigned identifier for the `WebApp`. This identifier is only used to populate the `namespace` value for the `WebApp`. For most use cases, use `appId` to identify or reference the App. The `webId` value is only unique within a `FirebaseProject` and its associated Apps.
         */
        webId?: string | null;
    }
    /**
     * Configuration metadata of a single Firebase App for the web.
     */
    export interface Schema$WebAppConfig {
        /**
         * The API key associated with the `WebApp`.
         */
        apiKey?: string | null;
        /**
         * Immutable. The globally unique, Firebase-assigned identifier for the `WebApp`.
         */
        appId?: string | null;
        /**
         * The domain Firebase Auth configures for OAuth redirects, in the format: PROJECT_ID.firebaseapp.com
         */
        authDomain?: string | null;
        /**
         * The default Firebase Realtime Database URL.
         */
        databaseURL?: string | null;
        /**
         * The ID of the Project's default GCP resource location. The location is one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). This field is omitted if the default GCP resource location has not been finalized yet. To set a Project's default GCP resource location, call [`FinalizeDefaultLocation`](../projects.defaultLocation/finalize) after you add Firebase resources to the Project.
         */
        locationId?: string | null;
        /**
         * The unique Google-assigned identifier of the Google Analytics web stream associated with the `WebApp`. Firebase SDKs use this ID to interact with Google Analytics APIs. This field is only present if the `WebApp` is linked to a web stream in a Google Analytics App + Web property. Learn more about this ID and Google Analytics web streams in the [Analytics documentation](https://support.google.com/analytics/answer/9304153). To generate a `measurementId` and link the `WebApp` with a Google Analytics web stream, call [`AddGoogleAnalytics`](../../v1beta1/projects/addGoogleAnalytics). For apps using the Firebase JavaScript SDK v7.20.0 and later, Firebase dynamically fetches the `measurementId` when your app initializes Analytics. Having this ID in your config object is optional, but it does serve as a fallback in the rare case that the dynamic fetch fails.
         */
        measurementId?: string | null;
        /**
         * The sender ID for use with Firebase Cloud Messaging.
         */
        messagingSenderId?: string | null;
        /**
         * Immutable. A user-assigned unique identifier for the `FirebaseProject`.
         */
        projectId?: string | null;
        /**
         * The default Cloud Storage for Firebase storage bucket name.
         */
        storageBucket?: string | null;
    }
    export class Resource$Availableprojects {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Lists each [Google Cloud Platform (GCP) `Project`] (https://cloud.google.com/resource-manager/reference/rest/v1/projects) that can have Firebase resources added to it. A Project will only be listed if: - The caller has sufficient [Google IAM](https://cloud.google.com/iam) permissions to call AddFirebase. - The Project is not already a FirebaseProject. - The Project is not in an Organization which has policies that prevent Firebase resources from being added.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/cloud-platform.read-only',
         *       'https://www.googleapis.com/auth/firebase',
         *       'https://www.googleapis.com/auth/firebase.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.availableProjects.list({
         *     // The maximum number of Projects to return in the response. The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), the server will impose its own limit. This value cannot be negative.
         *     pageSize: 'placeholder-value',
         *     // Token returned from a previous call to `ListAvailableProjects` indicating where in the set of Projects to resume listing.
         *     pageToken: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "projectInfo": []
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
        list(params: Params$Resource$Availableprojects$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Availableprojects$List, options?: MethodOptions): GaxiosPromise<Schema$ListAvailableProjectsResponse>;
        list(params: Params$Resource$Availableprojects$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Availableprojects$List, options: MethodOptions | BodyResponseCallback<Schema$ListAvailableProjectsResponse>, callback: BodyResponseCallback<Schema$ListAvailableProjectsResponse>): void;
        list(params: Params$Resource$Availableprojects$List, callback: BodyResponseCallback<Schema$ListAvailableProjectsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListAvailableProjectsResponse>): void;
    }
    export interface Params$Resource$Availableprojects$List extends StandardParameters {
        /**
         * The maximum number of Projects to return in the response. The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), the server will impose its own limit. This value cannot be negative.
         */
        pageSize?: number;
        /**
         * Token returned from a previous call to `ListAvailableProjects` indicating where in the set of Projects to resume listing.
         */
        pageToken?: string;
    }
    export class Resource$Operations {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/cloud-platform.read-only',
         *       'https://www.googleapis.com/auth/firebase',
         *       'https://www.googleapis.com/auth/firebase.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.operations.get({
         *     // The name of the operation resource.
         *     name: 'operations/.*',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "done": false,
         *   //   "error": {},
         *   //   "metadata": {},
         *   //   "name": "my_name",
         *   //   "response": {}
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
        get(params: Params$Resource$Operations$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Operations$Get, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        get(params: Params$Resource$Operations$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Operations$Get, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        get(params: Params$Resource$Operations$Get, callback: BodyResponseCallback<Schema$Operation>): void;
        get(callback: BodyResponseCallback<Schema$Operation>): void;
    }
    export interface Params$Resource$Operations$Get extends StandardParameters {
        /**
         * The name of the operation resource.
         */
        name?: string;
    }
    export class Resource$Projects {
        context: APIRequestContext;
        androidApps: Resource$Projects$Androidapps;
        availableLocations: Resource$Projects$Availablelocations;
        defaultLocation: Resource$Projects$Defaultlocation;
        iosApps: Resource$Projects$Iosapps;
        webApps: Resource$Projects$Webapps;
        constructor(context: APIRequestContext);
        /**
         * Adds Firebase resources to the specified existing [Google Cloud Platform (GCP) `Project`] (https://cloud.google.com/resource-manager/reference/rest/v1/projects). Since a FirebaseProject is actually also a GCP `Project`, a `FirebaseProject` has the same underlying GCP identifiers (`projectNumber` and `projectId`). This allows for easy interop with Google APIs. The result of this call is an [`Operation`](../../v1beta1/operations). Poll the `Operation` to track the provisioning process by calling GetOperation until [`done`](../../v1beta1/operations#Operation.FIELDS.done) is `true`. When `done` is `true`, the `Operation` has either succeeded or failed. If the `Operation` succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) is set to a FirebaseProject; if the `Operation` failed, its [`error`](../../v1beta1/operations#Operation.FIELDS.error) is set to a google.rpc.Status. The `Operation` is automatically deleted after completion, so there is no need to call DeleteOperation. This method does not modify any billing account information on the underlying GCP `Project`. To call `AddFirebase`, a project member or service account must have the following permissions (the IAM roles of Editor and Owner contain these permissions): `firebase.projects.update`, `resourcemanager.projects.get`, `serviceusage.services.enable`, and `serviceusage.services.get`.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/firebase',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.projects.addFirebase({
         *     // The resource name of the GCP `Project` to which Firebase resources will be added, in the format: projects/PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values. After calling `AddFirebase`, the unique Project identifiers ( [`projectNumber`](https://cloud.google.com/resource-manager/reference/rest/v1/projects#Project.FIELDS.project_number) and [`projectId`](https://cloud.google.com/resource-manager/reference/rest/v1/projects#Project.FIELDS.project_id)) of the underlying GCP `Project` are also the identifiers of the FirebaseProject.
         *     project: 'projects/my-project',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "locationId": "my_locationId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "done": false,
         *   //   "error": {},
         *   //   "metadata": {},
         *   //   "name": "my_name",
         *   //   "response": {}
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
        addFirebase(params: Params$Resource$Projects$Addfirebase, options: StreamMethodOptions): GaxiosPromise<Readable>;
        addFirebase(params?: Params$Resource$Projects$Addfirebase, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        addFirebase(params: Params$Resource$Projects$Addfirebase, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        addFirebase(params: Params$Resource$Projects$Addfirebase, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        addFirebase(params: Params$Resource$Projects$Addfirebase, callback: BodyResponseCallback<Schema$Operation>): void;
        addFirebase(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Links the specified FirebaseProject with an existing [Google Analytics account](http://www.google.com/analytics/). Using this call, you can either: - Specify an `analyticsAccountId` to provision a new Google Analytics property within the specified account and associate the new property with the `FirebaseProject`. - Specify an existing `analyticsPropertyId` to associate the property with the `FirebaseProject`. Note that when you call `AddGoogleAnalytics`: 1. The first check determines if any existing data streams in the Google Analytics property correspond to any existing Firebase Apps in the `FirebaseProject` (based on the `packageName` or `bundleId` associated with the data stream). Then, as applicable, the data streams and apps are linked. Note that this auto-linking only applies to `AndroidApps` and `IosApps`. 2. If no corresponding data streams are found for the Firebase Apps, new data streams are provisioned in the Google Analytics property for each of the Firebase Apps. Note that a new data stream is always provisioned for a Web App even if it was previously associated with a data stream in the Analytics property. Learn more about the hierarchy and structure of Google Analytics accounts in the [Analytics documentation](https://support.google.com/analytics/answer/9303323). The result of this call is an [`Operation`](../../v1beta1/operations). Poll the `Operation` to track the provisioning process by calling GetOperation until [`done`](../../v1beta1/operations#Operation.FIELDS.done) is `true`. When `done` is `true`, the `Operation` has either succeeded or failed. If the `Operation` succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) is set to an AnalyticsDetails; if the `Operation` failed, its [`error`](../../v1beta1/operations#Operation.FIELDS.error) is set to a google.rpc.Status. To call `AddGoogleAnalytics`, a project member must be an Owner for the existing `FirebaseProject` and have the [`Edit` permission](https://support.google.com/analytics/answer/2884495) for the Google Analytics account. If the `FirebaseProject` already has Google Analytics enabled, and you call `AddGoogleAnalytics` using an `analyticsPropertyId` that's different from the currently associated property, then the call will fail. Analytics may have already been enabled in the Firebase console or by specifying `timeZone` and `regionCode` in the call to [`AddFirebase`](../../v1beta1/projects/addFirebase).
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/firebase',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.projects.addGoogleAnalytics({
         *     // The resource name of the FirebaseProject to link to an existing Google Analytics account, in the format: projects/PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
         *     parent: 'projects/my-project',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "analyticsAccountId": "my_analyticsAccountId",
         *       //   "analyticsPropertyId": "my_analyticsPropertyId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "done": false,
         *   //   "error": {},
         *   //   "metadata": {},
         *   //   "name": "my_name",
         *   //   "response": {}
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
        addGoogleAnalytics(params: Params$Resource$Projects$Addgoogleanalytics, options: StreamMethodOptions): GaxiosPromise<Readable>;
        addGoogleAnalytics(params?: Params$Resource$Projects$Addgoogleanalytics, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        addGoogleAnalytics(params: Params$Resource$Projects$Addgoogleanalytics, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        addGoogleAnalytics(params: Params$Resource$Projects$Addgoogleanalytics, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        addGoogleAnalytics(params: Params$Resource$Projects$Addgoogleanalytics, callback: BodyResponseCallback<Schema$Operation>): void;
        addGoogleAnalytics(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Gets the specified FirebaseProject.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/cloud-platform.read-only',
         *       'https://www.googleapis.com/auth/firebase',
         *       'https://www.googleapis.com/auth/firebase.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.projects.get({
         *     // The resource name of the FirebaseProject, in the format: projects/ PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
         *     name: 'projects/my-project',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "displayName": "my_displayName",
         *   //   "name": "my_name",
         *   //   "projectId": "my_projectId",
         *   //   "projectNumber": "my_projectNumber",
         *   //   "resources": {},
         *   //   "state": "my_state"
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
        get(params: Params$Resource$Projects$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Get, options?: MethodOptions): GaxiosPromise<Schema$FirebaseProject>;
        get(params: Params$Resource$Projects$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Get, options: MethodOptions | BodyResponseCallback<Schema$FirebaseProject>, callback: BodyResponseCallback<Schema$FirebaseProject>): void;
        get(params: Params$Resource$Projects$Get, callback: BodyResponseCallback<Schema$FirebaseProject>): void;
        get(callback: BodyResponseCallback<Schema$FirebaseProject>): void;
        /**
         * Gets the configuration artifact associated with the specified FirebaseProject, which can be used by servers to simplify initialization. Typically, this configuration is used with the Firebase Admin SDK [initializeApp](https://firebase.google.com/docs/admin/setup#initialize_the_sdk) command.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/cloud-platform.read-only',
         *       'https://www.googleapis.com/auth/firebase',
         *       'https://www.googleapis.com/auth/firebase.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.projects.getAdminSdkConfig({
         *     // The resource name of the FirebaseProject, in the format: projects/ PROJECT_IDENTIFIER/adminSdkConfig Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
         *     name: 'projects/my-project/adminSdkConfig',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "databaseURL": "my_databaseURL",
         *   //   "locationId": "my_locationId",
         *   //   "projectId": "my_projectId",
         *   //   "storageBucket": "my_storageBucket"
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
        getAdminSdkConfig(params: Params$Resource$Projects$Getadminsdkconfig, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getAdminSdkConfig(params?: Params$Resource$Projects$Getadminsdkconfig, options?: MethodOptions): GaxiosPromise<Schema$AdminSdkConfig>;
        getAdminSdkConfig(params: Params$Resource$Projects$Getadminsdkconfig, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getAdminSdkConfig(params: Params$Resource$Projects$Getadminsdkconfig, options: MethodOptions | BodyResponseCallback<Schema$AdminSdkConfig>, callback: BodyResponseCallback<Schema$AdminSdkConfig>): void;
        getAdminSdkConfig(params: Params$Resource$Projects$Getadminsdkconfig, callback: BodyResponseCallback<Schema$AdminSdkConfig>): void;
        getAdminSdkConfig(callback: BodyResponseCallback<Schema$AdminSdkConfig>): void;
        /**
         * Gets the Google Analytics details currently associated with the specified FirebaseProject. If the `FirebaseProject` is not yet linked to Google Analytics, then the response to `GetAnalyticsDetails` is `NOT_FOUND`.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/cloud-platform.read-only',
         *       'https://www.googleapis.com/auth/firebase',
         *       'https://www.googleapis.com/auth/firebase.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.projects.getAnalyticsDetails({
         *     // The resource name of the FirebaseProject, in the format: projects/ PROJECT_IDENTIFIER/analyticsDetails Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
         *     name: 'projects/my-project/analyticsDetails',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "analyticsProperty": {},
         *   //   "streamMappings": []
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
        getAnalyticsDetails(params: Params$Resource$Projects$Getanalyticsdetails, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getAnalyticsDetails(params?: Params$Resource$Projects$Getanalyticsdetails, options?: MethodOptions): GaxiosPromise<Schema$AnalyticsDetails>;
        getAnalyticsDetails(params: Params$Resource$Projects$Getanalyticsdetails, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getAnalyticsDetails(params: Params$Resource$Projects$Getanalyticsdetails, options: MethodOptions | BodyResponseCallback<Schema$AnalyticsDetails>, callback: BodyResponseCallback<Schema$AnalyticsDetails>): void;
        getAnalyticsDetails(params: Params$Resource$Projects$Getanalyticsdetails, callback: BodyResponseCallback<Schema$AnalyticsDetails>): void;
        getAnalyticsDetails(callback: BodyResponseCallback<Schema$AnalyticsDetails>): void;
        /**
         * Lists each FirebaseProject accessible to the caller. The elements are returned in no particular order, but they will be a consistent view of the Projects when additional requests are made with a `pageToken`. This method is eventually consistent with Project mutations, which means newly provisioned Projects and recent modifications to existing Projects might not be reflected in the set of Projects. The list will include only ACTIVE Projects. Use GetFirebaseProject for consistent reads as well as for additional Project details.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/cloud-platform.read-only',
         *       'https://www.googleapis.com/auth/firebase',
         *       'https://www.googleapis.com/auth/firebase.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.projects.list({
         *     // The maximum number of Projects to return in the response. The server may return fewer than this at its discretion. If no value is specified (or too large a value is specified), the server will impose its own limit. This value cannot be negative.
         *     pageSize: 'placeholder-value',
         *     // Token returned from a previous call to `ListFirebaseProjects` indicating where in the set of Projects to resume listing.
         *     pageToken: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "results": []
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
        list(params: Params$Resource$Projects$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$List, options?: MethodOptions): GaxiosPromise<Schema$ListFirebaseProjectsResponse>;
        list(params: Params$Resource$Projects$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$List, options: MethodOptions | BodyResponseCallback<Schema$ListFirebaseProjectsResponse>, callback: BodyResponseCallback<Schema$ListFirebaseProjectsResponse>): void;
        list(params: Params$Resource$Projects$List, callback: BodyResponseCallback<Schema$ListFirebaseProjectsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListFirebaseProjectsResponse>): void;
        /**
         * Updates the attributes of the specified FirebaseProject. All [query parameters](#query-parameters) are required.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/firebase',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.projects.patch({
         *     // The resource name of the Project, in the format: projects/PROJECT_IDENTIFIER PROJECT_IDENTIFIER: the Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`.
         *     name: 'projects/my-project',
         *     // Specifies which fields to update. If this list is empty, then no state will be updated. Note that the fields `name`, `projectId`, and `projectNumber` are all immutable.
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "displayName": "my_displayName",
         *       //   "name": "my_name",
         *       //   "projectId": "my_projectId",
         *       //   "projectNumber": "my_projectNumber",
         *       //   "resources": {},
         *       //   "state": "my_state"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "displayName": "my_displayName",
         *   //   "name": "my_name",
         *   //   "projectId": "my_projectId",
         *   //   "projectNumber": "my_projectNumber",
         *   //   "resources": {},
         *   //   "state": "my_state"
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
        patch(params: Params$Resource$Projects$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Patch, options?: MethodOptions): GaxiosPromise<Schema$FirebaseProject>;
        patch(params: Params$Resource$Projects$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Patch, options: MethodOptions | BodyResponseCallback<Schema$FirebaseProject>, callback: BodyResponseCallback<Schema$FirebaseProject>): void;
        patch(params: Params$Resource$Projects$Patch, callback: BodyResponseCallback<Schema$FirebaseProject>): void;
        patch(callback: BodyResponseCallback<Schema$FirebaseProject>): void;
        /**
         * Unlinks the specified FirebaseProject from its Google Analytics account. This call removes the association of the specified `FirebaseProject` with its current Google Analytics property. However, this call does not delete the Google Analytics resources, such as the Google Analytics property or any data streams. These resources may be re-associated later to the `FirebaseProject` by calling [`AddGoogleAnalytics`](../../v1beta1/projects/addGoogleAnalytics) and specifying the same `analyticsPropertyId`. For Android Apps and iOS Apps, this call re-links data streams with their corresponding apps. However, for Web Apps, this call provisions a *new* data stream for each Web App. To call `RemoveAnalytics`, a project member must be an Owner for the `FirebaseProject`.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/firebase',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.projects.removeAnalytics({
         *     // The resource name of the FirebaseProject to unlink from its Google Analytics account, in the format: projects/PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
         *     parent: 'projects/my-project',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "analyticsPropertyId": "my_analyticsPropertyId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
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
        removeAnalytics(params: Params$Resource$Projects$Removeanalytics, options: StreamMethodOptions): GaxiosPromise<Readable>;
        removeAnalytics(params?: Params$Resource$Projects$Removeanalytics, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        removeAnalytics(params: Params$Resource$Projects$Removeanalytics, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        removeAnalytics(params: Params$Resource$Projects$Removeanalytics, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        removeAnalytics(params: Params$Resource$Projects$Removeanalytics, callback: BodyResponseCallback<Schema$Empty>): void;
        removeAnalytics(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Lists all available Apps for the specified FirebaseProject. This is a convenience method. Typically, interaction with an App should be done using the platform-specific service, but some tool use-cases require a summary of all known Apps (such as for App selector interfaces).
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/cloud-platform.read-only',
         *       'https://www.googleapis.com/auth/firebase',
         *       'https://www.googleapis.com/auth/firebase.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.projects.searchApps({
         *     // A query string compatible with Google's [AIP-160](https://google.aip.dev/160) standard. Use any of the following fields in a query: * [`app_id`](../projects.apps#FirebaseAppInfo.FIELDS.app_id) * [`namespace`](../projects.apps#FirebaseAppInfo.FIELDS.namespace) * [`platform`](../projects.apps#FirebaseAppInfo.FIELDS.platform) We also support the following "virtual" fields (fields which are not actually part of the returned resource object, but can be queried as if they are pre-populated with specific values): * `sha1_hash`: This field is considered to be a repeated `string` field, populated with the list of all SHA-1 certificate fingerprints registered with the app. This list is empty if the app is not an Android app. * `sha256_hash`: This field is considered to be a repeated `string` field, populated with the list of all SHA-256 certificate fingerprints registered with the app. This list is empty if the app is not an Android app. * `app_store_id`: This field is considered to be a singular `string` field, populated with the Apple App Store ID registered with the app. This field is empty if the app is not an iOS app. * `team_id`: This field is considered to be a singular `string` field, populated with the Apple team ID registered with the app. This field is empty if the app is not an iOS app.
         *     filter: 'placeholder-value',
         *     // The maximum number of Apps to return in the response. The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit. This value cannot be negative.
         *     pageSize: 'placeholder-value',
         *     // Token returned from a previous call to `SearchFirebaseApps` indicating where in the set of Apps to resume listing.
         *     pageToken: 'placeholder-value',
         *     // The parent FirebaseProject for which to list Apps, in the format: projects/ PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
         *     parent: 'projects/my-project',
         *     // Controls whether Apps in the DELETED state should be returned. Defaults to false.
         *     showDeleted: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "apps": [],
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
        searchApps(params: Params$Resource$Projects$Searchapps, options: StreamMethodOptions): GaxiosPromise<Readable>;
        searchApps(params?: Params$Resource$Projects$Searchapps, options?: MethodOptions): GaxiosPromise<Schema$SearchFirebaseAppsResponse>;
        searchApps(params: Params$Resource$Projects$Searchapps, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        searchApps(params: Params$Resource$Projects$Searchapps, options: MethodOptions | BodyResponseCallback<Schema$SearchFirebaseAppsResponse>, callback: BodyResponseCallback<Schema$SearchFirebaseAppsResponse>): void;
        searchApps(params: Params$Resource$Projects$Searchapps, callback: BodyResponseCallback<Schema$SearchFirebaseAppsResponse>): void;
        searchApps(callback: BodyResponseCallback<Schema$SearchFirebaseAppsResponse>): void;
    }
    export interface Params$Resource$Projects$Addfirebase extends StandardParameters {
        /**
         * The resource name of the GCP `Project` to which Firebase resources will be added, in the format: projects/PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values. After calling `AddFirebase`, the unique Project identifiers ( [`projectNumber`](https://cloud.google.com/resource-manager/reference/rest/v1/projects#Project.FIELDS.project_number) and [`projectId`](https://cloud.google.com/resource-manager/reference/rest/v1/projects#Project.FIELDS.project_id)) of the underlying GCP `Project` are also the identifiers of the FirebaseProject.
         */
        project?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AddFirebaseRequest;
    }
    export interface Params$Resource$Projects$Addgoogleanalytics extends StandardParameters {
        /**
         * The resource name of the FirebaseProject to link to an existing Google Analytics account, in the format: projects/PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AddGoogleAnalyticsRequest;
    }
    export interface Params$Resource$Projects$Get extends StandardParameters {
        /**
         * The resource name of the FirebaseProject, in the format: projects/ PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Getadminsdkconfig extends StandardParameters {
        /**
         * The resource name of the FirebaseProject, in the format: projects/ PROJECT_IDENTIFIER/adminSdkConfig Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Getanalyticsdetails extends StandardParameters {
        /**
         * The resource name of the FirebaseProject, in the format: projects/ PROJECT_IDENTIFIER/analyticsDetails Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$List extends StandardParameters {
        /**
         * The maximum number of Projects to return in the response. The server may return fewer than this at its discretion. If no value is specified (or too large a value is specified), the server will impose its own limit. This value cannot be negative.
         */
        pageSize?: number;
        /**
         * Token returned from a previous call to `ListFirebaseProjects` indicating where in the set of Projects to resume listing.
         */
        pageToken?: string;
    }
    export interface Params$Resource$Projects$Patch extends StandardParameters {
        /**
         * The resource name of the Project, in the format: projects/PROJECT_IDENTIFIER PROJECT_IDENTIFIER: the Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`.
         */
        name?: string;
        /**
         * Specifies which fields to update. If this list is empty, then no state will be updated. Note that the fields `name`, `projectId`, and `projectNumber` are all immutable.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$FirebaseProject;
    }
    export interface Params$Resource$Projects$Removeanalytics extends StandardParameters {
        /**
         * The resource name of the FirebaseProject to unlink from its Google Analytics account, in the format: projects/PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RemoveAnalyticsRequest;
    }
    export interface Params$Resource$Projects$Searchapps extends StandardParameters {
        /**
         * A query string compatible with Google's [AIP-160](https://google.aip.dev/160) standard. Use any of the following fields in a query: * [`app_id`](../projects.apps#FirebaseAppInfo.FIELDS.app_id) * [`namespace`](../projects.apps#FirebaseAppInfo.FIELDS.namespace) * [`platform`](../projects.apps#FirebaseAppInfo.FIELDS.platform) We also support the following "virtual" fields (fields which are not actually part of the returned resource object, but can be queried as if they are pre-populated with specific values): * `sha1_hash`: This field is considered to be a repeated `string` field, populated with the list of all SHA-1 certificate fingerprints registered with the app. This list is empty if the app is not an Android app. * `sha256_hash`: This field is considered to be a repeated `string` field, populated with the list of all SHA-256 certificate fingerprints registered with the app. This list is empty if the app is not an Android app. * `app_store_id`: This field is considered to be a singular `string` field, populated with the Apple App Store ID registered with the app. This field is empty if the app is not an iOS app. * `team_id`: This field is considered to be a singular `string` field, populated with the Apple team ID registered with the app. This field is empty if the app is not an iOS app.
         */
        filter?: string;
        /**
         * The maximum number of Apps to return in the response. The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit. This value cannot be negative.
         */
        pageSize?: number;
        /**
         * Token returned from a previous call to `SearchFirebaseApps` indicating where in the set of Apps to resume listing.
         */
        pageToken?: string;
        /**
         * The parent FirebaseProject for which to list Apps, in the format: projects/ PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
         */
        parent?: string;
        /**
         * Controls whether Apps in the DELETED state should be returned. Defaults to false.
         */
        showDeleted?: boolean;
    }
    export class Resource$Projects$Androidapps {
        context: APIRequestContext;
        sha: Resource$Projects$Androidapps$Sha;
        constructor(context: APIRequestContext);
        /**
         * Requests the creation of a new AndroidApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/firebase',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.projects.androidApps.create({
         *     // The resource name of the parent FirebaseProject in which to create an AndroidApp, in the format: projects/PROJECT_IDENTIFIER/androidApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
         *     parent: 'projects/my-project',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "apiKeyId": "my_apiKeyId",
         *       //   "appId": "my_appId",
         *       //   "displayName": "my_displayName",
         *       //   "name": "my_name",
         *       //   "packageName": "my_packageName",
         *       //   "projectId": "my_projectId",
         *       //   "state": "my_state"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "done": false,
         *   //   "error": {},
         *   //   "metadata": {},
         *   //   "name": "my_name",
         *   //   "response": {}
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
        create(params: Params$Resource$Projects$Androidapps$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Androidapps$Create, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        create(params: Params$Resource$Projects$Androidapps$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Androidapps$Create, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        create(params: Params$Resource$Projects$Androidapps$Create, callback: BodyResponseCallback<Schema$Operation>): void;
        create(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Gets the specified AndroidApp.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/cloud-platform.read-only',
         *       'https://www.googleapis.com/auth/firebase',
         *       'https://www.googleapis.com/auth/firebase.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.projects.androidApps.get({
         *     // The resource name of the AndroidApp, in the format: projects/ PROJECT_IDENTIFIER/androidApps/APP_ID Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/androidApps/APP_ID Refer to the `AndroidApp` [`name`](../projects.androidApps#AndroidApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values.
         *     name: 'projects/my-project/androidApps/my-androidApp',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "apiKeyId": "my_apiKeyId",
         *   //   "appId": "my_appId",
         *   //   "displayName": "my_displayName",
         *   //   "name": "my_name",
         *   //   "packageName": "my_packageName",
         *   //   "projectId": "my_projectId",
         *   //   "state": "my_state"
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
        get(params: Params$Resource$Projects$Androidapps$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Androidapps$Get, options?: MethodOptions): GaxiosPromise<Schema$AndroidApp>;
        get(params: Params$Resource$Projects$Androidapps$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Androidapps$Get, options: MethodOptions | BodyResponseCallback<Schema$AndroidApp>, callback: BodyResponseCallback<Schema$AndroidApp>): void;
        get(params: Params$Resource$Projects$Androidapps$Get, callback: BodyResponseCallback<Schema$AndroidApp>): void;
        get(callback: BodyResponseCallback<Schema$AndroidApp>): void;
        /**
         * Gets the configuration artifact associated with the specified AndroidApp.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/cloud-platform.read-only',
         *       'https://www.googleapis.com/auth/firebase',
         *       'https://www.googleapis.com/auth/firebase.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.projects.androidApps.getConfig({
         *     // The resource name of the AndroidApp configuration to download, in the format: projects/PROJECT_IDENTIFIER/androidApps/APP_ID/config Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/androidApps/APP_ID Refer to the `AndroidApp` [`name`](../projects.androidApps#AndroidApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values.
         *     name: 'projects/my-project/androidApps/my-androidApp/config',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "configFileContents": "my_configFileContents",
         *   //   "configFilename": "my_configFilename"
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
        getConfig(params: Params$Resource$Projects$Androidapps$Getconfig, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getConfig(params?: Params$Resource$Projects$Androidapps$Getconfig, options?: MethodOptions): GaxiosPromise<Schema$AndroidAppConfig>;
        getConfig(params: Params$Resource$Projects$Androidapps$Getconfig, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getConfig(params: Params$Resource$Projects$Androidapps$Getconfig, options: MethodOptions | BodyResponseCallback<Schema$AndroidAppConfig>, callback: BodyResponseCallback<Schema$AndroidAppConfig>): void;
        getConfig(params: Params$Resource$Projects$Androidapps$Getconfig, callback: BodyResponseCallback<Schema$AndroidAppConfig>): void;
        getConfig(callback: BodyResponseCallback<Schema$AndroidAppConfig>): void;
        /**
         * Lists each AndroidApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/cloud-platform.read-only',
         *       'https://www.googleapis.com/auth/firebase',
         *       'https://www.googleapis.com/auth/firebase.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.projects.androidApps.list({
         *     // The maximum number of Apps to return in the response. The server may return fewer than this at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit.
         *     pageSize: 'placeholder-value',
         *     // Token returned from a previous call to `ListAndroidApps` indicating where in the set of Apps to resume listing.
         *     pageToken: 'placeholder-value',
         *     // The resource name of the parent FirebaseProject for which to list each associated AndroidApp, in the format: projects/PROJECT_IDENTIFIER /androidApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
         *     parent: 'projects/my-project',
         *     // Controls whether Apps in the DELETED state should be returned. Defaults to false.
         *     showDeleted: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "apps": [],
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
        list(params: Params$Resource$Projects$Androidapps$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Androidapps$List, options?: MethodOptions): GaxiosPromise<Schema$ListAndroidAppsResponse>;
        list(params: Params$Resource$Projects$Androidapps$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Androidapps$List, options: MethodOptions | BodyResponseCallback<Schema$ListAndroidAppsResponse>, callback: BodyResponseCallback<Schema$ListAndroidAppsResponse>): void;
        list(params: Params$Resource$Projects$Androidapps$List, callback: BodyResponseCallback<Schema$ListAndroidAppsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListAndroidAppsResponse>): void;
        /**
         * Updates the attributes of the specified AndroidApp.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/firebase',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.projects.androidApps.patch({
         *     // The resource name of the AndroidApp, in the format: projects/ PROJECT_IDENTIFIER/androidApps/APP_ID * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.androidApps#AndroidApp.FIELDS.app_id)).
         *     name: 'projects/my-project/androidApps/my-androidApp',
         *     // Specifies which fields to update. Note that the fields `name`, `app_id`, `project_id`, `package_name`, and `state` are all immutable.
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "apiKeyId": "my_apiKeyId",
         *       //   "appId": "my_appId",
         *       //   "displayName": "my_displayName",
         *       //   "name": "my_name",
         *       //   "packageName": "my_packageName",
         *       //   "projectId": "my_projectId",
         *       //   "state": "my_state"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "apiKeyId": "my_apiKeyId",
         *   //   "appId": "my_appId",
         *   //   "displayName": "my_displayName",
         *   //   "name": "my_name",
         *   //   "packageName": "my_packageName",
         *   //   "projectId": "my_projectId",
         *   //   "state": "my_state"
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
        patch(params: Params$Resource$Projects$Androidapps$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Androidapps$Patch, options?: MethodOptions): GaxiosPromise<Schema$AndroidApp>;
        patch(params: Params$Resource$Projects$Androidapps$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Androidapps$Patch, options: MethodOptions | BodyResponseCallback<Schema$AndroidApp>, callback: BodyResponseCallback<Schema$AndroidApp>): void;
        patch(params: Params$Resource$Projects$Androidapps$Patch, callback: BodyResponseCallback<Schema$AndroidApp>): void;
        patch(callback: BodyResponseCallback<Schema$AndroidApp>): void;
    }
    export interface Params$Resource$Projects$Androidapps$Create extends StandardParameters {
        /**
         * The resource name of the parent FirebaseProject in which to create an AndroidApp, in the format: projects/PROJECT_IDENTIFIER/androidApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AndroidApp;
    }
    export interface Params$Resource$Projects$Androidapps$Get extends StandardParameters {
        /**
         * The resource name of the AndroidApp, in the format: projects/ PROJECT_IDENTIFIER/androidApps/APP_ID Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/androidApps/APP_ID Refer to the `AndroidApp` [`name`](../projects.androidApps#AndroidApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Androidapps$Getconfig extends StandardParameters {
        /**
         * The resource name of the AndroidApp configuration to download, in the format: projects/PROJECT_IDENTIFIER/androidApps/APP_ID/config Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/androidApps/APP_ID Refer to the `AndroidApp` [`name`](../projects.androidApps#AndroidApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Androidapps$List extends StandardParameters {
        /**
         * The maximum number of Apps to return in the response. The server may return fewer than this at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit.
         */
        pageSize?: number;
        /**
         * Token returned from a previous call to `ListAndroidApps` indicating where in the set of Apps to resume listing.
         */
        pageToken?: string;
        /**
         * The resource name of the parent FirebaseProject for which to list each associated AndroidApp, in the format: projects/PROJECT_IDENTIFIER /androidApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
         */
        parent?: string;
        /**
         * Controls whether Apps in the DELETED state should be returned. Defaults to false.
         */
        showDeleted?: boolean;
    }
    export interface Params$Resource$Projects$Androidapps$Patch extends StandardParameters {
        /**
         * The resource name of the AndroidApp, in the format: projects/ PROJECT_IDENTIFIER/androidApps/APP_ID * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.androidApps#AndroidApp.FIELDS.app_id)).
         */
        name?: string;
        /**
         * Specifies which fields to update. Note that the fields `name`, `app_id`, `project_id`, `package_name`, and `state` are all immutable.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AndroidApp;
    }
    export class Resource$Projects$Androidapps$Sha {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Adds a ShaCertificate to the specified AndroidApp.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/firebase',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.projects.androidApps.sha.create({
         *     // The resource name of the parent AndroidApp to which to add a ShaCertificate, in the format: projects/PROJECT_IDENTIFIER/androidApps/ APP_ID Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/androidApps/APP_ID Refer to the `AndroidApp` [`name`](../projects.androidApps#AndroidApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values.
         *     parent: 'projects/my-project/androidApps/my-androidApp',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "certType": "my_certType",
         *       //   "name": "my_name",
         *       //   "shaHash": "my_shaHash"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "certType": "my_certType",
         *   //   "name": "my_name",
         *   //   "shaHash": "my_shaHash"
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
        create(params: Params$Resource$Projects$Androidapps$Sha$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Androidapps$Sha$Create, options?: MethodOptions): GaxiosPromise<Schema$ShaCertificate>;
        create(params: Params$Resource$Projects$Androidapps$Sha$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Androidapps$Sha$Create, options: MethodOptions | BodyResponseCallback<Schema$ShaCertificate>, callback: BodyResponseCallback<Schema$ShaCertificate>): void;
        create(params: Params$Resource$Projects$Androidapps$Sha$Create, callback: BodyResponseCallback<Schema$ShaCertificate>): void;
        create(callback: BodyResponseCallback<Schema$ShaCertificate>): void;
        /**
         * Removes a ShaCertificate from the specified AndroidApp.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/firebase',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.projects.androidApps.sha.delete({
         *     // The resource name of the ShaCertificate to remove from the parent AndroidApp, in the format: projects/PROJECT_IDENTIFIER/androidApps/APP_ID /sha/SHA_HASH Refer to the `ShaCertificate` [`name`](../projects.androidApps.sha#ShaCertificate.FIELDS.name) field for details about PROJECT_IDENTIFIER, APP_ID, and SHA_HASH values. You can obtain the full resource name of the `ShaCertificate` from the response of [`ListShaCertificates`](../projects.androidApps.sha/list) or the original [`CreateShaCertificate`](../projects.androidApps.sha/create).
         *     name: 'projects/my-project/androidApps/my-androidApp/sha/[^/]+',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
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
        delete(params: Params$Resource$Projects$Androidapps$Sha$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Androidapps$Sha$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Projects$Androidapps$Sha$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Androidapps$Sha$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Projects$Androidapps$Sha$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Lists the SHA-1 and SHA-256 certificates for the specified AndroidApp.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/cloud-platform.read-only',
         *       'https://www.googleapis.com/auth/firebase',
         *       'https://www.googleapis.com/auth/firebase.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.projects.androidApps.sha.list({
         *     // The resource name of the parent AndroidApp for which to list each associated ShaCertificate, in the format: projects/PROJECT_IDENTIFIER /androidApps/APP_ID Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/androidApps/APP_ID Refer to the `AndroidApp` [`name`](../projects.androidApps#AndroidApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values.
         *     parent: 'projects/my-project/androidApps/my-androidApp',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "certificates": []
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
        list(params: Params$Resource$Projects$Androidapps$Sha$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Androidapps$Sha$List, options?: MethodOptions): GaxiosPromise<Schema$ListShaCertificatesResponse>;
        list(params: Params$Resource$Projects$Androidapps$Sha$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Androidapps$Sha$List, options: MethodOptions | BodyResponseCallback<Schema$ListShaCertificatesResponse>, callback: BodyResponseCallback<Schema$ListShaCertificatesResponse>): void;
        list(params: Params$Resource$Projects$Androidapps$Sha$List, callback: BodyResponseCallback<Schema$ListShaCertificatesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListShaCertificatesResponse>): void;
    }
    export interface Params$Resource$Projects$Androidapps$Sha$Create extends StandardParameters {
        /**
         * The resource name of the parent AndroidApp to which to add a ShaCertificate, in the format: projects/PROJECT_IDENTIFIER/androidApps/ APP_ID Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/androidApps/APP_ID Refer to the `AndroidApp` [`name`](../projects.androidApps#AndroidApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ShaCertificate;
    }
    export interface Params$Resource$Projects$Androidapps$Sha$Delete extends StandardParameters {
        /**
         * The resource name of the ShaCertificate to remove from the parent AndroidApp, in the format: projects/PROJECT_IDENTIFIER/androidApps/APP_ID /sha/SHA_HASH Refer to the `ShaCertificate` [`name`](../projects.androidApps.sha#ShaCertificate.FIELDS.name) field for details about PROJECT_IDENTIFIER, APP_ID, and SHA_HASH values. You can obtain the full resource name of the `ShaCertificate` from the response of [`ListShaCertificates`](../projects.androidApps.sha/list) or the original [`CreateShaCertificate`](../projects.androidApps.sha/create).
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Androidapps$Sha$List extends StandardParameters {
        /**
         * The resource name of the parent AndroidApp for which to list each associated ShaCertificate, in the format: projects/PROJECT_IDENTIFIER /androidApps/APP_ID Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/androidApps/APP_ID Refer to the `AndroidApp` [`name`](../projects.androidApps#AndroidApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values.
         */
        parent?: string;
    }
    export class Resource$Projects$Availablelocations {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Lists the valid Google Cloud Platform (GCP) resource locations for the specified Project (including a FirebaseProject). One of these locations can be selected as the Project's [_default_ GCP resource location](https://firebase.google.com/docs/projects/locations), which is the geographical location where the Project's resources, such as Cloud Firestore, will be provisioned by default. However, if the default GCP resource location has already been set for the Project, then this setting cannot be changed. This call checks for any possible [location restrictions](https://cloud.google.com/resource-manager/docs/organization-policy/defining-locations) for the specified Project and, thus, might return a subset of all possible GCP resource locations. To list all GCP resource locations (regardless of any restrictions), call the endpoint without specifying a unique project identifier (that is, `/v1beta1/{parent=projects/-\}/listAvailableLocations`). To call `ListAvailableLocations` with a specified project, a member must be at minimum a Viewer of the Project. Calls without a specified project do not require any specific project permissions.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/cloud-platform.read-only',
         *       'https://www.googleapis.com/auth/firebase',
         *       'https://www.googleapis.com/auth/firebase.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.projects.availableLocations.list({
         *     // The maximum number of locations to return in the response. The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit. This value cannot be negative.
         *     pageSize: 'placeholder-value',
         *     // Token returned from a previous call to `ListAvailableLocations` indicating where in the list of locations to resume listing.
         *     pageToken: 'placeholder-value',
         *     // The FirebaseProject for which to list GCP resource locations, in the format: projects/PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values. If no unique project identifier is specified (that is, `projects/-`), the returned list does not take into account org-specific or project-specific location restrictions.
         *     parent: 'projects/my-project',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "locations": [],
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
        list(params: Params$Resource$Projects$Availablelocations$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Availablelocations$List, options?: MethodOptions): GaxiosPromise<Schema$ListAvailableLocationsResponse>;
        list(params: Params$Resource$Projects$Availablelocations$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Availablelocations$List, options: MethodOptions | BodyResponseCallback<Schema$ListAvailableLocationsResponse>, callback: BodyResponseCallback<Schema$ListAvailableLocationsResponse>): void;
        list(params: Params$Resource$Projects$Availablelocations$List, callback: BodyResponseCallback<Schema$ListAvailableLocationsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListAvailableLocationsResponse>): void;
    }
    export interface Params$Resource$Projects$Availablelocations$List extends StandardParameters {
        /**
         * The maximum number of locations to return in the response. The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit. This value cannot be negative.
         */
        pageSize?: number;
        /**
         * Token returned from a previous call to `ListAvailableLocations` indicating where in the list of locations to resume listing.
         */
        pageToken?: string;
        /**
         * The FirebaseProject for which to list GCP resource locations, in the format: projects/PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values. If no unique project identifier is specified (that is, `projects/-`), the returned list does not take into account org-specific or project-specific location restrictions.
         */
        parent?: string;
    }
    export class Resource$Projects$Defaultlocation {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Sets the default Google Cloud Platform (GCP) resource location for the specified FirebaseProject. This method creates an App Engine application with a [default Cloud Storage bucket](https://cloud.google.com/appengine/docs/standard/python/googlecloudstorageclient/setting-up-cloud-storage#activating_a_cloud_storage_bucket), located in the specified [`locationId`](#body.request_body.FIELDS.location_id). This location must be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). After the default GCP resource location is finalized, or if it was already set, it cannot be changed. The default GCP resource location for the specified `FirebaseProject` might already be set because either the underlying GCP `Project` already has an App Engine application or `FinalizeDefaultLocation` was previously called with a specified `locationId`. Any new calls to `FinalizeDefaultLocation` with a *different* specified `locationId` will return a 409 error. The result of this call is an [`Operation`](../../v1beta1/operations), which can be used to track the provisioning process. The [`response`](../../v1beta1/operations#Operation.FIELDS.response) type of the `Operation` is google.protobuf.Empty. The `Operation` can be polled by its `name` using GetOperation until `done` is true. When `done` is true, the `Operation` has either succeeded or failed. If the `Operation` has succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) will be set to a google.protobuf.Empty; if the `Operation` has failed, its `error` will be set to a google.rpc.Status. The `Operation` is automatically deleted after completion, so there is no need to call DeleteOperation. All fields listed in the [request body](#request-body) are required. To call `FinalizeDefaultLocation`, a member must be an Owner of the Project.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/firebase',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.projects.defaultLocation.finalize({
         *     // The resource name of the FirebaseProject for which the default GCP resource location will be set, in the format: projects/PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
         *     parent: 'projects/my-project',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "locationId": "my_locationId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "done": false,
         *   //   "error": {},
         *   //   "metadata": {},
         *   //   "name": "my_name",
         *   //   "response": {}
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
        finalize(params: Params$Resource$Projects$Defaultlocation$Finalize, options: StreamMethodOptions): GaxiosPromise<Readable>;
        finalize(params?: Params$Resource$Projects$Defaultlocation$Finalize, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        finalize(params: Params$Resource$Projects$Defaultlocation$Finalize, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        finalize(params: Params$Resource$Projects$Defaultlocation$Finalize, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        finalize(params: Params$Resource$Projects$Defaultlocation$Finalize, callback: BodyResponseCallback<Schema$Operation>): void;
        finalize(callback: BodyResponseCallback<Schema$Operation>): void;
    }
    export interface Params$Resource$Projects$Defaultlocation$Finalize extends StandardParameters {
        /**
         * The resource name of the FirebaseProject for which the default GCP resource location will be set, in the format: projects/PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$FinalizeDefaultLocationRequest;
    }
    export class Resource$Projects$Iosapps {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Requests the creation of a new IosApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/firebase',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.projects.iosApps.create({
         *     // The resource name of the parent FirebaseProject in which to create an IosApp, in the format: projects/PROJECT_IDENTIFIER/iosApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
         *     parent: 'projects/my-project',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "apiKeyId": "my_apiKeyId",
         *       //   "appId": "my_appId",
         *       //   "appStoreId": "my_appStoreId",
         *       //   "bundleId": "my_bundleId",
         *       //   "displayName": "my_displayName",
         *       //   "name": "my_name",
         *       //   "projectId": "my_projectId",
         *       //   "state": "my_state",
         *       //   "teamId": "my_teamId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "done": false,
         *   //   "error": {},
         *   //   "metadata": {},
         *   //   "name": "my_name",
         *   //   "response": {}
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
        create(params: Params$Resource$Projects$Iosapps$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Iosapps$Create, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        create(params: Params$Resource$Projects$Iosapps$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Iosapps$Create, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        create(params: Params$Resource$Projects$Iosapps$Create, callback: BodyResponseCallback<Schema$Operation>): void;
        create(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Gets the specified IosApp.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/cloud-platform.read-only',
         *       'https://www.googleapis.com/auth/firebase',
         *       'https://www.googleapis.com/auth/firebase.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.projects.iosApps.get({
         *     // The resource name of the IosApp, in the format: projects/PROJECT_IDENTIFIER /iosApps/APP_ID Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/iosApps/APP_ID Refer to the `IosApp` [`name`](../projects.iosApps#IosApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values.
         *     name: 'projects/my-project/iosApps/my-iosApp',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "apiKeyId": "my_apiKeyId",
         *   //   "appId": "my_appId",
         *   //   "appStoreId": "my_appStoreId",
         *   //   "bundleId": "my_bundleId",
         *   //   "displayName": "my_displayName",
         *   //   "name": "my_name",
         *   //   "projectId": "my_projectId",
         *   //   "state": "my_state",
         *   //   "teamId": "my_teamId"
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
        get(params: Params$Resource$Projects$Iosapps$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Iosapps$Get, options?: MethodOptions): GaxiosPromise<Schema$IosApp>;
        get(params: Params$Resource$Projects$Iosapps$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Iosapps$Get, options: MethodOptions | BodyResponseCallback<Schema$IosApp>, callback: BodyResponseCallback<Schema$IosApp>): void;
        get(params: Params$Resource$Projects$Iosapps$Get, callback: BodyResponseCallback<Schema$IosApp>): void;
        get(callback: BodyResponseCallback<Schema$IosApp>): void;
        /**
         * Gets the configuration artifact associated with the specified IosApp.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/cloud-platform.read-only',
         *       'https://www.googleapis.com/auth/firebase',
         *       'https://www.googleapis.com/auth/firebase.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.projects.iosApps.getConfig({
         *     // The resource name of the App configuration to download, in the format: projects/PROJECT_IDENTIFIER/iosApps/APP_ID/config Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/iosApps/APP_ID Refer to the `IosApp` [`name`](../projects.iosApps#IosApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values.
         *     name: 'projects/my-project/iosApps/my-iosApp/config',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "configFileContents": "my_configFileContents",
         *   //   "configFilename": "my_configFilename"
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
        getConfig(params: Params$Resource$Projects$Iosapps$Getconfig, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getConfig(params?: Params$Resource$Projects$Iosapps$Getconfig, options?: MethodOptions): GaxiosPromise<Schema$IosAppConfig>;
        getConfig(params: Params$Resource$Projects$Iosapps$Getconfig, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getConfig(params: Params$Resource$Projects$Iosapps$Getconfig, options: MethodOptions | BodyResponseCallback<Schema$IosAppConfig>, callback: BodyResponseCallback<Schema$IosAppConfig>): void;
        getConfig(params: Params$Resource$Projects$Iosapps$Getconfig, callback: BodyResponseCallback<Schema$IosAppConfig>): void;
        getConfig(callback: BodyResponseCallback<Schema$IosAppConfig>): void;
        /**
         * Lists each IosApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/cloud-platform.read-only',
         *       'https://www.googleapis.com/auth/firebase',
         *       'https://www.googleapis.com/auth/firebase.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.projects.iosApps.list({
         *     // The maximum number of Apps to return in the response. The server may return fewer than this at its discretion. If no value is specified (or too large a value is specified), the server will impose its own limit.
         *     pageSize: 'placeholder-value',
         *     // Token returned from a previous call to `ListIosApps` indicating where in the set of Apps to resume listing.
         *     pageToken: 'placeholder-value',
         *     // The resource name of the parent FirebaseProject for which to list each associated IosApp, in the format: projects/PROJECT_IDENTIFIER/iosApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
         *     parent: 'projects/my-project',
         *     // Controls whether Apps in the DELETED state should be returned. Defaults to false.
         *     showDeleted: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "apps": [],
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
        list(params: Params$Resource$Projects$Iosapps$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Iosapps$List, options?: MethodOptions): GaxiosPromise<Schema$ListIosAppsResponse>;
        list(params: Params$Resource$Projects$Iosapps$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Iosapps$List, options: MethodOptions | BodyResponseCallback<Schema$ListIosAppsResponse>, callback: BodyResponseCallback<Schema$ListIosAppsResponse>): void;
        list(params: Params$Resource$Projects$Iosapps$List, callback: BodyResponseCallback<Schema$ListIosAppsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListIosAppsResponse>): void;
        /**
         * Updates the attributes of the specified IosApp.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/firebase',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.projects.iosApps.patch({
         *     // The resource name of the IosApp, in the format: projects/PROJECT_IDENTIFIER /iosApps/APP_ID * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.iosApps#IosApp.FIELDS.app_id)).
         *     name: 'projects/my-project/iosApps/my-iosApp',
         *     // Specifies which fields to update. Note that the fields `name`, `appId`, `projectId`, `bundleId`, and `state` are all immutable
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "apiKeyId": "my_apiKeyId",
         *       //   "appId": "my_appId",
         *       //   "appStoreId": "my_appStoreId",
         *       //   "bundleId": "my_bundleId",
         *       //   "displayName": "my_displayName",
         *       //   "name": "my_name",
         *       //   "projectId": "my_projectId",
         *       //   "state": "my_state",
         *       //   "teamId": "my_teamId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "apiKeyId": "my_apiKeyId",
         *   //   "appId": "my_appId",
         *   //   "appStoreId": "my_appStoreId",
         *   //   "bundleId": "my_bundleId",
         *   //   "displayName": "my_displayName",
         *   //   "name": "my_name",
         *   //   "projectId": "my_projectId",
         *   //   "state": "my_state",
         *   //   "teamId": "my_teamId"
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
        patch(params: Params$Resource$Projects$Iosapps$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Iosapps$Patch, options?: MethodOptions): GaxiosPromise<Schema$IosApp>;
        patch(params: Params$Resource$Projects$Iosapps$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Iosapps$Patch, options: MethodOptions | BodyResponseCallback<Schema$IosApp>, callback: BodyResponseCallback<Schema$IosApp>): void;
        patch(params: Params$Resource$Projects$Iosapps$Patch, callback: BodyResponseCallback<Schema$IosApp>): void;
        patch(callback: BodyResponseCallback<Schema$IosApp>): void;
    }
    export interface Params$Resource$Projects$Iosapps$Create extends StandardParameters {
        /**
         * The resource name of the parent FirebaseProject in which to create an IosApp, in the format: projects/PROJECT_IDENTIFIER/iosApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$IosApp;
    }
    export interface Params$Resource$Projects$Iosapps$Get extends StandardParameters {
        /**
         * The resource name of the IosApp, in the format: projects/PROJECT_IDENTIFIER /iosApps/APP_ID Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/iosApps/APP_ID Refer to the `IosApp` [`name`](../projects.iosApps#IosApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Iosapps$Getconfig extends StandardParameters {
        /**
         * The resource name of the App configuration to download, in the format: projects/PROJECT_IDENTIFIER/iosApps/APP_ID/config Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/iosApps/APP_ID Refer to the `IosApp` [`name`](../projects.iosApps#IosApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Iosapps$List extends StandardParameters {
        /**
         * The maximum number of Apps to return in the response. The server may return fewer than this at its discretion. If no value is specified (or too large a value is specified), the server will impose its own limit.
         */
        pageSize?: number;
        /**
         * Token returned from a previous call to `ListIosApps` indicating where in the set of Apps to resume listing.
         */
        pageToken?: string;
        /**
         * The resource name of the parent FirebaseProject for which to list each associated IosApp, in the format: projects/PROJECT_IDENTIFIER/iosApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
         */
        parent?: string;
        /**
         * Controls whether Apps in the DELETED state should be returned. Defaults to false.
         */
        showDeleted?: boolean;
    }
    export interface Params$Resource$Projects$Iosapps$Patch extends StandardParameters {
        /**
         * The resource name of the IosApp, in the format: projects/PROJECT_IDENTIFIER /iosApps/APP_ID * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.iosApps#IosApp.FIELDS.app_id)).
         */
        name?: string;
        /**
         * Specifies which fields to update. Note that the fields `name`, `appId`, `projectId`, `bundleId`, and `state` are all immutable
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$IosApp;
    }
    export class Resource$Projects$Webapps {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Requests the creation of a new WebApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/firebase',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.projects.webApps.create({
         *     // The resource name of the parent FirebaseProject in which to create a WebApp, in the format: projects/PROJECT_IDENTIFIER/webApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
         *     parent: 'projects/my-project',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "apiKeyId": "my_apiKeyId",
         *       //   "appId": "my_appId",
         *       //   "appUrls": [],
         *       //   "displayName": "my_displayName",
         *       //   "name": "my_name",
         *       //   "projectId": "my_projectId",
         *       //   "state": "my_state",
         *       //   "webId": "my_webId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "done": false,
         *   //   "error": {},
         *   //   "metadata": {},
         *   //   "name": "my_name",
         *   //   "response": {}
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
        create(params: Params$Resource$Projects$Webapps$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Webapps$Create, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        create(params: Params$Resource$Projects$Webapps$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Webapps$Create, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        create(params: Params$Resource$Projects$Webapps$Create, callback: BodyResponseCallback<Schema$Operation>): void;
        create(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Gets the specified WebApp.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/cloud-platform.read-only',
         *       'https://www.googleapis.com/auth/firebase',
         *       'https://www.googleapis.com/auth/firebase.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.projects.webApps.get({
         *     // The resource name of the WebApp, in the format: projects/PROJECT_IDENTIFIER /webApps/APP_ID Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/webApps/APP_ID Refer to the `WebApp` [`name`](../projects.webApps#WebApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values.
         *     name: 'projects/my-project/webApps/my-webApp',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "apiKeyId": "my_apiKeyId",
         *   //   "appId": "my_appId",
         *   //   "appUrls": [],
         *   //   "displayName": "my_displayName",
         *   //   "name": "my_name",
         *   //   "projectId": "my_projectId",
         *   //   "state": "my_state",
         *   //   "webId": "my_webId"
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
        get(params: Params$Resource$Projects$Webapps$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Webapps$Get, options?: MethodOptions): GaxiosPromise<Schema$WebApp>;
        get(params: Params$Resource$Projects$Webapps$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Webapps$Get, options: MethodOptions | BodyResponseCallback<Schema$WebApp>, callback: BodyResponseCallback<Schema$WebApp>): void;
        get(params: Params$Resource$Projects$Webapps$Get, callback: BodyResponseCallback<Schema$WebApp>): void;
        get(callback: BodyResponseCallback<Schema$WebApp>): void;
        /**
         * Gets the configuration artifact associated with the specified WebApp.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/cloud-platform.read-only',
         *       'https://www.googleapis.com/auth/firebase',
         *       'https://www.googleapis.com/auth/firebase.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.projects.webApps.getConfig({
         *     // The resource name of the WebApp configuration to download, in the format: projects/PROJECT_IDENTIFIER/webApps/APP_ID/config Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/webApps/APP_ID Refer to the `WebApp` [`name`](../projects.webApps#WebApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values.
         *     name: 'projects/my-project/webApps/my-webApp/config',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "apiKey": "my_apiKey",
         *   //   "appId": "my_appId",
         *   //   "authDomain": "my_authDomain",
         *   //   "databaseURL": "my_databaseURL",
         *   //   "locationId": "my_locationId",
         *   //   "measurementId": "my_measurementId",
         *   //   "messagingSenderId": "my_messagingSenderId",
         *   //   "projectId": "my_projectId",
         *   //   "storageBucket": "my_storageBucket"
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
        getConfig(params: Params$Resource$Projects$Webapps$Getconfig, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getConfig(params?: Params$Resource$Projects$Webapps$Getconfig, options?: MethodOptions): GaxiosPromise<Schema$WebAppConfig>;
        getConfig(params: Params$Resource$Projects$Webapps$Getconfig, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getConfig(params: Params$Resource$Projects$Webapps$Getconfig, options: MethodOptions | BodyResponseCallback<Schema$WebAppConfig>, callback: BodyResponseCallback<Schema$WebAppConfig>): void;
        getConfig(params: Params$Resource$Projects$Webapps$Getconfig, callback: BodyResponseCallback<Schema$WebAppConfig>): void;
        getConfig(callback: BodyResponseCallback<Schema$WebAppConfig>): void;
        /**
         * Lists each WebApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/cloud-platform.read-only',
         *       'https://www.googleapis.com/auth/firebase',
         *       'https://www.googleapis.com/auth/firebase.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.projects.webApps.list({
         *     // The maximum number of Apps to return in the response. The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit.
         *     pageSize: 'placeholder-value',
         *     // Token returned from a previous call to `ListWebApps` indicating where in the set of Apps to resume listing.
         *     pageToken: 'placeholder-value',
         *     // The resource name of the parent FirebaseProject for which to list each associated WebApp, in the format: projects/PROJECT_IDENTIFIER/webApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
         *     parent: 'projects/my-project',
         *     // Controls whether Apps in the DELETED state should be returned. Defaults to false.
         *     showDeleted: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "apps": [],
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
        list(params: Params$Resource$Projects$Webapps$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Webapps$List, options?: MethodOptions): GaxiosPromise<Schema$ListWebAppsResponse>;
        list(params: Params$Resource$Projects$Webapps$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Webapps$List, options: MethodOptions | BodyResponseCallback<Schema$ListWebAppsResponse>, callback: BodyResponseCallback<Schema$ListWebAppsResponse>): void;
        list(params: Params$Resource$Projects$Webapps$List, callback: BodyResponseCallback<Schema$ListWebAppsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListWebAppsResponse>): void;
        /**
         * Updates the attributes of the specified WebApp.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebase.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebase = google.firebase('v1beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/firebase',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebase.projects.webApps.patch({
         *     // The resource name of the WebApp, in the format: projects/PROJECT_IDENTIFIER /webApps/APP_ID * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.webApps#WebApp.FIELDS.app_id)).
         *     name: 'projects/my-project/webApps/my-webApp',
         *     // Specifies which fields to update. Note that the fields `name`, `appId`, `projectId` and `state` are all immutable
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "apiKeyId": "my_apiKeyId",
         *       //   "appId": "my_appId",
         *       //   "appUrls": [],
         *       //   "displayName": "my_displayName",
         *       //   "name": "my_name",
         *       //   "projectId": "my_projectId",
         *       //   "state": "my_state",
         *       //   "webId": "my_webId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "apiKeyId": "my_apiKeyId",
         *   //   "appId": "my_appId",
         *   //   "appUrls": [],
         *   //   "displayName": "my_displayName",
         *   //   "name": "my_name",
         *   //   "projectId": "my_projectId",
         *   //   "state": "my_state",
         *   //   "webId": "my_webId"
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
        patch(params: Params$Resource$Projects$Webapps$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Webapps$Patch, options?: MethodOptions): GaxiosPromise<Schema$WebApp>;
        patch(params: Params$Resource$Projects$Webapps$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Webapps$Patch, options: MethodOptions | BodyResponseCallback<Schema$WebApp>, callback: BodyResponseCallback<Schema$WebApp>): void;
        patch(params: Params$Resource$Projects$Webapps$Patch, callback: BodyResponseCallback<Schema$WebApp>): void;
        patch(callback: BodyResponseCallback<Schema$WebApp>): void;
    }
    export interface Params$Resource$Projects$Webapps$Create extends StandardParameters {
        /**
         * The resource name of the parent FirebaseProject in which to create a WebApp, in the format: projects/PROJECT_IDENTIFIER/webApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$WebApp;
    }
    export interface Params$Resource$Projects$Webapps$Get extends StandardParameters {
        /**
         * The resource name of the WebApp, in the format: projects/PROJECT_IDENTIFIER /webApps/APP_ID Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/webApps/APP_ID Refer to the `WebApp` [`name`](../projects.webApps#WebApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Webapps$Getconfig extends StandardParameters {
        /**
         * The resource name of the WebApp configuration to download, in the format: projects/PROJECT_IDENTIFIER/webApps/APP_ID/config Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/webApps/APP_ID Refer to the `WebApp` [`name`](../projects.webApps#WebApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Webapps$List extends StandardParameters {
        /**
         * The maximum number of Apps to return in the response. The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit.
         */
        pageSize?: number;
        /**
         * Token returned from a previous call to `ListWebApps` indicating where in the set of Apps to resume listing.
         */
        pageToken?: string;
        /**
         * The resource name of the parent FirebaseProject for which to list each associated WebApp, in the format: projects/PROJECT_IDENTIFIER/webApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
         */
        parent?: string;
        /**
         * Controls whether Apps in the DELETED state should be returned. Defaults to false.
         */
        showDeleted?: boolean;
    }
    export interface Params$Resource$Projects$Webapps$Patch extends StandardParameters {
        /**
         * The resource name of the WebApp, in the format: projects/PROJECT_IDENTIFIER /webApps/APP_ID * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.webApps#WebApp.FIELDS.app_id)).
         */
        name?: string;
        /**
         * Specifies which fields to update. Note that the fields `name`, `appId`, `projectId` and `state` are all immutable
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$WebApp;
    }
    export {};
}
