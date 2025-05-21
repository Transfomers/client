import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">
          <Link 
            to={`/blog/${article.slug}`}
            className="text-gray-900 hover:text-blue-600 transition-colors"
          >
            {article.title}
          </Link>
        </h2>
        <p className="text-gray-600 line-clamp-3 mb-4">
          {article.content}
        </p>
        <div className="flex items-center text-sm text-gray-500">
          <span>{new Date(article.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;