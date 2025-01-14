import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";



function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src="logo.png" alt="Logo Kasa" />
      </div>
      <Link to="/">Accueil</Link>
      <Link to="/about">À propos</Link>
    </nav>
  );
} 

export default Navbar;