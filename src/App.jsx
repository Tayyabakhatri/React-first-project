import "/App.css";
import React, { useState, useEffect } from "react";
import { IoMoonSharp, IoMoonOutline } from "react-icons/io5";
// import React, { useState } from "react";
import Hero from "./components/HomePage/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Section1 from "./components/HomePage/Section1.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Section2 from "./components/HomePage/Section2.jsx";
import Section3 from "./components/HomePage/Section3.jsx";
import Blog from "./components/HomePage/Blog.jsx";
import Homesocials from "./components/HomePage/Homesocials.jsx";
import Footer from "./components/HomePage/Footer.jsx";
import ShopFooter from "./components/Shop/ShopFooter.jsx";
import Order from "./components/OrderPage/Order.jsx";
import Api from "./components/Api/Api.jsx";

function App() {
  //dark mood functionality start
  let [Lit, isLit] = useState(false);
  const changeMood = () => {
    isLit(!Lit);
    console.log(Lit);
  };
  useEffect(() => {
    if (Lit) {
      document.body.classList.add("dark");
    } else if (!Lit) {
      document.body.classList.remove("dark");
    }
  }, [Lit]);

  //dark mood functionality end
  let createInput = () => {
    return (
      <div className=" flex gap-5">
        <input
          type="text"
          placeholder="Enter Your Email address "
          className=" border-b-2 border-black"
        />
        <button className=" border-b-2 border-black">Subscribe</button>
      </div>
    );
  };

  return (
    <>
      <div className="d-flex gap-2 align-center py-3">
        <p>Coutomize</p>
        <label htmlFor="checkBox">
          <input
            onClick={changeMood}
            type="checkBox"
            id="checkBox"
            className="hidden"
          />
          {Lit ? <IoMoonSharp /> : <IoMoonOutline />}
        </label>
      </div>
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
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-1 lg:p-5 m-[30px] lg:m-[90px]">
        <div className="flex place-items-center lg:mr-1">
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

        <div className="flex flex-wrap">
          <Footer head="Newsletter" firstLink={createInput()} />
        </div>
      </div>
      <hr className="mx-5" />

      {/* //shop page start */}

      <div className="w-[100%] relative">
        <Navbar />
        <img src="/Rectangle 1.png" alt="" className="w-[100%] mt-[2em] " />
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
      <div className="flex flex-wrap gap-4 justify-around footer py-5">
        <ShopFooter
          heading="Free Delivery"
          text="For all oders over $50, consectetur adipim scing elit."
        />
        <ShopFooter
          heading="90 Days Return"
          text="If goods have problems, consectetur adipim scing elit."
        />
        <ShopFooter
          heading="Secure Payment"
          text="For all oders over $50, consectetur adipim scing elit."
        />
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
      <hr className="mx-5" />
      <div className="my-4 mx-5">2022 Meubel House. All rights reverved</div>

      {/* //shop page end */}
      <Order />
      <Api/>
    </>
  );
}

export default App;
