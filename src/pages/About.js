import React from 'react';
import aiCoverImage3 from '../assets/images/aboutus.jpg'; 
import OurIdentity from '../components/utils/Ouridentity';
const About = () => {
  return (
    <div>
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex flex-col gap-6 lg:w-1/2">
              <span className="text-green-800 font-semibold uppercase tracking-wider">À propos</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                Nous garantissons toujours les meilleures formations pour votre <span className="text-green-800">apprentissage</span>
              </h2>
              <p className="text-gray-700">
                ITC Santé n'est pas simplement un centre de formation : c'est un écosystème engagé qui forme les acteurs de la santé de demain.<br />
                Notre institut est née d'un constat : les défis du système de santé camerounais exigent une approche renouvelée de la formation. Face aux évolutions technologiques, aux attentes des patients et aux enjeux sanitaires, nous avons bâti un modèle pédagogique qui dépasse le traditionnel apprentissage théorique.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-yellow-400 text-white rounded-md p-2 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14m-6 0l-4.553 2.276A1 1 0 013 15.382V8.618a1 1 0 011.447-.894L9 10m6 4l-6-4m0 0L9 10" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800">Éthique professionnelle</h4>
                    <p className="text-gray-700">Pour des soins centrés sur la dignité du patient.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-yellow-400 text-white rounded-md p-2 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4H8l4-4 4 4h-3v4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800">Agilité pratique</h4>
                    <p className="text-gray-700">Des compétences adaptables aux réalités des structures de santé locales.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-yellow-400 text-white rounded-md p-2 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800">Innovation responsable</h4>
                    <p className="text-gray-700">L'utilisation critique des technologies au service du soin.</p>
                  </div>
                </li>
              </ul>
              <a href="/Contact" className="mt-6 inline-block bg-green-800 text-white px-6 py-2 rounded-md shadow hover:bg-green-700">Admission ouverte →</a>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <img src={aiCoverImage3} alt="Photos étudiants ITC Santé" className="rounded-3xl w-full max-w-md" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-green-800 uppercase font-semibold tracking-wide">Stratégie</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Notre processus pédagogique</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border border-green-800 p-6 shadow-md">
              <div className="w-16 h-16 mx-auto bg-green-800 text-white rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6h6v6m-6 4h6a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-green-800 mb-2">Prendre une décision</h4>
              <p className="text-gray-600">Choisissez votre filière de formation selon vos aspirations professionnelles.</p>
            </div>
            <div className="bg-yellow-400 text-white rounded-xl p-6 shadow-md transform scale-105">
              <div className="w-16 h-16 mx-auto bg-white text-yellow-400 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Commencer la formation</h4>
              <p className="text-white">Participez aux cours, ateliers pratiques et stages pour acquérir les compétences nécessaires.</p>
            </div>
            <div className="bg-white rounded-xl border border-green-800 p-6 shadow-md">
              <div className="w-16 h-16 mx-auto bg-green-800 text-white rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-green-800 mb-2">Obtenir un certificat</h4>
              <p className="text-gray-600">Validez votre formation avec un diplôme reconnu nationalement et internationalement.</p>
            </div>
          </div>
        </div>
      </section>
      <OurIdentity />
    </div>
  );
};

export default About;
