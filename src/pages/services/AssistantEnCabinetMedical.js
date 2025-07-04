import React from "react";
import { Helmet } from "react-helmet";
import AssistantEnCabinetMedicalHero from "../../components/utils/AssistantEnCabinetMedicalHero";
import AssistantEnCabinetMedicalDetails from "../../components/utils/AssistantEnCabinetMedicalDeatils";
import AssistantEnCabinetRole from "../../components/utils/AssistantEnCabinetRole";
import ContactSection from "../../components/ContactSection";

const AssistantEnCabinetMedical = () => {
  return (
    <div>
      <Helmet>
        <title>Formation Assistant Cabinet Médical Yaoundé</title>
        <meta name="description" content="Préparez-vous à assister les médecins au quotidien. Compétences : accueil des patients, gestion des dossiers, suivi des consultations." />
        <meta name="keywords" content="formation assistant cabinet médical, formation paramédicale Yaoundé, école santé Cameroun" />
      </Helmet>
      <AssistantEnCabinetMedicalHero />
      <div className=" ">
        <h1 className="font-bold text-green-600 text-center py-4 m-2 text-2xl">
          Préparez-vous à assister les médecins au quotidien
        </h1>
        <p className="text-gray-500 text-center m-4  ">
          Compétences : accueil des patients, gestion des dossiers, suivi des consultations.
        </p>
      </div>
      <AssistantEnCabinetMedicalDetails />
      <AssistantEnCabinetRole/>
      <ContactSection />
    </div>
  );
};

export default AssistantEnCabinetMedical;
