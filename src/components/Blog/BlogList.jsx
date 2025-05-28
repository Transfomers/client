import React from 'react';
import BlogCard from './BlogCard';

const BlogList = ({ posts, onEdit, onDelete }) => (
  <div className="space-y-6 mt-8">
    {posts.map((post) => (
      <BlogCard
        key={post._id}
        post={post}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    ))}
  </div>
);

export default BlogList;
