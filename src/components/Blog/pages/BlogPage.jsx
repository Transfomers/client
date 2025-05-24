import { useState, useEffect } from 'react';
import API from '../../../api/axios';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.get('/api/posts').then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Blog</h1>
      <div className="space-y-2">
        {posts.map((post) => (
          <div key={post._id} className="bg-green-100 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-green-900">{post.title}</h2>
            <img
              src={`http://localhost:5000/uploads/${post.image}`}
              alt={post.title}
              className="my-4 rounded"
            />
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;