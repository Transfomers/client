import React from "react";
import { Calendar, Eye } from "lucide-react";

import telemedecineImage from "../assets/images/telemedecine.jpg";
import dmeImage from "../assets/images/dme.jpg";
import appsSanteImage from "../assets/images/appssante.jpg";
import hygieneImage from "../assets/images/hygiene.jpeg";
import vaccinationImage from "../assets/images/vaccination.jpg";
import preventionImage from "../assets/images/prevention.jpeg";
import nutritionImage from "../assets/images/nutrition.jpeg";
import mentalImage from "../assets/images/whyImg2.jpg";
import urgencesImage from "../assets/images/urgence.jpeg";

const getFrenchDate = (daysOffset) => {
  const date = new Date();
  date.setDate(date.getDate() - daysOffset);
  return date
    .toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, " ");
};

const articles = [
  {
    id: 1,
    title: "Télémédecine : Nouveaux outils digitaux",
    description:
      "Découvrez les dernières innovations technologiques en santé connectée au Cameroun.",
    views: "3.2K",
    comments: 15,
    link: "https://agencecamerounpresse.com/la-telemedecine-une-revolution-en-marche-au-cameroun/",
    image: telemedecineImage,
  },
  {
    id: 2,
    title: "Dossier Médical Électronique",
    description:
      "Comment l'ITC révolutionne le partage des données médicales entre professionnels.",
    views: "2.8K",
    comments: 9,
    link: "https://cdnss.minsante.cm/bahmni/home/index.html",
    image: dmeImage,
  },
  {
    id: 3,
    title: "Applications Santé : Nouveautés 2025",
    description:
      "Les apps mobiles validées par le ministère pour mieux suivre votre santé.",
    views: "4.1K",
    comments: 18,
    link: "https://mboapharma.cm/2025/04/21/sante-mobile-mhealth-applications-qui-sauvent-des-vies/",
    image: appsSanteImage,
  },
  {
    id: 4,
    title: "Hygiène Hospitalière : Bonnes pratiques",
    description:
      "Formation aux gestes essentiels pour prévenir les infections nosocomiales.",
    views: "1.9K",
    comments: 6,
    link: "https://www.cameroon-tribune.cm/article.html/28945/fr.html/sante-bientot-un-document-cadre-sur-lhygiene-la-salubrite",
    image: hygieneImage,
  },
  {
    id: 5,
    title: "Vaccination : Couverture nationale en hausse",
    description:
      "Les efforts d’ITC Santé pour renforcer la sensibilisation et l’accès aux vaccins.",
    views: "3.5K",
    comments: 11,
    link: "https://cdn.who.int/media/docs/default-source/country-profiles/immunization/2024-country-profiles/immunization-2024-cmr.pdf?download=true&sfvrsn=fb0d6c18_3",
    image: vaccinationImage,
  },
  {
    id: 6,
    title: "Prévention : Mieux vaut prévenir que guérir",
    description:
      "Nos campagnes d’éducation à la santé dans les écoles et entreprises.",
    views: "2.1K",
    comments: 5,
    link: "https://actucameroun.com/2025/05/15/500-000-camerounais-cibles-par-la-campagne-promotion-sante-2025/",
    image: preventionImage,
  },
  {
    id: 7,
    title: "Nutrition : Équilibrer son alimentation",
    description:
      "Les recommandations d’ITC Santé pour une meilleure hygiène de vie.",
    views: "3.0K",
    comments: 8,
    link: "https://www.ipcinfo.org/fileadmin/user_upload/ipcinfo/docs/IPC_Cameroun_Acute_Malnutrition_Nov2023_Oct2024_Report_French.pdf",
    image: nutritionImage,
  },
  {
    id: 8,
    title: "Santé mentale : Briser les tabous",
    description:
      "L’importance du soutien psychologique dans le parcours de soins.",
    views: "2.7K",
    comments: 12,
    link: "https://www.actioncontrelafaim.org/a-la-une/la-necessite-du-soutien-psychologique-au-cameroun/",
    image: mentalImage,
  },
  {
    id: 9,
    title: "Urgences Médicales : Réagir efficacement",
    description: "Nos formations aux gestes de premiers secours pour tous.",
    views: "2.3K",
    comments: 7,
    link: "https://camerounblog.com/secourisme-au-cameroun/",
    image: urgencesImage,
  },
];

export default function BlogBlocITCSante() {
  return (
    <section className="bg-white py-10 px-4">
      <h2 className="text-3xl font-bold text-green-800 mb-6 border-b-2 border-yellow-400 pb-2">
        ACTUALITÉS ITC SANTÉ
      </h2>
      <p className="text-gray-600 mb-4 py-4">
        Bienvenue sur le blog officiel d’ITC Santé – votre source d’information
        fiable et accessible sur les enjeux actuels de la santé au Cameroun. À
        travers nos articles, nous mettons en lumière les innovations, les
        bonnes pratiques, et les initiatives locales en matière de santé
        publique, de prévention, de bien-être et de technologie médicale. Que
        vous soyez étudiant, professionnel de santé ou simplement curieux, ce
        blog vous offre un regard éclairé sur les transformations du secteur
        sanitaire dans notre pays. Explorez, apprenez et contribuez à bâtir une
        société mieux informée et en meilleure santé.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={article.id}
            className="overflow-hidden border-2 border-yellow-400 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover border-b-2 border-yellow-400"
            />
            <div className="p-4 bg-white">
              <h3 className="text-sm text-yellow-400 font-bold">{`0${article.id}.`}</h3>
              <a
                href={article.link}
                className="group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4 className="text-xl font-bold text-green-800 group-hover:underline mb-2">
                  {article.title}
                </h4>
              </a>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-1 text-green-800">
                  <Calendar className="w-4 h-4" />
                  {getFrenchDate(index)}
                </span>
                <span className="flex items-center gap-1 text-green-800">
                  <Eye className="w-4 h-4" />
                  {article.views}
                </span>
                <span className="bg-green-800 text-white px-3 py-1 rounded-full text-sm">
                  {article.comments} commentaires
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
