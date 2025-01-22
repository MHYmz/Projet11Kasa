import React from 'react'

function FlatPage() {
  return (
    <div className='flat-container'>
      <div>
        <img src="/public/flat.png" alt="rApartment view" />
      </div>
      <div className='flat-info' >
      <h1> Cozy loft ont the Canal Saint-Martin</h1>
      <h2>Paris, Île-de-France</h2>
          <p>Cozy</p>
          <p>Canal</p>
          <p>Paris 10</p>
          </div>
          <div className='host-details'>
            <h3>Alexandre Dumas</h3>
            <div className='rating'>
              <span>⭐️</span>
              <span>⭐️</span>
              <span>⭐️</span>
              <span>⭐️</span>
              <span>⭐️</span>
            </div>
          </div>
          <div className="apt-info">
            <p>Description</p>
            <p>Cet appartement lumineux et cosy dispose d'un lit spacieux, d'une grande fenêtre pour la lumière naturelle et d'un téléviseur moderne. 
               La climatisation assure un confort optimal. Un meuble élégant avec théière et tasses, ainsi qu'un petit canapé et une table, créent 
               une atmosphère accueillante pour se détendre.
            </p>
          </div>
          <div className="apt-info">
            <p>Description</p>
            <p>Cet appartement lumineux et cosy dispose d'un lit spacieux, d'une grande fenêtre pour la lumière naturelle et d'un téléviseur moderne. 
               La climatisation assure un confort optimal. Un meuble élégant avec théière et tasses, ainsi qu'un petit canapé et une table, créent 
               une atmosphère accueillante pour se détendre.
            </p>
          </div>
        </div>
  )
}
export default FlatPage
