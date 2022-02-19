import { applyMiddleware, combineReducers, createStore, Reducer } from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import { genreReducer as genres } from "./genres/reducers";
import { moviesReducer as movies } from "./movies/reducers";
import { seriesReducer as series } from "./series/reducers";
import { streamingServicesReducer as streamingServices } from "./streaming-services/reducers";

export const rootReducer = combineReducers({
  genres,
  movies,
  series,
  streamingServices
})

export type AppState = typeof rootReducer extends Reducer<infer R> ? R : never

declare module 'react-redux' {
  interface DefaultRootState extends AppState {}
}

export const getStore = () => {
  const middlewares = [thunk]

  const store = createStore(rootReducer, composeWithDevTools({
    name: 'Streaming Availibility'
  })(
    applyMiddleware(...middlewares)
  ))

  return store;
}
