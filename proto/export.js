const {
    AddStoryRequest: addStoryRequest,
    AddStoryResponse: addStoryResponse,
    GetStoryRequest: getStoryRequest,
    GetStoryResponse: getStoryResponse,
    HealthCheckRequest: healthCheckRequest,
    HealthCheckResponse: healthCheckResponse,
    MostViewedStoriesRequest: mostViewedStoriesRequest,
    MostViewedStoriesResponse: mostViewedStoriesResponse,
    PingRequest: pingRequest,
    PingResponse: pingResponse,
    SearchStoriesRequest: searchStoriesRequest,
    SearchStoriesResponse: searchStoriesResponse,
    TopRatedStoriesRequest: topRatedStoriesRequest,
    TopRatedStoriesResponse: topRatedStoriesResponse,
    UpdateStoryRequest: updateStoryRequest,
    UpdateStoryResponse: updateStoryResponse,
    DeleteStoryRequest: deleteStoryRequest,
    DeleteStoryResponse: deleteStoryResponse,
    Story: story
} = require('./api_pb.js')

const {
    StoriesApiClient: storiesApiClient,
    StoriesApiPromiseClient: storiesApiPromiseClient,
    HealthClient: healthClient,
    HealthPromiseClient: healthPromiseClient
} = require('./api_grpc_web_pb.js');

//CLIENT
export const StoriesApiClient = storiesApiClient
export const StoriesApiPromiseClient = storiesApiPromiseClient
export const HealthClient = healthClient
export const HealthPromiseClient = healthPromiseClient

//STORY
export const Story = story

//HEALTH
export const HealthCheckRequest = healthCheckRequest
export const HealthCheckResponse = healthCheckResponse

//PING
export const PingRequest = pingRequest
export const PingResponse = pingResponse

//ADD
export const AddStoryRequest = addStoryRequest
export const AddStoryResponse = addStoryResponse

//GET
export const GetStoryRequest = getStoryRequest
export const GetStoryResponse = getStoryResponse

//UPDATE
export const UpdateStoryRequest = updateStoryRequest
export const UpdateStoryResponse = updateStoryResponse

//SEARCH
export const SearchStoriesRequest = searchStoriesRequest
export const SearchStoriesResponse = searchStoriesResponse

//MOST VIEWED
export const MostViewedStoriesRequest = mostViewedStoriesRequest
export const MostViewedStoriesResponse = mostViewedStoriesResponse

//TOP RATED
export const TopRatedStoriesRequest = topRatedStoriesRequest
export const TopRatedStoriesResponse = topRatedStoriesResponse

//TOP RATED
export const DeleteStoryRequest = deleteStoryRequest
export const DeleteStoryResponse = deleteStoryResponse