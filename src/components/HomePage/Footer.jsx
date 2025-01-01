import React, { useState } from "react";

export default function Footer() {
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
  let array = [
    {
      head: "Link",
      firstLink: "Home",
      secLink: "Shop",
      thdLink: "About",
      fthLink: "Contact",
      key: 0,
    },
    {
      head: "Help",
      firstLink: "Payment Options",
      secLink: "Returns",
      thdLink: "Privacy Policies",
      key: 1,
    },
    {
      head: "Newsletter",
      firstLink: createInput(),
      key: 2,
    },
  ];
  
  return (
    <>
      {array.map(({head,firstLink,secLink,thdLink,fthLink,key}) => (
        <div key={key}>
          <ul className="p-4 ">
            <a href="" className="hover:no-underline ">
              <li className="text-slate-500">{head}</li>
            </a>
            <a href="" className="hover:no-underline">
              <li className="mt-4 text-black font-[600]">{firstLink}</li>
            </a>
            <a href="" className="hover:no-underline">
              <li className="mt-4 text-black font-[600]">{secLink}</li>
            </a>
            <a href="" className="hover:no-underline">
              <li className="mt-4 text-black font-[600]">{thdLink}</li>
            </a>
            <a href="" className="hover:no-underline">
              <li className="mt-4 text-black font-[600]">{fthLink}</li>
            </a>
          </ul>
        </div>
      ))}
    </>
  );
}
