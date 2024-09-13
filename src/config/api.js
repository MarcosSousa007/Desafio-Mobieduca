import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: 'https://apiteste.mobieduca.me/',
});

function getToken() {
  return Cookies.get('authToken');
}

axiosInstance.interceptors.request.use((config) => {
  const token = getToken();

  config.headers = {
    ...config.headers,
    'locale': 'pt-br',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;
