import React from "react";
import { Helmet } from "react-helmet";
import AuxiliareMedicalInfo from "../../components/utils/AuxiliareMedicalInfo";
import AuxiliareMedicaleDetails from "../../components/utils/AuxiliareMedicaleDetails";
import AuxiliaireDeVieHero from "../../components/utils/AuxiliaireDeVieHero";
import ContactSection from "../../components/ContactSection";

const AuxiliaireDeVie = () => {
  return (
    <div>
      <Helmet>
        <title>Formation Auxiliaire de Vie à Yaoundé</title>
        <meta name="description" content="Apprenez à accompagner les personnes âgées, malades ou en situation de handicap. Compétences : soins d’hygiène, accompagnement moral, gestion de la vie quotidienne." />
        <meta name="keywords" content="formation auxiliaire de vie, formation paramédicale Yaoundé, école santé Cameroun" />
      </Helmet>
      <AuxiliareMedicalInfo />
      <div className="text-center my-8">
        <h1 className="font-bold text-green-600 text-2xl py-4">
          Apprenez à accompagner les personnes âgées, malades ou en situation de handicap
        </h1>
        <p className="text-gray-700 px-4 text-justify md:text-center max-w-3xl mx-auto">
          Vous apprendrez à intervenir avec bienveillance, à assurer leur confort, leur hygiène, et à favoriser leur autonomie à domicile. Grâce à un programme complet alliant théorie, pratique et stages encadrés, vous serez opérationnel(le) pour intégrer rapidement ce secteur essentiel.
        </p>
      </div>

      <AuxiliareMedicaleDetails />

      <AuxiliaireDeVieHero />
      <ContactSection />
    </div>
  );
};

export default AuxiliaireDeVie;
