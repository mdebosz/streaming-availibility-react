import { GenreAction } from './actions';
import { Genres} from 'api/genres';
import * as actions from './constants';

export type GenreState = {
  data: Genres
  loading: boolean
  currentGenre?: string
}

const initialState: GenreState = {
  data: {},
  loading: false,
}

export const genreReducer = 
  (state = initialState, action: GenreAction): GenreState => {
    switch(action.type) {
      case actions.FETCH_GENRES_REQUEST:
        return {
          ...state,
          data: {},
          loading: true
        }
      case actions.FETCH_GENRES_SUCCESS: {
        return {
          ...state,
          data: action.genres,
          loading: false
        }
      }
      case actions.FETCH_GENRES_FAILURE: {
        return {
          ...state,
          loading: false
        }
      }

      default:
        return state
    }
  }
