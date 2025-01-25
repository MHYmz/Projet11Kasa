import React, { useEffect, useState } from 'react';
import { InfoHabitat } from "../../components/InfoHabitat/InfoHabitat.jsx";
import { FlatPoster } from "../../components/FlatPoster/FlatPoster.jsx";
import { FlatInfo} from "../../components/FlatInfo/FlatInfo.jsx";
import { useLocation } from 'react-router-dom';

import "./FlatPage.scss";


function FlatPage() {
  const location = useLocation();
  const[home,setHome] = useState(null);
  
  useEffect(() => {
    if (location.state && location.state.flatId) {
      fetchFlatpageData();
    } else {
      console.error("Flat ID is missing in location state");
    }
  }, [location.state]);


function fetchFlatpageData() {
  fetch("/datakasa.json")
  .then((response) => response.json()) 
  .then((flats) => {
    console.log(flats);
    const flat = flats.find((flat) => flat.id === location.state.flatId);
    if (!flat) {
      console.error("Appartement non trouvé pour l'ID:", location.state.flatId);
      return;
    }
    console.log(flat)
    setHome(flat);
  })
  .catch(console.error); 
}

if (! home) {
  return <div>En cours de chargement!</div>
}

  return (
    <div className='flat-container'>
      <FlatPoster imgLink={home.cover}/>
      <FlatInfo home={home} tags={home.tags || []}/>
      <div className='apt-container'>
          <InfoHabitat title='Description' text={home.description}/>
          <InfoHabitat title='Équipements' 
           text={
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
          {home.equipments.map((eq, index) => (
          <li key={index}>{eq}</li>
          ))}
        </ul>
          }
        />
        </div>
      </div>
  );
}
export default FlatPage