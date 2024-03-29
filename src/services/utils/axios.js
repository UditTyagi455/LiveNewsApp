import axios from 'axios';
import {API_URL} from './defines';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: API_URL,
  //   timeout: 10000,
});

api.interceptors.request.use(
  async config => {
    try {
      const token = await AsyncStorage.getItem('accesstoken');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error retrieving token:', error);
    }

    // Check if the request data is FormData
    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    } else {
      config.headers['Content-Type'] = 'application/json';
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  },
);

export default api;
