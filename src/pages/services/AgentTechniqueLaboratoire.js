import React from 'react'
import AgentTechniqueInfo from '../../components/utils/AgentTechniqueInfo'
import AgentTechniqueDetails from '../../components/utils/AgentTechniqueDetails'
import AgentTechniqueHero from '../../components/utils/AgentTechniqueHero'
import ContactSection from '../../components/ContactSection'
const AgentTechniqueLaboratoire = () => {
  return (
    <div>
      <AgentTechniqueInfo />
      <div className="flex flex-col items-center justify-center py-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4 text-green-800">À propos de la formation</h2>
        <p className="text-lg text-center max-w-2xl px-4 text-gray-600">
          La formation d'Agent Technique de Laboratoire vous prépare à devenir un professionnel clé dans le domaine du diagnostic médical. Vous apprendrez à réaliser des analyses biologiques, à gérer les équipements de laboratoire et à assurer la qualité des résultats.
        </p>
    
      </div>
      <AgentTechniqueDetails/>
      <AgentTechniqueHero/>
      <ContactSection />
    </div>
  )
}

export default AgentTechniqueLaboratoire