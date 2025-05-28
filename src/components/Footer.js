import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaTiktok, FaWhatsapp } from "react-icons/fa6";
import Logo from "../assets/logos/logo.png";


const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-14 px-6 flex flex-col min-h-screen mt-[100px]">
      {/* Newsletter Section */}
      <div className="max-w-8xl w-[96%] mx-auto">
        <div className="flex flex-row justify-between max-md:flex-col items-center max-md:items-start">
          <div className="flex flex-col font-body pr-3">
            <h4 className="text-lg font-semibold">Restez Informé</h4>
            <p>
              Abonnez-vous à notre newsletter pour les dernières actualités médicales,<br />
              innovations en santé, et opportunités de formation. 🩺
            </p>
          </div>
          <div className="relative max-sm:w-full max-md:w-full">
            <input
              type="email"
              placeholder="Entrez votre email"
              style={{ background: "#D9D9D98C" }}
              className="p-4 pr-20 rounded-full font-body placeholder-gray-700 max-md:mt-4 w-full"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 max-sm:top-[44px] max-md:top-[44px] bg-yellow-400 text px-4 py-3 rounded-full font-semibold">
              S'abonner
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-4 gap-8 mt-[50px] w-[96%] mx-auto font-body max-sm:grid-cols-1 max-w-8xl">

        {/* Formations Column */}
        <div>
          <h5 className="font-semibold pb-5 text-[20px]">Formations</h5>
          <ul className="space-y-3 text-[14px]">
            <li>
              <a href="/auxiliaireDeVie" className="hover:underline">

                Auxiliaire De Vie              </a>
            </li>
            <li>
              <a href="/secretariatMedical" className="hover:underline">
                Secrétariat Médical
              </a>
            </li>
            <li>
              <a href="/assistantEnCabinetMedical" className="hover:underline">
                Assistant En Cabinet Médical
              </a>
            </li>
            <li>
              <a href="/delegueMedical" className="hover:underline">
                Délegué Médical
              </a>
            </li>
            <li>
              <a href="/vendeurPharmacie" className="hover:underline">
                Vendeur En Pharmacie              </a>
            </li>
            <li>
              <a href="/agentTechniqueLaboratoire" className="hover:underline">
                Aide Chimiste Biologiste              </a>
            </li>
          </ul>
        </div>

        {/* Institution Column */}
        <div>
          <h5 className="font-semibold pb-5 text-[20px]">Institution</h5>
          <ul className="space-y-3 text-[14px]">
            <li>
              <a href="/" className="hover:underline">
                Accueil
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                À Propos
              </a>
            </li>
            <li>
              <a href="/formations" className="hover:underline">
                Formations
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>

          </ul>
        </div>

        {/* Social Media Column */}
        <div>
          <h5 className="font-semibold pb-5 text-[20px]">Réseaux Sociaux</h5>
          <ul className="space-y-3 text-[14px]">
            <li>
              <a
                href="https://www.linkedin.com/company/itc-sant%C3%A9/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-2"
              >
                <FaLinkedin className="text-xl" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/651245653"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-2"
              >
                <FaWhatsapp className="text-xl" />
                Whatsapp
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/share/hNHiPvAJWZTjsvxP/?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-2"
              >
                <FaFacebook className="text-xl" />
                Facebook
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/itc_sante_cameroun?igsh=MTF1aGVyZmNyNTN3YQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-2"
              >
                <FaInstagram className="text-xl" />
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@itcsant3?_t=ZS-8vbgt98kamd&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-2"
              >
                <FaTiktok className="text-xl" />
                TikTok
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/@laminutesante-h5t?si=iGkT-Dv0wnkuIu2a"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-2"
              >
                <FaYoutube className="text-xl" />
                YouTube - La Minute Santé
              </a>
            </li>
          </ul>
        </div>

        {/* Logo Column */}
        <div className="flex items-center justify-center">
          <img src={Logo} alt="ITC Santé Logo" className="h-24 w-auto" />
        </div>
      </div>

      {/* Copyright Section */}
      <div className="flex justify-center items-center w-full mt-auto py-6">
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} ITC Santé. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;