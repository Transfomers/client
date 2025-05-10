import API from './api';

// Get all articles
export const fetchArticles = async () => {
  const { data } = await API.get('/articles');
  return data;
};

// Create an article with support for FormData (file upload)
export const createArticle = async (article) => {
  const { data } = await API.post('/articles', article, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};

// Update an article with support for FormData (file upload)
export const updateArticle = async (id, article) => {
  const { data } = await API.put(`/articles/${id}`, article, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};

// Delete an article
export const deleteArticle = async (id) => {
  const { data } = await API.delete(`/articles/${id}`);
  return data;
};
