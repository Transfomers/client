import React from "react";
import { Link } from "react-router-dom";
import DefaultImage1 from "../../assets/images/DefaultImage1.jpg";
import DefaultImage2 from "../../assets/images/DefaultImage2.jpeg";
import DefaultImage3 from "../../assets/images/DefaultImage3.jpg";
import DefaultImage4 from "../../assets/images/homeassistant.jpg";
import DefaultImage5 from "../../assets/images/DefaultImage5.jpg";
import DefaultImage6 from "../../assets/images/DefaultImage6.jpg";

const ServiceCard = ({ image, number, title, paragraph, link }) => (
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
    <div className="relative">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <span className="absolute top-4 left-4 bg-green-700 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold shadow-lg">
        {number}
      </span>
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-2xl font-bold text-green-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-1">{paragraph}</p>
      <Link
        to={link}
        className="inline-block mt-auto bg-yellow-400 text-green-800 font-semibold px-6 py-2 rounded-lg hover:bg-green-700 hover:text-white transition-colors duration-300"
      >
        Découvrir
      </Link>
    </div>
  </div>
);

const ServicesCard = () => {
  return (
    <section className="mt-24 px-4 md:px-12 lg:px-20">
      
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <ServiceCard
          image={DefaultImage1}
          number="1"
          title="Secrétariat Médical"
          paragraph="DQP (Diplôme de qualification professionnelle)"
          link="/SecretariatMedical"
        />
        <ServiceCard
          image={DefaultImage2}
          number="2"
          title="Vendeur en Pharmacie"
          paragraph="DQP (Diplôme de qualification professionnelle)"
          link="/VendeurPharmacie"
        />
        <ServiceCard
          image={DefaultImage3}
          number="3"
          title="Délégué Médical"
          paragraph="DQP (Diplôme de qualification professionnelle)"
          link="/DelegueMedical"
        />
        <ServiceCard
          image={DefaultImage4}
          number="4"
          title="Assistant en Cabinet Médical"
          paragraph="CQP (Certificat de qualification professionnelle)"
          link="/AssistantEnCabinetMedical"
        />
        <ServiceCard
          image={DefaultImage5}
          number="5"
          title="Aide Chimiste et Biologiste"
          paragraph="CQP (Certificat de qualification professionnelle)"
          link="/AideChimiste"
        />
        <ServiceCard
          image={DefaultImage6}
          number="6"
          title="Auxiliaire de Vie"
          paragraph="CQP (Certificat de qualification professionnelle)"
          link="/AuxiliaireDeVie"
        />
      </div>
    </section>
  );
};

export default ServicesCard;