import React from 'react';
import ContactSection from '../../components/ContactSection';
import DelegueMedicalHero from '../../components/utils/DelegueMedicalHero';
import DelegueMedicaleDetails from '../../components/utils/DelegueMedicalDetails';
import DelegueMedicaleInfo from '../../components/utils/DelegueMedicaleInfo';
import { FaCheckCircle } from 'react-icons/fa';

function DelegueMedical() {
  return (
    <div className="w-full px-6 md:px-12 mt-14 sm:mt-20">
      <DelegueMedicalHero/>
      <div className="flex flex-col items-center justify-center text-center mb-8">
        <h2 className="text-3xl font-bold text-[#3aaa35] mb-4 py-8">Chose a savoir</h2>
        </div>
      <DelegueMedicaleDetails />
     
      <DelegueMedicaleInfo/>
      <ContactSection />
    </div>
  );
}

export default DelegueMedical;
