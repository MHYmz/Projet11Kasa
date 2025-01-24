import React, { useEffect, useState } from "react";
import "./HomeArray.scss";
import Flat from "../Flat/Flat.jsx";
import { data } from "react-router-dom";



function HomeArray() {
const [flats, setFlats] = useState ([]); // Stocke les appartements récupérés

useEffect(() => {
  fetchData(); // Récupère les données une fois au montage
}, []);

function fetchData() {
  fetch("/DataKasa.json")
  .then((response) => response.json()) // Convertit la réponse en JSON
  .then((data) => setFlats(data)) // Met à jour l'état avec les données récupérées
  .catch(console.error); // Gère les erreurs
}

  return (
      <div className="grid">
        {flats.map((flat, index) => (
            <Flat 
            key={index} // Nécessaire pour identifier chaque élément
            title={flat.title} 
            imgLink={flat.cover}/> 
        ))}
      </div>   
  )
}
export default HomeArray