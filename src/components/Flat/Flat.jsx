import React from "react";
import "./flat.scss"
import { NavLink } from "react-router-dom";

function Flat() {
  return (
    <div className="flat">
      <NavLink to="/flat">
        <div className="title">Titre de la <br/>location</div> 
        </NavLink>
        </div>
  );
}

export default Flat; 