import { searchMovies, SearchParams, SearchResult } from "api/basic-search"
import { Dispatch } from "redux"
import { fetchSeriesFailure, fetchSeriesRequest, fetchSeriesSuccess } from "./actions"

export const fetchSeriesThunk = (params: Omit<SearchParams, 'type'>) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchSeriesRequest(params))
    return searchMovies({
      ...params,
      type: 'series'
    })
      .then((searchResult: SearchResult) => dispatch(fetchSeriesSuccess(searchResult.results, searchResult.total_pages)))
      .catch((reason: Error) => dispatch(fetchSeriesFailure(reason)))
  }
}
