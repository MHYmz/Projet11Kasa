import React from "react";
import "./flat.css"
import { Link } from "react-router-dom";

function Flat() {
  return (
    <div className="flat">
      <Link to="/flat">
        <div className="title">Titre de la <br/>location</div> 
        </Link>
        </div>
  );
}

export default Flat; 