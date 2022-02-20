import { api } from './api';

export interface Genres {
  [key: number]: string
}

export const getGenres = async () => {
  const response = await api.get<Genres>('/genres');
  return response.data;
}
