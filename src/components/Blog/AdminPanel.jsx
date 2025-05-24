// AdminPanel.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handlePost = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image);

    try {
      await axios.post('http://localhost:5000/api/posts', formData);
      alert('Post created successfully!');
      setTitle('');
      setContent('');
      setImage(null);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
      <form onSubmit={handlePost} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full border p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          className="w-full border p-2"
          rows={5}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          type="file"
          className="w-full"
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
          required
        />
        <button
          type="submit"
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
