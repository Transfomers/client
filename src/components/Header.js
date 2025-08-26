import React, { useState, useEffect, Suspense } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

// PDF import (still handled by Webpack)
import flyerImage from "../assets/pdf/Formations-santé.pdf";

const Header = () => {
  const images = [
    "/myimages/res1.jpg",
    "/myimages/sante11.jpg",
    "/myimages/sante5.jpg",
    "/myimages/sante12.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set([images[0]]));
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const imageDimensions = {
    width: 1920,
    height: 1080,
    aspectRatio: "16/9"
  };

  const slogan = "Former autrement, pour soigner mieux !";
  const shortDescription =
    "ITC Santé forme des professionnels de la santé engagés, plaçant l'humain au cœur de leur pratique et intégrant les innovations médicales de demain. Découvrez nos formations de qualité à Yaoundé.";

  // Preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => setLoadedImages((prev) => new Set([...prev, src]));
    });
  }, [images]);

  // Rotate images
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

  // Entrance animation
  useEffect(() => {
    const timeoutId = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleDownloadFlyer = () => {
    const fileName = "ITC-Sante-Formations.pdf";
    const link = document.createElement("a");
    link.href = flyerImage;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative w-full">
      <header className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 w-full h-full bg-black/30 pointer-events-none z-10"></div>

          {images.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out ${
                currentImageIndex === index ? "opacity-100" : "opacity-0"
              } ${isTransitioning ? "transition-transform duration-300 scale-105" : "scale-100"}`}
            >
              <img
                src={image}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover object-center"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchpriority={index === 0 ? "high" : "low"}
                width={imageDimensions.width}
                height={imageDimensions.height}
                style={{
                  opacity: loadedImages.has(image) ? 1 : 0,
                  transition: "opacity 0.3s ease-in-out",
                }}
              />
            </div>
          ))}
        </div>

        <div className="relative z-10 h-full w-full flex flex-col justify-center items-end px-4 sm:px-6 md:px-8">
          <div className="w-full max-w-[90%] sm:max-w-[400px] md:max-w-lg lg:max-w-xl ml-auto">
            <Suspense fallback={<div className="animate-pulse bg-white/10 rounded-2xl h-96"></div>}>
              <div className="bg-white/10 p-1 rounded-2xl border border-white/20 shadow-xl backdrop-blur-sm transform transition-all duration-500">
                <div
                  className={`bg-black/75 p-4 md:p-5 rounded-xl transform transition-all duration-500 ease-out
                    ${isVisible ? "translate-x-0 opacity-100 scale-100" : "translate-x-full opacity-0 scale-95"}`}
                >
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 leading-tight text-white text-center">
                    {slogan}
                  </h1>
                  <p className="text-sm md:text-base mb-4 md:mb-5 text-white leading-relaxed text-center">
                    {shortDescription}
                  </p>
                  <div className="flex flex-col space-y-3 md:space-y-4 items-center">
                    <button
                      onClick={handleDownloadFlyer}
                      className="w-full max-w-[300px] flex p-3 md:p-4 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-green-800 font-semibold items-center justify-center gap-2 transition-all text-sm md:text-base transform hover:scale-105 shadow-lg"
                    >
                      <FontAwesomeIcon icon={faDownload} /> Télécharger le Flyer
                    </button>

                    <Link
                      to="/contact"
                      className="w-full max-w-[300px] p-3 md:p-4 rounded-lg bg-green-700 hover:bg-green-600 text-yellow-300 font-semibold text-center transition-all text-sm md:text-base transform hover:scale-105 shadow-lg"
                    >
                      Contactez-Nous
                    </Link>
                  </div>
                </div>
              </div>
            </Suspense>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
