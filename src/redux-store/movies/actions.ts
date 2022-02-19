import { Result, SearchParams } from "api/basic-search";
import * as actions from "./constants";

export const fetchMoviesRequest = (params: Omit<SearchParams, 'type'>) => ({
  type: actions.FETCH_MOVIES_REQUEST as typeof actions.FETCH_MOVIES_REQUEST,
  params
})
export type fetchMoviesRequestAction = ReturnType<typeof fetchMoviesRequest>

export const fetchMoviesSuccess = (movies: Result[], total: number) => ({
  type: actions.FETCH_MOVIES_SUCCESS as typeof actions.FETCH_MOVIES_SUCCESS,
  movies,
  total
})
export type fetchMoviesSuccessAction = ReturnType<typeof fetchMoviesSuccess>

export const fetchMoviesFailure = (error: Error) => ({
  type: actions.FETCH_MOVIES_FAILURE as typeof actions.FETCH_MOVIES_FAILURE,
  error
})
export type fetchMoviesFailureAction = ReturnType<typeof fetchMoviesFailure>

export type MovieAction = 
  | fetchMoviesRequestAction
  | fetchMoviesSuccessAction
  | fetchMoviesFailureAction
