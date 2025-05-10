import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Card = ({ title, content }) => (
  <div className="bg-white rounded-xl shadow-lg p-4 border-l-4 border-[#3aaa35] hover:shadow-xl transition-all duration-300">
    <h3 className="text-lg font-semibold text-[#3aaa35] mb-3 flex items-center gap-2">
      <FaCheckCircle className="text-[#3aaa35]" /> {title}
    </h3>
    <p className="text-gray-700 text-sm whitespace-pre-line leading-relaxed">{content}</p>
  </div>
);

const DelegueMedicaleDetails = () => {
  const cards = [
    {
      title: 'Promotion des médicaments',
      content:
        "Le délégué médical visite les cabinets médicaux, hôpitaux et pharmacies pour présenter les produits de son laboratoire de manière objective et rigoureuse. Il utilise des supports techniques détaillant les indications, la posologie, la composition et les effets secondaires éventuels.",
    },
    {
      title: 'Conseil et expertise',
      content:
        "Véritable expert du médicament, il répond aux questions des professionnels de santé concernant le principe actif, la biodisponibilité, la tolérance et l’efficacité des produits. Il démontre les bénéfices thérapeutiques des médicaments afin d’en encourager la prescription.",
    },
    {
      title: 'Communication et relationnel',
      content:
        "Doté de solides compétences en communication commerciale, il sait adapter son discours aux besoins de ses interlocuteurs tout en respectant un cadre éthique strict, dans l’intérêt du patient.",
    },
    {
      title: 'Lien entre laboratoires et médecins',
      content:
        "Le délégué médical joue un rôle d’intermédiaire en relayant auprès des laboratoires les retours du terrain, notamment concernant les effets secondaires, les interactions médicamenteuses ou toute autre information médicale importante.",
    },
    {
        title: 'Compétences scientifiques et commerciales',
        content:
          "La formation de Délégué Médical permet d’acquérir : connaissances en pathologie, cancérologie, parasitologie, virologie, mycologie ; maîtrise des familles thérapeutiques et de la pharmacologie ; connaissance de la réglementation pharmaceutique et des enjeux économiques liés aux médicaments.",
      },
      {
        title: 'Outils, techniques et adaptation',
        content:
          "Maîtrise des techniques de vente et communication adaptées au secteur ; élaboration de plans d’action sectoriels ; animation d’actions de communication ; e-detailing, webmarketing, outils numériques ; compétences en bureautique et communication professionnelle en laboratoire pharmaceutique.",
      },
  ];

  return (
    <section className="bg-[#f9f9f9] py-12 px-4">
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>
    </section>
  );
};

export default DelegueMedicaleDetails;
