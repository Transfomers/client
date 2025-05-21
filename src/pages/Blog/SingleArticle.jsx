// src/pages/Blog/SingleArticle.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import LoadingSpinner from '../../components/LoadingSpinner';

const SingleArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await api.get(`/blog/${id}`);
        setArticle(response.data);
        setLoading(false);
      } catch (err) {
        setError('Article not found');
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center mt-8">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <article className="bg-white rounded-lg shadow-md p-6">
          {article.image && (
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 object-cover mb-6 rounded-lg"
            />
          )}
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {article.title}
            </h1>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>
                By {article.author.name} •{' '}
                {new Date(article.createdAt).toLocaleDateString()}
              </span>
              {article.category && (
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {article.category.name}
                </span>
              )}
            </div>
          </div>
          <div className="prose max-w-none">
            {article.content}
          </div>
        </article>
      </div>
    </div>
  );
};

export default SingleArticle;