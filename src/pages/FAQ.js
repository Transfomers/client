
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ChevronDown, ChevronUp, Info, MapPin, BookOpen, Star, Mail } from "lucide-react";

const faqs = [
	{
		icon: <Info className="w-5 h-5 text-blue-500" />,
		question: "Quelle est la meilleure école de formation santé au Cameroun ?",
		answer:
			"ITC Santé est reconnue comme la meilleure école de formation professionnelle en santé au Cameroun. Notre institut propose des formations paramédicales à Yaoundé, adaptées aux besoins du marché et aux exigences des professionnels de la santé."
	},
	{
		icon: <MapPin className="w-5 h-5 text-red-500" />,
		question: "Où se former en santé à Yaoundé ?",
		answer:
			"Notre campus principal est situé à Carrefour CEF, Nkoabang, Yaoundé. ITC Santé est un centre de formation médicale et école paramédicale de référence pour les études santé au Cameroun."
	},
	{
		icon: <BookOpen className="w-5 h-5 text-green-500" />,
		question: "Comment devenir auxiliaire de vie ou technicien de laboratoire au Cameroun ?",
		answer:
			"ITC Santé propose des formations certifiantes : formation auxiliaire de vie Cameroun, formation technicien de laboratoire Cameroun, formation assistant médical Cameroun, formation auxiliaire pharmacie Cameroun, formation délégué médical Cameroun. Chaque parcours permet d’obtenir un diplôme paramédical reconnu."
	},
	{
		icon: <Star className="w-5 h-5 text-yellow-500" />,
		question: "Pourquoi choisir ITC Santé pour ses études de santé ?",
		answer:
			"Choisir ITC Santé, c’est opter pour l’excellence académique et pratique. Nous plaçons l’humain au cœur de la formation, intégrons les innovations médicales de demain et garantissons un accompagnement personnalisé à chaque étudiant."
	},
	{
		icon: <Mail className="w-5 h-5 text-purple-500" />,
		question: "Combien coûte une formation paramédicale au Cameroun ?",
		answer:
			"Le coût d’une formation professionnelle en santé varie selon le cursus choisi. Contactez ITC Santé pour connaître les tarifs et modalités d’inscription à nos formations paramédicales à Yaoundé."
	},
	{
		icon: <Mail className="w-5 h-5 text-purple-500" />,
		question: "Comment contacter ITC Santé ?",
		answer:
			"Vous pouvez nous contacter via notre site officiel https://www.itcsante.com, remplir le formulaire en ligne ou écrire à contact@itcsante.com. Nous sommes également joignables par téléphone et sur nos réseaux sociaux."
	}
];

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleFAQ = (idx) => {
		setOpenIndex(openIndex === idx ? null : idx);
	};

	return (
		<>
			<Helmet>
				<html lang="fr" />
				<title>FAQ ITC Santé | Formation santé Cameroun, école paramédicale Yaoundé</title>
				<meta name="description" content="Questions fréquentes sur ITC Santé, centre de formation professionnelle en santé et école paramédicale à Yaoundé, Cameroun. Formation auxiliaire de vie, technicien de laboratoire, assistant médical, pharmacie, délégué médical, études santé Cameroun, diplôme paramédical." />
				<meta name="keywords" content="formation santé Cameroun, école paramédicale Cameroun, formation professionnelle santé Yaoundé, meilleure école santé Cameroun, formation auxiliaire de vie Cameroun, formation technicien de laboratoire Cameroun, formation assistant médical Cameroun, formation auxiliaire pharmacie Cameroun, formation délégué médical Cameroun, études santé Cameroun, institut de formation santé Cameroun, diplôme paramédical Cameroun, formation soins de santé Yaoundé, formation professionnelle en santé, centre de formation médicale Cameroun" />
				<meta property="og:title" content="FAQ ITC Santé | Formation santé Cameroun, école paramédicale Yaoundé" />
				<meta property="og:description" content="FAQ ITC Santé, centre de formation professionnelle santé et paramédicale à Yaoundé, Cameroun. Où se former en santé au Cameroun ? Comment devenir auxiliaire de vie ou technicien de laboratoire ?" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="ITC Santé" />
				<meta property="og:locale" content="fr_FR" />
				<link rel="canonical" href="https://www.itc-sante.com/faq" />
			</Helmet>
			<main className="max-w-3xl mx-auto p-6">
				<h1 className="text-3xl font-bold mb-6 text-center">❓ Foire Aux Questions (FAQ) – Formation santé Cameroun</h1>
				<section itemScope itemType="https://schema.org/FAQPage">
					{faqs.map((faq, idx) => (
						<div
							key={idx}
							itemScope
							itemProp="mainEntity"
							itemType="https://schema.org/Question"
							className="mb-4 border rounded-2xl shadow-sm"
						>
							<button
								onClick={() => toggleFAQ(idx)}
								className="w-full flex justify-between items-center p-4 text-left text-lg font-semibold text-gray-800 hover:bg-blue-50 rounded-2xl transition"
								aria-expanded={openIndex === idx}
							>
								<span itemProp="name" className="flex items-center gap-2">
									{faq.icon}
									{faq.question}
								</span>
								{openIndex === idx ? (
									<ChevronUp className="w-5 h-5 text-blue-500" />
								) : (
									<ChevronDown className="w-5 h-5 text-gray-500" />
								)}
							</button>
							<div
								itemScope
								itemProp="acceptedAnswer"
								itemType="https://schema.org/Answer"
								className={`overflow-hidden transition-all duration-300 ${
									openIndex === idx ? "max-h-40 p-4" : "max-h-0 px-4"
								}`}
							>
								<p className="text-gray-600" itemProp="text">
									{faq.answer}
								</p>
							</div>
						</div>
					))}
				</section>
			</main>
		</>
	);
};

export default FAQ;
