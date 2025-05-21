import { useEffect, useState } from 'react';
import { getArticles } from '../../services/articles';
import ArticleCard from '../../components/Blog/ArticleCard';

const BlogPage = () => {
  const [articles, setArticles] = useState([]);

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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Latest Articles</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map(article => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;