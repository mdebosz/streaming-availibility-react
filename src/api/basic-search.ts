import { api } from './api';

export interface SearchParams {
  country: string;
  service: string;
  type: string;
  genre: string;
  page: string;
  output_language: string;
  language: string;
}

  export interface BackdropURLs {
      1280: string;
      300: string;
      780: string;
      original: string;
  }

  export interface PosterURLs {
      154: string;
      185: string;
      342: string;
      500: string;
      780: string;
      92: string;
      original: string;
  }

  export interface Us {
      link: string;
      added: number;
      leaving: number;
  }

  export interface Netflix {
      us: Us;
  }

  export interface StreamingInfo {
      netflix: Netflix;
  }

  export interface Result {
      imdbID: string;
      tmdbID: string;
      imdbRating: number;
      imdbVoteCount: number;
      tmdbRating: number;
      backdropPath: string;
      backdropURLs: BackdropURLs;
      originalTitle: string;
      genres: number[];
      countries: string[];
      year: number;
      runtime: number;
      cast: string[];
      significants: string[];
      title: string;
      overview: string;
      tagline: string;
      video: string;
      posterPath: string;
      posterURLs: PosterURLs;
      age: number;
      streamingInfo: StreamingInfo;
      originalLanguage: string;
  }

  export interface SearchResult {
      results: Result[];
      total_pages: number;
  }



export const searchMovies = async (params: SearchParams) => {
  const response = await api.get<SearchResult>('/search/basic', {
    params
  })
  return response.data;
}
