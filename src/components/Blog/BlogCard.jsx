const BlogCard = ({ post = {}, onEdit, onDelete, priority = false }) => (
  <div className="bg-yellow-300 rounded-lg p-6 shadow-lg">
    <h2 className="text-2xl font-bold text-green-800">{post?.title}</h2>
    <p className="text-green-900 text-sm">{post?.date ? new Date(post.date).toLocaleDateString() : ''}</p>
    <div className="aspect-w-16 aspect-h-9 relative mt-4">
      {post?.image && (
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={`http://localhost:5000/uploads/large_${post.image}`}
            type="image/webp"
          />
          <source
            media="(min-width: 640px)"
            srcSet={`http://localhost:5000/uploads/${post.image}`}
            type="image/webp"
          />
          <img 
            src={`http://localhost:5000/uploads/small_${post.image}`}
            alt={post?.title || ''} 
            className="w-full h-64 object-cover rounded-lg" 
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            width="800"
            height="256"
            fetchpriority={priority ? "high" : "low"}
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.opacity = '0.8';
            }}
          />
        </picture>
      )}
      <div className="absolute inset-0 bg-gray-900/10 rounded-lg"></div>
    </div>
    <p className="text-green-900 mt-4 line-clamp-3">{post?.content}</p>
    <div className="flex justify-end space-x-4 pt-4">
      <button 
        onClick={() => onEdit(post)} 
        className="bg-green-800 text-yellow-300 px-4 py-2 rounded hover:bg-green-700 transition-colors duration-200"
      >
        Edit
      </button>
      <button 
        onClick={() => onDelete(post?._id)} 
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200"
      >
        Delete
      </button>
    </div>
  </div>
);

export default BlogCard;