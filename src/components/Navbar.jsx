import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src="logo.png" alt="Logo Kasa" />
      </div>
      <div>Accueil</div>
      <div>À propos</div>
    </nav>
  );
} 

export default Navbar;