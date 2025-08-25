import React from "react";
import Header from "../components/Header";
import { Helmet } from "react-helmet";
// import CertificationNotice from "../components/utils/Ourcertificates";
import WhyChooseUs from "../components/utils/WhychooseUs";
import ServicesCard from "../components/utils/ServicesCard";
import Testimonials from "../components/home/Testimonials";
import StayInformedSection from "../components/utils/StayInformedSection";

function Home() {
  return (
    <>
      <Helmet>
        <html lang="fr" />
        <title>
          Formation professionnelle en santé au Cameroun – ITC Santé | Meilleure école paramédicale à Yaoundé
        </title>
        <meta
          name="description"
          content="ITC Santé, centre de formation professionnelle en santé et école paramédicale à Yaoundé, Cameroun. Découvrez nos formations : auxiliaire de vie, technicien de laboratoire, assistant médical, auxiliaire pharmacie, délégué médical. Études santé Cameroun, diplôme paramédical, centre de formation médicale, formation soins de santé Yaoundé."
        />
        <meta
          name="keywords"
          content="formation santé Cameroun, école paramédicale Cameroun, formation professionnelle santé Yaoundé, meilleure école santé Cameroun, formation auxiliaire de vie Cameroun, formation technicien de laboratoire Cameroun, formation assistant médical Cameroun, formation auxiliaire pharmacie Cameroun, formation délégué médical Cameroun, études santé Cameroun, institut de formation santé Cameroun, diplôme paramédical Cameroun, formation soins de santé Yaoundé, formation professionnelle en santé, centre de formation médicale Cameroun"
        />
        <meta
          property="og:title"
          content="Formation professionnelle en santé au Cameroun – ITC Santé"
        />
        <meta
          property="og:description"
          content="ITC Santé, meilleure école de santé et centre de formation paramédicale à Yaoundé, Cameroun. Formations certifiantes : auxiliaire de vie, technicien de laboratoire, assistant médical, pharmacie, délégué médical. Où se former en santé à Yaoundé ? Pourquoi choisir ITC Santé pour ses études de santé ?"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.itc-sante.com/" />
        <meta property="og:site_name" content="ITC Santé" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Formation santé Cameroun – ITC Santé"
        />
        <meta
          name="twitter:description"
          content="Centre de formation professionnelle en santé, école paramédicale, études santé, diplôme paramédical à Yaoundé, Cameroun."
        />
        <link rel="canonical" href="https://www.itc-sante.com/" />
      </Helmet>
      <div className="h-sreen overflow-hidden">
        <Header />
        <WhyChooseUs />
        <div className="flex flex-col items-center justify-center text-center my-16">
          <h1 className="text-4xl font-bold text-green-800 mb-6">
            Formation professionnelle en santé au Cameroun – ITC Santé
          </h1>
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 mb-4">
                ITC Santé est une école professionnelle en santé au Cameroun, spécialisée dans la formation paramédicale à Yaoundé. Notre centre de formation médicale propose des cursus adaptés : <b>formation auxiliaire de vie Cameroun</b>, <b>formation technicien de laboratoire Cameroun</b>, <b>formation assistant médical Cameroun</b>, <b>formation auxiliaire pharmacie Cameroun</b>, <b>formation délégué médical Cameroun</b>. Où se former en santé à Yaoundé ? Découvrez nos diplômes paramédicaux reconnus et nos études santé Cameroun.
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed font-semibold text-green-800 bg-green-50 p-4 rounded-lg shadow-sm">
                Notre équipe pédagogique est composée de professionnels expérimentés, passionnés par leur métier et soucieux de transmettre leur savoir-faire. ITC Santé, meilleure école santé Cameroun, vous accompagne pour réussir votre formation professionnelle en santé et obtenir un diplôme paramédical reconnu.
              </p>
            </div>
          </div>
          <ServicesCard />
          <h1 className="semi-bold text-green-800 mx-auto text-center text-xl">
            <StayInformedSection />
          </h1>
          <div className="my-12 text-center">
            <h2 className="text-4xl font-bold text-green-800 mb-12">
              Témoignages d’étudiants en formation paramédicale à Yaoundé – ITC Santé
            </h2>
            <p className="text-gray-600 text-xl mb-8">
              Découvrez ce que nos apprenants disent de leur expérience à ITC Santé, centre de formation professionnelle en santé au Cameroun. De la qualité de l'enseignement à l'accompagnement personnalisé et à l'insertion professionnelle, ITC Santé est la référence pour les études santé Cameroun.
            </p>

            <Testimonials />
          </div>
        </div>
        {/* Localisation Section */}
      </div>
    </>
  );
}

export default Home;
