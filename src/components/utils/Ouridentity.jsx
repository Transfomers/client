import React from 'react';
import image from '../../assets/images/our-mission1.png';
import image1 from '../../assets/images/aboutus1.jpg';
const OurIdentity = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <span className="text-[#3aaa35] uppercase font-semibold tracking-wide">Notre Mission</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
            Former autrement, <br /> <span className="text-[#3aaa35]">pour soigner mieux</span>
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong className="text-[#3aaa35]">Une pédagogie immersive :</strong>
              <ul className="list-disc ml-6 mt-2">
                <li>Ateliers pratiques avec matériel médical standard.</li>
                <li>Stages encadrés dans des hôpitaux partenaires.</li>
                <li>Études de cas réels pour maîtriser les protocoles en vigueur.</li>
              </ul>
            </li>
            <li>
              <strong className="text-[#3aaa35]">Une alliance entre tradition et modernité :</strong>
              <ul className="list-disc ml-6 mt-2">
                <li>Cours en présentiel enrichis par une plateforme e-learning.</li>
                <li>Veille active sur les innovations du secteur.</li>
              </ul>
            </li>
            <li>
              <strong className="text-[#3aaa35]">Un parcours sur mesure :</strong>
              <ul className="list-disc ml-6 mt-2">
                <li>Évaluations régulières et fiches de progression personnalisées.</li>
                <li>Mentorat par des professionnels en activité.</li>
                <li>Préparation aux certifications nationales et internationales.</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img src={image} alt="Notre mission ITC Santé" className="rounded-3xl w-full max-w-md" />
        </div>
      </div>

      {/* Our Team Section */}
      <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="flex justify-center order-2 md:order-1">
          <img src={image1} alt="Équipe ITC Santé" className="rounded-3xl w-full max-w-md" />
        </div>

        {/* Right Content */}
        <div className="order-1 md:order-2">
          <span className="text-[#ffed00] uppercase font-semibold tracking-wide">Notre Équipe</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
            Des experts <span className="text-[#3aaa35]">qui incarnent leur enseignement</span>
          </h2>
          <p className="text-gray-700 mb-4">
            Formateurs : infirmiers, techniciens de laboratoire et médecins expérimentés, tous en activité.
          </p>
          <p className="text-gray-700 mb-4">
            Pédagogues : spécialistes des sciences de l’éducation pour une assimilation optimale.
          </p>
          <p className="text-gray-700 mb-4">
            Conseillers : accompagnement individualisé vers l’insertion professionnelle.
          </p>
          <p className="text-gray-800 font-semibold">
            Leur conviction : la qualité des soins commence par la qualité de la formation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurIdentity;
