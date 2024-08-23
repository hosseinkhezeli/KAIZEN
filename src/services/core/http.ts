import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

// Load environment variables
const API_URL = process.env.API_URL ?? 'Env var `API_URL` is not defined';

// Base URL for the Axios instance
export const baseURL = `${API_URL}`;

// Create an Axios instance
export const http = axios.create({
  baseURL,
  withCredentials: true,
});

// Request interceptor to add authorization token and headers
http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers.Accept = 'application/json';
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(new Error('Request failed: ' + error.message));
  },
);

// Response interceptor to handle responses and errors
http.interceptors.response.use(
  <T, D>(res: AxiosResponse<T, D>) => {
    return res.data; // Return only the response data
  },
  (error: AxiosError) => {
    if (error.response) {
      const { status } = error.response;
      if (status === 401 || status === 403) {
        console.log('UNAUTHORIZED');
      }
    }
    return Promise.reject(new Error('Request failed: ' + error.message));
  },
);
