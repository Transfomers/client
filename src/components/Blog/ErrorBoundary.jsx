import { useState, useEffect } from 'react';
import axios from 'axios';
import BlogForm from '../components/BlogForm';
import BlogList from '../components/BlogList';

const AdminPage = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:5000/api/posts');
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async (formData) => {
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    if (selectedPost?._id) {
      await axios.put(`http://localhost:5000/api/posts/${selectedPost._id}`, formData, config);
    } else {
      await axios.post('http://localhost:5000/api/posts', formData, config);
    }
    fetchPosts();
    setSelectedPost(null);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/posts/${id}`);
    fetchPosts();
  };

  return (
    <div className="min-h-screen bg-green-100 p-8">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Admin Dashboard</h1>
      <BlogForm onSubmit={handleSubmit} initialData={selectedPost || {}} />
      <BlogList posts={posts} onEdit={setSelectedPost} onDelete={handleDelete} />
    </div>
  );
};

export default AdminPage;
