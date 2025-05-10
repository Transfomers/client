import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import CreateArticle from './CreateArticle';
import ArticleList from './ArticleList';
import Login from './Login';
import axios from 'axios';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const res = await axios.get('/api/articles');
      setArticles(res.data);
    } catch (err) {
      console.error('Error fetching articles:', err);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchArticles();
    }
  }, [isAuthenticated]);

  const handleArticleCreated = () => {
    fetchArticles(); // refresh article list
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/articles/${id}`);
    fetchArticles();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full space-y-8 p-10 bg-white rounded shadow">
          <Login onLogin={() => setIsAuthenticated(true)} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50 space-y-8">
        <h1 className="text-2xl font-bold text-green-800">Dashboard</h1>
        <CreateArticle onCreated={handleArticleCreated} />
        <ArticleList articles={articles} onDelete={handleDelete} />
      </main>
      
    </div>
  );
};

export default Admin;
