import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getArticles, deleteArticle } from '../../services/articles';
import ArticleForm from '../../components/Admin/ArticleForm';
import { useAuth } from '../../context/AuthContext';

const AdminArticles = () => {
  const [articles, setArticles] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const { data } = await getArticles();
        setArticles(data);
      } catch (error) {
        console.error('Error loading articles:', error);
      }
    };
    loadArticles();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteArticle(id);
      setArticles(articles.filter(article => article._id !== id));
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Articles</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          {showForm ? 'Cancel' : 'New Article'}
        </button>
      </div>

      {showForm && <ArticleForm onSuccess={() => setShowForm(false)} />}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {articles.map(article => (
          <div key={article._id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <div className="flex gap-2 mt-4">
              <Link
                to={`/admin/articles/edit/${article._id}`}
                className="bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-700"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(article._id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminArticles;
