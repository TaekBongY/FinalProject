//axios 공통부분
export const API_BASE_URL = 'http://localhost:3001';
export const SPRING_BASE_URL = 'http://localhost:8001';

export const API_END_POINT = {
  PRODUCT: '/products',
  PRODUCT_DETAIL: (id) => `/products/${id}`,
};
