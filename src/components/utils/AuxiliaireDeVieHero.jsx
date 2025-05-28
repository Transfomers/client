import React from 'react';
import imgOne from '../../assets/images/auxilire1.jpg';
import imgTwo from '../../assets/images/auxilire2.jpg';
import imgThree from '../../assets/images/auxilire3.jpg';

const AuxiliaireDeVieHero = () => {
  const sections = [
    {
      id: 1,
      title: "Compétences professionnelles acquises en formation d'Auxiliaire de Vie",
      text: `La formation d'Auxiliaire de Vie proposée par ITC Santé permet d'acquérir un ensemble de compétences solides, à la croisée des domaines médical, social et éducatif. À l'issue du programme, les apprenants maîtrisent :

- Accompagnement des personnes âgées, handicapées ou malades
- Soutien au maintien à domicile et aide aux actes de la vie quotidienne
- Application des gestes de soins et de confort
- Respect de l'hygiène, de la sécurité et des normes professionnelles
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
- Soins d'hygiène, alimentation et confort
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
- Initiation à la bureautique et à l'usage d'Internet
- Insertion professionnelle dans les structures de santé
- Accompagnement à la création d'activités médico-sociales
- Développement des compétences transversales (autonomie, écoute, rigueur)`,
      image: imgThree,
      reverse: false
    }
  ];

  return (
    <div className="bg-white py-16">
      {sections.map((section, index) => (
        <div
          key={section.id}
          className={`container mx-auto px-6 mb-20 ${
            section.reverse ? 'lg:flex-row-reverse' : ''
          }`}
        >
          <div className={`flex flex-col lg:flex-row items-center gap-12 ${
            section.reverse ? 'flex-row-reverse' : ''
          }`}>
            {/* Text Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-green-800 mb-6">
                {section.title}
              </h2>
              <div className="prose prose-green max-w-none">
                {section.text.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-600 whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="lg:w-1/2">
              <img
                src={section.image}
                alt={section.title}
                className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                width="800"
                height="400"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.opacity = '0.9';
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AuxiliaireDeVieHero;
