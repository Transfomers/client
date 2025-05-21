import React from "react";
import VendeurEnPharmacieHero from "../../components/utils/VendeurEnPharmacieHero";
import VendeurEnPharmaciefunction from "../../components/utils/vendeurEnPharmaciefunction";
import ContactSection from "../../components/ContactSection";
import VendeurEnPharmacieHeader from "../../components/utils/VendeurEnPharmacieHeader";
import CompetencesPharma from "../../components/utils/competencespharma";

const VendeurEnPharmacie = () => {
  return (
    <div className="w-full px-4 md:px-10 mt-8 sm:mt-12">
      <VendeurEnPharmacieHeader />

      <div className="text-center my-8">
        <h1 className="text-2xl font-bold text-green-700 py-4">
          Le Métier de Auxiliair en Pharmacie
        </h1>
        <p className="text-gray-700 px-4 text-justify md:text-center max-w-3xl mx-auto">
          Le vendeur en pharmacie est un professionnel de la santé qui conseille
          les clients, gère les stocks et participe activement à la bonne
          organisation de l’officine. Grâce à notre formation, vous acquerrez
          les compétences nécessaires pour intégrer rapidement ce secteur
          essentiel en plein essor.
        </p>
      </div>

      <VendeurEnPharmaciefunction />
      <CompetencesPharma />
      <VendeurEnPharmacieHero />
      <ContactSection />
    </div>
  );
};

export default VendeurEnPharmacie;
