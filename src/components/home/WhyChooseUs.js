import React from "react";
import whyImg1 from "../../assets/images/whyImg1.jpg";
import whyImg2 from "../../assets/images/whyImg2.jpg";
import whyImg3 from "../../assets/images/whyImg3.jpg";

const WhyChooseUs = () => {
  const images = [
    { src: whyImg1, alt: "Formation pratique en santé" },
    { src: whyImg2, alt: "Équipement médical moderne" },
    { src: whyImg3, alt: "Environnement d'apprentissage" }
  ];

  return (
    <div className="my-[100px] mx-[34px]">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
        Pourquoi Choisir ITC Santé ?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
              decoding="async"
              width="400"
              height="256"
              sizes="(max-width: 768px) 100vw, 400px"
              onLoad={(e) => {
                e.target.classList.add('loaded');
              }}
            />
            <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors duration-300"></div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-yellow-300 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-green-800 mb-4">Formation Pratique</h3>
          <p className="text-green-900">
            Nos formations sont axées sur la pratique avec des stages en milieu professionnel et des simulations réalistes.
          </p>
        </div>

        <div className="p-6 bg-yellow-300 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-green-800 mb-4">Équipements Modernes</h3>
          <p className="text-green-900">
            Accédez à des équipements médicaux modernes et à des technologies de pointe pour votre apprentissage.
          </p>
        </div>

        <div className="p-6 bg-yellow-300 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-green-800 mb-4">Encadrement Personnalisé</h3>
          <p className="text-green-900">
            Bénéficiez d'un suivi individuel et d'un encadrement par des professionnels expérimentés.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs; 