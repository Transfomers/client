import React, { useState, useEffect } from 'react';
import ArticleForm from './ArticleForm';

const ArticleEdit = ({ articleId, onSave }) => {
  const [articleData, setArticleData] = useState(null);

  useEffect(() => {
    // TODO: Fetch article data by articleId from API
    // For now, use dummy data
    setArticleData({
      title: 'Sample Article',
      category: 'Sample Category',
      content: 'Sample content...',
    });
  }, [articleId]);

  const handleSave = (updatedData) => {
    // TODO: Call API to update article
    console.log('Saving article', articleId, updatedData);
    if (onSave) onSave();
  };

  if (!articleData) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit Article</h1>
      <ArticleForm initialData={articleData} onSubmit={handleSave} />
    </div>
  );
};

export default ArticleEdit;
