import { StreamingServiceAction } from './actions';
import { StreamingServices} from 'api/streaming-services';
import * as actions from './constants';

export type StreamingServiceState = {
  data: StreamingServices
  loading: boolean
  currentStreamingService?: string
}

const initialState: StreamingServiceState = {
  data: {},
  loading: false,
}

export const streamingServicesReducer = 
  (state = initialState, action: StreamingServiceAction): StreamingServiceState => {
    switch(action.type) {
      case actions.FETCH_STREAMING_SERVICES_REQUEST:
        return {
          ...state,
          data: {},
          loading: true
        }
      case actions.FETCH_STREAMING_SERVICES_SUCCESS: {
        return {
          ...state,
          data: action.streamingServices,
          loading: false
        }
      }
      case actions.FETCH_STREAMING_SERVICES_FAILURE: {
        return {
          ...state,
          loading: false
        }
      }

      default:
        return state
    }
  }
