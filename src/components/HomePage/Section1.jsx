import React from "react";

function Section1() {
  return (
    <div className=" grid  grid-cols-1 lg:grid-cols-2 place-items-center gap-4 ">
      <div className="bg-[ #fbebb5] hover:bg-[#faf4f4] ease-in duration-200 p-5">
        <img
          src="/Mask group (5).png"
          alt=""
          className=" w-full h-auto"
        />
        <p className="text-[40px] text-start font-semibold py-2"> Side table</p>
        <p className="underline underline-offset-2 text-[20px] text-start py-2">View More</p>
      </div>
      <div className="bg-[ #fbebb5] hover:bg-[#faf4f4] ease-in duration-200 p-5">
        <img
          src="/Cloud_sofa_three_seater_+_ottoman_3_1-removebg-preview (1).png"
          alt=""
          className="bg-[ #fbebb5] hover:bg-[#faf4f4] ease-in duration-200 w-[500px] h-auto"
        />
        <p className="text-[40px] text-start font-semibold py-2"> Side table</p>
        <p className="underline underline-offset-2 text-[20px] text-start py-2">View More</p>
      </div>
    </div>
  );
}

export default Section1;
