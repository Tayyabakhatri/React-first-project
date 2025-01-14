import React from "react";
import Footer from "../HomePage/Footer";
import ShopFooter from "../Shop/ShopFooter";
import LoginRegistration from "./LoginRegistration";
function Myaccount() {
  return (
    <>
      <div>
        <img src="public/Group 78 (1).png" alt="" className="w-full" />
      </div>
    <div><LoginRegistration/></div>
      <div className="flex flex-wrap gap-4 justify-around footer py-5">
        <ShopFooter />
      </div>
      {/* Footer  */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-1 lg:p-5 m-[30px] lg:m-[90px]">
        <div className="flex place-items-center lg:mr-1">
          <p className="text-slate-500">
            {" "}
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Myaccount;
