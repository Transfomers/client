import React, { useState } from 'react';

const ArticleForm = ({ onSubmit, initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [category, setCategory] = useState(initialData.category || '');
  const [content, setContent] = useState(initialData.content || '');
  const [media, setMedia] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, category, content, media });
  };

  const handleFileChange = (e) => {
    setMedia(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      <div>
        <label className="block font-semibold mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={6}
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">Picture or Video</label>
        <input type="file" accept="image/*,video/*" onChange={handleFileChange} />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Post
      </button>
    </form>
  );
};

export default ArticleForm;
