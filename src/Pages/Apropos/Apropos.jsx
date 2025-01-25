import React from 'react';
import "./Apropos.scss";
import InfoHabitat from "../../components/InfoHabitat/InfoHabitat.jsx";

function Apropos() {
  return (
    <>
     <div className='Apropos-description'>
    <div className="Apropos"></div>
    <InfoHabitat 
    title="Fiabilité"  
    text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    />
    <InfoHabitat
     title="Respect"    
     text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre platerforme."    />
   
    <InfoHabitat 
    title="Service"    
    text="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."    />
    
    <InfoHabitat 
    title="Sécurité"   
    text="La sécurite est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet de vérifier que les standars sont bien respectés. Nous organisons des ateliers sur la sécurité domestique pour nos hôtes."    />
    
    </div>
    </>
  );
}

export default Apropos;