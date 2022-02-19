import { Genres, getGenres } from "api/genres";
import { Dispatch } from "redux"
import { fetchGenresRequest, fetchGenresSuccess, fetchGenresFailure } from './actions';

export const fetchGenresThunk = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchGenresRequest())
    return getGenres()
      .then((genres: Genres) => dispatch(fetchGenresSuccess(genres)))
      .catch((reason: Error) => dispatch(fetchGenresFailure(reason)))
  }
}
