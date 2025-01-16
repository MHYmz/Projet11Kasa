import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";



function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
      <div className="navbar_logo">
        <img src="logo.png" alt="Logo Kasa" />
      </div>
      </NavLink>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/about">À propos</NavLink>
    </nav>
  );
} 

export default Navbar;