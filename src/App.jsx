import React from "react";
import { Route, Routes } from "react-router-dom";
// import "./App.css";
import Hero from "./components/HomePage/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Section1 from "./components/HomePage/Section1.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Section2 from "./components/HomePage/Section2.jsx";
import Section3 from "./components/HomePage/Section3.jsx";
import Blog from "./components/HomePage/Blog.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <div className="my-5 p-3 flex flex-wrap justify-around ">
        <Blog
          src="src/assets/Rectangle 13.png"
          text="Going all-in with millennial design"
          time="5min"
          date="12th Oct 2022"
        />
        <Blog
          src="src/assets/Rectangle 14.png"
          text="Going all-in with millennial design"
          time="20min"
          date="24th Oct 2022"
        />
        <Blog
          src="src/assets/Rectangle 15.png"
          text="Going all-in with millennial design"
          time="15min"
          date="30th Oct 2022"
        />
      </div>
      {/* //shop page end */}
      <div className="w-[100%] relative">
        <img
          src="/Rectangle 1.png"
          alt=""
          className="w-[100%] mt-[5em] "
        />
        <img src="/Meubel House_Logos-05.png" alt="" className="absolute bottom-[50%] left-[50%]" />
      </div>

      <div className=" my-5 px-[50px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[40px] ">
        <Shop src="/Mask group (6).png" text="Rs. 258,200.00" />
        <Shop src="/Mask group (7).png" text="Rs. 225,000.00" />
        <Shop src="/Mask group (8).png" text="Rs. 200,000.00" />
        <Shop src="/Mask group (9).png" text="Rs. 244,000.00" />
        <Shop src="/Mask group (10).png" text="Rs. 115,000.00" />
        <Shop src="/Mask group (11).png" text="Rs. 258,800.00" />
        <Shop src="/Mask group (12).png" text="Rs. 251,000.00" />
        <Shop src="/Mask group (13).png" text="Rs. 115,000.00" />
        <Shop src="/Mask group (14).png" text="Rs. 258,800.00" />
        <Shop src="/Mask group (15).png" text="Rs. 251,000.00" />
        <Shop src="/Mask group (16).png" text="Rs. 258,200.00" />
        <Shop src="/Mask group (17).png" text="Rs. 244,000.00" />
        <Shop src="/SJP_0825  1.png" text="Rs. 258,800.00" />
        <Shop src="/Round coffee table_color 2 1.png" text="Rs. 258,800.00" />
        <Shop src="/Reclaimed teak Sideboard 1.png" text="Rs. 258,200.00" />
        <Shop src="/Mask group (19).png" text="Rs. 115,000.00 " />
      </div>
      {/* //shop page end */}
    </>
  );
}

export default App;
