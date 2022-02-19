import { searchMovies, SearchParams, SearchResult } from "api/basic-search"
import { Dispatch } from "redux"
import { fetchMoviesFailure, fetchMoviesRequest, fetchMoviesSuccess } from "./actions"

export const fetchMoviesThunk = (params: Omit<SearchParams, 'type'>) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchMoviesRequest(params))
    return searchMovies({
      ...params,
      type: 'movie'
    })
      .then((searchResult: SearchResult) => dispatch(fetchMoviesSuccess(searchResult.results, searchResult.total_pages)))
      .catch((reason: Error) => dispatch(fetchMoviesFailure(reason)))
  }
}
