import React from "react";
import VendeurEnPharmacieHero from "../../components/utils/VendeurEnPharmacieHero";
import VendeurEnPharmaciefunction from "../../components/utils/vendeurEnPharmaciefunction"
import ContactSection from "../../components/ContactSection";
import VendeurEnPharmacieHeader from "../../components/utils/VendeurEnPharmacieHeader";
import CompetencesPharma from "../../components/utils/competencespharma";
const VendeurEnPharmacie = () => {
  return (
    <div>
      <VendeurEnPharmacieHeader />
      <VendeurEnPharmaciefunction />
      <CompetencesPharma/>
      <VendeurEnPharmacieHero />
     
      <ContactSection />
    </div>
  );
};

export default VendeurEnPharmacie;
