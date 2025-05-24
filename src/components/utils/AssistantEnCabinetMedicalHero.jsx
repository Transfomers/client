import React from "react";
import coverImage from "../../assets/images/assistante1.jpg";
import flyerImages from "../../assets/images/assistanceph.png";
import blogLingkaran from "../../assets/images/blogLingkaran.png";
import flyerImage from "../../assets/pdf/2.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
const AssistantEnCabinetMedicalHero = () => {
 
  const handleDownloadFlyer = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
    if (isMobile) {
      // Open in new tab for manual download
      window.open(flyerImage, '_blank');
    } else {
      // Desktop: force download
      const link = document.createElement("a");
      link.href = flyerImage;
      link.setAttribute("download", "AssistantEnCabinetMedical-itc-sante.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="grid md:grid-cols-2 items-center max-w-7xl mx-auto px-4 py-16 gap-10">
        {/* Left Content with Background */}
        <div className="relative z-10 space-y-6">
          {/* Background Image Behind Text */}
          <img
            src={blogLingkaran}
            alt="Background decoration"
            className="absolute -top-10 -left-10 w-96 opacity-10 z-0"
          />

          <h1
            className="text-5xl md:text-3xl font-bold relative z-10"
            style={{ color: "#ffed00" }}
          >
            Assistant en Cabinet Médical
          </h1>
          <p
            className="text-xl leading-relaxed relative z-10"
            style={{ color: "#3aaa35" }}
          >
            Devenez Assistant en Cabinet Médical en 1 an avec ITC-Santé à
            Yaoundé. Obtenez un diplôme professionnel reconnu par le MINEFOP et
            lancez-vous dans une carrière dans le secteur médical. <br />
            Notre formation propose un programme complet alliant cours
            théoriques, séances pratiques et stages en entreprise, accompagnés
            par des professionnels du domaine.
            <br />
            Intégrez rapidement le secteur de la santé et contribuez activement
            à l'efficacité des soins en cabinet médical.
          </p>

          <button
            onClick={handleDownloadFlyer}
            className="mt-4 px-4 py-2 rounded-lg bg-green-700 hover:bg-yellow-300 text-white font-semibold items-center justify-center gap-2 transition-all"
          >
            <FontAwesomeIcon icon={faDownload} /> Télécharger le Flyer
          </button>
        </div>

        {/* Right Image with Flyer Overlay */}
        <div className="relative">
          <img
            src={coverImage}
            alt="Assistant en Cabinet Médical"
            className="rounded-xl shadow-xl object-cover w-full h-full"
          />
          <img
            src={flyerImages}
            alt="Flyer"
            className="absolute bottom-4 right-4 w-32 h-32 border-4 border-white rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AssistantEnCabinetMedicalHero;
