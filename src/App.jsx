import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/HomePage/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Section1 from "./components/HomePage/Section1.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Section2 from "./components/HomePage/Section2.jsx";
import Section3 from "./components/HomePage/Section3.jsx";

function App() {
  return (
    <>
      {/* <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div> */}
      <div>
        <Navbar />
      </div>
      <div className="hero">
        <Hero />
      </div>
      <div className="pageStyle">
        <Section1 />
      </div>
      <Section2/>
      <div className="section3"><Section3/></div>
      <div>
        <Shop />
      </div>
    </>
  );
}

export default App;
