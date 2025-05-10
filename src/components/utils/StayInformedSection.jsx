import React from "react";

// Colors sampled from your image
const cards = [
  {
    front: "Lisez-nous souvent",
    frontColor: "bg-[#0b3d2e] text-white", // dark green
    back: "Découvrez nos articles pour rester à jour",
  },
  {
    front: "Prenez des décisions",
    frontColor: "bg-[#3ec486] text-white", // medium green
    back: "Informez-vous avant de choisir votre formation",
  },
  {
    front: "Rejoignez-nous",
    frontColor: "bg-[#8be34a] text-[#0b3d2e]", // light green
    back: "Faites partie d’une communauté en pleine croissance",
  },
  {
    front: "Obtenez un certificat",
    frontColor: "bg-[#e6f94c] text-[#0b3d2e]", // yellow-green
    back: "Validez vos compétences avec nos formations certifiées",
  },
];

const StayInformedSection = () => (
  <section className="py-16 bg-white">
    <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-12">
      Restez informé avec ITC Santé
    </h2>
    <div className="flex flex-wrap justify-center gap-8">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="w-64 h-64 perspective group"
        >
          <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
            {/* Front */}
            <div className={`absolute w-full h-full flex flex-col items-center justify-center rounded-full shadow-xl ${card.frontColor} backface-hidden`}>
              <span className="text-xl font-bold text-center">{card.front}</span>
            </div>
            {/* Back */}
            <div className="absolute w-full h-full flex flex-col items-center justify-center rounded-full shadow-xl bg-white text-green-800 rotate-y-180 backface-hidden px-6">
              <span className="text-base text-center">{card.back}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
    {/* Tailwind custom classes for 3D flip */}
    <style>
      {`
        .perspective {
          perspective: 1200px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}
    </style>
  </section>
);

export default StayInformedSection;