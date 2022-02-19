import { Result } from "api/basic-search"
import { MovieAction} from "./actions"
import * as actions from './constants'

export type MovieState = {
  data: Result[]
  total?: number
  loading: boolean
  currentMovie?: string
}

const initialState: MovieState = {
  data: [],
  loading: false,
}

export const moviesReducer = 
  (state = initialState, action: MovieAction): MovieState => {
    switch(action.type) {
      case actions.FETCH_MOVIES_REQUEST:
        return {
          ...state,
          data: [],
          loading: true
        }
      case actions.FETCH_MOVIES_SUCCESS: {
        return {
          ...state,
          data: action.movies,
          total: action.total,
          loading: false
        }
      }
      case actions.FETCH_MOVIES_FAILURE: {
        return {
          ...state,
          loading: false
        }
      }

      default: 
        return state
    }
  }
