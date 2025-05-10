import React from 'react';
import imgOne from '../../assets/images/SecretaireMedicale.jpg';
import imgTwo from '../../assets/images/SecretaireMedicale1.jpg';
import imgThree from '../../assets/images/SecretaireMedicale2.jpg';

const AssistantEnCabinetRole = () => {
  const sections = [
    {
      id: 1,
      title: "Compétences professionnelles acquises en formation d'Assistant Médical",
      text: `La formation d’Assistant Médical vous permet de développer un ensemble de compétences professionnelles essentielles à l’exercice de ce métier, notamment :

      ● Organisation et planification des activités médicales :
      Compétence dans l’organisation de l’agenda médical, la gestion des consultations, la prise de rendez-vous et la planification des soins.

      ● Savoir écouter, orienter et rassurer les patients :
      Capacité à instaurer une relation de confiance avec les patients, en les écoutant attentivement, les orientant vers les services appropriés et les rassurant.`,
      image: imgOne,
      reverse: false
    },
    {
      id: 2,
      title: "Compétences médicales et techniques",
      text: `● Prise de paramètres et exécution des soins en médecine et chirurgie :
      Compétence dans la prise de paramètres médicaux (tension artérielle, température, fréquence cardiaque, etc.) et la réalisation de soins de base, tant en médecine générale que chirurgicale.

      ● Pratique et usage des termes médicaux :
      Maîtrise de la terminologie médicale et de la nomenclature des actes médicaux pour assurer une communication claire et précise avec l'équipe médicale.`,
      image: imgTwo,
      reverse: true
    },
    {
      id: 3,
      title: "Insertion professionnelle et carrière",
      text: `● Vie professionnelle en cabinet médical :
      Aptitude à la bureautique et à l’usage d’Internet : gestion des outils informatiques et des systèmes de gestion en cabinet médical & IA.

      ● Communication écrite et orale : capacité à rédiger des documents médicaux et à interagir efficacement avec les patients et l’équipe médicale.

      ● Insertion, évolution, carrière, entrepreneuriat :
      Préparation à une carrière dans un cabinet médical, mais aussi à des opportunités d’évolution professionnelle.`,
      image: imgThree,
      reverse: false
    }
  ];

  return (
    <div className="space-y-20 px-4 md:px-20 py-10">
      {sections.map(({ id, title, text, image, reverse }) => (
        <div key={id} className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-10`}>
          <div className="w-full md:w-1/2">
            <img src={image} alt="Assistant Médical" className="rounded-2xl shadow-lg w-full object-cover" />
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

export default AssistantEnCabinetRole;
