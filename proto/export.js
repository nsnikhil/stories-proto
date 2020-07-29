import {
    AddStoryRequest as addStoryRequest,
    AddStoryResponse as addStoryResponse,
    GetStoryRequest as getStoryRequest,
    GetStoryResponse as getStoryResponse,
    HealthCheckRequest as healthCheckRequest,
    HealthCheckResponse as healthCheckResponse,
    HealthClient as healthClient,
    HealthPromiseClient as healthPromiseClient,
    MostViewedStoriesRequest as mostViewedStoriesRequest,
    MostViewedStoriesResponse as mostViewedStoriesResponse,
    PingRequest as pingRequest,
    PingResponse as pingResponse,
    SearchStoriesRequest as searchStoriesRequest,
    SearchStoriesResponse as searchStoriesResponse,
    StoriesApiClient as storiesApiClient,
    StoriesApiPromiseClient as storiesApiPromiseClient,
    TopRatedStoriesRequest as topRatedStoriesRequest,
    TopRatedStoriesResponse as topRatedStoriesResponse,
    UpdateStoryRequest as updateStoryRequest,
    UpdateStoryResponse as updateStoryResponse
} from './api_grpc_web_pb'

//CLIENT
export const StoriesApiClient = storiesApiClient
export const StoriesApiPromiseClient = storiesApiPromiseClient
export const HealthClient = healthClient
export const HealthPromiseClient = healthPromiseClient

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