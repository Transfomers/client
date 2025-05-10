import React from 'react';
import ContactSection from '../../components/ContactSection';
import SecreteriatMedicalInfo from '../../components/utils/SecretariaMedicaleInfo';
import SecreteriatMedicalHero from '../../components/utils/SecreteriatMedicalHero';
import SecretaireMedicaleDetails from '../../components/utils/SecretaireMedicaleDetails';
function SecretariaMedical() {
  return (
    <div className='w-full px-4 md:px-10 mt-8 sm:mt-10'>
      <SecreteriatMedicalHero />
    <SecretaireMedicaleDetails />
      <SecreteriatMedicalInfo />
      <ContactSection />
    </div>
  );
}

export default SecretariaMedical;
