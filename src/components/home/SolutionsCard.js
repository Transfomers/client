import React from 'react';

function SolutionsCard({ title, paragraph }) {
  return (
    <div className="py-4">
      {/* Tiny grey line */}
      <div className="h-[2px] bg-gray-300 mb-4"></div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>

      {/* Paragraph */}
      <p className="text-lg text-gray-600">{paragraph}</p>
    </div>
  );
}

export default SolutionsCard;
