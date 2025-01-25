import React, { useState } from 'react';
import "./InfoHabitat.scss";
import "../../Pages/FlatPage/FlatPage.scss";



export function InfoHabitat(props) {
        const [isOpen, setIsOpen] = useState (false);

        const toogleText = () => {
            setIsOpen((prev) => !prev);
        };

    return (
        <div className="apt-container">
            <div className="apt-info">
                <p className='apt-legend' onClick={toogleText}>
                    <span>{props.title}</span>
                    <i className={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} ></i>
                </p>
               {isOpen &&  <p className='apt-text' style={{color:'black'}}  >{props.text}</p>}
            </div>
        </div>
    );
}

export default InfoHabitat