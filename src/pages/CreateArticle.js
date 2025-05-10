import React, { useState } from 'react';
import { createArticle } from '../api/articleApi';

const CreateArticle = ({ onCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (file) {
      formData.append('media', file);
    }
    await createArticle(formData);
    setTitle('');
    setContent('');
    setFile(null);
    onCreated(); // notify parent
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold text-green-700 mb-4">Create New Article</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="file"
          accept="image/*,video/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full"
        />
        <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
          Publish
        </button>
      </form>
    </div>
  );
};

export default CreateArticle;
