import React from "react";

export default function Section3() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
        <div>
          <img src="/Mask group (16).png" alt="" className="w-100 h-100" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[2em] text-center">New Arrivals</p>
          <h1 className="text-[3em] font-bold text-center">Asgaard sofa</h1>
          <div className="flex justify-center mt-3 ">
            <button className="border-1 border-black py-2 px-[60px]">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
