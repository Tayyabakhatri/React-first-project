import React from "react";
import "./Order.css";

export default function Order() {
  //   async function funs() {
  //     await fetch ('https://dummyjson.com/RESOURCE/?limit=10&skip=5&select=key1,key2,key3',{
  //           method:'Get',

  //       })
  //       .then(response=>response.json())
  //       .then(data=>console.log(data))
        
  //       .catch(error=>console.log(error))
  //     }
  // funs()
  return (
    <div className="flex flex-wrap justify-evenly">
      <div className="w-[553px] h-[500px]">
        <div className="grid grid-rows-5 grid-flow-col">
          <div className="col-span-1 px-4 w-[
76px] h-[
80px]">
            {" "}
            <img
              src="src/assets/Rectangle 14.png"
              alt=""
              className="w-[76px] h-[80px]"
            />
          </div>
          <div className="col-span-1 px-4 w-[
76px] h-[
80px]">
            {" "}
            <img
              src="src/assets/Rectangle 14.png"
              alt=""
              className="w-[76px] h-[80px]"
            />
          </div>
          <div className="col-span-1 px-4 w-[
76px] h-[
80px]">
            {" "}
            <img
              src="src/assets/Rectangle 14.png"
              alt=""
              className="w-[76px] h-[80px]"
            />
          </div>
          <div className="col-span-1 px-4 w-[
76px] h-[
80px]">
            {" "}
            <img
              src="src/assets/Rectangle 14.png"
              alt=""
              className="w-[76px] h-[]80px]"
            />
          </div>

          <div className="row-span-5 w-100  px-4 w-[423px] h-[500px]">
            <img src="src/assets/Rectangle 14.png" alt="" className="w-[481px] h-[391pxpx]" />
          </div>
        </div>
      </div>
      <div className="w-[606.01px] h-[730.87px] p-4">
        <h1 className="font-[400] text-[42px] leading-[63px]">Asgaard sofa</h1>
        <p className="font-[500] text-[24px] text-slate-500">Rs. 250,000.00</p>
        <p
          className="font-[400] text-[13px] leading-[
19.5px] mb-5"
        >
          Setting the bar as one of the loudest speakers in its class, the
          Kilburn is a compact, stout-hearted hero with a well-balanced audio
          which boasts a clear midrange and extended highs for a sound.
        </p>
        <p className="text-slate-500">Size</p>
        <div className="flex gap-4">
          <div className="yellowbg px-2 rounded w-[30px] h-[30px]">L</div>
          <div className="pinkbg px-2 rounded w-[30px] h-[30px]">XL</div>
          <div className="lightpinkbg px-2 rounded w-[30px] h-[30px]">XS</div>
        </div>
        <button className="border-2 border-black w-[215px] h-[64px] rounded-[15px] my-4">Add to Cart</button>
      </div>
    </div>
  );
}
