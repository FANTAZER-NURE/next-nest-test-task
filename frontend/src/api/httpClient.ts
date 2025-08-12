import axios from 'axios';
import { makeApi } from './makeApi';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000';

export const httpClient = axios.create({
  baseURL: API_URL,
  timeout: 60000,
  headers: { 'Content-Type': 'application/json' },
});

const { getApi, postApi, putApi, deleteApi } = makeApi(httpClient);

export { getApi, postApi, putApi, deleteApi };
