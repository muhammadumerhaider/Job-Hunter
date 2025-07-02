import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Job Hunter</Link>
      </div>
      <div className="nabar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favorites" className="nav-link">
          Favorites
        </Link>
      </div>
    </nav>
  );
}
