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

const SecretaireMedicaleDetails = () => {
  const cards = [
    {
      title: 'Fonctions et Activités de la Secrétaire Médicale',
      content:
        `- Accueil et orientation des patients ;\n- Gestion des appels et rendez-vous ;\n- Suivi et classement des dossiers médicaux ;\n- Coordination avec les équipes soignantes et les services administratifs.`,
    },
    {
      title: 'Où Exerce la Secrétaire Médicale ?',
      content:
        `- Cabinets médicaux, cliniques, hôpitaux ;\n- Centres de radiologie, laboratoires ;\n- Services sociaux (CAF, assurance maladie...) ;\n- Juridictions médicales spécialisées.`,
    },
    {
      title: 'Compétences Organisationnelles et Relationnelles',
      content:
        `- Sens de l’accueil et de l’écoute ;\n- Planification des activités médicales ;\n- Communication efficace avec les patients et professionnels.`,
    },
    {
      title: 'Compétences Administratives et Médico-Techniques',
      content:
        `- Rédaction de documents médicaux ;\n- Maîtrise du vocabulaire médical ;\n- Suivi de la facturation et prise en charge santé.`,
    },
    {
      title: 'Compétences Numériques et Bureautiques',
      content:
        `- Logiciels de bureautique (Word, Excel, etc.) ;\n- Utilisation professionnelle d’Internet et des IA ;\n- Gestion électronique des dossiers.`,
    },
    {
      title: 'Perspectives et Insertion Professionnelle',
      content:
        `- Insertion rapide dans le milieu hospitalier ;\n- Évolution vers la coordination administrative ;\n- Accompagnement à la carrière et à l’entrepreneuriat.`,
    }
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

export default SecretaireMedicaleDetails;

