import React from 'react';
import imgOne from '../../assets/images/agent1.jpg';
import imgTwo from '../../assets/images/agent2.jpeg';
import imgThree from '../../assets/images/agent3.jpg';

const AgentTechniqueHero = () => {
  const sections = [
    {
      id: 1,
      title: "Compétences et Fonctions de l’Agent Technique de Laboratoire",
      text: `La formation prépare à exercer des fonctions essentielles au sein de laboratoires, en tant qu'aide-biologiste ou aide-chimiste. Elle couvre :

- Préparation et traitement des échantillons biologiques (sang, tissus, urines…)
- Détection de germes et anomalies biochimiques
- Préparation des réactifs et respect strict des protocoles
- Manipulation d’équipements de laboratoire (microscope, centrifugeuse)
- Rédaction de rapports et transmission des résultats`,
      image: imgOne,
      reverse: false
    },
    {
      id: 2,
      title: "Domaines d’Application et Débouchés",
      text: `Les compétences acquises sont transférables à plusieurs secteurs :

- Laboratoires médicaux et centres de recherche biomédicale
- Industrie chimique, pharmaceutique et agroalimentaire
- Contrôle qualité en environnement, énergie ou cosmétique
- Technologies de pointe (automobile, aéronautique, plasturgie)

Le technicien peut évoluer vers des postes de responsabilité ou poursuivre des études spécialisées.`,
      image: imgTwo,
      reverse: true
    },
    {
      id: 3,
      title: "Modules Clés et Compétences Transversales",
      text: `Le programme inclut aussi :

- Hygiène, sécurité et normes en laboratoire
- Gestion des incidents et premiers secours
- Rédaction technique et utilisation de logiciels professionnels
- Communication scientifique et anglais technique
- Sensibilisation à l’éthique, à la collaboration et à l’autonomie

Ces modules renforcent l’adaptabilité du technicien dans tout environnement scientifique.`,
      image: imgThree,
      reverse: false
    }
  ];

  return (
    <div className="space-y-20 px-4 md:px-20 py-10">
      {sections.map(({ id, title, text, image, reverse }) => (
        <div key={id} className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-10`}>
          <div className="w-full md:w-1/2">
            <img src={image} alt="Agent Technique de Laboratoire" className="rounded-2xl shadow-lg w-full object-cover" />
          </div>
          <div className="w-full md:w-1/2 bg-white rounded-xl shadow-md p-6 text-green-900">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="whitespace-pre-line leading-relaxed">{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AgentTechniqueHero