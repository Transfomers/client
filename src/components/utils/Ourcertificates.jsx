import React from "react";

const CertificationNotice = () => (
  <div className="bg-yellow-400 rounded-xl shadow-xl p-8 max-w-md mx-auto flex flex-col items-start justify-center"
       style={{ minWidth: 350 }}>
    <h2 className="text-2xl font-bold mb-2 text-black">Certifications Reconnues</h2>
    <p className="text-white text-base mb-6">
      Nos diplômes sont accrédités par le Ministère de la Santé et reconnus à l'échelle internationale.
    </p>
    <a
      href="#"
      className="bg-green-800 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-green-700 transition"
    >
      PLUS D'INFORMATIONS
    </a>
  </div>
);

export default CertificationNotice;