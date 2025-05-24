import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import backgroundImage from "../../assets/images/assistanceph.png";
import flyerImage from "../../assets/pdf/4.pdf";

const trainingObjectives = [
  {
    title: "Informations sur la formation Auxiliaire / Vendeur en Pharmacie",
    points: [
      "Diplôme délivré : Diplôme de qualification professionnelle (DQP)",
      "Durée de la formation : 9 mois de cours intensifs suivis de 3 mois de stage en laboratoire pharmaceutique",
      "Lieu de formation : Dans les locaux de ITC Santé et au sein de laboratoires pharmaceutiques partenaires",
      "Public concerné : Formation ouverte à tous (personnes sans qualification professionnelle, chercheurs d’emploi, étudiants, travailleurs, indépendants)",
      "Niveau requis : PROBATOIRE",
      "Types de sessions : Cours du jour",
    ],
  },
  {
    title: "Pourquoi choisir ITC Santé ?",
    points: [
      "Enseignants professionnels actifs sur le terrain ;",
      "Utilisation des dernières technologies du secteur santé ;",
      "Approche par compétence (APC) ;",
      "Cours 75% pratique & 25% théorique ;",
      "Alternance entre cours et immersion professionnelle ;",
      "Séminaires professionnels gratuits ;",
      "Activités annexes gratuites (ateliers, conférences, événements santé) ;",
      "Cours de développement personnel gratuits (bureautique, entrepreneuriat, expression anglaise, auto-école…) ;",
      "Supports de cours et documents pédagogiques fournis ;",
      "Reprographie gratuite pendant toute la durée de la formation ;",
      "Former directement pour intégrer le monde du travail ;",
      "Stage académique offert ;",
      "Accompagnement vers l’emploi dans un secteur en constante évolution.",
    ],
  },
  {
    title: "Débouchés professionnels",
    points: [
      "Intégration dans des laboratoires pharmaceutiques, entreprises de distribution de matériel médical ou structures de promotion des médicaments ;",
      "Évolution vers les postes de Superviseur ou Directeur régional, avec des responsabilités d'encadrement ;",
      "Possibilité de rejoindre le service marketing d’un laboratoire comme Chef de produit ;",
      "Poursuite d'études vers un Master ou un MBA pour devenir Ingénieur spécialisé dans les produits pharmaceutiques.",
    ],
  },
];

const handleDownloadFlyer = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // Open PDF in new tab (most mobile browsers can't force download)
    window.open(flyerImage, "_blank");
  } else {
    // Force download on desktop
    const link = document.createElement("a");
    link.href = flyerImage;
    link.download = "VendeurEnPharmacie-itc-sante.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};


const VendeurEnPharmacieHeader = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <header
      className="relative w-full h-fit md:h-[90vh] bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-[#003c2e]/80" />
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start max-w-7xl mx-auto px-6 py-12 gap-8">
        {/* LEFT: Intro + Button */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#ffed00] drop-shadow-md">
            Bienvenue à la formation
          </h1>
          <h2 className="text-2xl sm:text-4xl font-semibold text-[#ffed00] mt-2 drop-shadow-md">
            Auxiliaire / Vendeur en Pharmacie
          </h2>
          <p className="mt-4 text-white text-sm max-w-md">
            Formez-vous au métier d’Auxiliaire ou Vendeur en Pharmacie à ITC Santé à Yaoundé.
            Cette formation professionnelle vous permet d’accéder à un secteur dynamique
            en pleine expansion avec un excellent taux d’employabilité.
          </p>
          <div className="mt-6 bg-[#ffed00] border border-green-800 text-green-800 px-2 py-4 rounded-xl shadow-md text-center text-base font-medium">
            <h3>Pourquoi ce métier ?</h3>
            Le vendeur en pharmacie accompagne les patients dans leurs achats de produits de
            santé non soumis à prescription médicale. Il conseille, informe et participe à la
            gestion des stocks tout en respectant les normes d’hygiène.
            <br />
            <button
              onClick={handleDownloadFlyer}
              className="mt-4 px-4 py-2 mt-4 px-4 py-2 rounded-lg bg-green-700 hover:bg-yellow-300 text-white font-semibold items-center justify-center gap-2 transition-all"
            >
              <FontAwesomeIcon icon={faDownload} /> Télécharger le Flyer
            </button>
          </div>
        </div>

        {/* RIGHT: Dropdown Cards */}
        <div className="w-full md:w-1/2 space-y-4">
          {trainingObjectives.map((section, idx) => (
            <div
              key={idx}
              className="bg-white/90 rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleCard(idx)}
                className="w-full flex justify-between items-center px-4 py-3 text-green-800 font-semibold text-left"
              >
                <span>{section.title}</span>
                <FontAwesomeIcon
                  icon={openIndex === idx ? faChevronUp : faChevronDown}
                  className="text-green-800"
                />
              </button>
              {openIndex === idx && (
                <ul className="px-6 pb-4 text-sm text-gray-700 list-disc list-inside space-y-2 transition-all duration-300 ease-in-out">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default VendeurEnPharmacieHeader;
