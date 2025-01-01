import React from "react";
import "./Navbar.css";
import ShopPage from "/ShopPage.jsx";
import Hero from "../HomePage/Hero.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
// import Navbar from 'react-bootstrap/Navbar';

export default function Navbar() {
  return (
    <>
      
        <Router>
          <div>
            <nav className="flex">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
              </ul>
            </nav>
            {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
            <Routes>
              <Route path="/shop" element={<Shop />} />
              <Route path="/" element={<Hero />} />
            </Routes>
          </div>
        </Router>
      
    </>
  );
}

{
  /* return (
  <>

  <div className="navbar justify-content-end  align-items-center my-1">

       <div className="d-flex gap-5 align-items-center">
           <i className="fa-solid fa-magnifying-glass icon"></i>
           <i className="fa-solid fa-cart-shopping icon"></i>
           <i className="fa-solid fa-heart icon"></i>
       </div
     </div>
   </> */
}
