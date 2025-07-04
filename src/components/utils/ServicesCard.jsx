import React from "react";
import { Link } from "react-router-dom";
import DefaultImage1 from "../../assets/images/DefaultImage1.jpg";
import DefaultImage2 from "../../assets/images/DefaultImage2.jpeg";
import DefaultImage3 from "../../assets/images/DefaultImage3.jpg";
import DefaultImage4 from "../../assets/images/homeassistant.jpg";
import DefaultImage5 from "../../assets/images/DefaultImage5.jpg";
import DefaultImage6 from "../../assets/images/DefaultImage6.jpg";

const ServiceCard = ({ image, number, title, paragraph, link }) => (
  <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
    <div className="relative h-56 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
      <span className="absolute top-4 left-4 bg-green-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
        {number}
      </span>
    </div>
    <div className="p-6 flex flex-col flex-1 bg-gradient-to-b from-white to-gray-50">
      <h3 className="text-xl font-bold text-green-800 mb-3 group-hover:text-green-700 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 mb-6 flex-1">{paragraph}</p>
      <Link
        to={link}
        className="inline-block text-center bg-yellow-400 text-green-800 font-semibold px-6 py-3 rounded-lg hover:bg-green-700 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5"
      >
        Découvrir la formation
      </Link>
    </div>
  </div>
);

const ServicesCard = () => {
  const services = [
    {
      image: DefaultImage6,
      number: "1",
      title: "Auxiliaire de vie",
      paragraph: "Apprenez à accompagner les personnes âgées, malades ou en situation de handicap. Compétences : soins d’hygiène, accompagnement moral, gestion de la vie quotidienne.",
      link: "/AuxiliareDeVie"
    },
    {
      image: DefaultImage3,
      number: "2",
      title: "Technicien de Laboratoire",
      paragraph: "Devenez un acteur clé du diagnostic médical. Compétences : analyses biologiques, prélèvements, entretien du matériel.",
      link: "/AgentTechniqueLaboratoire"
    },
    {
      image: DefaultImage4,
      number: "3",
      title: "Assistant en Cabinet Médical",
      paragraph: "Préparez-vous à assister les médecins au quotidien. Compétences : accueil des patients, gestion des dossiers, suivi des consultations.",
      link: "/AssistantEnCabinetMedical"
    },
    {
      image: DefaultImage2,
      number: "4",
      title: "Vendeur / Auxiliaire en Pharmacie",
      paragraph: "Formez-vous à la vente de produits pharmaceutiques en officine. Compétences : conseils clients, gestion de stock, bases de pharmacologie.",
      link: "/VendeurEnPharmacie"
    },
    {
      image: DefaultImage5,
      number: "5",
      title: "Délégué Médical",
      paragraph: "Devenez un ambassadeur des laboratoires pharmaceutiques. Compétences : communication médicale, promotion de médicaments, visites aux professionnels de santé.",
      link: "/DelegueMedical"
    },
    {
      image: DefaultImage1,
      number: "6",
      title: "Aide Chimiste / Biologiste",
      paragraph: "Initiez-vous aux techniques de base en chimie et biologie. Compétences : préparation d’échantillons, techniques de laboratoire, analyses simples.",
      link: "/SecretariaMedical"
    }
  ];

  return (
    <section className="mt-24 px-4 md:px-12 lg:px-20">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
        {services.map((service) => (
          <ServiceCard
            key={service.number}
            {...service}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesCard;
