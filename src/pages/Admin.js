import React from 'react'
import Adminpage from '../components/Blog/pages/AdminPage'
// import AdminPanel from '../components/Blog/AdminPanel'

import { Helmet } from "react-helmet";

const Admin = () => {
  return (
    <div>Admin
      <Helmet>
        <html lang="fr" />
        <title>Admin ITC Santé | Gestion centre de formation santé Cameroun</title>
        <meta name="description" content="Administration ITC Santé, centre de formation professionnelle en santé et école paramédicale à Yaoundé, Cameroun. Formation santé, études santé, diplôme paramédical, centre de formation médicale Cameroun." />
        <meta name="keywords" content="formation santé Cameroun, école paramédicale Cameroun, formation professionnelle santé Yaoundé, centre de formation médicale Cameroun, études santé Cameroun, institut de formation santé Cameroun, formation soins de santé Yaoundé, diplôme paramédical Cameroun, meilleure école santé Cameroun" />
        <meta property="og:title" content="Admin ITC Santé | Gestion centre de formation santé Cameroun" />
        <meta property="og:description" content="Administration ITC Santé, gestion des formations santé et paramédicales à Yaoundé, Cameroun." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ITC Santé" />
        <meta property="og:locale" content="fr_FR" />
        <link rel="canonical" href="https://www.itc-sante.com/admin" />
      </Helmet>
      {/* <AdminPanel/> */}
      <Adminpage />
    </div>
  )
}

export default Admin
