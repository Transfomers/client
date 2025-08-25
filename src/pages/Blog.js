import React from 'react'
import BlogPage from '../ui/BlogBlocITCSante'


import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <div>
      <Helmet>
        <html lang="fr" />
        <title>Blog ITC Santé | Actualités formation santé et paramédicale Cameroun</title>
        <meta name="description" content="Retrouvez les actualités, conseils et témoignages sur la formation professionnelle en santé, école paramédicale, études santé, diplôme paramédical à Yaoundé, Cameroun. Où se former en santé au Cameroun ?" />
        <meta name="keywords" content="formation santé Cameroun, école paramédicale Cameroun, formation professionnelle santé Yaoundé, études santé Cameroun, centre de formation médicale Cameroun, institut de formation santé Cameroun, formation soins de santé Yaoundé, diplôme paramédical Cameroun, meilleure école santé Cameroun" />
        <meta property="og:title" content="Blog ITC Santé | Actualités formation santé et paramédicale Cameroun" />
        <meta property="og:description" content="Conseils, témoignages et informations sur la formation professionnelle en santé, école paramédicale, études santé, diplôme paramédical à Yaoundé, Cameroun." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ITC Santé" />
        <meta property="og:locale" content="fr_FR" />
        <link rel="canonical" href="https://www.itc-sante.com/blog" />
      </Helmet>
      <BlogPage/>
    </div>
  )
}

export default Blog

