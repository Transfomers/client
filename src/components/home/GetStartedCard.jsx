import React from 'react';

function GetStartedCard({ image, title, buttonText, link }) {
  return (
    <div className="relative w-full  sm:h-72 md:h-[360px] xl:h-[470px] xxl:h-[530px] rounded-lg overflow-hidden group">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
        {/* Title */}
        <h2 className="text-white text-xl font-bold mb-4">{title}</h2>

        {/* Button */}
        <a
          href={link}
          className="px-6 py-2 text-white bg-dpurple hover:bg-blue-600 rounded-full transition duration-300"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}

export default GetStartedCard;
