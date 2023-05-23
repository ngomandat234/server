/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace workflowexecutions_v1 {
    export interface Options extends GlobalOptions {
        version: 'v1';
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
     * Workflow Executions API
     *
     * Execute workflows created with Workflows API.
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const workflowexecutions = google.workflowexecutions('v1');
     * ```
     */
    export class Workflowexecutions {
        context: APIRequestContext;
        projects: Resource$Projects;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * Request for the CancelExecution method.
     */
    export interface Schema$CancelExecutionRequest {
    }
    /**
     * Error describes why the execution was abnormally terminated.
     */
    export interface Schema$Error {
        /**
         * Human-readable stack trace string.
         */
        context?: string | null;
        /**
         * Error message and data returned represented as a JSON string.
         */
        payload?: string | null;
        /**
         * Stack trace with detailed information of where error was generated.
         */
        stackTrace?: Schema$StackTrace;
    }
    /**
     * A running instance of a [Workflow](/workflows/docs/reference/rest/v1/projects.locations.workflows).
     */
    export interface Schema$Execution {
        /**
         * Input parameters of the execution represented as a JSON string. The size limit is 32KB. *Note*: If you are using the REST API directly to run your workflow, you must escape any JSON string value of `argument`. Example: `'{"argument":"{\"firstName\":\"FIRST\",\"lastName\":\"LAST\"\}"\}'`
         */
        argument?: string | null;
        /**
         * The call logging level associated to this execution.
         */
        callLogLevel?: string | null;
        /**
         * Output only. Marks the end of execution, successful or not.
         */
        endTime?: string | null;
        /**
         * Output only. The error which caused the execution to finish prematurely. The value is only present if the execution's state is `FAILED` or `CANCELLED`.
         */
        error?: Schema$Error;
        /**
         * Output only. The resource name of the execution. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}/executions/{execution\}
         */
        name?: string | null;
        /**
         * Output only. Output of the execution represented as a JSON string. The value can only be present if the execution's state is `SUCCEEDED`.
         */
        result?: string | null;
        /**
         * Output only. Marks the beginning of execution.
         */
        startTime?: string | null;
        /**
         * Output only. Current state of the execution.
         */
        state?: string | null;
        /**
         * Output only. Revision of the workflow this execution is using.
         */
        workflowRevisionId?: string | null;
    }
    /**
     * Response for the ListExecutions method.
     */
    export interface Schema$ListExecutionsResponse {
        /**
         * The executions which match the request.
         */
        executions?: Schema$Execution[];
        /**
         * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
    }
    /**
     * Position contains source position information about the stack trace element such as line number, column number and length of the code block in bytes.
     */
    export interface Schema$Position {
        /**
         * The source code column position (of the line) the current instruction was generated from.
         */
        column?: string | null;
        /**
         * The number of bytes of source code making up this stack trace element.
         */
        length?: string | null;
        /**
         * The source code line number the current instruction was generated from.
         */
        line?: string | null;
    }
    /**
     * A message that is published by publishers and consumed by subscribers. The message must contain either a non-empty data field or at least one attribute. Note that client libraries represent this object differently depending on the language. See the corresponding [client library documentation](https://cloud.google.com/pubsub/docs/reference/libraries) for more information. See [quotas and limits] (https://cloud.google.com/pubsub/quotas) for more information about message limits.
     */
    export interface Schema$PubsubMessage {
        /**
         * Attributes for this message. If this field is empty, the message must contain non-empty data. This can be used to filter messages on the subscription.
         */
        attributes?: {
            [key: string]: string;
        } | null;
        /**
         * The message data field. If this field is empty, the message must contain at least one attribute.
         */
        data?: string | null;
        /**
         * ID of this message, assigned by the server when the message is published. Guaranteed to be unique within the topic. This value may be read by a subscriber that receives a `PubsubMessage` via a `Pull` call or a push delivery. It must not be populated by the publisher in a `Publish` call.
         */
        messageId?: string | null;
        /**
         * If non-empty, identifies related messages for which publish order should be respected. If a `Subscription` has `enable_message_ordering` set to `true`, messages published with the same non-empty `ordering_key` value will be delivered to subscribers in the order in which they are received by the Pub/Sub system. All `PubsubMessage`s published in a given `PublishRequest` must specify the same `ordering_key` value. For more information, see [ordering messages](https://cloud.google.com/pubsub/docs/ordering).
         */
        orderingKey?: string | null;
        /**
         * The time at which the message was published, populated by the server when it receives the `Publish` call. It must not be populated by the publisher in a `Publish` call.
         */
        publishTime?: string | null;
    }
    /**
     * A collection of stack elements (frames) where an error occurred.
     */
    export interface Schema$StackTrace {
        /**
         * An array of stack elements.
         */
        elements?: Schema$StackTraceElement[];
    }
    /**
     * A single stack element (frame) where an error occurred.
     */
    export interface Schema$StackTraceElement {
        /**
         * The source position information of the stack trace element.
         */
        position?: Schema$Position;
        /**
         * The routine where the error occurred.
         */
        routine?: string | null;
        /**
         * The step the error occurred at.
         */
        step?: string | null;
    }
    /**
     * Request for the TriggerPubsubExecution method.
     */
    export interface Schema$TriggerPubsubExecutionRequest {
        /**
         * Required. LINT: LEGACY_NAMES The query parameter value for __GCP_CloudEventsMode, set by the Eventarc service when configuring triggers.
         */
        GCPCloudEventsMode?: string | null;
        /**
         * Required. The message of the Pub/Sub push notification.
         */
        message?: Schema$PubsubMessage;
        /**
         * Required. The subscription of the Pub/Sub push notification. Format: projects/{project\}/subscriptions/{sub\}
         */
        subscription?: string | null;
    }
    export class Resource$Projects {
        context: APIRequestContext;
        locations: Resource$Projects$Locations;
        constructor(context: APIRequestContext);
    }
    export class Resource$Projects$Locations {
        context: APIRequestContext;
        workflows: Resource$Projects$Locations$Workflows;
        constructor(context: APIRequestContext);
    }
    export class Resource$Projects$Locations$Workflows {
        context: APIRequestContext;
        executions: Resource$Projects$Locations$Workflows$Executions;
        constructor(context: APIRequestContext);
        /**
         * Triggers a new execution using the latest revision of the given workflow by a Pub/Sub push notification.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/workflowexecutions.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const workflowexecutions = google.workflowexecutions('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await workflowexecutions.projects.locations.workflows.triggerPubsubExecution(
         *       {
         *         // Required. Name of the workflow for which an execution should be created. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}
         *         workflow:
         *           'projects/my-project/locations/my-location/workflows/my-workflow',
         *
         *         // Request body metadata
         *         requestBody: {
         *           // request body parameters
         *           // {
         *           //   "GCPCloudEventsMode": "my_GCPCloudEventsMode",
         *           //   "message": {},
         *           //   "subscription": "my_subscription"
         *           // }
         *         },
         *       }
         *     );
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "argument": "my_argument",
         *   //   "callLogLevel": "my_callLogLevel",
         *   //   "endTime": "my_endTime",
         *   //   "error": {},
         *   //   "name": "my_name",
         *   //   "result": "my_result",
         *   //   "startTime": "my_startTime",
         *   //   "state": "my_state",
         *   //   "workflowRevisionId": "my_workflowRevisionId"
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
        triggerPubsubExecution(params: Params$Resource$Projects$Locations$Workflows$Triggerpubsubexecution, options: StreamMethodOptions): GaxiosPromise<Readable>;
        triggerPubsubExecution(params?: Params$Resource$Projects$Locations$Workflows$Triggerpubsubexecution, options?: MethodOptions): GaxiosPromise<Schema$Execution>;
        triggerPubsubExecution(params: Params$Resource$Projects$Locations$Workflows$Triggerpubsubexecution, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        triggerPubsubExecution(params: Params$Resource$Projects$Locations$Workflows$Triggerpubsubexecution, options: MethodOptions | BodyResponseCallback<Schema$Execution>, callback: BodyResponseCallback<Schema$Execution>): void;
        triggerPubsubExecution(params: Params$Resource$Projects$Locations$Workflows$Triggerpubsubexecution, callback: BodyResponseCallback<Schema$Execution>): void;
        triggerPubsubExecution(callback: BodyResponseCallback<Schema$Execution>): void;
    }
    export interface Params$Resource$Projects$Locations$Workflows$Triggerpubsubexecution extends StandardParameters {
        /**
         * Required. Name of the workflow for which an execution should be created. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}
         */
        workflow?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TriggerPubsubExecutionRequest;
    }
    export class Resource$Projects$Locations$Workflows$Executions {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Cancels an execution of the given name.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/workflowexecutions.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const workflowexecutions = google.workflowexecutions('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await workflowexecutions.projects.locations.workflows.executions.cancel({
         *       // Required. Name of the execution to be cancelled. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}/executions/{execution\}
         *       name: 'projects/my-project/locations/my-location/workflows/my-workflow/executions/my-execution',
         *
         *       // Request body metadata
         *       requestBody: {
         *         // request body parameters
         *         // {}
         *       },
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "argument": "my_argument",
         *   //   "callLogLevel": "my_callLogLevel",
         *   //   "endTime": "my_endTime",
         *   //   "error": {},
         *   //   "name": "my_name",
         *   //   "result": "my_result",
         *   //   "startTime": "my_startTime",
         *   //   "state": "my_state",
         *   //   "workflowRevisionId": "my_workflowRevisionId"
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
        cancel(params: Params$Resource$Projects$Locations$Workflows$Executions$Cancel, options: StreamMethodOptions): GaxiosPromise<Readable>;
        cancel(params?: Params$Resource$Projects$Locations$Workflows$Executions$Cancel, options?: MethodOptions): GaxiosPromise<Schema$Execution>;
        cancel(params: Params$Resource$Projects$Locations$Workflows$Executions$Cancel, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        cancel(params: Params$Resource$Projects$Locations$Workflows$Executions$Cancel, options: MethodOptions | BodyResponseCallback<Schema$Execution>, callback: BodyResponseCallback<Schema$Execution>): void;
        cancel(params: Params$Resource$Projects$Locations$Workflows$Executions$Cancel, callback: BodyResponseCallback<Schema$Execution>): void;
        cancel(callback: BodyResponseCallback<Schema$Execution>): void;
        /**
         * Creates a new execution using the latest revision of the given workflow.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/workflowexecutions.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const workflowexecutions = google.workflowexecutions('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await workflowexecutions.projects.locations.workflows.executions.create({
         *       // Required. Name of the workflow for which an execution should be created. Format: projects/{project\}/locations/{location\}/workflows/{workflow\} The latest revision of the workflow will be used.
         *       parent: 'projects/my-project/locations/my-location/workflows/my-workflow',
         *
         *       // Request body metadata
         *       requestBody: {
         *         // request body parameters
         *         // {
         *         //   "argument": "my_argument",
         *         //   "callLogLevel": "my_callLogLevel",
         *         //   "endTime": "my_endTime",
         *         //   "error": {},
         *         //   "name": "my_name",
         *         //   "result": "my_result",
         *         //   "startTime": "my_startTime",
         *         //   "state": "my_state",
         *         //   "workflowRevisionId": "my_workflowRevisionId"
         *         // }
         *       },
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "argument": "my_argument",
         *   //   "callLogLevel": "my_callLogLevel",
         *   //   "endTime": "my_endTime",
         *   //   "error": {},
         *   //   "name": "my_name",
         *   //   "result": "my_result",
         *   //   "startTime": "my_startTime",
         *   //   "state": "my_state",
         *   //   "workflowRevisionId": "my_workflowRevisionId"
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
        create(params: Params$Resource$Projects$Locations$Workflows$Executions$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Workflows$Executions$Create, options?: MethodOptions): GaxiosPromise<Schema$Execution>;
        create(params: Params$Resource$Projects$Locations$Workflows$Executions$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Workflows$Executions$Create, options: MethodOptions | BodyResponseCallback<Schema$Execution>, callback: BodyResponseCallback<Schema$Execution>): void;
        create(params: Params$Resource$Projects$Locations$Workflows$Executions$Create, callback: BodyResponseCallback<Schema$Execution>): void;
        create(callback: BodyResponseCallback<Schema$Execution>): void;
        /**
         * Returns an execution of the given name.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/workflowexecutions.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const workflowexecutions = google.workflowexecutions('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await workflowexecutions.projects.locations.workflows.executions.get({
         *       // Required. Name of the execution to be retrieved. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}/executions/{execution\}
         *       name: 'projects/my-project/locations/my-location/workflows/my-workflow/executions/my-execution',
         *       // Optional. A view defining which fields should be filled in the returned execution. The API will default to the FULL view.
         *       view: 'placeholder-value',
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "argument": "my_argument",
         *   //   "callLogLevel": "my_callLogLevel",
         *   //   "endTime": "my_endTime",
         *   //   "error": {},
         *   //   "name": "my_name",
         *   //   "result": "my_result",
         *   //   "startTime": "my_startTime",
         *   //   "state": "my_state",
         *   //   "workflowRevisionId": "my_workflowRevisionId"
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
        get(params: Params$Resource$Projects$Locations$Workflows$Executions$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Workflows$Executions$Get, options?: MethodOptions): GaxiosPromise<Schema$Execution>;
        get(params: Params$Resource$Projects$Locations$Workflows$Executions$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Workflows$Executions$Get, options: MethodOptions | BodyResponseCallback<Schema$Execution>, callback: BodyResponseCallback<Schema$Execution>): void;
        get(params: Params$Resource$Projects$Locations$Workflows$Executions$Get, callback: BodyResponseCallback<Schema$Execution>): void;
        get(callback: BodyResponseCallback<Schema$Execution>): void;
        /**
         * Returns a list of executions which belong to the workflow with the given name. The method returns executions of all workflow revisions. Returned executions are ordered by their start time (newest first).
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/workflowexecutions.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const workflowexecutions = google.workflowexecutions('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await workflowexecutions.projects.locations.workflows.executions.list({
         *       // Maximum number of executions to return per call. Max supported value depends on the selected Execution view: it's 10000 for BASIC and 100 for FULL. The default value used if the field is not specified is 100, regardless of the selected view. Values greater than the max value will be coerced down to it.
         *       pageSize: 'placeholder-value',
         *       // A page token, received from a previous `ListExecutions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListExecutions` must match the call that provided the page token.
         *       pageToken: 'placeholder-value',
         *       // Required. Name of the workflow for which the executions should be listed. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}
         *       parent: 'projects/my-project/locations/my-location/workflows/my-workflow',
         *       // Optional. A view defining which fields should be filled in the returned executions. The API will default to the BASIC view.
         *       view: 'placeholder-value',
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "executions": [],
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
        list(params: Params$Resource$Projects$Locations$Workflows$Executions$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Workflows$Executions$List, options?: MethodOptions): GaxiosPromise<Schema$ListExecutionsResponse>;
        list(params: Params$Resource$Projects$Locations$Workflows$Executions$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Workflows$Executions$List, options: MethodOptions | BodyResponseCallback<Schema$ListExecutionsResponse>, callback: BodyResponseCallback<Schema$ListExecutionsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Workflows$Executions$List, callback: BodyResponseCallback<Schema$ListExecutionsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListExecutionsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Workflows$Executions$Cancel extends StandardParameters {
        /**
         * Required. Name of the execution to be cancelled. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}/executions/{execution\}
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CancelExecutionRequest;
    }
    export interface Params$Resource$Projects$Locations$Workflows$Executions$Create extends StandardParameters {
        /**
         * Required. Name of the workflow for which an execution should be created. Format: projects/{project\}/locations/{location\}/workflows/{workflow\} The latest revision of the workflow will be used.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Execution;
    }
    export interface Params$Resource$Projects$Locations$Workflows$Executions$Get extends StandardParameters {
        /**
         * Required. Name of the execution to be retrieved. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}/executions/{execution\}
         */
        name?: string;
        /**
         * Optional. A view defining which fields should be filled in the returned execution. The API will default to the FULL view.
         */
        view?: string;
    }
    export interface Params$Resource$Projects$Locations$Workflows$Executions$List extends StandardParameters {
        /**
         * Maximum number of executions to return per call. Max supported value depends on the selected Execution view: it's 10000 for BASIC and 100 for FULL. The default value used if the field is not specified is 100, regardless of the selected view. Values greater than the max value will be coerced down to it.
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListExecutions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListExecutions` must match the call that provided the page token.
         */
        pageToken?: string;
        /**
         * Required. Name of the workflow for which the executions should be listed. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}
         */
        parent?: string;
        /**
         * Optional. A view defining which fields should be filled in the returned executions. The API will default to the BASIC view.
         */
        view?: string;
    }
    export {};
}
