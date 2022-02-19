import { StreamingServices, getStreamingServices } from "api/streaming-services";
import { Dispatch } from "redux"
import { fetchStreamingServicesRequest, fetchStreamingServicesSuccess, fetchStreamingServicesFailure } from './actions';

export const fetchStreamingServicesThunk = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchStreamingServicesRequest())
    return getStreamingServices()
      .then((streamingServices: StreamingServices) => dispatch(fetchStreamingServicesSuccess(streamingServices)))
      .catch((reason: Error) => dispatch(fetchStreamingServicesFailure(reason)))
  }
}
