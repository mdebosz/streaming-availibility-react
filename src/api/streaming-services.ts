import { api } from './api';

export interface StreamingServices {
  [key: string]: string[]
}

export const getStreamingServices = async () => {
  const response = await api.get<StreamingServices>('/countries')
  return response.data;
}
