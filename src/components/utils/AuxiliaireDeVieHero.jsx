import React from 'react';
import imgOne from '../../assets/images/auxilire1.jpg';
import imgTwo from '../../assets/images/auxilire2.jpg';
import imgThree from '../../assets/images/auxilire3.jpg';

const AuxiliaireDeVieHero = () => {
  const sections = [
    {
      id: 1,
      title: "Compétences professionnelles acquises en formation d’Auxiliaire de Vie",
      text: `La formation d’Auxiliaire de Vie proposée par ITC Santé permet d'acquérir un ensemble de compétences solides, à la croisée des domaines médical, social et éducatif. À l’issue du programme, les apprenants maîtrisent :

- Accompagnement des personnes âgées, handicapées ou malades
- Soutien au maintien à domicile et aide aux actes de la vie quotidienne
- Application des gestes de soins et de confort
- Respect de l’hygiène, de la sécurité et des normes professionnelles
- Communication professionnelle et bienveillance`,
      image: imgOne,
      reverse: false
    },
    {
      id: 2,
      title: "Modules Clés de la Formation",
      text: `Les enseignements couvrent :

- Anatomie et connaissance du corps humain
- Psycho-médicosocial et approche de la personne aidée
- Soins d’hygiène, alimentation et confort
- Animation, éducation sanitaire et communication
- Accompagnement de la fin de vie et bientraitance`,
      image: imgTwo,
      reverse: true
    },
    {
      id: 3,
      title: "Professionnalisation et Perspectives",
      text: `La formation intègre également :

- Secourisme et gestion des incidents médicaux
- Initiation à la bureautique et à l’usage d’Internet
- Insertion professionnelle dans les structures de santé
- Accompagnement à la création d’activités médico-sociales
- Développement des compétences transversales (autonomie, écoute, rigueur)`,
      image: imgThree,
      reverse: false
    }
  ];

  return (
    <div className="space-y-20 px-4 md:px-20 py-10">
      {sections.map(({ id, title, text, image, reverse }) => (
        <div key={id} className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-10`}>
          <div className="w-full md:w-1/2">
            <img src={image} alt="Auxiliaire de Vie" className="rounded-2xl shadow-lg w-full object-cover" />
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

export default AuxiliaireDeVieHero;
