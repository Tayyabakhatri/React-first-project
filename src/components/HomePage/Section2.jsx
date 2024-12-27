import React from "react";

export default function Section2() {
  return (
    <>
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
    </>
  );
}
