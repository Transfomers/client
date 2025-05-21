import React from "react";
import ContactSection from "../../components/ContactSection";
import SecreteriatMedicalInfo from "../../components/utils/SecretariaMedicaleInfo";
import SecreteriatMedicalHero from "../../components/utils/SecreteriatMedicalHero";
import SecretaireMedicaleDetails from "../../components/utils/SecretaireMedicaleDetails";
import { Link } from "react-router-dom";
import flyerPDF from "../../assets/images/DefaultImage1.jpg";

function SecretariaMedical() {
  return (
    <div className="w-full px-4 md:px-10 mt-8 sm:mt-10">
      <SecreteriatMedicalHero />

      <div className="flex flex-col items-center justify-center text-center my-16">
        <h1 className="text-4xl font-bold text-green-800 mb-6">
          À savoir sur le Secrétariat Médical
        </h1>

        <div className="text-gray-600 mb-8 md:px-24 px-4 item-center py-2">
          <p className="text-lg md:text-lg px-4 text-justify mx-auto">
            Le secrétariat médical est bien plus qu’un simple poste
            administratif. Véritable pilier des établissements de santé, il
            assure l’accueil des patients, la gestion des dossiers médicaux, la
            planification des rendez-vous et le lien entre les équipes
            soignantes et les patients. Cette profession exige rigueur, empathie
            et discrétion, tout en offrant une opportunité unique de contribuer
            au bon fonctionnement du système de santé.
          </p>
        </div>
      </div>

      <SecretaireMedicaleDetails />
      <SecreteriatMedicalInfo />
      <ContactSection />
    </div>
  );
}

export default SecretariaMedical;
