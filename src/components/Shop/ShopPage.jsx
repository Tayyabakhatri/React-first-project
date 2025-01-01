import React from "react";
import Footer from "../HomePage/Footer";
import ShopFooter from "./ShopFooter"
import Shop from "./Shop";

export default function ShopPage() {
  
  return (
    <>
       <div className=" my-5 px-[50px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[40px] ">
        <Shop />
      </div>
       <div className="flex flex-wrap gap-4 justify-around footer py-5">
        <ShopFooter/>
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
