import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
 

      <div className="navbar justify-content-end ">
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
        <div className="d-flex gap-5 align-items-center">
         <input type="text" placeholder="search"className="border rounded"/>
            <i className="fa-solid fa-magnifying-glass icon"></i>
            <i className="fa-solid fa-cart-shopping icon"></i>
            <i className="fa-solid fa-heart icon"></i>
        </div>
        <div className="flex gap-5"></div>
      </div>
    </>
  );
}

export default Navbar;
