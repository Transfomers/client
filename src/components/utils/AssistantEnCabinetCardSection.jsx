import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import highSpeedImage from '../../assets/images/easysetupandhighspeed.jpeg';
import globalCoverageImage from '../../assets/images/assistante1.jpeg';
import reliablePerformanceImage from '../../assets/images/assistante2.jpeg';

const flipContents = [
  `Nous vous préparons à devenir un professionnel compétent et recherché dans le secteur médical.`,
  `Notre formation propose un programme complet alliant cours théoriques séances pratiques et stages en `,
  `entreprise cours théoriques,séances pratiques et stages en entreprise .`,
];

const AssistantEnCabinetCardSection = () => {
  const [face, setFace] = useState(0);
  const autoRef = useRef(null);
  const cardRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(new Set());

  // Advance to the next face
  const nextFace = () => {
    setFace((prev) => (prev + 1) % flipContents.length);
  };

  // Start auto-flip
  const startAutoFlip = () => {
    if (!autoRef.current) {
      autoRef.current = setInterval(nextFace, 3000); // Flip every 3 seconds
    }
  };

  // Stop auto-flip
  const stopAutoFlip = () => {
    if (autoRef.current) {
      clearInterval(autoRef.current);
      autoRef.current = null;
    }
  };

  // Handle manual flip
  const handleManualFlip = () => {
    nextFace();
    stopAutoFlip();
  };

  // Pause auto-flip on hover
  const handleMouseEnter = () => {
    stopAutoFlip();
  };

  // Resume auto-flip when not hovering
  const handleMouseLeave = () => {
    startAutoFlip();
  };

  useEffect(() => {
    startAutoFlip();
    return () => {
      stopAutoFlip();
    };
  }, []);

  const handleImageLoad = (src) => {
    setImagesLoaded(prev => new Set([...prev, src]));
  };

  const angle = face * (360 / flipContents.length);

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
      {/* Left: Image Stack */}
      <div className="relative w-80 h-80 mx-auto">
        <div className="absolute inset-0 border-4 border-[#3aaa35] rounded-full overflow-hidden">
          <img 
            src={highSpeedImage} 
            alt="High Speed" 
            className="object-cover w-full h-full transition-opacity duration-300"
            loading="eager"
            decoding="async"
            width="320"
            height="320"
            fetchpriority="high"
            onLoad={() => handleImageLoad(highSpeedImage)}
            style={{ opacity: imagesLoaded.has(highSpeedImage) ? 1 : 0 }}
          />
        </div>
        <div className="absolute -left-6 bottom-0 w-32 h-40 border-4 border-[#3aaa35] rounded-full overflow-hidden">
          <img 
            src={globalCoverageImage} 
            alt="Global Coverage" 
            className="object-cover w-full h-full transition-opacity duration-300"
            loading="lazy"
            decoding="async"
            width="128"
            height="160"
            onLoad={() => handleImageLoad(globalCoverageImage)}
            style={{ opacity: imagesLoaded.has(globalCoverageImage) ? 1 : 0 }}
          />
        </div>
        <div className="absolute right-0 -top-6 w-32 h-40 border-4 border-[#3aaa35] rounded-full overflow-hidden">
          <img 
            src={reliablePerformanceImage} 
            alt="Reliable Performance" 
            className="object-cover w-full h-full transition-opacity duration-300"
            loading="lazy"
            decoding="async"
            width="128"
            height="160"
            onLoad={() => handleImageLoad(reliablePerformanceImage)}
            style={{ opacity: imagesLoaded.has(reliablePerformanceImage) ? 1 : 0 }}
          />
        </div>
      </div>

      {/* Right: Flipping Card */}
      <div
        className="relative w-full h-64 mx-auto bg-yellow-200 rounded-lg shadow-lg overflow-hidden"
        style={{ perspective: '1000px' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={cardRef}
      >
        <div
          className="relative w-full h-full transition-transform duration-700"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateY(${angle}deg)`,
          }}
        >
          {flipContents.map((text, idx) => (
            <div
              key={idx}
              className="absolute text-sm inset-0 flex items-center justify-center px-6 text-center"
              style={{
                transform: `rotateY(${idx * (360 / flipContents.length)}deg) translateZ(200px)`,
                backfaceVisibility: 'hidden',
              }}
            >
              <p className="text-lg text-[#3aaa35]">{text}</p>
            </div>
          ))}
        </div>

        {/* Flip Button */}
        <button
          onClick={handleManualFlip}
          className="absolute top-2 right-2 p-2 bg-[#3aaa35] text-white rounded-full shadow hover:bg-green-700 transition"
        >
          <FontAwesomeIcon icon={faSyncAlt} />
        </button>
      </div>
    </section>
  );
};

export default AssistantEnCabinetCardSection;
