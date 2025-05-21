import API from './api';

export const login = (credentials) => API.post('/api/auth/login', credentials);
export const logout = () => localStorage.removeItem('token');