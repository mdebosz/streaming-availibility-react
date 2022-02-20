import { createSelector } from "@reduxjs/toolkit";
import { Result } from "api/basic-search";
import { Genres } from "api/genres";
import { StreamingServices } from "api/streaming-services";
import { AppState } from "./index";

export const selectMovies = (state: AppState) => {
  return state.movies.data
}

export const selectGenres = (state: AppState) => {
  return state.genres.data
}

export const selectStreamingServices = (state: AppState) => {
  return state.streamingServices.data
}

export const selectMoviesLoading = (state: AppState) => {
  return state.movies.loading
}

export const selectGenresLoading = (state: AppState) => {
  return state.genres.loading
}

export const selectMoviesWithGenres = createSelector(
  selectMovies,
  selectGenres,
  selectStreamingServices,
  (movies: Result[], genres: Genres, streamingServices: StreamingServices) => {
    return movies.map((movie) => {
      const movieGenres = Object.keys(genres).filter((key) => movie.genres.includes(+key)).map((key) => genres[+key])
      return {
        ...movie,
        genres: movieGenres
      }
    })
  }
)
