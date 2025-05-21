// src/pages/Blog/BlogPage.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import LoadingSpinner from '../../components/LoadingSpinner';

const BlogPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await api.get('/blog');
        setArticles(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load articles');
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center mt-8">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          ITC Santé Blog
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article 
              key={article._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {article.image && (
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">
                    {new Date(article.createdAt).toLocaleDateString()}
                  </span>
                  {article.category && (
                    <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
                      {article.category.name}
                    </span>
                  )}
                </div>
                <h2 className="text-xl font-semibold mb-2">
                  <Link 
                    to={`/blog/${article._id}`}
                    className="text-gray-900 hover:text-blue-600"
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="text-gray-600 line-clamp-3 mb-4">
                  {article.content}
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    to={`/blog/${article._id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read more →
                  </Link>
                  <span className="text-sm text-gray-500">
                    By {article.author.name}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;