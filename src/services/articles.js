import API from './api';

export const getArticles = () => API.get('/api/blog');
export const createArticle = (article) => API.post('/api/blog', article);
export const updateArticle = (id, article) => API.put(`/api/blog/${id}`, article);
export const deleteArticle = (id) => API.delete(`/api/blog/${id}`);