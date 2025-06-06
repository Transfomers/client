import { useState, useEffect } from 'react';

const BlogForm = ({ onSubmit, initialData = {} }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (initialData && initialData.title) {
      setTitle(initialData.title);
      setContent(initialData.content);
      if (initialData.image) {
        setImagePreview(`http://localhost:5000/uploads/${initialData.image}`);
      }
    }
  }, [initialData]);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Veuillez télécharger une image');
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("La taille de l'image doit être inférieure à 5MB");
        return;
      }

      setImage(file);
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

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
    setImagePreview('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto px-4 py-6 space-y-6">
      <div>
        <label htmlFor="title" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
          Titre de l'article
        </label>
        <input
          id="title"
          type="text"
          placeholder="Entrez le titre de votre article"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 text-base sm:text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow duration-200"
          required
        />
      </div>

      <div>
        <label htmlFor="content" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
          Contenu de l'article
        </label>
        <textarea
          id="content"
          placeholder="Écrivez votre article ici..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-3 text-base sm:text-lg border border-gray-300 rounded-lg min-h-[200px] sm:min-h-[300px] focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow duration-200 leading-relaxed"
          required
        />
      </div>

      <div>
        <label className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
          Image de l'article
        </label>
        <div
          className={`relative border-2 border-dashed rounded-lg p-6 text-center ${
            isDragging ? 'border-green-500 bg-green-50' : 'border-gray-300'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            onChange={handleImageChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept="image/*"
            required={!initialData?._id}
          />
          <div className="space-y-2">
            <div className="text-sm sm:text-base text-gray-600">
              Glissez et déposez une image ici ou cliquez pour sélectionner
            </div>
            <div className="text-xs sm:text-sm text-gray-500">
              Formats acceptés : PNG, JPG (max. 5MB)
            </div>
          </div>
        </div>

        {imagePreview && (
          <div className="mt-4">
            <div className="relative w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img
                src={imagePreview}
                alt="Aperçu"
                className="object-cover w-full h-full"
                loading="lazy"
                decoding="async"
              />
              <button
                type="button"
                onClick={() => {
                  setImage(null);
                  setImagePreview('');
                }}
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors duration-200"
                aria-label="Supprimer l'image"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>

      <button 
        type="submit"
        className="w-full sm:w-auto px-6 py-3 bg-green-700 hover:bg-green-800 text-white text-base sm:text-lg font-medium rounded-lg transition-colors duration-200 flex items-center justify-center"
      >
        {initialData?._id ? "Mettre à jour l'article" : "Publier l'article"}
      </button>
    </form>
  );
};

export default BlogForm;
