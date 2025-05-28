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
  const [loadedImages, setLoadedImages] = useState([]);
  const [nextImageLoaded, setNextImageLoaded] = useState(false);

  const slogan = "Former autrement, pour soigner mieux !";
  const shortDescription =
    "ITC Santé forme des professionnels de la santé engagés,plaçant l'humain au cœur de leur pratique et intégrant les innovations médicales de demain. Découvrez nos formations de qualité à Yaoundé.";

  // Preload next image
  useEffect(() => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    const img = new Image();
    img.src = images[nextIndex];
    img.onload = () => {
      setNextImageLoaded(true);
      setLoadedImages(prev => [...prev, images[nextIndex]]);
    };
  }, [currentImageIndex, images]);

  // Initial images preload
  useEffect(() => {
    const preloadImages = async () => {
      const loadImage = (src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(src);
          img.onerror = reject;
        });
      };

      try {
        // Load first two images immediately
        const initialImages = await Promise.all([
          loadImage(images[0]),
          loadImage(images[1])
        ]);
        setLoadedImages(initialImages);

        // Load remaining images
        const remainingImages = await Promise.all(
          images.slice(2).map(loadImage)
        );
        setLoadedImages(prev => [...prev, ...remainingImages]);
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    };

    preloadImages();
  }, [images]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (nextImageLoaded) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setNextImageLoaded(false);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [nextImageLoaded, images.length]);

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
      <header
        className="relative h-screen bg-cover bg-center transition-all duration-1000"
        style={{ 
          backgroundImage: `url(${loadedImages[currentImageIndex] || images[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Preload next image */}
        {nextImageLoaded && (
          <link 
            rel="preload" 
            as="image" 
            href={images[(currentImageIndex + 1) % images.length]} 
            key={currentImageIndex}
          />
        )}

        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content container */}
        <div className="relative h-full flex justify-end items-center">
          <div className="bg-black/50 pt-2 m-4 mr-8 max-w-md rounded-lg">
            <h1 className="text-4xl text-center font-bold text-white mb-4">
              {slogan}
            </h1>
            <p className="text-lg text-white/80 text-center mx-6">
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
        </div>
      </header>
    </div>
  );
};

export default Header;
