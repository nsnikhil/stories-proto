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


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AddStoryRequest,
 *   !proto.AddStoryResponse>}
 */
const methodDescriptor_StoriesApi_AddStory = new grpc.web.MethodDescriptor(
  '/StoriesApi/AddStory',
  grpc.web.MethodType.UNARY,
  proto.AddStoryRequest,
  proto.AddStoryResponse,
  /**
   * @param {!proto.AddStoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AddStoryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AddStoryRequest,
 *   !proto.AddStoryResponse>}
 */
const methodInfo_StoriesApi_AddStory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.AddStoryResponse,
  /**
   * @param {!proto.AddStoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AddStoryResponse.deserializeBinary
);


/**
 * @param {!proto.AddStoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.AddStoryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AddStoryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.StoriesApiClient.prototype.addStory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/StoriesApi/AddStory',
      request,
      metadata || {},
      methodDescriptor_StoriesApi_AddStory,
      callback);
};


/**
 * @param {!proto.AddStoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AddStoryResponse>}
 *     A native promise that resolves to the response
 */
proto.StoriesApiPromiseClient.prototype.addStory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/StoriesApi/AddStory',
      request,
      metadata || {},
      methodDescriptor_StoriesApi_AddStory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetStoryRequest,
 *   !proto.GetStoryResponse>}
 */
const methodDescriptor_StoriesApi_GetStory = new grpc.web.MethodDescriptor(
  '/StoriesApi/GetStory',
  grpc.web.MethodType.UNARY,
  proto.GetStoryRequest,
  proto.GetStoryResponse,
  /**
   * @param {!proto.GetStoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetStoryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetStoryRequest,
 *   !proto.GetStoryResponse>}
 */
const methodInfo_StoriesApi_GetStory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.GetStoryResponse,
  /**
   * @param {!proto.GetStoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetStoryResponse.deserializeBinary
);


/**
 * @param {!proto.GetStoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetStoryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetStoryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.StoriesApiClient.prototype.getStory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/StoriesApi/GetStory',
      request,
      metadata || {},
      methodDescriptor_StoriesApi_GetStory,
      callback);
};


/**
 * @param {!proto.GetStoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetStoryResponse>}
 *     A native promise that resolves to the response
 */
proto.StoriesApiPromiseClient.prototype.getStory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/StoriesApi/GetStory',
      request,
      metadata || {},
      methodDescriptor_StoriesApi_GetStory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UpdateStoryRequest,
 *   !proto.UpdateStoryResponse>}
 */
const methodDescriptor_StoriesApi_UpdateStory = new grpc.web.MethodDescriptor(
  '/StoriesApi/UpdateStory',
  grpc.web.MethodType.UNARY,
  proto.UpdateStoryRequest,
  proto.UpdateStoryResponse,
  /**
   * @param {!proto.UpdateStoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UpdateStoryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.UpdateStoryRequest,
 *   !proto.UpdateStoryResponse>}
 */
const methodInfo_StoriesApi_UpdateStory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.UpdateStoryResponse,
  /**
   * @param {!proto.UpdateStoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UpdateStoryResponse.deserializeBinary
);


/**
 * @param {!proto.UpdateStoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.UpdateStoryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.UpdateStoryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.StoriesApiClient.prototype.updateStory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/StoriesApi/UpdateStory',
      request,
      metadata || {},
      methodDescriptor_StoriesApi_UpdateStory,
      callback);
};


/**
 * @param {!proto.UpdateStoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.UpdateStoryResponse>}
 *     A native promise that resolves to the response
 */
proto.StoriesApiPromiseClient.prototype.updateStory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/StoriesApi/UpdateStory',
      request,
      metadata || {},
      methodDescriptor_StoriesApi_UpdateStory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SearchStoriesRequest,
 *   !proto.SearchStoriesResponse>}
 */
const methodDescriptor_StoriesApi_SearchStories = new grpc.web.MethodDescriptor(
  '/StoriesApi/SearchStories',
  grpc.web.MethodType.UNARY,
  proto.SearchStoriesRequest,
  proto.SearchStoriesResponse,
  /**
   * @param {!proto.SearchStoriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SearchStoriesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SearchStoriesRequest,
 *   !proto.SearchStoriesResponse>}
 */
const methodInfo_StoriesApi_SearchStories = new grpc.web.AbstractClientBase.MethodInfo(
  proto.SearchStoriesResponse,
  /**
   * @param {!proto.SearchStoriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SearchStoriesResponse.deserializeBinary
);


/**
 * @param {!proto.SearchStoriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SearchStoriesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SearchStoriesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.StoriesApiClient.prototype.searchStories =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/StoriesApi/SearchStories',
      request,
      metadata || {},
      methodDescriptor_StoriesApi_SearchStories,
      callback);
};


/**
 * @param {!proto.SearchStoriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SearchStoriesResponse>}
 *     A native promise that resolves to the response
 */
proto.StoriesApiPromiseClient.prototype.searchStories =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/StoriesApi/SearchStories',
      request,
      metadata || {},
      methodDescriptor_StoriesApi_SearchStories);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.MostViewedStoriesRequest,
 *   !proto.MostViewedStoriesResponse>}
 */
const methodDescriptor_StoriesApi_GetMostViewedStories = new grpc.web.MethodDescriptor(
  '/StoriesApi/GetMostViewedStories',
  grpc.web.MethodType.UNARY,
  proto.MostViewedStoriesRequest,
  proto.MostViewedStoriesResponse,
  /**
   * @param {!proto.MostViewedStoriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.MostViewedStoriesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.MostViewedStoriesRequest,
 *   !proto.MostViewedStoriesResponse>}
 */
const methodInfo_StoriesApi_GetMostViewedStories = new grpc.web.AbstractClientBase.MethodInfo(
  proto.MostViewedStoriesResponse,
  /**
   * @param {!proto.MostViewedStoriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.MostViewedStoriesResponse.deserializeBinary
);


/**
 * @param {!proto.MostViewedStoriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.MostViewedStoriesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.MostViewedStoriesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.StoriesApiClient.prototype.getMostViewedStories =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/StoriesApi/GetMostViewedStories',
      request,
      metadata || {},
      methodDescriptor_StoriesApi_GetMostViewedStories,
      callback);
};


/**
 * @param {!proto.MostViewedStoriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.MostViewedStoriesResponse>}
 *     A native promise that resolves to the response
 */
proto.StoriesApiPromiseClient.prototype.getMostViewedStories =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/StoriesApi/GetMostViewedStories',
      request,
      metadata || {},
      methodDescriptor_StoriesApi_GetMostViewedStories);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.TopRatedStoriesRequest,
 *   !proto.TopRatedStoriesResponse>}
 */
const methodDescriptor_StoriesApi_GetTopRatedStories = new grpc.web.MethodDescriptor(
  '/StoriesApi/GetTopRatedStories',
  grpc.web.MethodType.UNARY,
  proto.TopRatedStoriesRequest,
  proto.TopRatedStoriesResponse,
  /**
   * @param {!proto.TopRatedStoriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.TopRatedStoriesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.TopRatedStoriesRequest,
 *   !proto.TopRatedStoriesResponse>}
 */
const methodInfo_StoriesApi_GetTopRatedStories = new grpc.web.AbstractClientBase.MethodInfo(
  proto.TopRatedStoriesResponse,
  /**
   * @param {!proto.TopRatedStoriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.TopRatedStoriesResponse.deserializeBinary
);


/**
 * @param {!proto.TopRatedStoriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.TopRatedStoriesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.TopRatedStoriesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.StoriesApiClient.prototype.getTopRatedStories =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/StoriesApi/GetTopRatedStories',
      request,
      metadata || {},
      methodDescriptor_StoriesApi_GetTopRatedStories,
      callback);
};


/**
 * @param {!proto.TopRatedStoriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.TopRatedStoriesResponse>}
 *     A native promise that resolves to the response
 */
proto.StoriesApiPromiseClient.prototype.getTopRatedStories =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/StoriesApi/GetTopRatedStories',
      request,
      metadata || {},
      methodDescriptor_StoriesApi_GetTopRatedStories);
};


module.exports = proto;

