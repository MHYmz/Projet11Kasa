import React from 'react';
import "./InfoHabitat.scss";
import "../../Pages/FlatPage/FlatPage.scss";



export function InfoHabitat(props) {
    return (
        <div className="apt-container">
            <div className="apt-info">
                <p className='apt-legend'>
                    <span>{props.title}</span>
                    <i className="fa-solid fa-chevron-up"></i>
                </p>
                <p className='apt-text'>{props.text}</p>
            </div>
        </div>
    );
}

export default InfoHabitat