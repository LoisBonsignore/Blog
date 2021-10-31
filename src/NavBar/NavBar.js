import "./NavBar.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavBar() {
  return (
    
      <nav className="navBar-container">
        <h1>Mon Blog</h1>
        <div className="navBar-menu">
          
              <Link to="/">
                  <span className="text-menu">Accueil</span>
              </Link>

              <Link to="/Form">
                  <span className="text-menu">Ecrire un article</span>
                  </Link>
            
              <Link to="/Contact">
                    <span className="text-menu">Contact</span>
              </Link>
           
        </div>
      </nav>
    
  );
}

export default NavBar;
