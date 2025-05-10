import React from "react";
import Header from "../components/Header";
// import CertificationNotice from "../components/utils/Ourcertificates";
import WhyChooseUs from "../components/utils/WhychooseUs";
import ServicesCard from "../components/utils/ServicesCard";
import Testimonials from "../components/home/Testimonials";
import StayInformedSection from "../components/utils/StayInformedSection";
function Home() {
  return (
    <div>
      <Header />
      <WhyChooseUs />
      <div className="flex flex-col items-center justify-center mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-12">
          Nos Formations
        </h1>
        <p className="text-gray-600 max-w-[900px] mb-8">
          Découvrez nos formations professionnelles de qualité, conçues pour
          vous offrir des compétences concrètes, une insertion rapide dans le
          monde du travail et une carrière valorisante dans le domaine de la
          santé et des services sociaux.
        </p>
      </div>
      <ServicesCard />
      <h1 className="semi-bold text-green-800 mx-auto text-center text-xl">
        <StayInformedSection />
      </h1>
      <div className="my-16 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-12">
          Témoignages de nos étudiants
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Découvrez ce que nos apprenants disent de leur expérience à ITC Santé,
          de la qualité de l’enseignement à l’accompagnement personnalisé et à
          l’insertion professionnelle.
        </p>

        <Testimonials />
      </div>
    </div>
  );
}

export default Home;
