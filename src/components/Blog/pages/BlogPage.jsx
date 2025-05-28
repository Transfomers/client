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
    <div className="px-4 sm:px-6 md:px-8 py-6 md:py-8 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-6 leading-tight">Blog</h1>
        <div className="space-y-6 md:space-y-8">
          {posts.map((post, index) => (
            <div key={post._id} className="bg-green-100 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-green-900 mb-3 leading-snug">
                {post.title}
              </h2>
              <div className="aspect-w-16 aspect-h-9 relative mb-4">
                <img
                  src={`http://localhost:5000/uploads/${post.image}`}
                  srcSet={`
                    http://localhost:5000/uploads/small_${post.image} 300w,
                    http://localhost:5000/uploads/${post.image} 800w,
                    http://localhost:5000/uploads/large_${post.image} 1200w
                  `}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 800px"
                  alt={post.title}
                  className="rounded-lg object-cover w-full h-full shadow-sm"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  width="800"
                  height="450"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.opacity = '0.9';
                  }}
                />
              </div>
              <div className="prose prose-sm sm:prose max-w-none">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed line-clamp-3 mb-2">
                  {post.content}
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <button 
                  className="inline-flex items-center text-green-700 hover:text-green-800 text-sm sm:text-base font-medium transition-colors duration-200 group"
                >
                  <span className="mr-1">Lire plus</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;