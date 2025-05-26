import React from "react";
import ContactSection from "../components/ContactSection";
import ContactBooking from "../components/home/ContactBooking";
import { FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="mx-[34px] text-body">
      <ContactBooking />
      <ContactSection />

      <div className="my-[100px] text-green-800">
        <div className="relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7968675770993!2d11.572237!3d3.846017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTAnNDUuNyJOIDExwrAzNCcyMC4xIkU!5e0!3m2!1sfr!2scm!4v1716460916789!5m2!1sfr!2scm"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ITC Santé - Centre de Formation Professionnelle"
            className="rounded-lg shadow-lg"
          ></iframe>

          {/* Location Label Overlay */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg max-w-xs">
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-green-800 text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-green-800">ITC Santé</h3>
                <p className="text-sm text-gray-600 leading-tight">
                  Nkouabang 10e Arrêt<br />
                  Carrefour CEF<br />
                  Yaoundé, Cameroun
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
