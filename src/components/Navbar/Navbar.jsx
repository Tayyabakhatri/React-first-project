import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
 

      <div className="navbar justify-content-center ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" m-4">
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
            <i className="fa-solid fa-magnifying-glass icon"></i>
            <i className="fa-solid fa-cart-shopping icon"></i>
            <i className="fa-solid fa-heart icon"></i>
          </ul>
        </div>
        <div className="flex gap-5"></div>
      </div>
    </>
  );
}

export default Navbar;
