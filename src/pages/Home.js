import React from "react";
import Header from "../components/Header";
// import CertificationNotice from "../components/utils/Ourcertificates";
import WhyChooseUs from "../components/utils/WhychooseUs";
import ServicesCard from "../components/utils/ServicesCard";
import Testimonials from "../components/home/Testimonials";
import StayInformedSection from "../components/utils/StayInformedSection";
function Home() {
  return (
    <div className="h-sreen overflow-hidden">
      <Header />
      <WhyChooseUs />
      <div className="flex flex-col items-center justify-center text-center my-16">
        <h1 className="text-4xl font-bold text-green-800 mb-6">
          Nos Formations
        </h1>
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 mb-4">
              ITC Santé est un centre de formation professionnelle spécialisé dans
              le secteur de la santé et du paramédical. Nous proposons des
              formations de qualité, adaptées aux besoins du marché et aux
              exigences des professionnels de la santé.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed font-semibold text-green-800 bg-green-50 p-4 rounded-lg shadow-sm">
              Notre équipe pédagogique est composée de professionnels
              expérimentés, passionnés par leur métier et soucieux de
              transmettre leur savoir-faire.
            </p>
          </div>
        </div>
        <ServicesCard />
        <h1 className="semi-bold text-green-800 mx-auto text-center text-xl">
          <StayInformedSection />
        </h1>
        <div className="my-12 text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-12">
            Témoignages de nos étudiants
          </h2>
          <p className="text-gray-600 text-xl mb-8">
            Découvrez ce que nos apprenants disent de leur expérience à ITC
            Santé,<br /> de la qualité de l’enseignement à l’accompagnement
            personnalisé et à l’insertion professionnelle.
          </p>

          <Testimonials />
        </div>
      </div>
    </div>
  );
}

export default Home;
