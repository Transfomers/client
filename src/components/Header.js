import React, { useState, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

// Import available images
import flyerImage from "../assets/pdf/Formations-santé.pdf";
import heroImage1 from "../assets/images/whyImg1.jpg";
import heroImage2 from "../assets/images/header2.jpg";
import heroImage3 from "../assets/images/header3.jpg";
import heroImage4 from "../assets/images/header6.png";

const Header = () => {
  const images = [heroImage1, heroImage2, heroImage3, heroImage4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set([images[0]]));
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Add image dimensions for better CLS handling
  const imageDimensions = {
    width: 1920,
    height: 1080,
    aspectRatio: "16/9"
  };

  const slogan = "Former autrement, pour soigner mieux !";
  const shortDescription =
    "ITC Santé forme des professionnels de la santé engagés, plaçant l'humain au cœur de leur pratique et intégrant les innovations médicales de demain. Découvrez nos formations de qualité à Yaoundé.";

  // Preload critical resources
  useEffect(() => {
    // Preload next image
    const nextIndex = (currentImageIndex + 1) % images.length;
    const preloadNext = new Image();
    preloadNext.src = images[nextIndex];

    // Preconnect to external resources
    const links = [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
    ];

    links.forEach(({ rel, href, crossOrigin }) => {
      const link = document.createElement('link');
      link.rel = rel;
      link.href = href;
      if (crossOrigin) link.crossOrigin = crossOrigin;
      document.head.appendChild(link);
    });

    return () => {
      links.forEach(() => {
        const link = document.head.lastChild;
        if (link) document.head.removeChild(link);
      });
    };
  }, [currentImageIndex, images]);

  // Optimized image preloading
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            setLoadedImages((prev) => new Set([...prev, src]));
            resolve(src);
          };
          img.onerror = reject;
        });
      });

      try {
        // Load images in sequence for better performance
        for (const promise of imagePromises) {
          await promise;
        }
      } catch (error) {
        console.error("Error preloading images:", error);
      }
    };

    preloadImages();
  }, []);

  // Optimized image rotation
  useEffect(() => {
    let timeoutId;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      timeoutId = setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => {
      clearInterval(interval);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [images.length]);

  // Optimized entrance animation
  useEffect(() => {
    const timeoutId = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleDownloadFlyer = () => {
    try {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const downloadUrl = flyerImage;
      const fileName = "ITC-Sante-Formations.pdf";

      if (isMobile) {
        window.open(downloadUrl, "_blank");

        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = fileName;
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
          document.body.removeChild(link);
        }, 100);
      } else {
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error("Download error:", error);
      window.open(flyerImage, "_blank");
    }
  };

  return (
    <div className="relative">
      <header className="relative h-screen w-full overflow-hidden">
        {/* Image Container with optimized loading */}
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                currentImageIndex === index ? "opacity-100" : "opacity-0"
              } ${isTransitioning ? "transition-transform duration-300 scale-105" : "scale-100"}`}
              style={{ aspectRatio: imageDimensions.aspectRatio }}
            >
              <img
                src={image}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
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

        {/* Content Overlay with optimized rendering */}
        <div className="relative z-10 h-full flex flex-col justify-center items-end">
          <div className="pr-8 md:pr-16 lg:pr-24 w-full max-w-[400px] md:max-w-lg lg:max-w-xl">
            <Suspense fallback={<div className="animate-pulse bg-white/10 rounded-2xl h-96"></div>}>
              {/* Card Container */}
              <div className="bg-white/10 p-1 rounded-2xl border border-white/20 shadow-xl transform transition-all duration-500">
                {/* Card Content */}
                <div
                  className={`bg-black/75 p-4 md:p-5 rounded-xl backdrop-blur-sm transform transition-all duration-500 ease-out
                    ${isVisible ? "translate-x-0 opacity-100 scale-100" : "translate-x-full opacity-0 scale-95"}`}
                >
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight text-white text-center">
                    {slogan}
                  </h1>
                  <p className="text-sm md:text-base mb-5 text-white leading-relaxed text-center">
                    {shortDescription}
                  </p>
                  <div className="flex flex-col space-y-4 items-center">
                    <button
                      onClick={handleDownloadFlyer}
                      className="w-full max-w-[300px] flex p-4 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-green-800 font-semibold items-center justify-center gap-2 transition-all text-sm md:text-base transform hover:scale-105 shadow-lg"
                    >
                      <FontAwesomeIcon icon={faDownload} /> Télécharger le Flyer
                    </button>

                    <Link
                      to="/contact"
                      className="w-full max-w-[300px] p-4 rounded-lg bg-green-700 hover:bg-green-600 text-yellow-300 font-semibold text-center transition-all text-sm md:text-base transform hover:scale-105 shadow-lg"
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
