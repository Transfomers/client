import React from 'react';
import ContactSection from '../../components/ContactSection';
import DelegueMedicalHero from '../../components/utils/DelegueMedicalHero';
import DelegueMedicaleDetails from '../../components/utils/DelegueMedicalDetails';
import DelegueMedicaleInfo from '../../components/utils/DelegueMedicaleInfo';

function DelegueMedical() {
  return (
    <div className="w-full px-6 md:px-12 mt-14 sm:mt-20">
      <DelegueMedicalHero />

      <div className="flex flex-col items-center justify-center text-center mb-8">
        <h2 className="text-3xl font-bold text-[#3aaa35] mb-4 py-8">
          À savoir sur le Délégué Médical
        </h2>
        <p className="text-lg md:text-lg px-4 text-justify mx-auto text-gray-700">
          Le métier de délégué médical joue un rôle clé dans l’industrie pharmaceutique.
          Il assure la promotion des produits de santé auprès des professionnels médicaux
          tels que les médecins, les pharmaciens ou les hôpitaux. Grâce à ses connaissances
          scientifiques et commerciales, il devient un véritable ambassadeur des laboratoires,
          tout en garantissant une information fiable, éthique et conforme aux normes en vigueur.
          C’est une profession dynamique, en contact permanent avec le monde médical.
        </p>
      </div>

      <DelegueMedicaleDetails />
      <DelegueMedicaleInfo />
      <ContactSection />
    </div>
  );
}

export default DelegueMedical;
