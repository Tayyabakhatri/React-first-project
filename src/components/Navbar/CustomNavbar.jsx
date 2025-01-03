import React from "react";
import "./Navbar.css";
import ShopPage from "../Shop/ShopPage.jsx";
import Hero from "../HomePage/Hero.jsx";
import { IoHomeSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function CustomNavbar() {
  return (
    <>
      <Router>
        {/* <div>
          <nav className="flex">
            <ul>
              <li>
                <Link to="/">
                  <IoHomeSharp />
                </Link>
              </li>
              <li>
                <Link to="/shop">
                  <FaCartShopping />
                </Link>
              </li>
            </ul>
          </nav> */}
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand>Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Shop">
                Shop
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/" element={<Hero />} />
        </Routes>
        {/* </div> */}
      </Router>
    </>
  );
}