import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
 

      <div className="navbar justify-content-end  align-items-center my-1">
       
        <div className="d-flex gap-5 align-items-center">
      
            <i className="fa-solid fa-magnifying-glass icon"></i>
            <i className="fa-solid fa-cart-shopping icon"></i>
            <i className="fa-solid fa-heart icon"></i>
        </div>
       
      </div>
    </>
  );
}

export default Navbar;
