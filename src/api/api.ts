import axios, { AxiosInstance } from 'axios';
import { STREAMING_API_BASE_URL, STREAMING_API_HOST, STREAMING_API_KEY } from 'env/config';

export const api: AxiosInstance = axios.create({
  baseURL: STREAMING_API_BASE_URL,
  headers: {
    'x-rapidapi-host': STREAMING_API_HOST ?? '',
    'x-rapidapi-key': STREAMING_API_KEY ?? ''
  }
})
