import { useState, useEffect } from 'react';
import API from '../../../api/axios';
import BlogForm from '../BlogForm';
import BlogList from '../BlogList';

const AdminPage = () => {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  const fetchPosts = async () => {
    try {
      const res = await API.get('/api/posts');
      setPosts(res.data);
    } catch (err) {
      console.error('Error fetching posts:', err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async (formData) => {
    try {
      if (editingPost) {
        await API.put(`/api/posts/${editingPost._id}`, formData);
        setEditingPost(null);
      } else {
        await API.post('/api/posts', formData);
      }
      fetchPosts();
    } catch (err) {
      console.error('Error submitting post:', err);
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/api/posts/${id}`);
      fetchPosts();
    } catch (err) {
      console.error('Error deleting post:', err);
    }
  };

  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Admin Blog Panel</h1>
      <BlogForm onSubmit={handleSubmit} initialData={editingPost} />
      <BlogList posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default AdminPage;
