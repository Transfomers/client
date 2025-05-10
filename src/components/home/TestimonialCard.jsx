import React from 'react';
import ratingstar from "../../assets/icons/ratings5star.svg"

function TestimonialCard({ title, testimonial }) {
  return (
    <div className="flex flex-col items-start p-4 bg-white rounded-2xl overflow-visible w-auto max-w-[900px]">
      <img
        src={ratingstar}
        alt="5 star rating"
        className="w-20 rounded-full mb-4 mt-[40px] object-cover"
      />
      <h2 className='font-semibold text-8xl leading-[40px] text-green-800 mt-8'>“</h2>
      <h3 className="text-[30px] font-semibold text-green-800">{title}</h3>
      <p className="text-dgray text-start mt-2 mb-[74px] font-normal text-lg">{testimonial}</p>
    </div>
  );
}

export default TestimonialCard;
