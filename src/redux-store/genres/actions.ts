import { Genres } from 'api/genres';
import * as actions from './constants';

export const fetchGenresRequest = () => ({
  type: actions.FETCH_GENRES_REQUEST as typeof actions.FETCH_GENRES_REQUEST
})
export type fetchGenresRequestAction = ReturnType<typeof fetchGenresRequest>

export const fetchGenresSuccess = (genres: Genres) => ({
  type: actions.FETCH_GENRES_SUCCESS as typeof actions.FETCH_GENRES_SUCCESS,
  genres
})
export type fetchGenresSuccessAction = ReturnType<typeof fetchGenresSuccess>

export const fetchGenresFailure = (error: Error) => ({
  type: actions.FETCH_GENRES_FAILURE as typeof actions.FETCH_GENRES_FAILURE,
  error
})
export type fetchGenresFailureAction = ReturnType<typeof fetchGenresFailure>

export type GenreAction = 
  | fetchGenresRequestAction
  | fetchGenresSuccessAction
  | fetchGenresFailureAction
