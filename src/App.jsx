import "/App.css";
import React, { useState, useEffect } from "react";
import { IoMoonSharp, IoMoonOutline } from "react-icons/io5";
import Navbar from "./components/Navbar/Navbar.jsx";


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

      {/* shop start*/}
    

      {/* <div className="flex flex-wrap gap-4 justify-around footer py-5">
        <ShopFooter />
      </div> */}
      
    </>
  );
}

export default App;
