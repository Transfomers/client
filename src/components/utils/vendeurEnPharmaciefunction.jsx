import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxesStacked,
  faPills,
  faComments,
  faClipboardList,
  faStore,
  faHandshake,
  faUserDoctor,
  faBookOpen,
  faBriefcaseMedical,
} from "@fortawesome/free-solid-svg-icons";

const cardData = [
  {
    icon: faBoxesStacked,
    title: "Gestion des stocks et réapprovisionnement",
    description:
      "Responsable de l’organisation des stocks de médicaments et produits pharmaceutiques, ainsi que de la réception et du rangement des commandes. Mise à jour des rayons de produits pharmaceutiques, diététiques, cosmétiques et d’hygiène.",
  },
  {
    icon: faPills,
    title: "Délivrance des médicaments",
    description:
      "Sous la supervision du pharmacien, délivre les médicaments sur ordonnance, assure le suivi des prescriptions et conseille les clients en respectant les prescriptions médicales.",
  },
  {
    icon: faComments,
    title: "Conseils et services à la clientèle",
    description:
      "En l’absence du pharmacien, conseille les clients sur les prescriptions ou sur les produits de parapharmacie : cosmétiques, hygiène corporelle, diététiques.",
  },
  {
    icon: faClipboardList,
    title: "Réalisation des tâches administratives",
    description:
      "Gère les tâches administratives liées à l’officine, contribuant ainsi à son bon fonctionnement et à une meilleure relation client.",
  },
  {
    icon: faStore,
    title: "Vente de produits de parapharmacie",
    description:
      "Propose et vend des produits de soins, d’hygiène, diététiques et cosmétiques, tout en utilisant ses connaissances en pharmacologie et en législation pharmaceutique.",
  },
  {
    icon: faHandshake,
    title: "Relation client",
    description:
      "Contribue à offrir une expérience client fluide, humaine et professionnelle, en étant à l’écoute des besoins spécifiques.",
  },
  {
    icon: faUserDoctor,
    title: "Support au pharmacien",
    description:
      "Assiste le pharmacien dans l’ensemble de ses tâches techniques, commerciales et administratives au sein de l’officine.",
  },
  {
    icon: faBookOpen,
    title: "Connaissances en pharmacologie",
    description:
      "Utilise ses savoirs pour répondre efficacement aux besoins de la clientèle, notamment en matière de produits et de prescriptions.",
  },
  {
    icon: faBriefcaseMedical,
    title: "Profession polyvalente",
    description:
      "Combine des compétences en gestion, en conseil, en vente et en assistance pour assurer un rôle clé dans le fonctionnement de la pharmacie.",
  },
];

const VendeurEnPharmacieFunction = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
        Fonction et Activités d’Auxiliaire en Pharmacie
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="border-2 border-green-700 rounded-xl p-6 bg-white shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center gap-3 mb-4 text-green-800">
              <FontAwesomeIcon icon={card.icon} className="text-xl" />
              <h3 className="text-lg font-semibold">{card.title}</h3>
            </div>
            <p className="text-gray-600 text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendeurEnPharmacieFunction;
