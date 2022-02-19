import { Result } from "api/basic-search"
import { SeriesAction} from "./actions"
import * as actions from './constants'

export type SeriesState = {
  data: Result[]
  total?: number
  loading: boolean
  currentSeries?: string
}

const initialState: SeriesState = {
  data: [],
  loading: false,
}

export const seriesReducer = 
  (state = initialState, action: SeriesAction): SeriesState => {
    switch(action.type) {
      case actions.FETCH_SERIES_REQUEST:
        return {
          ...state,
          data: [],
          loading: true
        }
      case actions.FETCH_SERIES_SUCCESS: {
        return {
          ...state,
          data: action.series,
          total: action.total,
          loading: false
        }
      }
      case actions.FETCH_SERIES_FAILURE: {
        return {
          ...state,
          loading: false
        }
      }

      default: 
        return state
    }
  }
