const BlogCard = ({ post = {}, onEdit, onDelete }) => (
  <div className="bg-yellow-300 rounded-lg p-6 shadow-lg">
    <h2 className="text-2xl font-bold text-green-800">{post?.title}</h2>
    <p className="text-green-900 text-sm">{post?.date ? new Date(post.date).toLocaleDateString() : ''}</p>
    <div className="aspect-w-16 aspect-h-9 relative">
      <img 
        src={post?.image ? `http://localhost:5000/uploads/${post.image}` : ''} 
        srcSet={post?.image ? `
          http://localhost:5000/uploads/small_${post.image} 300w,
          http://localhost:5000/uploads/${post.image} 800w,
          http://localhost:5000/uploads/large_${post.image} 1200w
        ` : ''}
        sizes="(max-width: 768px) 100vw, 800px"
        alt={post?.title || ''} 
        className="w-full h-64 object-cover rounded-lg" 
        loading="lazy"
        decoding="async"
        width="800"
        height="256"
        onError={(e) => {
          e.target.onerror = null;
          e.target.style.opacity = '0.8';
        }}
      />
      <div className="absolute inset-0 bg-gray-900/10"></div>
    </div>
    <p className="text-green-900 mt-4">{post?.content}</p>
    <div className="flex justify-end space-x-4 pt-4">
      <button onClick={() => onEdit(post)} className="bg-green-800 text-yellow-300 px-4 py-2 rounded">Edit</button>
      <button onClick={() => onDelete(post?._id)} className="bg-red-600 text-white px-4 py-2 rounded">Delete</button>
    </div>
  </div>
);

export default BlogCard;