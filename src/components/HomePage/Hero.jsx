import React from "react";

function Hero() {
  return (
    <div className="grid  grid-cols-1 lg:grid-cols-2 place-items-center gap-4  ">
      <div className="grid place-items-center lg:pl-[100px]">
        <div className="lg:text-start pl-5">
        <p className=" mt-[50px]  font-bold text-[3rem] lg:text-[5rem] lg:font-semibold ">
            Rocket single seater
          </p>
          <button className="my-2 underline underline-offset-2">Shop Now</button>
        </div>
      </div>

      <div>
        <img src="/chair.png" alt="" className="w-100"/>
      </div>

    </div>
  );
}

export default Hero;
