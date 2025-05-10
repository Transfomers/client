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
//     {
//       title: "Qualités requises",
//       content: `- Minutie et sens de l’observation
// - Organisation et autonomie
// - Rigueur scientifique et éthique professionnelle
// - Capacité à travailler en équipe`,
//     },
//     {
//       title: "Compétences professionnelles développées",
//       content: `- Prélèvements et analyses biologiques
// - Utilisation d’équipements de laboratoire
// - Suivi de protocoles expérimentaux
// - Rédaction de comptes rendus techniques
// - Maîtrise des normes de sécurité`,
//     },
//     {
//       title: "Hygiène et Sécurité au Laboratoire",
//       content: `- Connaissance des risques biologiques et chimiques
// - Port des équipements de protection individuelle (EPI)
// - Respect des procédures d’élimination des déchets
// - Plan de prévention des accidents`,
//     },
//     {
//       title: "Utilisation des Outils Informatiques",
//       content: `- Logiciels de saisie et d’analyse de données
// - Tableurs et traitement de texte
// - Systèmes de gestion de laboratoire (LIMS)
// - Rédaction de rapports numériques`,
//     },
//     {
//       title: "Équipement de Laboratoire",
//       content: `- Microscope, centrifugeuse, spectrophotomètre
// - Entretien et calibration des appareils
// - Protocoles de maintenance
// - Identification des pannes courantes`,
//     },
//     {
//       title: "Communication et Travail d’Équipe",
//       content: `- Transmission claire des résultats
// - Collaboration avec médecins, pharmaciens, chercheurs
// - Participation aux réunions de service
// - Sens du contact et du service`,
//     },
//     {
//       title: "Perspectives d’Évolution",
//       content: `- Spécialisation en biologie médicale ou chimie analytique
// - Accès à des fonctions de technicien supérieur
// - Intégration dans la recherche ou l’industrie
// - Possibilité de reconversion vers la formation ou la vente technique`,
//     },
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
