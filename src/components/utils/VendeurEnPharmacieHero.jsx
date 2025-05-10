import React from 'react';
import blogLingkaran from '../../assets/images/blogLingkaran.png';
import image from '../../assets/images/DefaultImage2.jpeg';
import { FaArrowRight } from 'react-icons/fa';

const VendeurEnPharmacieInfo = () => {
  return (
    <header className="w-full bg-white py-10 px-4 md:px-16 lg:px-24">
      <div className="relative flex flex-col md:flex-row items-start justify-between gap-6">
        
        {/* Left image with text overlay */}
        <div className="relative flex-1 h-[420px]">
          <img src={blogLingkaran} alt="Secrétariat Médical" className="w-full h-full object-cover rounded-2xl" />
          
          {/* Overlaid welcome text */}
          <div className="absolute inset-0 flex flex-col justify-start items-start p-6 sm:p-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800 drop-shadow-md">
              Lancez votre carrière maintenant
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-green-900 mt-2 drop-shadow-md">
              Formation en Auxiliaire en Pharmacie 
            </h2>
            <p className="mt-4 text-white text-base sm:text-lg max-w-md">
              Rejoignez une formation professionnelle complète et ouvrez les portes du secteur médical.
            </p>
            
          </div>

          {/* Floating card on left */}
          <div className="absolute bottom-20 left-6 flex flex-col gap-3 z-10">
            <div className="bg-yellow-50 border border-green-800 text-green-900 px-5 py-2 rounded-xl shadow-md text-sm font-medium max-w-xs">
              Laissez-nous votre email pour recevoir plus d'informations
            </div>
          </div>
        </div>
          
        {/* Middle horizontal card */}
        <div className="hidden md:block absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="bg-yellow-50 border border-green-800 text-green-900 px-6 py-3 rounded-xl shadow-md text-center text-base font-medium">
            Contactez-nous aujourd’hui et commencez votre parcours
          </div>
        </div>

        {/* Right image with floating cards */}
        <div className="relative flex-1 h-[420px] mt-10 md:mt-0 md:-translate-y-6">
          <img src={image} alt="Lire plus" className="w-full h-full object-cover rounded-2xl shadow-lg" />
          
          <div className="absolute bottom-20 left-4 bg-yellow-50 border border-green-800 text-green-900 px-5 py-2 rounded-xl shadow-md text-sm font-medium max-w-xs">
            Notre équipe vous répond rapidement par mail ou téléphone
          </div>
        </div>

      </div>
    </header>
  );
};

export default VendeurEnPharmacieInfo;
