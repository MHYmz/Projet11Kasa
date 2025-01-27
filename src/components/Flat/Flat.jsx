import React from "react";
import "./flat.scss"
import { NavLink } from "react-router-dom";

function Flat(props) {
  return (
      <NavLink 
      to="/flatlink"  
      state={{ flatId: props.id}}
        > 
      <div className="flat-pictures">
      <img src={props.imgFlat} alt="Image Des Appartements"/>
        <div className="title">{props.title}</div>
        </div>
        </NavLink>
  );
}

export default Flat; 