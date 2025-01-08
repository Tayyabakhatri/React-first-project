import React from "react";
import "./Homepage.css";
import Footer from "./Footer";
import Blog from "./Blog"


function Hero() {
  return (
    <>
      {/* hero section */}
      <div className="hero p-0">
        <div className="grid  grid-cols-1 lg:grid-cols-2 place-items-center gap-4  ">
          <div className="grid place-items-center lg:pl-[100px]">
            <div className="lg:text-start pl-5">
              <p className=" mt-[50px]  font-bold text-[3rem] lg:text-[5rem] lg:font-semibold ">
                Rocket single seater
              </p>
              <button className="my-2 underline underline-offset-2">
                Shop Now
              </button>
            </div>
          </div>

          <div>
            <img src="/chair.png" alt="" className="w-100" />
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div>
        <p className="text-[3rem] text-center my-4">Top Picks For You</p>
      </div>
      <div>
        <p className="text-center text-gray-600	">
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor and table lights.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-[50px]">
        <div>
          {" "}
          {/* card 1 */}
          <div className="max-w-sm bg-white  ">
            <a href="#">
              <img
                class="rounded-t-lg w-[100%]"
                src="/Mask group (6).png"
                alt=""
              />
            </a>
            <div className="px-4">
              <p className="text-[20px]">Trenton modular sofa_3</p>
              <h3 className="font-semibold text-[2rem]">Rs. 25,000.00</h3>
            </div>
          </div>
        </div>
        <div>
          {" "}
          {/* card 2 */}
          <div className="max-w-sm bg-white  ">
            <a href="#">
              <img
                class="rounded-t-lg w-[100%]"
                src="/Mask group (7).png"
                alt=""
              />
            </a>
            <div className="px-4">
              <p className="text-[20px]">Trenton modular sofa_3</p>
              <h3 className="font-semibold text-[2rem]">Rs. 25,000.00</h3>
            </div>
          </div>
        </div>
        <div>
          {" "}
          {/* card 3 */}
          <div class="max-w-sm bg-white  ">
            <a href="#">
              <img
                class="rounded-t-lg w-[100%]"
                src="/Mask group (8).png"
                alt=""
              />
            </a>
            <div className="px-4">
              <p className="text-[20px]">Trenton modular sofa_3</p>
              <h3 className="font-semibold text-[2rem]">Rs. 25,000.00</h3>
            </div>
          </div>
        </div>
        <div>
          {" "}
          {/* card 4*/}
          <div class="max-w-sm bg-white  ">
            <a href="#">
              <img
                class="rounded-t-lg w-[100%]"
                src="/Mask group (9).png"
                alt=""
              />
            </a>
            <div className="px-4">
              <p className="text-[20px]">Trenton modular sofa_3</p>
              <h3 className="font-semibold text-[2rem]">Rs. 25,000.00</h3>
            </div>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className="section3">
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
      {/* blog section  */}
      <div className="my-5 p-3 flex flex-wrap  justify-around ">
        <Blog/>
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

export default Hero;
