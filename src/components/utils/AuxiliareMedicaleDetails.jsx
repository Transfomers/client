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

const AuxiliareMedicaleDetails = () => {
  const cards = [
    {
      title: 'Assistance aux actes de la vie quotidienne',
      content:
        `- Aide à la toilette, à l’habillage et à la mobilité ;\n- Préparation et aide à la prise des repas ;\n- Aide à la prise de médicaments sous supervision ;\n- Maintien de l’hygiène de vie des personnes dépendantes.`,
    },
    {
      title: 'Accompagnement social et relationnel',
      content:
        `- Création d’un lien de confiance et d’écoute ;\n- Stimulation intellectuelle et participation à des activités ;\n- Accompagnement lors de sorties ou rendez-vous ;\n- Lutte contre l’isolement des personnes âgées ou en situation de handicap.`,
    },
    {
      title: 'Entretien du cadre de vie',
      content:
        `- Ménage courant du logement (pièces de vie, sanitaires, etc.) ;\n- Entretien du linge : lavage, repassage ;\n- Maintien d’un environnement propre et sécurisé.`,
    },
    {
      title: 'Communication avec les professionnels de santé',
      content:
        `- Observation et remontée des changements de comportement ou de santé ;\n- Suivi des consignes médicales et transmissions aux familles ou soignants ;\n- Coordination avec les aides-soignants, infirmiers et médecins.`,
    },
    {
      title: 'Soutien à l’autonomie et à l’inclusion',
      content:
        `- Favoriser l’indépendance au quotidien selon les capacités ;\n- Encouragement à la participation active ;\n- Aide à l’intégration dans la vie sociale et culturelle.`,
    },
    {
      title: 'Posture professionnelle et éthique',
      content:
        `- Respect de la confidentialité et des personnes ;\n- Écoute bienveillante et empathie ;\n- Travail en équipe pluridisciplinaire ;\n- Respect des normes de sécurité et d’hygiène.`,
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

export default AuxiliareMedicaleDetails;
