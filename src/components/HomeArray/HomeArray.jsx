import React, { useEffect, useState } from "react";
import "./HomeArray.scss";
import Flat from "../Flat/Flat.jsx";



function HomeArray() {
const [flats, setFlats] = useState ([]); // Stocke les appartements récupérés

useEffect(() => {
  fetchData(); // Récupère les données une fois au montage
}, []);

function fetchData() {
  fetch("/datakasa.json")
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
            imgLink={flat.cover}
            id={flat.id} />
        ))}
      </div>
  )
}
export default HomeArray