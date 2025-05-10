import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import map from "../assets/icons/map-pin.svg";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const socialLinks = [
  {
    icon: FaFacebook,
    url: "https://web.facebook.com/profile.php?id=61574957061667",
    label: "Facebook"
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/itc_sante_cameroun?igsh=MTF1aGVyZmNyNTN3YQ==",
    label: "Instagram"
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/company/itc-santé/?viewAsMember=true",
    label: "LinkedIn"
  },
  {
    icon: FaTiktok,
    url: "https://www.tiktok.com/@itcsant3?_t=ZS-8vbgt98kamd&_r=1",
    label: "TikTok"
  },
  {
    icon: FaWhatsapp,
    url: "https://wa.me/237695957973",
    label: "Whatsapp"
  },
  {
    icon: FaYoutube,
    url: "https://www.youtube.com/@itcsante",
    label: "YouTube"
  }
];

function ContactSection() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    
      const [loading, setLoading] = useState(false);
      const [sent, setSent] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
    
        const templateParams = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        };
    
        emailjs
          .send(
            "0_987654321", // Replace with your EmailJS service ID
            "0_123456789", // Replace with your EmailJS template ID
            templateParams,
            "Dt4VQmRfXVRbnZrE7" // Replace with your EmailJS public key
          )
          .then((response) => {
            setLoading(false);
            setSent(true);
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              message: "",
            });
          })
          .catch((error) => {
            setLoading(false);
          });
      };
    

  return (
    <>
      <div className="flex justify-center gap-[100px] max-sm:gap-[50px] max-md:gap-[100px] mt-[100px] max-md:flex-col max-md:items-center">
        <div className="flex flex-col ">
          <h3 className="text-[22px] font-semibold text-green-800 pb-2">Appelez-nous</h3>
          <p className="text-green-800">Notre équipe vous répond du lundi au Samedi de 08h à 20h</p>
          <h3 className="text-[16px] text-green-800 font-semibold">
            +237 695 957 973 <br />
            +237 653 954 542
          </h3>
          <h3 className="text-[22px] font-semibold pt-6 text-green-800">Réseaux sociaux</h3>
          <p className="text-green-800">
            Retrouvez ITC Santé sur nos réseaux officiels :
          </p>
          {/* links */}
          <div className="pt-5 flex flex-col gap-2 green-800">
            {socialLinks.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-green-800 pb-2 text-[16px] font-bold"
              >
                <Icon className="text-2xl text-green-800" />
                <span>{label}</span>
              </a>
            ))}
          </div>
          <h3 className="text-[22px] font-semibold pt-5 text-green-800">Visitez-nous</h3>
          <p className="text-green-800">Passez nous voir à notre bureau :</p>
          <h3 className="text-[18px] font-semibold pt-2 text-green-800 flex flex-row gap-2 items-center">
            <span>
              <img src={map} alt="map pin icon " />
            </span>
            ITC Santé, Yaoundé, Cameroun
          </h3>
        </div>
        <div className="">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg  w-full max-w-lg h-full "
          >
            {/* First and Last Name Row */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="">
                <label className="block text-sm font-semibold text-green-800 mb-1">
                  Prénom
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Prénom"
                  className="w-full p-2 border border-green-800 rounded-xl"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-green-800 mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Nom"
                  className="w-full p-2 border border-green-800 rounded-xl"
                />
              </div>
            </div>

            {/* Email Row */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-green-800 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-xl"
                placeholder="Veuillez entrer votre email"
              />
            </div>

            {/* Phone Number Row */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-green-800 mb-1">
                Numéro de téléphone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 border border-green-800 rounded-xl"
                placeholder="Entrez votre numéro"
              />
            </div>

            {/* Message Row */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-green-800 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-2 border border-green-800 rounded-xl"
                placeholder="Laissez-nous un message ..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center ">
              <button
                type="submit"
                className="bg-green-800 text-white py-2 px-4 w-full rounded-full hover:bg-yellow-400 hover:text-green-800 transition-colors"
              >
                Envoyer le message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactSection