import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Card = ({ title, content }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-700 hover:shadow-xl transition-all duration-300">
    <h3 className="text-lg font-semibold text-green-700 mb-4 flex items-start gap-2">
      <FaCheckCircle className="text-green-700 mt-1" /> {title}
    </h3>
    <p className="text-gray-700 text-sm whitespace-pre-line leading-relaxed">
      {content}
    </p>
  </div>
);

const AgentTechniqueDetails = () => {
  const cards = [
    {
      title: "Fonctions et Activités de l’Agent Technique de Laboratoire",
      content: `- En tant qu’aide-biologiste :
  • Collaboration avec le médecin ou biologiste pour prélèvements et analyses d’échantillons biologiques
  • Détection de germes, anomalies cellulaires ou biochimiques
  • Préparation, manipulation et conservation rigoureuse des échantillons
  `,
    },
    {
      title: "Responsabilités transversales :",
      content: `
  • Respect des normes d’hygiène et sécurité
  • Rédaction de rapports et tenue des registres- En tant qu’aide-chimiste :
  • Assistance dans la mise en œuvre d’expériences ou analyses standardisées
  • Préparation des réactifs et solutions
  • Entretien et contrôle des équipements

`,
    },
    {
      title: "Domaines d’exercice du métier",
      content: `- Laboratoires médicaux et pharmaceutiques
- Industrie chimique et agroalimentaire
- Secteurs de l’environnement et de l’énergie
- Recherche appliquée en biotechnologie
- Industrie cosmétique et plasturgie`,
    },

  ];

  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>
    </section>
  );
};

export default AgentTechniqueDetails;
