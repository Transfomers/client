import React, { useState } from "react";
import Calendar from "react-calendar";
import GetInTouch from "../../assets/images/contact1.jpg";
import { FaClock } from "react-icons/fa";
import "react-calendar/dist/Calendar.css";
 // Use your image

function ContactBooking() {
  const [date, setDate] = useState(new Date());

  // Format date for Google Calendar (YYYYMMDD)
  const formatDate = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}${m}${d}`;
  };

  // Google Calendar booking link (adjust as needed)
  const googleCalUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?dates=${formatDate(date)}/${formatDate(date)}&text=Rendez-vous%20ITC%20Sant%C3%A9`;

  return (
    <div className="mx-[34px] text-body">

      <div className="my-[100px] grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Calendar Section */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-green-200">
          <h2 className="text-green-800 text-2xl font-bold mb-2 flex items-center gap-2">
            <span className="text-2xl">🕒</span> Heures d'ouverture
          </h2>
          <p className="mb-2 text-green-700 font-semibold">
            Nous sommes <span className="text-green-600">actuellement ouverts ✔</span>
          </p>
          <p className="mb-4 text-gray-700">Lundi - Samedi | 7h30 à 20h00</p>
          <Calendar
            onChange={setDate}
            value={date}
            className="mb-4"
            tileClassName={({ date, view }) =>
              view === "month" && date.toDateString() === new Date().toDateString()
                ? "bg-green-200"
                : null
            }
          />
          <a
            href={googleCalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-green-800 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-green-800 transition"
          >
            Réserver un RDV
          </a>
        </div>

        {/* Info Card Section */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-green-200">
          <img
            src={GetInTouch}
            alt="Nos Formations"
            className="rounded-lg w-full max-h-60 object-cover mb-4"
          />
          <h3 className="text-green-800 text-xl font-bold mb-2">Nos Formations</h3>
          <p className="text-gray-700 text-center">
            Vous avez une question sur nos formations, modalités d'inscription ou rendez-vous ? 
            Notre équipe est à votre écoute pour vous répondre rapidement et efficacement. 
            N'hésitez pas à nous contacter !
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactBooking;