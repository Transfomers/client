import React, { useState } from 'react';
import axios from 'axios';

const ArticleList = ({ articles, onDelete, onUpdated }) => {
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  const startEdit = (article) => {
    setEditId(article.id);
    setEditTitle(article.title);
    setEditContent(article.content);
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditTitle('');
    setEditContent('');
  };

  const handleUpdate = async () => {
    await axios.put(`/api/articles/${editId}`, {
      title: editTitle,
      content: editContent,
    });
    onUpdated();
    cancelEdit();
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold text-green-700 mb-4">Articles</h2>
      {articles.map((article) => (
        <div key={article.id} className="border-b py-4">
          {editId === article.id ? (
            <div className="space-y-2">
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="w-full p-2 border rounded"
              />
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                className="w-full p-2 border rounded"
              />
              <div className="flex gap-2">
                <button onClick={handleUpdate} className="bg-green-700 text-white px-3 py-1 rounded">
                  Save
                </button>
                <button onClick={cancelEdit} className="bg-gray-400 text-white px-3 py-1 rounded">
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <h3 className="text-lg font-semibold text-green-800">{article.title}</h3>
              <p>{article.content}</p>
              <div className="mt-2 flex gap-2">
                <button onClick={() => startEdit(article)} className="text-yellow-600 hover:underline">
                  Edit
                </button>
                <button onClick={() => onDelete(article.id)} className="text-red-600 hover:underline">
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
