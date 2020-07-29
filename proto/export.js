import {
    PingRequest as pingRequest,
    PingResponse as pingResponse,
    StoriesApiClient as storiesApiClient
} from './api_grpc_web_pb'

//CLIENT
export const StoriesApiClient = storiesApiClient

//PING
export const PingRequest = pingRequest
export const PingResponse = pingResponse
