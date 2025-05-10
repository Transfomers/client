import React from "react";
import competence1 from "../../assets/images/competence1.jpg";
import competence2 from "../../assets/images/competence2.jpg";
import competence3 from "../../assets/images/competence3.png";
import competence4 from "../../assets/images/competence4.jpg";

const competenceData = [
  {
    title: "Connaissance des molécules pharmaceutiques",
    description:
      "Apprenez à connaître les différentes molécules pharmaceutiques, leurs usages et leurs effets, afin d’apporter un soutien précieux au pharmacien.",
    image: competence1,
  },
  {
    title: "Application de la législation pharmaceutique",
    description:
      "Maîtrisez les règles légales de vente et d’utilisation des médicaments pour garantir une distribution conforme aux prescriptions.",
    image: competence2,
  },
  {
    title: "Gestion des stocks et des rayons",
    description:
      "Organisez efficacement les stocks et rayons de l’officine à l’aide d’outils informatiques adaptés.",
    image: competence3,
  },
  {
    title: "Conseil clientèle & Service après-vente",
    description:
      "Développez des compétences relationnelles pour conseiller les clients et assurer un service après-vente (échange, remboursement, réparation).",
    image: competence4,
  },
];

const CompetencesPharma = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-green-800 text-center mb-10">
        Compétences Professionnelles Acquises en Formation d’Auxiliaire en Pharmacie
      </h2>

      <div className="grid grid-cols-1 gap-10">
        {competenceData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full md:w-1/2 rounded-xl shadow-md"
            />
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompetencesPharma;
