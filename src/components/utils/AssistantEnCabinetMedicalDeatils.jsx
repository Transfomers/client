import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Card = ({ title, content }) => (
  <div className="bg-white rounded-xl shadow-lg p-4 border-l-4 border-[#3aaa35] hover:shadow-xl transition-all duration-300">
    <h3 className="text-lg font-semibold text-[#3aaa35] mb-3 flex items-center gap-2">
      <FaCheckCircle className="text-[#3aaa35]" /> {title}
    </h3>
    <p className="text-gray-700 text-sm whitespace-pre-line leading-relaxed">{content}</p>
  </div>
);

const AssistantEnCabinetMedicalDetails = () => {
  const cards = [
    {
      title: 'Accueil et orientation des patients',
      content:
        "L’assistant médical est souvent le premier contact du patient avec le cabinet. Il l’accueille, le renseigne et l’oriente, assurant ainsi une première prise en charge efficace.",
    },
    {
      title: 'Gestion administrative',
      content:
        "Il prend en charge la gestion des dossiers médicaux, la planification des rendez-vous, la mise à jour des informations patients et la coordination avec les services médicaux.",
    },
    {
      title: 'Assistance aux actes médicaux',
      content:
        "L’assistant médical prépare les patients pour les examens, assiste le médecin lors de certains actes médicaux et veille à la stérilisation du matériel.",
    },
    {
      title: 'Communication et coordination',
      content:
        "Il assure la liaison entre les patients, les médecins et les autres professionnels de santé, facilitant ainsi la coordination des soins.",
    },
    {
      title: 'Compétences requises',
      content:
        "Le métier requiert des compétences en communication, une bonne organisation, la maîtrise des outils informatiques et une connaissance des termes médicaux.",
    },
    {
      title: 'Formation et perspectives',
      content:
        "Une formation spécifique est nécessaire pour exercer ce métier. Des opportunités d'évolution existent vers des postes de coordination ou de spécialisation.",
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-12 px-4">
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>
    </section>
  );
};

export default AssistantEnCabinetMedicalDetails;
