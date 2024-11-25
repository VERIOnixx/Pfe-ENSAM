import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo">Morosoft</Link>
      <div className="menu">
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/add-user">New_User</Link></li>
          <li><Link to="/help">Help</Link></li>
          <li><Link to="/about">About Us</Link></li>
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
