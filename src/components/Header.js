import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

// Import available images
import flyerImage from "../assets/pdf/Formations-santé (1).pdf";
import heroImage1 from "../assets/images/whyImg1.jpg";
import heroImage2 from "../assets/images/header2.jpg";
import heroImage3 from "../assets/images/header3.jpg";
import heroImage4 from "../assets/images/header6.png";

const Header = () => {
  const images = [heroImage1, heroImage2, heroImage3, heroImage4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set([images[0]]));
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slogan = "Former autrement, pour soigner mieux !";
  const shortDescription =
    "ITC Santé forme des professionnels de la santé engagés,plaçant l'humain au cœur de leur pratique et intégrant les innovations médicales de demain. Découvrez nos formations de qualité à Yaoundé.";

  // Preload all images immediately
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            setLoadedImages(prev => new Set([...prev, src]));
            resolve(src);
          };
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    };

    preloadImages();
  }, []);

  // Handle image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDownloadFlyer = () => {
    try {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const downloadUrl = flyerImage;
      const fileName = "ITC-Sante-Formations.pdf";

      if (isMobile) {
        window.open(downloadUrl, '_blank');
        
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = fileName;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
          document.body.removeChild(link);
        }, 100);
      } else {
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error('Download error:', error);
      window.open(flyerImage, '_blank');
    }
  };

  return (
    <div className="relative">
      <header className="relative h-screen w-full overflow-hidden">
        {/* Image Container */}
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                currentImageIndex === index ? 'opacity-100' : 'opacity-0'
              } ${isTransitioning ? 'transition-transform duration-300 scale-105' : 'scale-100'}`}
            >
              <img
                src={image}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchpriority={index === 0 ? "high" : "low"}
                style={{ 
                  opacity: loadedImages.has(image) ? 1 : 0,
                  transition: 'opacity 0.3s ease-in-out'
                }}
              />
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 leading-tight">
            {slogan}
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mb-8">
            {shortDescription}
          </p>
          <div className="flex flex-col space-y-4 p-4">
            <button
              onClick={handleDownloadFlyer}
              className="flex p-4 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-green-800 font-semibold items-center justify-center gap-2 transition-all md:text-lg"
            >
              <FontAwesomeIcon icon={faDownload} /> Télécharger le Flyer
            </button>
            
            <Link
              to="/contact"
              className="p-4 rounded-lg bg-green-700 hover:bg-green-600 text-yellow-300 font-semibold text-center transition-all"
            >
              Contactez-Nous
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
