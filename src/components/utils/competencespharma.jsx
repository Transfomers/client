import React from "react";
import competence1 from "../../asset/myimages/agent5.jpeg";
import competence2 from "../../asset/myimages/sante16.jpg";
import competence3 from "../../asset/myimages/sante3.jpg";
import competence4 from "../../asset/myimages/sante4.jpg";

const competenceData = [
  {
    title: "Connaissance des molécules pharmaceutiques",
    description:
      "Apprenez à connaître les différentes molécules pharmaceutiques, leurs usages et leurs effets, afin d’apporter un soutien précieux au pharmacien. Vous serez capable d’identifier les familles thérapeutiques, de comprendre les indications et contre-indications des médicaments, et de conseiller efficacement les clients selon leurs besoins et prescriptions médicales.",
    image: process.env.PUBLIC_URL + '/asset/myimages/agent5.jpeg',
  },
  {
    title: "Application de la législation pharmaceutique",
    description:
      "Maîtrisez les règles légales de vente et d’utilisation des médicaments pour garantir une distribution conforme aux prescriptions. La formation vous permettra de comprendre les obligations liées aux ordonnances, à la dispensation des médicaments sous contrôle, ainsi que les règles de confidentialité et de sécurité sanitaire à respecter dans une officine.",
    image: process.env.PUBLIC_URL + '/asset/myimages/sante16.jpg',
  },
  {
    title: "Gestion des stocks et des rayons",
    description:
      "Organisez efficacement les stocks et rayons de l’officine à l’aide d’outils informatiques adaptés. Vous apprendrez à réceptionner les livraisons, contrôler les dates de péremption, utiliser des logiciels de gestion de stock (type LGPI ou Winpharma), et mettre en place une présentation claire et attractive des produits en libre-service.",
    image: process.env.PUBLIC_URL + '/asset/myimages/sante3.jpg',
  },
  {
    title: "Conseil clientèle & Service après-vente",
    description:
      "Développez des compétences relationnelles pour conseiller les clients et assurer un service après-vente (échange, remboursement, réparation). Vous serez formé à l’écoute active, à l’adaptation du discours selon le public, à la gestion des situations sensibles (produits non adaptés, effets indésirables), et au respect de la déontologie professionnelle.",
    image: process.env.PUBLIC_URL + '/asset/myimages/sante4.jpg',
  },
];

const CompetencesPharma = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-12">
        Compétences Professionnelles Acquises en Formation d’Auxiliaire en Pharmacie
      </h2>

      <div className="grid grid-cols-1 gap-12">
        {competenceData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[250px] md:h-[350px] object-cover rounded-xl shadow-lg"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold text-green-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompetencesPharma;
