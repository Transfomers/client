import React from 'react';
import BlogCard from './BlogCard';

const BlogList = ({ posts = [], onEdit, onDelete }) => {
  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <BlogCard
          key={post._id}
          post={post}
          onEdit={onEdit}
          onDelete={onDelete}
          priority={index < 3} // Prioritize first 3 posts
        />
      ))}
    </div>
  );
};

export default BlogList;
