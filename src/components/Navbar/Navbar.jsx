import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    
  
     <div className="navbar justify-content-center">
     <div className="m-4">
        <ul className="nav justify-content-center gap-4">
          <li className="nav-item">
            <a aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#">Shop</a>
          </li>
          <li className="nav-item">
            <a href="#">About</a>
          </li>
          <li className="nav-item">
            <a href="#" tabindex="-1" aria-disabled="true">
              Contact
            </a>
          </li>
        </ul>
      </div>
     </div>
    
  );
}

export default Navbar;
