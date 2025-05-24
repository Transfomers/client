import { useState, useEffect } from 'react';

const BlogForm = ({ onSubmit, initialData = {} }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (initialData && initialData.title) {
      setTitle(initialData.title);
      setContent(initialData.content);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) formData.append('image', image);
    onSubmit(formData);
    setTitle('');
    setContent('');
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        placeholder="Description"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className="w-full"
        accept="image/*"
        required={!initialData?._id}
      />
      <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded">
        {initialData?._id ? 'Update Post' : 'Create Post'}
      </button>
    </form>
  );
};

export default BlogForm;
