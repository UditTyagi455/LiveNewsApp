import axios from 'axios';
import { API_URL } from './defines';

const axiosInstance = axios.create({
  baseURL: API_URL,
});
axiosInstance.interceptors.request.use((config) => {
  return config;
});
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    
    return Promise.reject(error?.response?.data);
  }
);
export default axiosInstance;
