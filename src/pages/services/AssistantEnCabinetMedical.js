import React from "react";
import AssistantEnCabinetMedicalHero from "../../components/utils/AssistantEnCabinetMedicalHero";
import AssistantEnCabinetMedicalDetails from "../../components/utils/AssistantEnCabinetMedicalDeatils";
import AssistantEnCabinetRole from "../../components/utils/AssistantEnCabinetRole";
import ContactSection from "../../components/ContactSection";
const AssistantEnCabinetMedical = () => {
  return (
    <div>
      <AssistantEnCabinetMedicalHero />
      <div className=" ">
        <h1 className="font-bold text-green-600 text-center py-4 m-2 text-2xl">
          Fonction et Activités de l’Assistant Médical
        </h1>
        <p className="text-gray-500 text-center m-4  ">
          Notre formation propose un programme complet alliant cours théoriques,
          séances pratiques et stages en entreprise,
          <br />
          accompagnés par des professionnels du domaine. Intégrez rapidement le
          secteur de la santé et <br />
          contribuez activement à l'efficacité des soins en cabinet médical.
        </p>
      </div>
      <AssistantEnCabinetMedicalDetails />
      <AssistantEnCabinetRole/>
      <ContactSection />
    </div>
  );
};

export default AssistantEnCabinetMedical;
