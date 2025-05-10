import React from "react";
import AuxiliareMedicalInfo from "../../components/utils/AuxiliareMedicalInfo";
import AuxiliareMedicaleDetails from "../../components/utils/AuxiliareMedicaleDetails";
import AuxiliaireDeVieHero from "../../components/utils/AuxiliaireDeVieHero";
import ContactSection from "../../components/ContactSection";
const AuxiliaireDeVie = () => {
  return (
    <div>
      <AuxiliareMedicalInfo />
      <div className=" ">
        <h1 className="font-bold text-green-600 text-center py-4 m-2 text-2xl">
          Fonction et Activités de l’Auxiliaire de Vie
        </h1>
        <p className="text-gray-500 text-center m-4">
          Notre formation propose un programme complet alliant cours théoriques,
          séances pratiques et stages en entreprise,
          <br />
          accompagnés par des professionnels du domaine. Intégrez rapidement le
          secteur de la santé et <br />
          contribuez activement à l'efficacité des soins à domicile.
        </p>
      </div>
      <AuxiliareMedicaleDetails />
    
      <AuxiliaireDeVieHero />
      <ContactSection />
    </div>
  );
};

export default AuxiliaireDeVie;
