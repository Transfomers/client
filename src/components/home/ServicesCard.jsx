import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router

function ServicesCard({ image, number, title, paragraph, link }) {
  return (
    <Link to={link} className="relative w-full  rounded-lg overflow-hidden group shadow-lg cursor-pointer">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
        loading="lazy"
        decoding="async"
        width="1024"
        height="384"
        fetchpriority="low"
        onError={(e) => {
          e.target.onerror = null;
          e.target.style.opacity = '0.8';
        }}
      />

      {/* Text Overlay */}
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-white">
        {/* Number and Title */}
        <div className="flex items-center mb-2">
          <div className="flex items-center justify-center w-10 h-10 border-2 border-white rounded-full text-lg font-bold">
            {number}
          </div>
          <h3 className="ml-4 text-xl font-bold">{title}</h3>
        </div>

        {/* Paragraph */}
        <p className="text-sm text-gray-300">{paragraph}</p>
      </div>
    </Link>
  );
}

export default ServicesCard;
