import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import "./App.css";
import Hero from "./components/HomePage/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Section1 from "./components/HomePage/Section1.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Section2 from "./components/HomePage/Section2.jsx";
import Section3 from "./components/HomePage/Section3.jsx";
import Blog from "./components/HomePage/Blog.jsx";
import Homesocials from "./components/HomePage/Homesocials.jsx";
import Footer from "./components/HomePage/Footer.jsx";

function App() {
  
  
 
  let createInput=()=>{
    return (
      <input type="text" placeholser="Enter Your Feedback"/>
    )
    // let Input = document.createElement('input')
    // Input.setAttribute("placeholder","Enter your Feedback")
    // let div = document.createElement('div')
    // div.appendChild(Input)
  }
  
    
    

   

  // createInput()
  
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
      <div className="w-[100%] relative">
        <img src="src/assets/Group 43.png" alt="" className="w-100 " />
        <div className="absolute bottom-[30%] left-[40%]">
          {" "}
          <Homesocials />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-5 m-[30px] lg:m-[90px]">
        <div className="flex place-items-center mr-5">
          <p className="text-slate-500">
            {" "}
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>

        <Footer
          head="Link"
          firstLink="Home"
          secLink="Shop"
          thdLink="About"
          fthLink="Contact"
        />
        <Footer
          head="Help"
          firstLink="Payment Options"
          secLink="Returns"
          thdLink="Privacy Policies"
        />
       
   
       
        <Footer head="Newsletter" firstLink={createInput()} />
      </div>

      {/* //shop page start */}
      <div className="w-[100%] relative">
        <img src="/Rectangle 1.png" alt="" className="w-[100%] mt-[5em] " />
        <img
          src="/Meubel House_Logos-05.png"
          alt=""
          className="absolute bottom-[50%] left-[50%]"
        />
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
