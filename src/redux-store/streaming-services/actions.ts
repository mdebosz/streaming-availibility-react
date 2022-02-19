import { StreamingServices } from "api/streaming-services";
import * as actions from './constants';

export const fetchStreamingServicesRequest = () => ({
  type: actions.FETCH_STREAMING_SERVICES_REQUEST as typeof actions.FETCH_STREAMING_SERVICES_REQUEST
})
export type fetchStreamingServicesRequestAction = ReturnType<typeof fetchStreamingServicesRequest>

export const fetchStreamingServicesSuccess = (streamingServices: StreamingServices) => ({
  type: actions.FETCH_STREAMING_SERVICES_SUCCESS as typeof actions.FETCH_STREAMING_SERVICES_SUCCESS,
  streamingServices
})
export type fetchStreamingServicesSuccessAction = ReturnType<typeof fetchStreamingServicesSuccess> 

export const fetchStreamingServicesFailure = (error: Error) => ({
  type: actions.FETCH_STREAMING_SERVICES_FAILURE as typeof actions.FETCH_STREAMING_SERVICES_FAILURE,
  error
})
export type fetchStreamingServicesFailureAction = ReturnType<typeof fetchStreamingServicesFailure>

export type StreamingServiceAction = 
  | fetchStreamingServicesRequestAction
  | fetchStreamingServicesSuccessAction
  | fetchStreamingServicesFailureAction
