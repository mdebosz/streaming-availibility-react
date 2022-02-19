import { Result, SearchParams } from "api/basic-search";
import * as actions from "./constants";

export const fetchSeriesRequest = (params: Omit<SearchParams, 'type'>) => ({
  type: actions.FETCH_SERIES_REQUEST as typeof actions.FETCH_SERIES_REQUEST,
  params
})
export type fetchSeriesRequestAction = ReturnType<typeof fetchSeriesRequest>

export const fetchSeriesSuccess = (series: Result[], total: number) => ({
  type: actions.FETCH_SERIES_SUCCESS as typeof actions.FETCH_SERIES_SUCCESS,
  series,
  total
})
export type fetchSeriesSuccessAction = ReturnType<typeof fetchSeriesSuccess>

export const fetchSeriesFailure = (error: Error) => ({
  type: actions.FETCH_SERIES_FAILURE as typeof actions.FETCH_SERIES_FAILURE,
  error
})
export type fetchSeriesFailureAction = ReturnType<typeof fetchSeriesFailure>

export type SeriesAction = 
  | fetchSeriesRequestAction
  | fetchSeriesSuccessAction
  | fetchSeriesFailureAction
