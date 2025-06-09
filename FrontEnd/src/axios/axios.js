import axios from 'axios';
import { API_BASE_URL } from './config';
//통신 결과값에 대한 내용

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || '서버 오류가 발생했습니다.';
    return Promise.reject(new Error(message));
  }
);

export default axiosInstance;
