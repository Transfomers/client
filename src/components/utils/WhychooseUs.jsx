import React from "react";
// import { BsGraphUp } from "react-icons/bs";
import {
  FaUserCheck,
  FaChalkboardTeacher,
  FaBriefcase,
  FaUsers,
} from "react-icons/fa";
import whyImg1 from "../../assets/images/auxilire3.jpg";
import whyImg2 from "../../assets/images/whyImg2.jpg";
import whyImg3 from "../../assets/images/whyImg3.jpg";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            Pourquoi nous choisir pour votre formation ?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Notre institut est un pilier dans la formation de professionnels
            compétents, prêts à relever les défis du monde moderne.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Stats & Text */}
          <div className="space-y-8">
            {/* Statistics Section */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h1 className="semi-bold text-green-800 mx-auto text-center text-xl">
                Taux de Reusite{" "}
              </h1>
              <div className="space-y-6">
                {/* Progress Bars */}
                {[
                  { label: "Savoir Pratique", percentage: 92 },
                  { label: "Taux de Réussite", percentage: 80 },
                  { label: "Étudiants Satisfaits", percentage: 88 },
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">{stat.label}</span>
                      <span className="text-green-800 font-semibold">
                        {stat.percentage}%
                      </span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-green-600 rounded-full transition-all duration-500"
                        style={{ width: `${stat.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Text Content */}
            <p className="text-gray-600 leading-relaxed">
              Nous combinons expertise académique et expérience pratique pour
              former des professionnels immédiatement opérationnels dans le
              secteur de la santé.
            </p>

            {/* Image Grid */}
            <div className="relative w-64 h-64 mx-auto mt-8 rounded-full overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={whyImg2}
                  alt="Formation pratique"
                  className="w-full h-full 1/2 clip-top-half"
                />
              </div>
              <div className="absolute inset-0">
                <img
                  src={whyImg3}
                  alt="Équipe pédagogique"
                  className="w-full h-full object-cover clip-bottom-half"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Main Image */}
          <div className="relative">
            <img
              src={whyImg1}
              alt="Étudiants en formation"
              className="rounded-lg shadow-lg w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-8 left-8 right-8 bg-yellow-500 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">
                Certifications Reconnues
              </h3>
              <p className="text-white text-sm">
                Nos diplômes sont accrédités par le Ministère de la Santé et
                reconnus à l'échelle internationale.
              </p>
              {/* CTA Section */}
              <div className="text-center mt-16">
                <Link
                  to="/about"
                  className="inline-block bg-green-800 text-white px-8 py-3 rounded-lg 
                                hover:bg-green-700 transition-colors duration-300 text-lg font-semibold"
                >
                  PLUS D'INFORMATIONS
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          {/* 1. Expertise pédagogique */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col h-full">
            <div className="flex items-start mb-4">
              <FaChalkboardTeacher className="text-green-800 text-4xl mr-6 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-green-800">
                  Expertise pédagogique
                </h3>
                <ul className="text-gray-600 list-disc ml-5 space-y-1">
                  <li>Enseignants professionnels actifs sur le terrain</li>
                  <li>
                    Utilisation des dernières technologies du secteur santé
                  </li>
                  <li>Approche par compétence (APC)</li>
                  <li>Cours 75% pratique & 25% théorie</li>
                  <li>Alternance entre cours et immersion professionnelle</li>
                </ul>
              </div>
            </div>
            <div className="mt-auto">
              <span className="inline-block bg-yellow-400 text-green-800 font-semibold px-4 py-2 rounded">
                Apprenez auprès de professionnels d'aujourd'hui pour construire
                la santé de demain.
              </span>
            </div>
          </div>

          {/* 2. Accompagnement personnalisé */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex items-start">
            <FaUsers className="text-green-800 text-4xl mr-6 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-green-800">
                Vie étudiante & Activités gratuites
              </h3>
              <ul className="text-gray-600 mb-4 list-disc ml-5 space-y-1">
                <li>Séminaires professionnels gratuits</li>
                <li>
                  Activités annexes gratuites (ateliers, conférences, événements
                  santé)
                </li>
                <li>
                  Cours de développement personnel gratuits (bureautique,
                  entrepreneuriat, expression anglaise, auto-école…)
                </li>
              </ul>
              <div>
                <span className="inline-block bg-yellow-400 text-green-800 font-semibold px-4 py-2 rounded">
                  Grandissez, échangez et innovez au rythme d'une vie étudiante
                  dynamique.
                </span>
              </div>
            </div>
          </div>

          {/* 3. Insertion professionnelle */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex items-start">
            <FaUserCheck className="text-green-800 text-4xl mr-6 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-green-800">
                Accompagnement personnalisé
              </h3>
              <ul className="text-gray-600 mb-4 list-disc ml-5 space-y-1">
                <li>
                  Suivi individualisé pendant toute la durée de la formation
                </li>
                <li>Suivi post-formation, accompagnement à l'insertion</li>
                <li>Accompagnement dans le montage et le suivi de projets</li>
              </ul>
              <div>
                <span className="inline-block bg-yellow-400 text-green-800 font-semibold px-4 py-2 rounded">
                  Votre réussite est notre mission, pendant et après votre
                  parcours.
                </span>
              </div>
            </div>
          </div>

          {/* 4. Vie étudiante & Activités gratuites */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex items-start">
            <FaBriefcase className="text-green-800 text-4xl mr-6 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-green-800">
                Insertion professionnelle
              </h3>
              <ul className="text-gray-600 mb-4 list-disc ml-5 space-y-1">
                <li>Former directement pour intégrer le monde du travail</li>
                <li>Stage académique offert</li>
                <li>Accompagnement à un emploi décent</li>
              </ul>
              <div>
                <span className="inline-block bg-yellow-400 text-green-800 font-semibold px-4 py-4 rounded">
                  Une formation pensée pour vous propulser vers l'emploi.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
