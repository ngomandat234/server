/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace serviceconsumermanagement_v1beta1 {
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
     * Service Consumer Management API
     *
     * Manages the service consumers of a Service Infrastructure service.
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const serviceconsumermanagement = google.serviceconsumermanagement('v1beta1');
     * ```
     */
    export class Serviceconsumermanagement {
        context: APIRequestContext;
        operations: Resource$Operations;
        services: Resource$Services;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * Api is a light-weight descriptor for an API Interface. Interfaces are also described as "protocol buffer services" in some contexts, such as by the "service" keyword in a .proto file, but they are different from API Services, which represent a concrete implementation of an interface as opposed to simply a description of methods and bindings. They are also sometimes simply referred to as "APIs" in other contexts, such as the name of this message itself. See https://cloud.google.com/apis/design/glossary for detailed terminology.
     */
    export interface Schema$Api {
        /**
         * The methods of this interface, in unspecified order.
         */
        methods?: Schema$Method[];
        /**
         * Included interfaces. See Mixin.
         */
        mixins?: Schema$Mixin[];
        /**
         * The fully qualified name of this interface, including package name followed by the interface's simple name.
         */
        name?: string | null;
        /**
         * Any metadata attached to the interface.
         */
        options?: Schema$Option[];
        /**
         * Source context for the protocol buffer service represented by this message.
         */
        sourceContext?: Schema$SourceContext;
        /**
         * The source syntax of the service.
         */
        syntax?: string | null;
        /**
         * A version string for this interface. If specified, must have the form `major-version.minor-version`, as in `1.10`. If the minor version is omitted, it defaults to zero. If the entire version field is empty, the major version is derived from the package name, as outlined below. If the field is not empty, the version in the package name will be verified to be consistent with what is provided here. The versioning schema uses [semantic versioning](http://semver.org) where the major version number indicates a breaking change and the minor version an additive, non-breaking change. Both version numbers are signals to users what to expect from different versions, and should be carefully chosen based on the product plan. The major version is also reflected in the package name of the interface, which must end in `v`, as in `google.feature.v1`. For major versions 0 and 1, the suffix can be omitted. Zero major versions must only be used for experimental, non-GA interfaces.
         */
        version?: string | null;
    }
    /**
     * `Authentication` defines the authentication configuration for API methods provided by an API service. Example: name: calendar.googleapis.com authentication: providers: - id: google_calendar_auth jwks_uri: https://www.googleapis.com/oauth2/v1/certs issuer: https://securetoken.google.com rules: - selector: "*" requirements: provider_id: google_calendar_auth - selector: google.calendar.Delegate oauth: canonical_scopes: https://www.googleapis.com/auth/calendar.read
     */
    export interface Schema$Authentication {
        /**
         * Defines a set of authentication providers that a service supports.
         */
        providers?: Schema$AuthProvider[];
        /**
         * A list of authentication rules that apply to individual API methods. **NOTE:** All service configuration rules follow "last one wins" order.
         */
        rules?: Schema$AuthenticationRule[];
    }
    /**
     * Authentication rules for the service. By default, if a method has any authentication requirements, every request must include a valid credential matching one of the requirements. It's an error to include more than one kind of credential in a single request. If a method doesn't have any auth requirements, request credentials will be ignored.
     */
    export interface Schema$AuthenticationRule {
        /**
         * If true, the service accepts API keys without any other credential. This flag only applies to HTTP and gRPC requests.
         */
        allowWithoutCredential?: boolean | null;
        /**
         * The requirements for OAuth credentials.
         */
        oauth?: Schema$OAuthRequirements;
        /**
         * Requirements for additional authentication providers.
         */
        requirements?: Schema$AuthRequirement[];
        /**
         * Selects the methods to which this rule applies. Refer to selector for syntax details.
         */
        selector?: string | null;
    }
    /**
     * Configuration for an authentication provider, including support for [JSON Web Token (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
     */
    export interface Schema$AuthProvider {
        /**
         * The list of JWT [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3). that are allowed to access. A JWT containing any of these audiences will be accepted. When this setting is absent, JWTs with audiences: - "https://[service.name]/[google.protobuf.Api.name]" - "https://[service.name]/" will be accepted. For example, if no audiences are in the setting, LibraryService API will accept JWTs with the following audiences: - https://library-example.googleapis.com/google.example.library.v1.LibraryService - https://library-example.googleapis.com/ Example: audiences: bookstore_android.apps.googleusercontent.com, bookstore_web.apps.googleusercontent.com
         */
        audiences?: string | null;
        /**
         * Redirect URL if JWT token is required but not present or is expired. Implement authorizationUrl of securityDefinitions in OpenAPI spec.
         */
        authorizationUrl?: string | null;
        /**
         * The unique identifier of the auth provider. It will be referred to by `AuthRequirement.provider_id`. Example: "bookstore_auth".
         */
        id?: string | null;
        /**
         * Identifies the principal that issued the JWT. See https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.1 Usually a URL or an email address. Example: https://securetoken.google.com Example: 1234567-compute@developer.gserviceaccount.com
         */
        issuer?: string | null;
        /**
         * URL of the provider's public key set to validate signature of the JWT. See [OpenID Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). Optional if the key set document: - can be retrieved from [OpenID Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html) of the issuer. - can be inferred from the email domain of the issuer (e.g. a Google service account). Example: https://www.googleapis.com/oauth2/v1/certs
         */
        jwksUri?: string | null;
        /**
         * Defines the locations to extract the JWT. For now it is only used by the Cloud Endpoints to store the OpenAPI extension [x-google-jwt-locations] (https://cloud.google.com/endpoints/docs/openapi/openapi-extensions#x-google-jwt-locations) JWT locations can be one of HTTP headers, URL query parameters or cookies. The rule is that the first match wins. If not specified, default to use following 3 locations: 1) Authorization: Bearer 2) x-goog-iap-jwt-assertion 3) access_token query parameter Default locations can be specified as followings: jwt_locations: - header: Authorization value_prefix: "Bearer " - header: x-goog-iap-jwt-assertion - query: access_token
         */
        jwtLocations?: Schema$JwtLocation[];
    }
    /**
     * User-defined authentication requirements, including support for [JSON Web Token (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
     */
    export interface Schema$AuthRequirement {
        /**
         * NOTE: This will be deprecated soon, once AuthProvider.audiences is implemented and accepted in all the runtime components. The list of JWT [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3). that are allowed to access. A JWT containing any of these audiences will be accepted. When this setting is absent, only JWTs with audience "https://Service_name/API_name" will be accepted. For example, if no audiences are in the setting, LibraryService API will only accept JWTs with the following audience "https://library-example.googleapis.com/google.example.library.v1.LibraryService". Example: audiences: bookstore_android.apps.googleusercontent.com, bookstore_web.apps.googleusercontent.com
         */
        audiences?: string | null;
        /**
         * id from authentication provider. Example: provider_id: bookstore_auth
         */
        providerId?: string | null;
    }
    /**
     * `Backend` defines the backend configuration for a service.
     */
    export interface Schema$Backend {
        /**
         * A list of API backend rules that apply to individual API methods. **NOTE:** All service configuration rules follow "last one wins" order.
         */
        rules?: Schema$BackendRule[];
    }
    /**
     * A backend rule provides configuration for an individual API element.
     */
    export interface Schema$BackendRule {
        /**
         * The address of the API backend. The scheme is used to determine the backend protocol and security. The following schemes are accepted: SCHEME PROTOCOL SECURITY http:// HTTP None https:// HTTP TLS grpc:// gRPC None grpcs:// gRPC TLS It is recommended to explicitly include a scheme. Leaving out the scheme may cause constrasting behaviors across platforms. If the port is unspecified, the default is: - 80 for schemes without TLS - 443 for schemes with TLS For HTTP backends, use protocol to specify the protocol version.
         */
        address?: string | null;
        /**
         * The number of seconds to wait for a response from a request. The default varies based on the request protocol and deployment environment.
         */
        deadline?: number | null;
        /**
         * When disable_auth is true, a JWT ID token won't be generated and the original "Authorization" HTTP header will be preserved. If the header is used to carry the original token and is expected by the backend, this field must be set to true to preserve the header.
         */
        disableAuth?: boolean | null;
        /**
         * The JWT audience is used when generating a JWT ID token for the backend. This ID token will be added in the HTTP "authorization" header, and sent to the backend.
         */
        jwtAudience?: string | null;
        /**
         * The number of seconds to wait for the completion of a long running operation. The default is no deadline.
         */
        operationDeadline?: number | null;
        pathTranslation?: string | null;
        /**
         * The protocol used for sending a request to the backend. The supported values are "http/1.1" and "h2". The default value is inferred from the scheme in the address field: SCHEME PROTOCOL http:// http/1.1 https:// http/1.1 grpc:// h2 grpcs:// h2 For secure HTTP backends (https://) that support HTTP/2, set this field to "h2" for improved performance. Configuring this field to non-default values is only supported for secure HTTP backends. This field will be ignored for all other backends. See https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids for more details on the supported values.
         */
        protocol?: string | null;
        /**
         * Selects the methods to which this rule applies. Refer to selector for syntax details.
         */
        selector?: string | null;
    }
    /**
     * Billing related configuration of the service. The following example shows how to configure monitored resources and metrics for billing, `consumer_destinations` is the only supported destination and the monitored resources need at least one label key `cloud.googleapis.com/location` to indicate the location of the billing usage, using different monitored resources between monitoring and billing is recommended so they can be evolved independently: monitored_resources: - type: library.googleapis.com/billing_branch labels: - key: cloud.googleapis.com/location description: | Predefined label to support billing location restriction. - key: city description: | Custom label to define the city where the library branch is located in. - key: name description: Custom label to define the name of the library branch. metrics: - name: library.googleapis.com/book/borrowed_count metric_kind: DELTA value_type: INT64 unit: "1" billing: consumer_destinations: - monitored_resource: library.googleapis.com/billing_branch metrics: - library.googleapis.com/book/borrowed_count
     */
    export interface Schema$Billing {
        /**
         * Billing configurations for sending metrics to the consumer project. There can be multiple consumer destinations per service, each one must have a different monitored resource type. A metric can be used in at most one consumer destination.
         */
        consumerDestinations?: Schema$BillingDestination[];
    }
    /**
     * Configuration of a specific billing destination (Currently only support bill against consumer project).
     */
    export interface Schema$BillingDestination {
        /**
         * Names of the metrics to report to this billing destination. Each name must be defined in Service.metrics section.
         */
        metrics?: string[] | null;
        /**
         * The monitored resource type. The type must be defined in Service.monitored_resources section.
         */
        monitoredResource?: string | null;
    }
    /**
     * `Context` defines which contexts an API requests. Example: context: rules: - selector: "*" requested: - google.rpc.context.ProjectContext - google.rpc.context.OriginContext The above specifies that all methods in the API request `google.rpc.context.ProjectContext` and `google.rpc.context.OriginContext`. Available context types are defined in package `google.rpc.context`. This also provides mechanism to allowlist any protobuf message extension that can be sent in grpc metadata using “x-goog-ext--bin” and “x-goog-ext--jspb” format. For example, list any service specific protobuf types that can appear in grpc metadata as follows in your yaml file: Example: context: rules: - selector: "google.example.library.v1.LibraryService.CreateBook" allowed_request_extensions: - google.foo.v1.NewExtension allowed_response_extensions: - google.foo.v1.NewExtension You can also specify extension ID instead of fully qualified extension name here.
     */
    export interface Schema$Context {
        /**
         * A list of RPC context rules that apply to individual API methods. **NOTE:** All service configuration rules follow "last one wins" order.
         */
        rules?: Schema$ContextRule[];
    }
    /**
     * A context rule provides information about the context for an individual API element.
     */
    export interface Schema$ContextRule {
        /**
         * A list of full type names or extension IDs of extensions allowed in grpc side channel from client to backend.
         */
        allowedRequestExtensions?: string[] | null;
        /**
         * A list of full type names or extension IDs of extensions allowed in grpc side channel from backend to client.
         */
        allowedResponseExtensions?: string[] | null;
        /**
         * A list of full type names of provided contexts.
         */
        provided?: string[] | null;
        /**
         * A list of full type names of requested contexts.
         */
        requested?: string[] | null;
        /**
         * Selects the methods to which this rule applies. Refer to selector for syntax details.
         */
        selector?: string | null;
    }
    /**
     * Selects and configures the service controller used by the service. The service controller handles two things: - **What is allowed:** for each API request, Chemist checks the project status, activation status, abuse status, billing status, service status, location restrictions, VPC Service Controls, SuperQuota, and other policies. - **What has happened:** for each API response, Chemist reports the telemetry data to analytics, auditing, billing, eventing, logging, monitoring, sawmill, and tracing. Chemist also accepts telemetry data not associated with API traffic, such as billing metrics. Example: control: environment: servicecontrol.googleapis.com
     */
    export interface Schema$Control {
        /**
         * The service controller environment to use. If empty, no control plane feature (like quota and billing) will be enabled. The recommended value for most services is servicecontrol.googleapis.com
         */
        environment?: string | null;
    }
    /**
     * Customize service error responses. For example, list any service specific protobuf types that can appear in error detail lists of error responses. Example: custom_error: types: - google.foo.v1.CustomError - google.foo.v1.AnotherError
     */
    export interface Schema$CustomError {
        /**
         * The list of custom error rules that apply to individual API messages. **NOTE:** All service configuration rules follow "last one wins" order.
         */
        rules?: Schema$CustomErrorRule[];
        /**
         * The list of custom error detail types, e.g. 'google.foo.v1.CustomError'.
         */
        types?: string[] | null;
    }
    /**
     * A custom error rule.
     */
    export interface Schema$CustomErrorRule {
        /**
         * Mark this message as possible payload in error response. Otherwise, objects of this type will be filtered when they appear in error payload.
         */
        isErrorType?: boolean | null;
        /**
         * Selects messages to which this rule applies. Refer to selector for syntax details.
         */
        selector?: string | null;
    }
    /**
     * A custom pattern is used for defining custom HTTP verb.
     */
    export interface Schema$CustomHttpPattern {
        /**
         * The name of this custom HTTP verb.
         */
        kind?: string | null;
        /**
         * The path matched by this custom verb.
         */
        path?: string | null;
    }
    /**
     * `Documentation` provides the information for describing a service. Example: documentation: summary: \> The Google Calendar API gives access to most calendar features. pages: - name: Overview content: (== include google/foo/overview.md ==) - name: Tutorial content: (== include google/foo/tutorial.md ==) subpages; - name: Java content: (== include google/foo/tutorial_java.md ==) rules: - selector: google.calendar.Calendar.Get description: \> ... - selector: google.calendar.Calendar.Put description: \> ... Documentation is provided in markdown syntax. In addition to standard markdown features, definition lists, tables and fenced code blocks are supported. Section headers can be provided and are interpreted relative to the section nesting of the context where a documentation fragment is embedded. Documentation from the IDL is merged with documentation defined via the config at normalization time, where documentation provided by config rules overrides IDL provided. A number of constructs specific to the API platform are supported in documentation text. In order to reference a proto element, the following notation can be used: [fully.qualified.proto.name][] To override the display text used for the link, this can be used: [display text][fully.qualified.proto.name] Text can be excluded from doc using the following notation: (-- internal comment --) A few directives are available in documentation. Note that directives must appear on a single line to be properly identified. The `include` directive includes a markdown file from an external source: (== include path/to/file ==) The `resource_for` directive marks a message to be the resource of a collection in REST view. If it is not specified, tools attempt to infer the resource from the operations in a collection: (== resource_for v1.shelves.books ==) The directive `suppress_warning` does not directly affect documentation and is documented together with service config validation.
     */
    export interface Schema$Documentation {
        /**
         * The URL to the root of documentation.
         */
        documentationRootUrl?: string | null;
        /**
         * Declares a single overview page. For example: documentation: summary: ... overview: (== include overview.md ==) This is a shortcut for the following declaration (using pages style): documentation: summary: ... pages: - name: Overview content: (== include overview.md ==) Note: you cannot specify both `overview` field and `pages` field.
         */
        overview?: string | null;
        /**
         * The top level pages for the documentation set.
         */
        pages?: Schema$Page[];
        /**
         * A list of documentation rules that apply to individual API elements. **NOTE:** All service configuration rules follow "last one wins" order.
         */
        rules?: Schema$DocumentationRule[];
        /**
         * Specifies the service root url if the default one (the service name from the yaml file) is not suitable. This can be seen in any fully specified service urls as well as sections that show a base that other urls are relative to.
         */
        serviceRootUrl?: string | null;
        /**
         * A short description of what the service does. The summary must be plain text. It becomes the overview of the service displayed in Google Cloud Console. NOTE: This field is equivalent to the standard field `description`.
         */
        summary?: string | null;
    }
    /**
     * A documentation rule provides information about individual API elements.
     */
    export interface Schema$DocumentationRule {
        /**
         * Deprecation description of the selected element(s). It can be provided if an element is marked as `deprecated`.
         */
        deprecationDescription?: string | null;
        /**
         * Description of the selected proto element (e.g. a message, a method, a 'service' definition, or a field). Defaults to leading & trailing comments taken from the proto source definition of the proto element.
         */
        description?: string | null;
        /**
         * The selector is a comma-separated list of patterns for any element such as a method, a field, an enum value. Each pattern is a qualified name of the element which may end in "*", indicating a wildcard. Wildcards are only allowed at the end and for a whole component of the qualified name, i.e. "foo.*" is ok, but not "foo.b*" or "foo.*.bar". A wildcard will match one or more components. To specify a default for all applicable elements, the whole pattern "*" is used.
         */
        selector?: string | null;
    }
    /**
     * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
     */
    export interface Schema$Empty {
    }
    /**
     * `Endpoint` describes a network address of a service that serves a set of APIs. It is commonly known as a service endpoint. A service may expose any number of service endpoints, and all service endpoints share the same service definition, such as quota limits and monitoring metrics. Example: type: google.api.Service name: library-example.googleapis.com endpoints: # Declares network address `https://library-example.googleapis.com` # for service `library-example.googleapis.com`. The `https` scheme # is implicit for all service endpoints. Other schemes may be # supported in the future. - name: library-example.googleapis.com allow_cors: false - name: content-staging-library-example.googleapis.com # Allows HTTP OPTIONS calls to be passed to the API frontend, for it # to decide whether the subsequent cross-origin request is allowed # to proceed. allow_cors: true
     */
    export interface Schema$Endpoint {
        /**
         * Allowing [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), aka cross-domain traffic, would allow the backends served from this endpoint to receive and respond to HTTP OPTIONS requests. The response will be used by the browser to determine whether the subsequent cross-origin request is allowed to proceed.
         */
        allowCors?: boolean | null;
        /**
         * The canonical name of this endpoint.
         */
        name?: string | null;
        /**
         * The specification of an Internet routable address of API frontend that will handle requests to this [API Endpoint](https://cloud.google.com/apis/design/glossary). It should be either a valid IPv4 address or a fully-qualified domain name. For example, "8.8.8.8" or "myservice.appspot.com".
         */
        target?: string | null;
    }
    /**
     * Enum type definition.
     */
    export interface Schema$Enum {
        /**
         * Enum value definitions.
         */
        enumvalue?: Schema$EnumValue[];
        /**
         * Enum type name.
         */
        name?: string | null;
        /**
         * Protocol buffer options.
         */
        options?: Schema$Option[];
        /**
         * The source context.
         */
        sourceContext?: Schema$SourceContext;
        /**
         * The source syntax.
         */
        syntax?: string | null;
    }
    /**
     * Enum value definition.
     */
    export interface Schema$EnumValue {
        /**
         * Enum value name.
         */
        name?: string | null;
        /**
         * Enum value number.
         */
        number?: number | null;
        /**
         * Protocol buffer options.
         */
        options?: Schema$Option[];
    }
    /**
     * A single field of a message type.
     */
    export interface Schema$Field {
        /**
         * The field cardinality.
         */
        cardinality?: string | null;
        /**
         * The string value of the default value of this field. Proto2 syntax only.
         */
        defaultValue?: string | null;
        /**
         * The field JSON name.
         */
        jsonName?: string | null;
        /**
         * The field type.
         */
        kind?: string | null;
        /**
         * The field name.
         */
        name?: string | null;
        /**
         * The field number.
         */
        number?: number | null;
        /**
         * The index of the field type in `Type.oneofs`, for message or enumeration types. The first type has index 1; zero means the type is not in the list.
         */
        oneofIndex?: number | null;
        /**
         * The protocol buffer options.
         */
        options?: Schema$Option[];
        /**
         * Whether to use alternative packed wire representation.
         */
        packed?: boolean | null;
        /**
         * The field type URL, without the scheme, for message or enumeration types. Example: `"type.googleapis.com/google.protobuf.Timestamp"`.
         */
        typeUrl?: string | null;
    }
    /**
     * Defines the HTTP configuration for an API service. It contains a list of HttpRule, each specifying the mapping of an RPC method to one or more HTTP REST API methods.
     */
    export interface Schema$Http {
        /**
         * When set to true, URL path parameters will be fully URI-decoded except in cases of single segment matches in reserved expansion, where "%2F" will be left encoded. The default behavior is to not decode RFC 6570 reserved characters in multi segment matches.
         */
        fullyDecodeReservedExpansion?: boolean | null;
        /**
         * A list of HTTP configuration rules that apply to individual API methods. **NOTE:** All service configuration rules follow "last one wins" order.
         */
        rules?: Schema$HttpRule[];
    }
    /**
     * # gRPC Transcoding gRPC Transcoding is a feature for mapping between a gRPC method and one or more HTTP REST endpoints. It allows developers to build a single API service that supports both gRPC APIs and REST APIs. Many systems, including [Google APIs](https://github.com/googleapis/googleapis), [Cloud Endpoints](https://cloud.google.com/endpoints), [gRPC Gateway](https://github.com/grpc-ecosystem/grpc-gateway), and [Envoy](https://github.com/envoyproxy/envoy) proxy support this feature and use it for large scale production services. `HttpRule` defines the schema of the gRPC/REST mapping. The mapping specifies how different portions of the gRPC request message are mapped to the URL path, URL query parameters, and HTTP request body. It also controls how the gRPC response message is mapped to the HTTP response body. `HttpRule` is typically specified as an `google.api.http` annotation on the gRPC method. Each mapping specifies a URL path template and an HTTP method. The path template may refer to one or more fields in the gRPC request message, as long as each field is a non-repeated field with a primitive (non-message) type. The path template controls how fields of the request message are mapped to the URL path. Example: service Messaging { rpc GetMessage(GetMessageRequest) returns (Message) { option (google.api.http) = { get: "/v1/{name=messages/x\}" \}; \} \} message GetMessageRequest { string name = 1; // Mapped to URL path. \} message Message { string text = 1; // The resource content. \} This enables an HTTP REST to gRPC mapping as below: HTTP | gRPC -----|----- `GET /v1/messages/123456` | `GetMessage(name: "messages/123456")` Any fields in the request message which are not bound by the path template automatically become HTTP query parameters if there is no HTTP request body. For example: service Messaging { rpc GetMessage(GetMessageRequest) returns (Message) { option (google.api.http) = { get:"/v1/messages/{message_id\}" \}; \} \} message GetMessageRequest { message SubMessage { string subfield = 1; \} string message_id = 1; // Mapped to URL path. int64 revision = 2; // Mapped to URL query parameter `revision`. SubMessage sub = 3; // Mapped to URL query parameter `sub.subfield`. \} This enables a HTTP JSON to RPC mapping as below: HTTP | gRPC -----|----- `GET /v1/messages/123456?revision=2&sub.subfield=foo` | `GetMessage(message_id: "123456" revision: 2 sub: SubMessage(subfield: "foo"))` Note that fields which are mapped to URL query parameters must have a primitive type or a repeated primitive type or a non-repeated message type. In the case of a repeated type, the parameter can be repeated in the URL as `...?param=A&param=B`. In the case of a message type, each field of the message is mapped to a separate parameter, such as `...?foo.a=A&foo.b=B&foo.c=C`. For HTTP methods that allow a request body, the `body` field specifies the mapping. Consider a REST update method on the message resource collection: service Messaging { rpc UpdateMessage(UpdateMessageRequest) returns (Message) { option (google.api.http) = { patch: "/v1/messages/{message_id\}" body: "message" \}; \} \} message UpdateMessageRequest { string message_id = 1; // mapped to the URL Message message = 2; // mapped to the body \} The following HTTP JSON to RPC mapping is enabled, where the representation of the JSON in the request body is determined by protos JSON encoding: HTTP | gRPC -----|----- `PATCH /v1/messages/123456 { "text": "Hi!" \}` | `UpdateMessage(message_id: "123456" message { text: "Hi!" \})` The special name `*` can be used in the body mapping to define that every field not bound by the path template should be mapped to the request body. This enables the following alternative definition of the update method: service Messaging { rpc UpdateMessage(Message) returns (Message) { option (google.api.http) = { patch: "/v1/messages/{message_id\}" body: "*" \}; \} \} message Message { string message_id = 1; string text = 2; \} The following HTTP JSON to RPC mapping is enabled: HTTP | gRPC -----|----- `PATCH /v1/messages/123456 { "text": "Hi!" \}` | `UpdateMessage(message_id: "123456" text: "Hi!")` Note that when using `*` in the body mapping, it is not possible to have HTTP parameters, as all fields not bound by the path end in the body. This makes this option more rarely used in practice when defining REST APIs. The common usage of `*` is in custom methods which don't use the URL at all for transferring data. It is possible to define multiple HTTP methods for one RPC by using the `additional_bindings` option. Example: service Messaging { rpc GetMessage(GetMessageRequest) returns (Message) { option (google.api.http) = { get: "/v1/messages/{message_id\}" additional_bindings { get: "/v1/users/{user_id\}/messages/{message_id\}" \} \}; \} \} message GetMessageRequest { string message_id = 1; string user_id = 2; \} This enables the following two alternative HTTP JSON to RPC mappings: HTTP | gRPC -----|----- `GET /v1/messages/123456` | `GetMessage(message_id: "123456")` `GET /v1/users/me/messages/123456` | `GetMessage(user_id: "me" message_id: "123456")` ## Rules for HTTP mapping 1. Leaf request fields (recursive expansion nested messages in the request message) are classified into three categories: - Fields referred by the path template. They are passed via the URL path. - Fields referred by the HttpRule.body. They are passed via the HTTP request body. - All other fields are passed via the URL query parameters, and the parameter name is the field path in the request message. A repeated field can be represented as multiple query parameters under the same name. 2. If HttpRule.body is "*", there is no URL query parameter, all fields are passed via URL path and HTTP request body. 3. If HttpRule.body is omitted, there is no HTTP request body, all fields are passed via URL path and URL query parameters. ### Path template syntax Template = "/" Segments [ Verb ] ; Segments = Segment { "/" Segment \} ; Segment = "*" | "**" | LITERAL | Variable ; Variable = "{" FieldPath [ "=" Segments ] "\}" ; FieldPath = IDENT { "." IDENT \} ; Verb = ":" LITERAL ; The syntax `*` matches a single URL path segment. The syntax `**` matches zero or more URL path segments, which must be the last part of the URL path except the `Verb`. The syntax `Variable` matches part of the URL path as specified by its template. A variable template must not contain other variables. If a variable matches a single path segment, its template may be omitted, e.g. `{var\}` is equivalent to `{var=*\}`. The syntax `LITERAL` matches literal text in the URL path. If the `LITERAL` contains any reserved character, such characters should be percent-encoded before the matching. If a variable contains exactly one path segment, such as `"{var\}"` or `"{var=*\}"`, when such a variable is expanded into a URL path on the client side, all characters except `[-_.~0-9a-zA-Z]` are percent-encoded. The server side does the reverse decoding. Such variables show up in the [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) as `{var\}`. If a variable contains multiple path segments, such as `"{var=foo/x\}"` or `"{var=**\}"`, when such a variable is expanded into a URL path on the client side, all characters except `[-_.~/0-9a-zA-Z]` are percent-encoded. The server side does the reverse decoding, except "%2F" and "%2f" are left unchanged. Such variables show up in the [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) as `{+var\}`. ## Using gRPC API Service Configuration gRPC API Service Configuration (service config) is a configuration language for configuring a gRPC service to become a user-facing product. The service config is simply the YAML representation of the `google.api.Service` proto message. As an alternative to annotating your proto file, you can configure gRPC transcoding in your service config YAML files. You do this by specifying a `HttpRule` that maps the gRPC method to a REST endpoint, achieving the same effect as the proto annotation. This can be particularly useful if you have a proto that is reused in multiple services. Note that any transcoding specified in the service config will override any matching transcoding configuration in the proto. Example: http: rules: # Selects a gRPC method and applies HttpRule to it. - selector: example.v1.Messaging.GetMessage get: /v1/messages/{message_id\}/{sub.subfield\} ## Special notes When gRPC Transcoding is used to map a gRPC to JSON REST endpoints, the proto to JSON conversion must follow the [proto3 specification](https://developers.google.com/protocol-buffers/docs/proto3#json). While the single segment variable follows the semantics of [RFC 6570](https://tools.ietf.org/html/rfc6570) Section 3.2.2 Simple String Expansion, the multi segment variable **does not** follow RFC 6570 Section 3.2.3 Reserved Expansion. The reason is that the Reserved Expansion does not expand special characters like `?` and `#`, which would lead to invalid URLs. As the result, gRPC Transcoding uses a custom encoding for multi segment variables. The path variables **must not** refer to any repeated or mapped field, because client libraries are not capable of handling such variable expansion. The path variables **must not** capture the leading "/" character. The reason is that the most common use case "{var\}" does not capture the leading "/" character. For consistency, all path variables must share the same behavior. Repeated message fields must not be mapped to URL query parameters, because no client library can support such complicated mapping. If an API needs to use a JSON array for request or response body, it can map the request or response body to a repeated field. However, some gRPC Transcoding implementations may not support this feature.
     */
    export interface Schema$HttpRule {
        /**
         * Additional HTTP bindings for the selector. Nested bindings must not contain an `additional_bindings` field themselves (that is, the nesting may only be one level deep).
         */
        additionalBindings?: Schema$HttpRule[];
        /**
         * The name of the request field whose value is mapped to the HTTP request body, or `*` for mapping all request fields not captured by the path pattern to the HTTP body, or omitted for not having any HTTP request body. NOTE: the referred field must be present at the top-level of the request message type.
         */
        body?: string | null;
        /**
         * The custom pattern is used for specifying an HTTP method that is not included in the `pattern` field, such as HEAD, or "*" to leave the HTTP method unspecified for this rule. The wild-card rule is useful for services that provide content to Web (HTML) clients.
         */
        custom?: Schema$CustomHttpPattern;
        /**
         * Maps to HTTP DELETE. Used for deleting a resource.
         */
        delete?: string | null;
        /**
         * Maps to HTTP GET. Used for listing and getting information about resources.
         */
        get?: string | null;
        /**
         * Maps to HTTP PATCH. Used for updating a resource.
         */
        patch?: string | null;
        /**
         * Maps to HTTP POST. Used for creating a resource or performing an action.
         */
        post?: string | null;
        /**
         * Maps to HTTP PUT. Used for replacing a resource.
         */
        put?: string | null;
        /**
         * Optional. The name of the response field whose value is mapped to the HTTP response body. When omitted, the entire response message will be used as the HTTP response body. NOTE: The referred field must be present at the top-level of the response message type.
         */
        responseBody?: string | null;
        /**
         * Selects a method to which this rule applies. Refer to selector for syntax details.
         */
        selector?: string | null;
    }
    /**
     * Specifies a location to extract JWT from an API request.
     */
    export interface Schema$JwtLocation {
        /**
         * Specifies cookie name to extract JWT token.
         */
        cookie?: string | null;
        /**
         * Specifies HTTP header name to extract JWT token.
         */
        header?: string | null;
        /**
         * Specifies URL query parameter name to extract JWT token.
         */
        query?: string | null;
        /**
         * The value prefix. The value format is "value_prefix{token\}" Only applies to "in" header type. Must be empty for "in" query type. If not empty, the header value has to match (case sensitive) this prefix. If not matched, JWT will not be extracted. If matched, JWT will be extracted after the prefix is removed. For example, for "Authorization: Bearer {JWT\}", value_prefix="Bearer " with a space at the end.
         */
        valuePrefix?: string | null;
    }
    /**
     * A description of a label.
     */
    export interface Schema$LabelDescriptor {
        /**
         * A human-readable description for the label.
         */
        description?: string | null;
        /**
         * The label key.
         */
        key?: string | null;
        /**
         * The type of data that can be assigned to the label.
         */
        valueType?: string | null;
    }
    /**
     * A description of a log type. Example in YAML format: - name: library.googleapis.com/activity_history description: The history of borrowing and returning library items. display_name: Activity labels: - key: /customer_id description: Identifier of a library customer
     */
    export interface Schema$LogDescriptor {
        /**
         * A human-readable description of this log. This information appears in the documentation and can contain details.
         */
        description?: string | null;
        /**
         * The human-readable name for this log. This information appears on the user interface and should be concise.
         */
        displayName?: string | null;
        /**
         * The set of labels that are available to describe a specific log entry. Runtime requests that contain labels not specified here are considered invalid.
         */
        labels?: Schema$LabelDescriptor[];
        /**
         * The name of the log. It must be less than 512 characters long and can include the following characters: upper- and lower-case alphanumeric characters [A-Za-z0-9], and punctuation characters including slash, underscore, hyphen, period [/_-.].
         */
        name?: string | null;
    }
    /**
     * Logging configuration of the service. The following example shows how to configure logs to be sent to the producer and consumer projects. In the example, the `activity_history` log is sent to both the producer and consumer projects, whereas the `purchase_history` log is only sent to the producer project. monitored_resources: - type: library.googleapis.com/branch labels: - key: /city description: The city where the library branch is located in. - key: /name description: The name of the branch. logs: - name: activity_history labels: - key: /customer_id - name: purchase_history logging: producer_destinations: - monitored_resource: library.googleapis.com/branch logs: - activity_history - purchase_history consumer_destinations: - monitored_resource: library.googleapis.com/branch logs: - activity_history
     */
    export interface Schema$Logging {
        /**
         * Logging configurations for sending logs to the consumer project. There can be multiple consumer destinations, each one must have a different monitored resource type. A log can be used in at most one consumer destination.
         */
        consumerDestinations?: Schema$LoggingDestination[];
        /**
         * Logging configurations for sending logs to the producer project. There can be multiple producer destinations, each one must have a different monitored resource type. A log can be used in at most one producer destination.
         */
        producerDestinations?: Schema$LoggingDestination[];
    }
    /**
     * Configuration of a specific logging destination (the producer project or the consumer project).
     */
    export interface Schema$LoggingDestination {
        /**
         * Names of the logs to be sent to this destination. Each name must be defined in the Service.logs section. If the log name is not a domain scoped name, it will be automatically prefixed with the service name followed by "/".
         */
        logs?: string[] | null;
        /**
         * The monitored resource type. The type must be defined in the Service.monitored_resources section.
         */
        monitoredResource?: string | null;
    }
    /**
     * Method represents a method of an API interface.
     */
    export interface Schema$Method {
        /**
         * The simple name of this method.
         */
        name?: string | null;
        /**
         * Any metadata attached to the method.
         */
        options?: Schema$Option[];
        /**
         * If true, the request is streamed.
         */
        requestStreaming?: boolean | null;
        /**
         * A URL of the input message type.
         */
        requestTypeUrl?: string | null;
        /**
         * If true, the response is streamed.
         */
        responseStreaming?: boolean | null;
        /**
         * The URL of the output message type.
         */
        responseTypeUrl?: string | null;
        /**
         * The source syntax of this method.
         */
        syntax?: string | null;
    }
    /**
     * Defines a metric type and its schema. Once a metric descriptor is created, deleting or altering it stops data collection and makes the metric type's existing data unusable.
     */
    export interface Schema$MetricDescriptor {
        /**
         * A detailed description of the metric, which can be used in documentation.
         */
        description?: string | null;
        /**
         * A concise name for the metric, which can be displayed in user interfaces. Use sentence case without an ending period, for example "Request count". This field is optional but it is recommended to be set for any metrics associated with user-visible concepts, such as Quota.
         */
        displayName?: string | null;
        /**
         * The set of labels that can be used to describe a specific instance of this metric type. For example, the `appengine.googleapis.com/http/server/response_latencies` metric type has a label for the HTTP response code, `response_code`, so you can look at latencies for successful responses or just for responses that failed.
         */
        labels?: Schema$LabelDescriptor[];
        /**
         * Optional. The launch stage of the metric definition.
         */
        launchStage?: string | null;
        /**
         * Optional. Metadata which can be used to guide usage of the metric.
         */
        metadata?: Schema$MetricDescriptorMetadata;
        /**
         * Whether the metric records instantaneous values, changes to a value, etc. Some combinations of `metric_kind` and `value_type` might not be supported.
         */
        metricKind?: string | null;
        /**
         * Read-only. If present, then a time series, which is identified partially by a metric type and a MonitoredResourceDescriptor, that is associated with this metric type can only be associated with one of the monitored resource types listed here.
         */
        monitoredResourceTypes?: string[] | null;
        /**
         * The resource name of the metric descriptor.
         */
        name?: string | null;
        /**
         * The metric type, including its DNS name prefix. The type is not URL-encoded. All user-defined metric types have the DNS name `custom.googleapis.com` or `external.googleapis.com`. Metric types should use a natural hierarchical grouping. For example: "custom.googleapis.com/invoice/paid/amount" "external.googleapis.com/prometheus/up" "appengine.googleapis.com/http/server/response_latencies"
         */
        type?: string | null;
        /**
         * The units in which the metric value is reported. It is only applicable if the `value_type` is `INT64`, `DOUBLE`, or `DISTRIBUTION`. The `unit` defines the representation of the stored metric values. Different systems might scale the values to be more easily displayed (so a value of `0.02kBy` _might_ be displayed as `20By`, and a value of `3523kBy` _might_ be displayed as `3.5MBy`). However, if the `unit` is `kBy`, then the value of the metric is always in thousands of bytes, no matter how it might be displayed. If you want a custom metric to record the exact number of CPU-seconds used by a job, you can create an `INT64 CUMULATIVE` metric whose `unit` is `s{CPU\}` (or equivalently `1s{CPU\}` or just `s`). If the job uses 12,005 CPU-seconds, then the value is written as `12005`. Alternatively, if you want a custom metric to record data in a more granular way, you can create a `DOUBLE CUMULATIVE` metric whose `unit` is `ks{CPU\}`, and then write the value `12.005` (which is `12005/1000`), or use `Kis{CPU\}` and write `11.723` (which is `12005/1024`). The supported units are a subset of [The Unified Code for Units of Measure](https://unitsofmeasure.org/ucum.html) standard: **Basic units (UNIT)** * `bit` bit * `By` byte * `s` second * `min` minute * `h` hour * `d` day * `1` dimensionless **Prefixes (PREFIX)** * `k` kilo (10^3) * `M` mega (10^6) * `G` giga (10^9) * `T` tera (10^12) * `P` peta (10^15) * `E` exa (10^18) * `Z` zetta (10^21) * `Y` yotta (10^24) * `m` milli (10^-3) * `u` micro (10^-6) * `n` nano (10^-9) * `p` pico (10^-12) * `f` femto (10^-15) * `a` atto (10^-18) * `z` zepto (10^-21) * `y` yocto (10^-24) * `Ki` kibi (2^10) * `Mi` mebi (2^20) * `Gi` gibi (2^30) * `Ti` tebi (2^40) * `Pi` pebi (2^50) **Grammar** The grammar also includes these connectors: * `/` division or ratio (as an infix operator). For examples, `kBy/{email\}` or `MiBy/10ms` (although you should almost never have `/s` in a metric `unit`; rates should always be computed at query time from the underlying cumulative or delta value). * `.` multiplication or composition (as an infix operator). For examples, `GBy.d` or `k{watt\}.h`. The grammar for a unit is as follows: Expression = Component { "." Component \} { "/" Component \} ; Component = ( [ PREFIX ] UNIT | "%" ) [ Annotation ] | Annotation | "1" ; Annotation = "{" NAME "\}" ; Notes: * `Annotation` is just a comment if it follows a `UNIT`. If the annotation is used alone, then the unit is equivalent to `1`. For examples, `{request\}/s == 1/s`, `By{transmitted\}/s == By/s`. * `NAME` is a sequence of non-blank printable ASCII characters not containing `{` or `\}`. * `1` represents a unitary [dimensionless unit](https://en.wikipedia.org/wiki/Dimensionless_quantity) of 1, such as in `1/s`. It is typically used when none of the basic units are appropriate. For example, "new users per day" can be represented as `1/d` or `{new-users\}/d` (and a metric value `5` would mean "5 new users). Alternatively, "thousands of page views per day" would be represented as `1000/d` or `k1/d` or `k{page_views\}/d` (and a metric value of `5.3` would mean "5300 page views per day"). * `%` represents dimensionless value of 1/100, and annotates values giving a percentage (so the metric values are typically in the range of 0..100, and a metric value `3` means "3 percent"). * `10^2.%` indicates a metric contains a ratio, typically in the range 0..1, that will be multiplied by 100 and displayed as a percentage (so a metric value `0.03` means "3 percent").
         */
        unit?: string | null;
        /**
         * Whether the measurement is an integer, a floating-point number, etc. Some combinations of `metric_kind` and `value_type` might not be supported.
         */
        valueType?: string | null;
    }
    /**
     * Additional annotations that can be used to guide the usage of a metric.
     */
    export interface Schema$MetricDescriptorMetadata {
        /**
         * The delay of data points caused by ingestion. Data points older than this age are guaranteed to be ingested and available to be read, excluding data loss due to errors.
         */
        ingestDelay?: string | null;
        /**
         * Deprecated. Must use the MetricDescriptor.launch_stage instead.
         */
        launchStage?: string | null;
        /**
         * The sampling period of metric data points. For metrics which are written periodically, consecutive data points are stored at this time interval, excluding data loss due to errors. Metrics with a higher granularity have a smaller sampling period.
         */
        samplePeriod?: string | null;
    }
    /**
     * Bind API methods to metrics. Binding a method to a metric causes that metric's configured quota behaviors to apply to the method call.
     */
    export interface Schema$MetricRule {
        /**
         * Metrics to update when the selected methods are called, and the associated cost applied to each metric. The key of the map is the metric name, and the values are the amount increased for the metric against which the quota limits are defined. The value must not be negative.
         */
        metricCosts?: {
            [key: string]: string;
        } | null;
        /**
         * Selects the methods to which this rule applies. Refer to selector for syntax details.
         */
        selector?: string | null;
    }
    /**
     * Declares an API Interface to be included in this interface. The including interface must redeclare all the methods from the included interface, but documentation and options are inherited as follows: - If after comment and whitespace stripping, the documentation string of the redeclared method is empty, it will be inherited from the original method. - Each annotation belonging to the service config (http, visibility) which is not set in the redeclared method will be inherited. - If an http annotation is inherited, the path pattern will be modified as follows. Any version prefix will be replaced by the version of the including interface plus the root path if specified. Example of a simple mixin: package google.acl.v1; service AccessControl { // Get the underlying ACL object. rpc GetAcl(GetAclRequest) returns (Acl) { option (google.api.http).get = "/v1/{resource=**\}:getAcl"; \} \} package google.storage.v2; service Storage { // rpc GetAcl(GetAclRequest) returns (Acl); // Get a data record. rpc GetData(GetDataRequest) returns (Data) { option (google.api.http).get = "/v2/{resource=**\}"; \} \} Example of a mixin configuration: apis: - name: google.storage.v2.Storage mixins: - name: google.acl.v1.AccessControl The mixin construct implies that all methods in `AccessControl` are also declared with same name and request/response types in `Storage`. A documentation generator or annotation processor will see the effective `Storage.GetAcl` method after inheriting documentation and annotations as follows: service Storage { // Get the underlying ACL object. rpc GetAcl(GetAclRequest) returns (Acl) { option (google.api.http).get = "/v2/{resource=**\}:getAcl"; \} ... \} Note how the version in the path pattern changed from `v1` to `v2`. If the `root` field in the mixin is specified, it should be a relative path under which inherited HTTP paths are placed. Example: apis: - name: google.storage.v2.Storage mixins: - name: google.acl.v1.AccessControl root: acls This implies the following inherited HTTP annotation: service Storage { // Get the underlying ACL object. rpc GetAcl(GetAclRequest) returns (Acl) { option (google.api.http).get = "/v2/acls/{resource=**\}:getAcl"; \} ... \}
     */
    export interface Schema$Mixin {
        /**
         * The fully qualified name of the interface which is included.
         */
        name?: string | null;
        /**
         * If non-empty specifies a path under which inherited HTTP paths are rooted.
         */
        root?: string | null;
    }
    /**
     * An object that describes the schema of a MonitoredResource object using a type name and a set of labels. For example, the monitored resource descriptor for Google Compute Engine VM instances has a type of `"gce_instance"` and specifies the use of the labels `"instance_id"` and `"zone"` to identify particular VM instances. Different APIs can support different monitored resource types. APIs generally provide a `list` method that returns the monitored resource descriptors used by the API.
     */
    export interface Schema$MonitoredResourceDescriptor {
        /**
         * Optional. A detailed description of the monitored resource type that might be used in documentation.
         */
        description?: string | null;
        /**
         * Optional. A concise name for the monitored resource type that might be displayed in user interfaces. It should be a Title Cased Noun Phrase, without any article or other determiners. For example, `"Google Cloud SQL Database"`.
         */
        displayName?: string | null;
        /**
         * Required. A set of labels used to describe instances of this monitored resource type. For example, an individual Google Cloud SQL database is identified by values for the labels `"database_id"` and `"zone"`.
         */
        labels?: Schema$LabelDescriptor[];
        /**
         * Optional. The launch stage of the monitored resource definition.
         */
        launchStage?: string | null;
        /**
         * Optional. The resource name of the monitored resource descriptor: `"projects/{project_id\}/monitoredResourceDescriptors/{type\}"` where {type\} is the value of the `type` field in this object and {project_id\} is a project ID that provides API-specific context for accessing the type. APIs that do not use project information can use the resource name format `"monitoredResourceDescriptors/{type\}"`.
         */
        name?: string | null;
        /**
         * Required. The monitored resource type. For example, the type `"cloudsql_database"` represents databases in Google Cloud SQL. For a list of types, see [Monitoring resource types](https://cloud.google.com/monitoring/api/resources) and [Logging resource types](https://cloud.google.com/logging/docs/api/v2/resource-list).
         */
        type?: string | null;
    }
    /**
     * Monitoring configuration of the service. The example below shows how to configure monitored resources and metrics for monitoring. In the example, a monitored resource and two metrics are defined. The `library.googleapis.com/book/returned_count` metric is sent to both producer and consumer projects, whereas the `library.googleapis.com/book/num_overdue` metric is only sent to the consumer project. monitored_resources: - type: library.googleapis.com/Branch display_name: "Library Branch" description: "A branch of a library." launch_stage: GA labels: - key: resource_container description: "The Cloud container (ie. project id) for the Branch." - key: location description: "The location of the library branch." - key: branch_id description: "The id of the branch." metrics: - name: library.googleapis.com/book/returned_count display_name: "Books Returned" description: "The count of books that have been returned." launch_stage: GA metric_kind: DELTA value_type: INT64 unit: "1" labels: - key: customer_id description: "The id of the customer." - name: library.googleapis.com/book/num_overdue display_name: "Books Overdue" description: "The current number of overdue books." launch_stage: GA metric_kind: GAUGE value_type: INT64 unit: "1" labels: - key: customer_id description: "The id of the customer." monitoring: producer_destinations: - monitored_resource: library.googleapis.com/Branch metrics: - library.googleapis.com/book/returned_count consumer_destinations: - monitored_resource: library.googleapis.com/Branch metrics: - library.googleapis.com/book/returned_count - library.googleapis.com/book/num_overdue
     */
    export interface Schema$Monitoring {
        /**
         * Monitoring configurations for sending metrics to the consumer project. There can be multiple consumer destinations. A monitored resource type may appear in multiple monitoring destinations if different aggregations are needed for different sets of metrics associated with that monitored resource type. A monitored resource and metric pair may only be used once in the Monitoring configuration.
         */
        consumerDestinations?: Schema$MonitoringDestination[];
        /**
         * Monitoring configurations for sending metrics to the producer project. There can be multiple producer destinations. A monitored resource type may appear in multiple monitoring destinations if different aggregations are needed for different sets of metrics associated with that monitored resource type. A monitored resource and metric pair may only be used once in the Monitoring configuration.
         */
        producerDestinations?: Schema$MonitoringDestination[];
    }
    /**
     * Configuration of a specific monitoring destination (the producer project or the consumer project).
     */
    export interface Schema$MonitoringDestination {
        /**
         * Types of the metrics to report to this monitoring destination. Each type must be defined in Service.metrics section.
         */
        metrics?: string[] | null;
        /**
         * The monitored resource type. The type must be defined in Service.monitored_resources section.
         */
        monitoredResource?: string | null;
    }
    /**
     * OAuth scopes are a way to define data and permissions on data. For example, there are scopes defined for "Read-only access to Google Calendar" and "Access to Cloud Platform". Users can consent to a scope for an application, giving it permission to access that data on their behalf. OAuth scope specifications should be fairly coarse grained; a user will need to see and understand the text description of what your scope means. In most cases: use one or at most two OAuth scopes for an entire family of products. If your product has multiple APIs, you should probably be sharing the OAuth scope across all of those APIs. When you need finer grained OAuth consent screens: talk with your product management about how developers will use them in practice. Please note that even though each of the canonical scopes is enough for a request to be accepted and passed to the backend, a request can still fail due to the backend requiring additional scopes or permissions.
     */
    export interface Schema$OAuthRequirements {
        /**
         * The list of publicly documented OAuth scopes that are allowed access. An OAuth token containing any of these scopes will be accepted. Example: canonical_scopes: https://www.googleapis.com/auth/calendar, https://www.googleapis.com/auth/calendar.read
         */
        canonicalScopes?: string | null;
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
     * A protocol buffer option, which can be attached to a message, field, enumeration, etc.
     */
    export interface Schema$Option {
        /**
         * The option's name. For protobuf built-in options (options defined in descriptor.proto), this is the short name. For example, `"map_entry"`. For custom options, it should be the fully-qualified name. For example, `"google.api.http"`.
         */
        name?: string | null;
        /**
         * The option's value packed in an Any message. If the value is a primitive, the corresponding wrapper type defined in google/protobuf/wrappers.proto should be used. If the value is an enum, it should be stored as an int32 value using the google.protobuf.Int32Value type.
         */
        value?: {
            [key: string]: any;
        } | null;
    }
    /**
     * Represents a documentation page. A page can contain subpages to represent nested documentation set structure.
     */
    export interface Schema$Page {
        /**
         * The Markdown content of the page. You can use (== include {path\} ==) to include content from a Markdown file. The content can be used to produce the documentation page such as HTML format page.
         */
        content?: string | null;
        /**
         * The name of the page. It will be used as an identity of the page to generate URI of the page, text of the link to this page in navigation, etc. The full page name (start from the root page name to this page concatenated with `.`) can be used as reference to the page in your documentation. For example: pages: - name: Tutorial content: (== include tutorial.md ==) subpages: - name: Java content: (== include tutorial_java.md ==) You can reference `Java` page using Markdown reference link syntax: `Java`.
         */
        name?: string | null;
        /**
         * Subpages of this page. The order of subpages specified here will be honored in the generated docset.
         */
        subpages?: Schema$Page[];
    }
    /**
     * Quota configuration helps to achieve fairness and budgeting in service usage. The metric based quota configuration works this way: - The service configuration defines a set of metrics. - For API calls, the quota.metric_rules maps methods to metrics with corresponding costs. - The quota.limits defines limits on the metrics, which will be used for quota checks at runtime. An example quota configuration in yaml format: quota: limits: - name: apiWriteQpsPerProject metric: library.googleapis.com/write_calls unit: "1/min/{project\}" # rate limit for consumer projects values: STANDARD: 10000 # The metric rules bind all methods to the read_calls metric, # except for the UpdateBook and DeleteBook methods. These two methods # are mapped to the write_calls metric, with the UpdateBook method # consuming at twice rate as the DeleteBook method. metric_rules: - selector: "*" metric_costs: library.googleapis.com/read_calls: 1 - selector: google.example.library.v1.LibraryService.UpdateBook metric_costs: library.googleapis.com/write_calls: 2 - selector: google.example.library.v1.LibraryService.DeleteBook metric_costs: library.googleapis.com/write_calls: 1 Corresponding Metric definition: metrics: - name: library.googleapis.com/read_calls display_name: Read requests metric_kind: DELTA value_type: INT64 - name: library.googleapis.com/write_calls display_name: Write requests metric_kind: DELTA value_type: INT64
     */
    export interface Schema$Quota {
        /**
         * List of `QuotaLimit` definitions for the service.
         */
        limits?: Schema$QuotaLimit[];
        /**
         * List of `MetricRule` definitions, each one mapping a selected method to one or more metrics.
         */
        metricRules?: Schema$MetricRule[];
    }
    /**
     * `QuotaLimit` defines a specific limit that applies over a specified duration for a limit type. There can be at most one limit for a duration and limit type combination defined within a `QuotaGroup`.
     */
    export interface Schema$QuotaLimit {
        /**
         * Default number of tokens that can be consumed during the specified duration. This is the number of tokens assigned when a client application developer activates the service for his/her project. Specifying a value of 0 will block all requests. This can be used if you are provisioning quota to selected consumers and blocking others. Similarly, a value of -1 will indicate an unlimited quota. No other negative values are allowed. Used by group-based quotas only.
         */
        defaultLimit?: string | null;
        /**
         * Optional. User-visible, extended description for this quota limit. Should be used only when more context is needed to understand this limit than provided by the limit's display name (see: `display_name`).
         */
        description?: string | null;
        /**
         * User-visible display name for this limit. Optional. If not set, the UI will provide a default display name based on the quota configuration. This field can be used to override the default display name generated from the configuration.
         */
        displayName?: string | null;
        /**
         * Duration of this limit in textual notation. Must be "100s" or "1d". Used by group-based quotas only.
         */
        duration?: string | null;
        /**
         * Free tier value displayed in the Developers Console for this limit. The free tier is the number of tokens that will be subtracted from the billed amount when billing is enabled. This field can only be set on a limit with duration "1d", in a billable group; it is invalid on any other limit. If this field is not set, it defaults to 0, indicating that there is no free tier for this service. Used by group-based quotas only.
         */
        freeTier?: string | null;
        /**
         * Maximum number of tokens that can be consumed during the specified duration. Client application developers can override the default limit up to this maximum. If specified, this value cannot be set to a value less than the default limit. If not specified, it is set to the default limit. To allow clients to apply overrides with no upper bound, set this to -1, indicating unlimited maximum quota. Used by group-based quotas only.
         */
        maxLimit?: string | null;
        /**
         * The name of the metric this quota limit applies to. The quota limits with the same metric will be checked together during runtime. The metric must be defined within the service config.
         */
        metric?: string | null;
        /**
         * Name of the quota limit. The name must be provided, and it must be unique within the service. The name can only include alphanumeric characters as well as '-'. The maximum length of the limit name is 64 characters.
         */
        name?: string | null;
        /**
         * Specify the unit of the quota limit. It uses the same syntax as Metric.unit. The supported unit kinds are determined by the quota backend system. Here are some examples: * "1/min/{project\}" for quota per minute per project. Note: the order of unit components is insignificant. The "1" at the beginning is required to follow the metric unit syntax.
         */
        unit?: string | null;
        /**
         * Tiered limit values. You must specify this as a key:value pair, with an integer value that is the maximum number of requests allowed for the specified unit. Currently only STANDARD is supported.
         */
        values?: {
            [key: string]: string;
        } | null;
    }
    /**
     * `Service` is the root object of Google API service configuration (service config). It describes the basic information about a logical service, such as the service name and the user-facing title, and delegates other aspects to sub-sections. Each sub-section is either a proto message or a repeated proto message that configures a specific aspect, such as auth. For more information, see each proto message definition. Example: type: google.api.Service name: calendar.googleapis.com title: Google Calendar API apis: - name: google.calendar.v3.Calendar visibility: rules: - selector: "google.calendar.v3.*" restriction: PREVIEW backend: rules: - selector: "google.calendar.v3.*" address: calendar.example.com authentication: providers: - id: google_calendar_auth jwks_uri: https://www.googleapis.com/oauth2/v1/certs issuer: https://securetoken.google.com rules: - selector: "*" requirements: provider_id: google_calendar_auth
     */
    export interface Schema$Service {
        /**
         * A list of API interfaces exported by this service. Only the `name` field of the google.protobuf.Api needs to be provided by the configuration author, as the remaining fields will be derived from the IDL during the normalization process. It is an error to specify an API interface here which cannot be resolved against the associated IDL files.
         */
        apis?: Schema$Api[];
        /**
         * Auth configuration.
         */
        authentication?: Schema$Authentication;
        /**
         * API backend configuration.
         */
        backend?: Schema$Backend;
        /**
         * Billing configuration.
         */
        billing?: Schema$Billing;
        /**
         * Obsolete. Do not use. This field has no semantic meaning. The service config compiler always sets this field to `3`.
         */
        configVersion?: number | null;
        /**
         * Context configuration.
         */
        context?: Schema$Context;
        /**
         * Configuration for the service control plane.
         */
        control?: Schema$Control;
        /**
         * Custom error configuration.
         */
        customError?: Schema$CustomError;
        /**
         * Additional API documentation.
         */
        documentation?: Schema$Documentation;
        /**
         * Configuration for network endpoints. If this is empty, then an endpoint with the same name as the service is automatically generated to service all defined APIs.
         */
        endpoints?: Schema$Endpoint[];
        /**
         * A list of all enum types included in this API service. Enums referenced directly or indirectly by the `apis` are automatically included. Enums which are not referenced but shall be included should be listed here by name by the configuration author. Example: enums: - name: google.someapi.v1.SomeEnum
         */
        enums?: Schema$Enum[];
        /**
         * HTTP configuration.
         */
        http?: Schema$Http;
        /**
         * A unique ID for a specific instance of this message, typically assigned by the client for tracking purpose. Must be no longer than 63 characters and only lower case letters, digits, '.', '_' and '-' are allowed. If empty, the server may choose to generate one instead.
         */
        id?: string | null;
        /**
         * Logging configuration.
         */
        logging?: Schema$Logging;
        /**
         * Defines the logs used by this service.
         */
        logs?: Schema$LogDescriptor[];
        /**
         * Defines the metrics used by this service.
         */
        metrics?: Schema$MetricDescriptor[];
        /**
         * Defines the monitored resources used by this service. This is required by the Service.monitoring and Service.logging configurations.
         */
        monitoredResources?: Schema$MonitoredResourceDescriptor[];
        /**
         * Monitoring configuration.
         */
        monitoring?: Schema$Monitoring;
        /**
         * The service name, which is a DNS-like logical identifier for the service, such as `calendar.googleapis.com`. The service name typically goes through DNS verification to make sure the owner of the service also owns the DNS name.
         */
        name?: string | null;
        /**
         * The Google project that owns this service.
         */
        producerProjectId?: string | null;
        /**
         * Quota configuration.
         */
        quota?: Schema$Quota;
        /**
         * Output only. The source information for this configuration if available.
         */
        sourceInfo?: Schema$SourceInfo;
        /**
         * System parameter configuration.
         */
        systemParameters?: Schema$SystemParameters;
        /**
         * A list of all proto message types included in this API service. It serves similar purpose as [google.api.Service.types], except that these types are not needed by user-defined APIs. Therefore, they will not show up in the generated discovery doc. This field should only be used to define system APIs in ESF.
         */
        systemTypes?: Schema$Type[];
        /**
         * The product title for this service, it is the name displayed in Google Cloud Console.
         */
        title?: string | null;
        /**
         * A list of all proto message types included in this API service. Types referenced directly or indirectly by the `apis` are automatically included. Messages which are not referenced but shall be included, such as types used by the `google.protobuf.Any` type, should be listed here by name by the configuration author. Example: types: - name: google.protobuf.Int32
         */
        types?: Schema$Type[];
        /**
         * Configuration controlling usage of this service.
         */
        usage?: Schema$Usage;
    }
    /**
     * `SourceContext` represents information about the source of a protobuf element, like the file in which it is defined.
     */
    export interface Schema$SourceContext {
        /**
         * The path-qualified name of the .proto file that contained the associated protobuf element. For example: `"google/protobuf/source_context.proto"`.
         */
        fileName?: string | null;
    }
    /**
     * Source information used to create a Service Config
     */
    export interface Schema$SourceInfo {
        /**
         * All files used during config generation.
         */
        sourceFiles?: Array<{
            [key: string]: any;
        }> | null;
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
     * Define a parameter's name and location. The parameter may be passed as either an HTTP header or a URL query parameter, and if both are passed the behavior is implementation-dependent.
     */
    export interface Schema$SystemParameter {
        /**
         * Define the HTTP header name to use for the parameter. It is case insensitive.
         */
        httpHeader?: string | null;
        /**
         * Define the name of the parameter, such as "api_key" . It is case sensitive.
         */
        name?: string | null;
        /**
         * Define the URL query parameter name to use for the parameter. It is case sensitive.
         */
        urlQueryParameter?: string | null;
    }
    /**
     * Define a system parameter rule mapping system parameter definitions to methods.
     */
    export interface Schema$SystemParameterRule {
        /**
         * Define parameters. Multiple names may be defined for a parameter. For a given method call, only one of them should be used. If multiple names are used the behavior is implementation-dependent. If none of the specified names are present the behavior is parameter-dependent.
         */
        parameters?: Schema$SystemParameter[];
        /**
         * Selects the methods to which this rule applies. Use '*' to indicate all methods in all APIs. Refer to selector for syntax details.
         */
        selector?: string | null;
    }
    /**
     * ### System parameter configuration A system parameter is a special kind of parameter defined by the API system, not by an individual API. It is typically mapped to an HTTP header and/or a URL query parameter. This configuration specifies which methods change the names of the system parameters.
     */
    export interface Schema$SystemParameters {
        /**
         * Define system parameters. The parameters defined here will override the default parameters implemented by the system. If this field is missing from the service config, default system parameters will be used. Default system parameters and names is implementation-dependent. Example: define api key for all methods system_parameters rules: - selector: "*" parameters: - name: api_key url_query_parameter: api_key Example: define 2 api key names for a specific method. system_parameters rules: - selector: "/ListShelves" parameters: - name: api_key http_header: Api-Key1 - name: api_key http_header: Api-Key2 **NOTE:** All service configuration rules follow "last one wins" order.
         */
        rules?: Schema$SystemParameterRule[];
    }
    /**
     * A protocol buffer message type.
     */
    export interface Schema$Type {
        /**
         * The list of fields.
         */
        fields?: Schema$Field[];
        /**
         * The fully qualified message name.
         */
        name?: string | null;
        /**
         * The list of types appearing in `oneof` definitions in this type.
         */
        oneofs?: string[] | null;
        /**
         * The protocol buffer options.
         */
        options?: Schema$Option[];
        /**
         * The source context.
         */
        sourceContext?: Schema$SourceContext;
        /**
         * The source syntax.
         */
        syntax?: string | null;
    }
    /**
     * Configuration controlling usage of a service.
     */
    export interface Schema$Usage {
        /**
         * The full resource name of a channel used for sending notifications to the service producer. Google Service Management currently only supports [Google Cloud Pub/Sub](https://cloud.google.com/pubsub) as a notification channel. To use Google Cloud Pub/Sub as the channel, this must be the name of a Cloud Pub/Sub topic that uses the Cloud Pub/Sub topic name format documented in https://cloud.google.com/pubsub/docs/overview.
         */
        producerNotificationChannel?: string | null;
        /**
         * Requirements that must be satisfied before a consumer project can use the service. Each requirement is of the form /; for example 'serviceusage.googleapis.com/billing-enabled'. For Google APIs, a Terms of Service requirement must be included here. Google Cloud APIs must include "serviceusage.googleapis.com/tos/cloud". Other Google APIs should include "serviceusage.googleapis.com/tos/universal". Additional ToS can be included based on the business needs.
         */
        requirements?: string[] | null;
        /**
         * A list of usage rules that apply to individual API methods. **NOTE:** All service configuration rules follow "last one wins" order.
         */
        rules?: Schema$UsageRule[];
    }
    /**
     * Usage configuration rules for the service. NOTE: Under development. Use this rule to configure unregistered calls for the service. Unregistered calls are calls that do not contain consumer project identity. (Example: calls that do not contain an API key). By default, API methods do not allow unregistered calls, and each method call must be identified by a consumer project identity. Use this rule to allow/disallow unregistered calls. Example of an API that wants to allow unregistered calls for entire service. usage: rules: - selector: "*" allow_unregistered_calls: true Example of a method that wants to allow unregistered calls. usage: rules: - selector: "google.example.library.v1.LibraryService.CreateBook" allow_unregistered_calls: true
     */
    export interface Schema$UsageRule {
        /**
         * If true, the selected method allows unregistered calls, e.g. calls that don't identify any user or application.
         */
        allowUnregisteredCalls?: boolean | null;
        /**
         * Selects the methods to which this rule applies. Use '*' to indicate all methods in all APIs. Refer to selector for syntax details.
         */
        selector?: string | null;
        /**
         * If true, the selected method should skip service control and the control plane features, such as quota and billing, will not be available. This flag is used by Google Cloud Endpoints to bypass checks for internal methods, such as service health check methods.
         */
        skipServiceControl?: boolean | null;
    }
    /**
     * Response message for the `AddVisibilityLabels` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.
     */
    export interface Schema$V1beta1AddVisibilityLabelsResponse {
        /**
         * The updated set of visibility labels for this consumer on this service.
         */
        labels?: string[] | null;
    }
    /**
     * Response message for BatchCreateProducerOverrides
     */
    export interface Schema$V1Beta1BatchCreateProducerOverridesResponse {
        /**
         * The overrides that were created.
         */
        overrides?: Schema$V1Beta1QuotaOverride[];
    }
    /**
     * Consumer quota settings for a quota limit.
     */
    export interface Schema$V1Beta1ConsumerQuotaLimit {
        /**
         * Whether this limit is precise or imprecise.
         */
        isPrecise?: boolean | null;
        /**
         * The name of the parent metric of this limit. An example name would be: `compute.googleapis.com/cpus`
         */
        metric?: string | null;
        /**
         * The resource name of the quota limit. An example name would be: `services/compute.googleapis.com/projects/123/quotas/metrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion` The resource name is intended to be opaque and should not be parsed for its component strings, since its representation could change in the future.
         */
        name?: string | null;
        /**
         * Summary of the enforced quota buckets, organized by quota dimension, ordered from least specific to most specific (for example, the global default bucket, with no quota dimensions, will always appear first).
         */
        quotaBuckets?: Schema$V1Beta1QuotaBucket[];
        /**
         * List of all supported locations. This field is present only if the limit has a {region\} or {zone\} dimension.
         */
        supportedLocations?: string[] | null;
        /**
         * The limit unit. An example unit would be: `1/{project\}/{region\}` Note that `{project\}` and `{region\}` are not placeholders in this example; the literal characters `{` and `\}` occur in the string.
         */
        unit?: string | null;
    }
    /**
     * Consumer quota settings for a quota metric.
     */
    export interface Schema$V1Beta1ConsumerQuotaMetric {
        /**
         * The consumer quota for each quota limit defined on the metric.
         */
        consumerQuotaLimits?: Schema$V1Beta1ConsumerQuotaLimit[];
        /**
         * The quota limits targeting the descendant containers of the consumer in request. If the consumer in request is of type `organizations` or `folders`, the field will list per-project limits in the metric; if the consumer in request is of type `project`, the field will be empty. The `quota_buckets` field of each descendant consumer quota limit will not be populated.
         */
        descendantConsumerQuotaLimits?: Schema$V1Beta1ConsumerQuotaLimit[];
        /**
         * The display name of the metric. An example name would be: "CPUs"
         */
        displayName?: string | null;
        /**
         * The name of the metric. An example name would be: `compute.googleapis.com/cpus`
         */
        metric?: string | null;
        /**
         * The resource name of the quota settings on this metric for this consumer. An example name would be: `services/serviceconsumermanagement.googleapis.com/projects/123/quota/metrics/compute.googleapis.com%2Fcpus The resource name is intended to be opaque and should not be parsed for its component strings, since its representation could change in the future.
         */
        name?: string | null;
        /**
         * The units in which the metric value is reported.
         */
        unit?: string | null;
    }
    /**
     * A default identity in the Identity and Access Management API.
     */
    export interface Schema$V1beta1DefaultIdentity {
        /**
         * The email address of the default identity.
         */
        email?: string | null;
        /**
         * Default identity resource name. An example name would be: `services/serviceconsumermanagement.googleapis.com/projects/123/defaultIdentity`
         */
        name?: string | null;
        /**
         * The Default Identity tag. If specified when creating the account, the tag must be present in activation_grants. If not specified when creating the account, the tag is set to the tag specified in activation_grants.
         */
        tag?: string | null;
        /**
         * The unique and stable id of the default identity.
         */
        uniqueId?: string | null;
    }
    /**
     * Response message for the `DisableConsumer` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.
     */
    export interface Schema$V1Beta1DisableConsumerResponse {
    }
    /**
     * Response message for the `DisableConsumer` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.
     */
    export interface Schema$V1beta1DisableConsumerResponse {
    }
    /**
     * Response message for the `EnableConsumer` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.
     */
    export interface Schema$V1Beta1EnableConsumerResponse {
    }
    /**
     * Response message for the `EnableConsumer` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.
     */
    export interface Schema$V1beta1EnableConsumerResponse {
    }
    /**
     * Response message for the `GenerateDefaultIdentity` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.
     */
    export interface Schema$V1beta1GenerateDefaultIdentityResponse {
        /**
         * Status of the role attachment. Under development (go/si-attach-role), currently always return ATTACH_STATUS_UNSPECIFIED)
         */
        attachStatus?: string | null;
        /**
         * DefaultIdentity that was created or retrieved.
         */
        identity?: Schema$V1beta1DefaultIdentity;
        /**
         * Role attached to consumer project. Empty if not attached in this request. (Under development, currently always return empty.)
         */
        role?: string | null;
    }
    /**
     * Response message for the `GenerateServiceAccount` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.
     */
    export interface Schema$V1beta1GenerateServiceAccountResponse {
        /**
         * ServiceAccount that was created or retrieved.
         */
        account?: Schema$V1beta1ServiceAccount;
    }
    /**
     * Response message for the `GenerateServiceIdentity` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.
     */
    export interface Schema$V1Beta1GenerateServiceIdentityResponse {
        /**
         * ServiceIdentity that was created or retrieved.
         */
        identity?: Schema$V1Beta1ServiceIdentity;
    }
    /**
     * Request message for ImportProducerOverrides
     */
    export interface Schema$V1Beta1ImportProducerOverridesRequest {
        /**
         * Whether to force the creation of the quota overrides. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations.
         */
        force?: boolean | null;
        /**
         * The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set.
         */
        forceOnly?: string[] | null;
        /**
         * The import data is specified in the request message itself
         */
        inlineSource?: Schema$V1Beta1OverrideInlineSource;
    }
    /**
     * Response message for ImportProducerOverrides
     */
    export interface Schema$V1Beta1ImportProducerOverridesResponse {
        /**
         * The overrides that were created from the imported data.
         */
        overrides?: Schema$V1Beta1QuotaOverride[];
    }
    /**
     * Response message for ImportProducerQuotaPolicies
     */
    export interface Schema$V1Beta1ImportProducerQuotaPoliciesResponse {
        /**
         * The policies that were created from the imported data.
         */
        policies?: Schema$V1Beta1ProducerQuotaPolicy[];
    }
    /**
     * Response message for ListConsumerQuotaMetrics.
     */
    export interface Schema$V1Beta1ListConsumerQuotaMetricsResponse {
        /**
         * Quota settings for the consumer, organized by quota metric.
         */
        metrics?: Schema$V1Beta1ConsumerQuotaMetric[];
        /**
         * Token identifying which result to start with; returned by a previous list call.
         */
        nextPageToken?: string | null;
    }
    /**
     * Response message for ListProducerOverrides.
     */
    export interface Schema$V1Beta1ListProducerOverridesResponse {
        /**
         * Token identifying which result to start with; returned by a previous list call.
         */
        nextPageToken?: string | null;
        /**
         * Producer overrides on this limit.
         */
        overrides?: Schema$V1Beta1QuotaOverride[];
    }
    /**
     * Import data embedded in the request message
     */
    export interface Schema$V1Beta1OverrideInlineSource {
        /**
         * The overrides to create. Each override must have a value for 'metric' and 'unit', to specify which metric and which limit the override should be applied to. The 'name' field of the override does not need to be set; it is ignored.
         */
        overrides?: Schema$V1Beta1QuotaOverride[];
    }
    /**
     * Quota policy created by service producer.
     */
    export interface Schema$V1Beta1ProducerQuotaPolicy {
        /**
         * The cloud resource container at which the quota policy is created. The format is {container_type\}/{container_number\}
         */
        container?: string | null;
        /**
         *  If this map is nonempty, then this policy applies only to specific values for dimensions defined in the limit unit. For example, an policy on a limit with the unit 1/{project\}/{region\} could contain an entry with the key "region" and the value "us-east-1"; the policy is only applied to quota consumed in that region. This map has the following restrictions: * Keys that are not defined in the limit's unit are not valid keys. Any string appearing in {brackets\} in the unit (besides {project\} or {user\}) is a defined key. * "project" is not a valid key; the project is already specified in the parent resource name. * "user" is not a valid key; the API does not support quota polcies that apply only to a specific user. * If "region" appears as a key, its value must be a valid Cloud region. * If "zone" appears as a key, its value must be a valid Cloud zone. * If any valid key other than "region" or "zone" appears in the map, then all valid keys other than "region" or "zone" must also appear in the map.
         */
        dimensions?: {
            [key: string]: string;
        } | null;
        /**
         * The name of the metric to which this policy applies. An example name would be: `compute.googleapis.com/cpus`
         */
        metric?: string | null;
        /**
         * The resource name of the producer policy. An example name would be: `services/compute.googleapis.com/organizations/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerQuotaPolicies/4a3f2c1d`
         */
        name?: string | null;
        /**
         * The quota policy value. Can be any nonnegative integer, or -1 (unlimited quota).
         */
        policyValue?: string | null;
        /**
         * The limit unit of the limit to which this policy applies. An example unit would be: `1/{project\}/{region\}` Note that `{project\}` and `{region\}` are not placeholders in this example; the literal characters `{` and `\}` occur in the string.
         */
        unit?: string | null;
    }
    /**
     * A quota bucket is a quota provisioning unit for a specific set of dimensions.
     */
    export interface Schema$V1Beta1QuotaBucket {
        /**
         * Admin override on this quota bucket.
         */
        adminOverride?: Schema$V1Beta1QuotaOverride;
        /**
         * Consumer override on this quota bucket.
         */
        consumerOverride?: Schema$V1Beta1QuotaOverride;
        /**
         * The default limit of this quota bucket, as specified by the service configuration.
         */
        defaultLimit?: string | null;
        /**
         * The dimensions of this quota bucket. If this map is empty, this is the global bucket, which is the default quota value applied to all requests that do not have a more specific override. If this map is nonempty, the default limit, effective limit, and quota overrides apply only to requests that have the dimensions given in the map. For example, if the map has key "region" and value "us-east-1", then the specified effective limit is only effective in that region, and the specified overrides apply only in that region.
         */
        dimensions?: {
            [key: string]: string;
        } | null;
        /**
         * The effective limit of this quota bucket. Equal to default_limit if there are no overrides.
         */
        effectiveLimit?: string | null;
        /**
         * Producer override on this quota bucket.
         */
        producerOverride?: Schema$V1Beta1QuotaOverride;
    }
    /**
     * A quota override
     */
    export interface Schema$V1Beta1QuotaOverride {
        /**
         * The resource name of the ancestor that requested the override. For example: "organizations/12345" or "folders/67890". Used by admin overrides only.
         */
        adminOverrideAncestor?: string | null;
        /**
         *  If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit. For example, an override on a limit with the unit 1/{project\}/{region\} could contain an entry with the key "region" and the value "us-east-1"; the override is only applied to quota consumed in that region. This map has the following restrictions: * Keys that are not defined in the limit's unit are not valid keys. Any string appearing in {brackets\} in the unit (besides {project\} or {user\}) is a defined key. * "project" is not a valid key; the project is already specified in the parent resource name. * "user" is not a valid key; the API does not support quota overrides that apply only to a specific user. * If "region" appears as a key, its value must be a valid Cloud region. * If "zone" appears as a key, its value must be a valid Cloud zone. * If any valid key other than "region" or "zone" appears in the map, then all valid keys other than "region" or "zone" must also appear in the map.
         */
        dimensions?: {
            [key: string]: string;
        } | null;
        /**
         * The name of the metric to which this override applies. An example name would be: `compute.googleapis.com/cpus`
         */
        metric?: string | null;
        /**
         * The resource name of the producer override. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerOverrides/4a3f2c1d`
         */
        name?: string | null;
        /**
         * The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota).
         */
        overrideValue?: string | null;
        /**
         * The limit unit of the limit to which this override applies. An example unit would be: `1/{project\}/{region\}` Note that `{project\}` and `{region\}` are not placeholders in this example; the literal characters `{` and `\}` occur in the string.
         */
        unit?: string | null;
    }
    /**
     * Response message for the `RefreshConsumer` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.
     */
    export interface Schema$V1Beta1RefreshConsumerResponse {
    }
    /**
     * Response message for the `RefreshConsumer` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.
     */
    export interface Schema$V1beta1RefreshConsumerResponse {
    }
    /**
     * Response message for the `RemoveVisibilityLabels` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.
     */
    export interface Schema$V1beta1RemoveVisibilityLabelsResponse {
        /**
         * The updated set of visibility labels for this consumer on this service.
         */
        labels?: string[] | null;
    }
    /**
     * A service account in the Identity and Access Management API.
     */
    export interface Schema$V1beta1ServiceAccount {
        /**
         * The email address of the service account.
         */
        email?: string | null;
        /**
         * Deprecated. See b/136209818.
         */
        iamAccountName?: string | null;
        /**
         * P4 SA resource name. An example name would be: `services/serviceconsumermanagement.googleapis.com/projects/123/serviceAccounts/default`
         */
        name?: string | null;
        /**
         * The P4 SA configuration tag. This must be defined in activation_grants. If not specified when creating the account, the tag is set to "default".
         */
        tag?: string | null;
        /**
         * The unique and stable id of the service account.
         */
        uniqueId?: string | null;
    }
    /**
     * A service identity in the Identity and Access Management API.
     */
    export interface Schema$V1Beta1ServiceIdentity {
        /**
         * The email address of the service identity.
         */
        email?: string | null;
        /**
         * P4 service identity resource name. An example name would be: `services/serviceconsumermanagement.googleapis.com/projects/123/serviceIdentities/default`
         */
        name?: string | null;
        /**
         * The P4 service identity configuration tag. This must be defined in activation_grants. If not specified when creating the account, the tag is set to "default".
         */
        tag?: string | null;
        /**
         * The unique and stable id of the service identity.
         */
        uniqueId?: string | null;
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
         * //   https://console.developers.google.com/apis/api/serviceconsumermanagement.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const serviceconsumermanagement = google.serviceconsumermanagement('v1beta1');
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
         *   const res = await serviceconsumermanagement.operations.get({
         *     // The name of the operation resource.
         *     name: 'operations/my-operation',
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
    export class Resource$Services {
        context: APIRequestContext;
        consumerQuotaMetrics: Resource$Services$Consumerquotametrics;
        constructor(context: APIRequestContext);
    }
    export class Resource$Services$Consumerquotametrics {
        context: APIRequestContext;
        limits: Resource$Services$Consumerquotametrics$Limits;
        constructor(context: APIRequestContext);
        /**
         * Retrieves a summary of quota information for a specific quota metric.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/serviceconsumermanagement.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const serviceconsumermanagement = google.serviceconsumermanagement('v1beta1');
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
         *   const res = await serviceconsumermanagement.services.consumerQuotaMetrics.get(
         *     {
         *       // The resource name of the quota metric, returned by a ListConsumerQuotaMetrics call. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus`
         *       name: 'services/my-service/[^/]+/[^/]+/consumerQuotaMetrics/my-consumerQuotaMetric',
         *       // Specifies the level of detail for quota information in the response.
         *       view: 'placeholder-value',
         *     }
         *   );
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "consumerQuotaLimits": [],
         *   //   "descendantConsumerQuotaLimits": [],
         *   //   "displayName": "my_displayName",
         *   //   "metric": "my_metric",
         *   //   "name": "my_name",
         *   //   "unit": "my_unit"
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
        get(params: Params$Resource$Services$Consumerquotametrics$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Services$Consumerquotametrics$Get, options?: MethodOptions): GaxiosPromise<Schema$V1Beta1ConsumerQuotaMetric>;
        get(params: Params$Resource$Services$Consumerquotametrics$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Services$Consumerquotametrics$Get, options: MethodOptions | BodyResponseCallback<Schema$V1Beta1ConsumerQuotaMetric>, callback: BodyResponseCallback<Schema$V1Beta1ConsumerQuotaMetric>): void;
        get(params: Params$Resource$Services$Consumerquotametrics$Get, callback: BodyResponseCallback<Schema$V1Beta1ConsumerQuotaMetric>): void;
        get(callback: BodyResponseCallback<Schema$V1Beta1ConsumerQuotaMetric>): void;
        /**
         * Create or update multiple producer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/serviceconsumermanagement.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const serviceconsumermanagement = google.serviceconsumermanagement('v1beta1');
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
         *     await serviceconsumermanagement.services.consumerQuotaMetrics.importProducerOverrides(
         *       {
         *         // The resource name of the consumer. An example name would be: `services/compute.googleapis.com/projects/123`
         *         parent: 'services/my-service/[^/]+/[^/]+',
         *
         *         // Request body metadata
         *         requestBody: {
         *           // request body parameters
         *           // {
         *           //   "force": false,
         *           //   "forceOnly": [],
         *           //   "inlineSource": {}
         *           // }
         *         },
         *       }
         *     );
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
        importProducerOverrides(params: Params$Resource$Services$Consumerquotametrics$Importproduceroverrides, options: StreamMethodOptions): GaxiosPromise<Readable>;
        importProducerOverrides(params?: Params$Resource$Services$Consumerquotametrics$Importproduceroverrides, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        importProducerOverrides(params: Params$Resource$Services$Consumerquotametrics$Importproduceroverrides, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        importProducerOverrides(params: Params$Resource$Services$Consumerquotametrics$Importproduceroverrides, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        importProducerOverrides(params: Params$Resource$Services$Consumerquotametrics$Importproduceroverrides, callback: BodyResponseCallback<Schema$Operation>): void;
        importProducerOverrides(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Retrieves a summary of all quota information about this consumer that is visible to the service producer, for each quota metric defined by the service. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/serviceconsumermanagement.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const serviceconsumermanagement = google.serviceconsumermanagement('v1beta1');
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
         *     await serviceconsumermanagement.services.consumerQuotaMetrics.list({
         *       // Requested size of the next page of data.
         *       pageSize: 'placeholder-value',
         *       // Token identifying which result to start with; returned by a previous list call.
         *       pageToken: 'placeholder-value',
         *       // Parent of the quotas resource. An example parent would be: `services/serviceconsumermanagement.googleapis.com/projects/123`
         *       parent: 'services/my-service/[^/]+/[^/]+',
         *       // Specifies the level of detail for quota information in the response.
         *       view: 'placeholder-value',
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "metrics": [],
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
        list(params: Params$Resource$Services$Consumerquotametrics$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Services$Consumerquotametrics$List, options?: MethodOptions): GaxiosPromise<Schema$V1Beta1ListConsumerQuotaMetricsResponse>;
        list(params: Params$Resource$Services$Consumerquotametrics$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Services$Consumerquotametrics$List, options: MethodOptions | BodyResponseCallback<Schema$V1Beta1ListConsumerQuotaMetricsResponse>, callback: BodyResponseCallback<Schema$V1Beta1ListConsumerQuotaMetricsResponse>): void;
        list(params: Params$Resource$Services$Consumerquotametrics$List, callback: BodyResponseCallback<Schema$V1Beta1ListConsumerQuotaMetricsResponse>): void;
        list(callback: BodyResponseCallback<Schema$V1Beta1ListConsumerQuotaMetricsResponse>): void;
    }
    export interface Params$Resource$Services$Consumerquotametrics$Get extends StandardParameters {
        /**
         * The resource name of the quota metric, returned by a ListConsumerQuotaMetrics call. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus`
         */
        name?: string;
        /**
         * Specifies the level of detail for quota information in the response.
         */
        view?: string;
    }
    export interface Params$Resource$Services$Consumerquotametrics$Importproduceroverrides extends StandardParameters {
        /**
         * The resource name of the consumer. An example name would be: `services/compute.googleapis.com/projects/123`
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$V1Beta1ImportProducerOverridesRequest;
    }
    export interface Params$Resource$Services$Consumerquotametrics$List extends StandardParameters {
        /**
         * Requested size of the next page of data.
         */
        pageSize?: number;
        /**
         * Token identifying which result to start with; returned by a previous list call.
         */
        pageToken?: string;
        /**
         * Parent of the quotas resource. An example parent would be: `services/serviceconsumermanagement.googleapis.com/projects/123`
         */
        parent?: string;
        /**
         * Specifies the level of detail for quota information in the response.
         */
        view?: string;
    }
    export class Resource$Services$Consumerquotametrics$Limits {
        context: APIRequestContext;
        producerOverrides: Resource$Services$Consumerquotametrics$Limits$Produceroverrides;
        constructor(context: APIRequestContext);
        /**
         * Retrieves a summary of quota information for a specific quota limit.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/serviceconsumermanagement.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const serviceconsumermanagement = google.serviceconsumermanagement('v1beta1');
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
         *     await serviceconsumermanagement.services.consumerQuotaMetrics.limits.get({
         *       // The resource name of the quota limit, returned by a ListConsumerQuotaMetrics or GetConsumerQuotaMetric call. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
         *       name: 'services/my-service/[^/]+/[^/]+/consumerQuotaMetrics/my-consumerQuotaMetric/limits/my-limit',
         *       // Specifies the level of detail for quota information in the response.
         *       view: 'placeholder-value',
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "isPrecise": false,
         *   //   "metric": "my_metric",
         *   //   "name": "my_name",
         *   //   "quotaBuckets": [],
         *   //   "supportedLocations": [],
         *   //   "unit": "my_unit"
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
        get(params: Params$Resource$Services$Consumerquotametrics$Limits$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Services$Consumerquotametrics$Limits$Get, options?: MethodOptions): GaxiosPromise<Schema$V1Beta1ConsumerQuotaLimit>;
        get(params: Params$Resource$Services$Consumerquotametrics$Limits$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Services$Consumerquotametrics$Limits$Get, options: MethodOptions | BodyResponseCallback<Schema$V1Beta1ConsumerQuotaLimit>, callback: BodyResponseCallback<Schema$V1Beta1ConsumerQuotaLimit>): void;
        get(params: Params$Resource$Services$Consumerquotametrics$Limits$Get, callback: BodyResponseCallback<Schema$V1Beta1ConsumerQuotaLimit>): void;
        get(callback: BodyResponseCallback<Schema$V1Beta1ConsumerQuotaLimit>): void;
    }
    export interface Params$Resource$Services$Consumerquotametrics$Limits$Get extends StandardParameters {
        /**
         * The resource name of the quota limit, returned by a ListConsumerQuotaMetrics or GetConsumerQuotaMetric call. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
         */
        name?: string;
        /**
         * Specifies the level of detail for quota information in the response.
         */
        view?: string;
    }
    export class Resource$Services$Consumerquotametrics$Limits$Produceroverrides {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a producer override. A producer override is applied by the owner or administrator of a service to increase or decrease the amount of quota a consumer of the service is allowed to use. To create multiple overrides at once, use ImportProducerOverrides instead. If an override with the specified dimensions already exists, this call will fail. To overwrite an existing override if one is already present ("upsert" semantics), use ImportProducerOverrides instead.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/serviceconsumermanagement.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const serviceconsumermanagement = google.serviceconsumermanagement('v1beta1');
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
         *     await serviceconsumermanagement.services.consumerQuotaMetrics.limits.producerOverrides.create(
         *       {
         *         // Whether to force the creation of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations.
         *         force: 'placeholder-value',
         *         // The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set.
         *         forceOnly: 'placeholder-value',
         *         // The resource name of the parent quota limit, returned by a ListConsumerQuotaMetrics or GetConsumerQuotaMetric call. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
         *         parent:
         *           'services/my-service/[^/]+/[^/]+/consumerQuotaMetrics/my-consumerQuotaMetric/limits/my-limit',
         *
         *         // Request body metadata
         *         requestBody: {
         *           // request body parameters
         *           // {
         *           //   "adminOverrideAncestor": "my_adminOverrideAncestor",
         *           //   "dimensions": {},
         *           //   "metric": "my_metric",
         *           //   "name": "my_name",
         *           //   "overrideValue": "my_overrideValue",
         *           //   "unit": "my_unit"
         *           // }
         *         },
         *       }
         *     );
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
        create(params: Params$Resource$Services$Consumerquotametrics$Limits$Produceroverrides$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Services$Consumerquotametrics$Limits$Produceroverrides$Create, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        create(params: Params$Resource$Services$Consumerquotametrics$Limits$Produceroverrides$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Services$Consumerquotametrics$Limits$Produceroverrides$Create, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        create(params: Params$Resource$Services$Consumerquotametrics$Limits$Produceroverrides$Create, callback: BodyResponseCallback<Schema$Operation>): void;
        create(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Deletes a producer override.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/serviceconsumermanagement.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const serviceconsumermanagement = google.serviceconsumermanagement('v1beta1');
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
         *     await serviceconsumermanagement.services.consumerQuotaMetrics.limits.producerOverrides.delete(
         *       {
         *         // Whether to force the deletion of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations.
         *         force: 'placeholder-value',
         *         // The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set.
         *         forceOnly: 'placeholder-value',
         *         // The resource name of the override to delete. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerOverrides/4a3f2c1d`
         *         name: 'services/my-service/[^/]+/[^/]+/consumerQuotaMetrics/my-consumerQuotaMetric/limits/my-limit/producerOverrides/my-producerOverride',
         *       }
         *     );
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
        delete(params: Params$Resource$Services$Consumerquotametrics$Limits$Produceroverrides$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Services$Consumerquotametrics$Limits$Produceroverrides$Delete, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        delete(params: Params$Resource$Services$Consumerquotametrics$Limits$Produceroverrides$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Services$Consumerquotametrics$Limits$Produceroverrides$Delete, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(params: Params$Resource$Services$Consumerquotametrics$Limits$Produceroverrides$Delete, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Lists all producer overrides on this limit.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/serviceconsumermanagement.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const serviceconsumermanagement = google.serviceconsumermanagement('v1beta1');
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
         *     await serviceconsumermanagement.services.consumerQuotaMetrics.limits.producerOverrides.list(
         *       {
         *         // Requested size of the next page of data.
         *         pageSize: 'placeholder-value',
         *         // Token identifying which result to start with; returned by a previous list call.
         *         pageToken: 'placeholder-value',
         *         // The resource name of the parent quota limit, returned by a ListConsumerQuotaMetrics or GetConsumerQuotaMetric call. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
         *         parent:
         *           'services/my-service/[^/]+/[^/]+/consumerQuotaMetrics/my-consumerQuotaMetric/limits/my-limit',
         *       }
         *     );
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "overrides": []
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
        list(params: Params$Resource$Services$Consumerquotametrics$Limits$Produceroverrides$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Services$Consumerquotametrics$Limits$Produceroverrides$List, options?: MethodOptions): GaxiosPromise<Schema$V1Beta1ListProducerOverridesResponse>;
        list(params: Params$Resource$Services$Consumerquotametrics$Limits$Produceroverrides$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Services$Consumerquotametrics$Limits$Produceroverrides$List, options: MethodOptions | BodyResponseCallback<Schema$V1Beta1ListProducerOverridesResponse>, callback: BodyResponseCallback<Schema$V1Beta1ListProducerOverridesResponse>): void;
        list(params: Params$Resource$Services$Consumerquotametrics$Limits$Produceroverrides$List, callback: BodyResponseCallback<Schema$V1Beta1ListProducerOverridesResponse>): void;
        list(callback: BodyResponseCallback<Schema$V1Beta1ListProducerOverridesResponse>): void;
        /**
         * Updates a producer override.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/serviceconsumermanagement.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const serviceconsumermanagement = google.serviceconsumermanagement('v1beta1');
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
         *     await serviceconsumermanagement.services.consumerQuotaMetrics.limits.producerOverrides.patch(
         *       {
         *         // Whether to force the update of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations.
         *         force: 'placeholder-value',
         *         // The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set.
         *         forceOnly: 'placeholder-value',
         *         // The resource name of the override to update. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerOverrides/4a3f2c1d`
         *         name: 'services/my-service/[^/]+/[^/]+/consumerQuotaMetrics/my-consumerQuotaMetric/limits/my-limit/producerOverrides/my-producerOverride',
         *         // Update only the specified fields. If unset, all modifiable fields will be updated.
         *         updateMask: 'placeholder-value',
         *
         *         // Request body metadata
         *         requestBody: {
         *           // request body parameters
         *           // {
         *           //   "adminOverrideAncestor": "my_adminOverrideAncestor",
         *           //   "dimensions": {},
         *           //   "metric": "my_metric",
         *           //   "name": "my_name",
         *           //   "overrideValue": "my_overrideValue",
         *           //   "unit": "my_unit"
         *           // }
         *         },
         *       }
         *     );
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
        patch(params: Params$Resource$Services$Consumerquotametrics$Limits$Produceroverrides$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Services$Consumerquotametrics$Limits$Produceroverrides$Patch, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        patch(params: Params$Resource$Services$Consumerquotametrics$Limits$Produceroverrides$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Services$Consumerquotametrics$Limits$Produceroverrides$Patch, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(params: Params$Resource$Services$Consumerquotametrics$Limits$Produceroverrides$Patch, callback: BodyResponseCallback<Schema$Operation>): void;
        patch(callback: BodyResponseCallback<Schema$Operation>): void;
    }
    export interface Params$Resource$Services$Consumerquotametrics$Limits$Produceroverrides$Create extends StandardParameters {
        /**
         * Whether to force the creation of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations.
         */
        force?: boolean;
        /**
         * The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set.
         */
        forceOnly?: string[];
        /**
         * The resource name of the parent quota limit, returned by a ListConsumerQuotaMetrics or GetConsumerQuotaMetric call. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$V1Beta1QuotaOverride;
    }
    export interface Params$Resource$Services$Consumerquotametrics$Limits$Produceroverrides$Delete extends StandardParameters {
        /**
         * Whether to force the deletion of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations.
         */
        force?: boolean;
        /**
         * The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set.
         */
        forceOnly?: string[];
        /**
         * The resource name of the override to delete. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerOverrides/4a3f2c1d`
         */
        name?: string;
    }
    export interface Params$Resource$Services$Consumerquotametrics$Limits$Produceroverrides$List extends StandardParameters {
        /**
         * Requested size of the next page of data.
         */
        pageSize?: number;
        /**
         * Token identifying which result to start with; returned by a previous list call.
         */
        pageToken?: string;
        /**
         * The resource name of the parent quota limit, returned by a ListConsumerQuotaMetrics or GetConsumerQuotaMetric call. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
         */
        parent?: string;
    }
    export interface Params$Resource$Services$Consumerquotametrics$Limits$Produceroverrides$Patch extends StandardParameters {
        /**
         * Whether to force the update of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations.
         */
        force?: boolean;
        /**
         * The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set.
         */
        forceOnly?: string[];
        /**
         * The resource name of the override to update. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerOverrides/4a3f2c1d`
         */
        name?: string;
        /**
         * Update only the specified fields. If unset, all modifiable fields will be updated.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$V1Beta1QuotaOverride;
    }
    export {};
}
