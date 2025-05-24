import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import backgroundImage from "../../assets/images/auxilire1.jpg";
import flyerImage from "../../assets/pdf/1.pdf";

const trainingObjectives = [
  {
    title: "Informations sur la formation",
    points: [
      "Diplôme délivré : Diplôme de qualification professionnelle (DQP).",
      "Durée : 9 mois de cours intensifs + 3 mois de stage pratique.",
      "Lieu : Campus ITC Santé et institutions partenaires (maisons de retraite, hôpitaux, services d’aide à domicile).",
      "Public concerné : Tout public (jeunes, adultes, reconversion, sans diplôme).",
      "Niveau requis : BEPC minimum.",
      "Type : Cours en présentiel, sessions de jour uniquement.",
    ],
  },
  {
    title: "Pourquoi choisir ITC Santé ?",
    points: [
      "Formateurs expérimentés dans le secteur médico-social ;",
      "Approche pédagogique axée sur la pratique terrain ;",
      "Stages intégrés dans des établissements partenaires ;",
      "Modules de développement personnel et informatique inclus ;",
      "Séminaires et ateliers gratuits en lien avec l'aide à la personne ;",
      "Encadrement individualisé et suivi des stagiaires ;",
      "Accès gratuit aux supports de cours et matériels ;",
      "Aide à l'insertion professionnelle après la formation.",
    ],
  },
  {
    title: "Débouchés professionnels",
    points: [
      "Maisons de retraite et EHPAD ;",
      "Centres hospitaliers publics et cliniques privées ;",
      "Services d’aide à domicile ;",
      "Associations de soutien aux personnes en situation de dépendance ;",
      "Structures d’accueil pour personnes handicapées ;",
      "Secteurs de soins à domicile ou services sociaux.",
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
    link.download = "AuxiliareMedical-itc-sante.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

const AuxiliareMedicalInfo = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <header
      className="relative w-full h-fit md:h-[90vh] bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-green-900/80" />
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start max-w-7xl mx-auto px-6 py-12 gap-10">
        {/* LEFT: Text & Button */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-bold text-yellow-400 drop-shadow-md">
            Bienvenue à la formation
          </h1>
          <h2 className="text-2xl sm:text-4xl font-semibold text-yellow-400 mt-2 drop-shadow-md">
            Auxiliaire de Vie
          </h2>
          <p className="mt-4 text-white text-sm max-w-md">
            Vous souhaitez exercer un métier humain et essentiel ? Devenez
            Auxiliaire de Vie en un an grâce à notre formation professionnelle
            complète. Rejoignez ITC-Santé, un établissement agréé, et obtenez un
            diplôme paramédical reconnu par le ministère de la Formation
            Professionnelle (MINEFOP).{" "}
          </p>
          <div className="mt-6 bg-yellow-400 border border-green-800 text-green-800 px-2 py-4 rounded-xl shadow-md text-center text-base font-medium">
            Cette formation vous prépare à offrir une assistance professionnelle
            de qualité, tant dans l’accompagnement aux soins que dans le soutien
            à la personne au quotidien.
            <br />
            <button
              onClick={handleDownloadFlyer}
              className="mt-4 px-4 py-2 rounded-lg bg-green-700 hover:bg-yellow-300 text-white font-semibold items-center justify-center gap-2 transition-all"
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
                <ul className="px-6 pb-4 text-sm text-gray-600 list-disc list-inside space-y-2 transition-all duration-300 ease-in-out">
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

export default AuxiliareMedicalInfo;
