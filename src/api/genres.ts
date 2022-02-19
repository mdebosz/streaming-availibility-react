import { api } from './api';

export interface Genres {
  [key: string]: string
}

export const getGenres = async () => {
  const response = await api.get<Genres>('/genres');
  return response.data;
}
