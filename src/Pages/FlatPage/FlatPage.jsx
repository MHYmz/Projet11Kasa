import React, { useState } from 'react';
import "./FlatPage.scss";


function FlatPage() {
  const [activeStars, setActiveStars] = useState(3);

  const Star = ({ filled }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" width="24"height="24" viewBox="0 0 24 24"fill={filled ? "#ff6060" : "rgba(227, 227, 227, 1)"} stroke="none" >
      <path d="M12 .587l3.668 7.568L24 9.432l-6 5.858L19.335 24 12 19.771 4.665 24 6 15.29 0 9.432l8.332-1.277L12 .587z" />
    </svg>
  );

  return (
    <div className='flat-container'>
      <div className='flat-img'>
        <img src="/flat.png" alt="Apartment view" />
      </div>
      <div className='flat-info'>
      <div className='flat-details' >
      <h1 className='flat-h1'> Cozy loft ont the Canal Saint-Martin</h1>
      <h2 className='flat-h2'>Paris, Île-de-France</h2>
      <div className='flat-labels'>
          <span >Cozy</span>
          <span >Canal</span>
          <span >Paris 10</span>
          </div>
          </div>
          <div className='host-info'>
            <div className='host-details'>
            <h3>
              <span>Alexandre</span> 
              <span>Dumas</span>
              </h3>
            <div className='host-sticker'></div>
            </div>
            <div className='rating'>
              {[1,2,3,4,5].map((star) => (
               <span key={star} onClick={() => setActiveStars(star)}>
               <Star filled={star <= activeStars} />
             </span>
           ))}
            </div>
          </div>
          </div>
          <div className='apt-container'>
          <div className="apt-info">
            <p className='apt-legend'>
              <span>Description</span>
              <i className="fa-solid fa-chevron-up"></i>
              </p>
            <p className='apt-text'>Cet appartement lumineux et cosy dispose d'un lit spacieux, d'une grande fenêtre pour la lumière naturelle et d'un téléviseur moderne. 
               La climatisation assure un confort optimal. Un meuble élégant avec théière et tasses, ainsi qu'un petit canapé et une table, créent 
               une atmosphère accueillante pour se détendre.
            </p>
          </div>
          <div className="apt-info">
          <p className='apt-legend'>
              <span>Équipements</span>
              <i className="fa-solid fa-chevron-up"></i>
              </p>
              <div className='apt-text'>
              <p>Climatisation</p>
              <p>WiFi</p>
              <p>Cuisine équipée</p>
              </div>
          </div>
          </div>
        
        </div>
  )
}
export default FlatPage
