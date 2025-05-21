import { useState } from 'react';
import { createArticle, updateArticle } from '../../services/articles';

const ArticleForm = ({ article, onSuccess }) => {
  const [formData, setFormData] = useState({
    title: article?.title || '',
    content: article?.content || '',
    category: article?.category || ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (article) {
        await updateArticle(article._id, formData);
      } else {
        await createArticle(formData);
      }
      onSuccess();
    } catch (error) {
      console.error('Error saving article:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Content</label>
          <textarea
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            className="w-full p-2 border rounded h-48"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {article ? 'Update Article' : 'Publish Article'}
        </button>
      </form>
    </div>
  );
};

export default ArticleForm;
