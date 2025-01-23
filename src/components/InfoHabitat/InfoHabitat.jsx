import React from 'react';
import "./InfoHabitat.scss";
import "../../Pages/FlatPage/FlatPage.scss";



export function InfoHabitat() {
    return (
        <div className="apt-container">
            <div className="apt-info">
                <p className='apt-legend'>
                    <span>Description</span>
                    <i className="fa-solid fa-chevron-up"></i>
                </p>
                <p className='apt-text'>
                    Cet appartement lumineux et cosy dispose d'un lit spacieux, d'une grande fenêtre pour la lumière naturelle et d'un téléviseur moderne.
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
    );
}

export default InfoHabitat