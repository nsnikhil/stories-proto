/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.HealthClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.HealthPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.HealthCheckRequest,
 *   !proto.HealthCheckResponse>}
 */
const methodDescriptor_Health_Check = new grpc.web.MethodDescriptor(
  '/Health/Check',
  grpc.web.MethodType.UNARY,
  proto.HealthCheckRequest,
  proto.HealthCheckResponse,
  /**
   * @param {!proto.HealthCheckRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.HealthCheckResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.HealthCheckRequest,
 *   !proto.HealthCheckResponse>}
 */
const methodInfo_Health_Check = new grpc.web.AbstractClientBase.MethodInfo(
  proto.HealthCheckResponse,
  /**
   * @param {!proto.HealthCheckRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.HealthCheckResponse.deserializeBinary
);


/**
 * @param {!proto.HealthCheckRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.HealthCheckResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.HealthCheckResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.HealthClient.prototype.check =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Health/Check',
      request,
      metadata || {},
      methodDescriptor_Health_Check,
      callback);
};


/**
 * @param {!proto.HealthCheckRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.HealthCheckResponse>}
 *     A native promise that resolves to the response
 */
proto.HealthPromiseClient.prototype.check =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Health/Check',
      request,
      metadata || {},
      methodDescriptor_Health_Check);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.HealthCheckRequest,
 *   !proto.HealthCheckResponse>}
 */
const methodDescriptor_Health_Watch = new grpc.web.MethodDescriptor(
  '/Health/Watch',
  grpc.web.MethodType.UNARY,
  proto.HealthCheckRequest,
  proto.HealthCheckResponse,
  /**
   * @param {!proto.HealthCheckRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.HealthCheckResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.HealthCheckRequest,
 *   !proto.HealthCheckResponse>}
 */
const methodInfo_Health_Watch = new grpc.web.AbstractClientBase.MethodInfo(
  proto.HealthCheckResponse,
  /**
   * @param {!proto.HealthCheckRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.HealthCheckResponse.deserializeBinary
);


/**
 * @param {!proto.HealthCheckRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.HealthCheckResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.HealthCheckResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.HealthClient.prototype.watch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Health/Watch',
      request,
      metadata || {},
      methodDescriptor_Health_Watch,
      callback);
};


/**
 * @param {!proto.HealthCheckRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.HealthCheckResponse>}
 *     A native promise that resolves to the response
 */
proto.HealthPromiseClient.prototype.watch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Health/Watch',
      request,
      metadata || {},
      methodDescriptor_Health_Watch);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.StoriesApiClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.StoriesApiPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.PingRequest,
 *   !proto.PingResponse>}
 */
const methodDescriptor_StoriesApi_Ping = new grpc.web.MethodDescriptor(
  '/StoriesApi/Ping',
  grpc.web.MethodType.UNARY,
  proto.PingRequest,
  proto.PingResponse,
  /**
   * @param {!proto.PingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.PingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.PingRequest,
 *   !proto.PingResponse>}
 */
const methodInfo_StoriesApi_Ping = new grpc.web.AbstractClientBase.MethodInfo(
  proto.PingResponse,
  /**
   * @param {!proto.PingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.PingResponse.deserializeBinary
);


/**
 * @param {!proto.PingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.PingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.PingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.StoriesApiClient.prototype.ping =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/StoriesApi/Ping',
      request,
      metadata || {},
      methodDescriptor_StoriesApi_Ping,
      callback);
};


/**
 * @param {!proto.PingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.PingResponse>}
 *     A native promise that resolves to the response
 */
proto.StoriesApiPromiseClient.prototype.ping =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/StoriesApi/Ping',
      request,
      metadata || {},
      methodDescriptor_StoriesApi_Ping);
};


module.exports = proto;

