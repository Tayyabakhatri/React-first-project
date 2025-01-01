import React from "react";
import "./Shop.css";

export default function ShopFooter() {
  let array = [
    {
      heading: "Free Delivery",
      text: "For all oders over $50, consectetur adipim scing elit.",
    },
    {
      heading: "90 Days Return",
      text: "If goods have problems, consectetur adipim scing elit.",
    },
    {
      heading: "Secure Payment",
      text: "For all oders over $50, consectetur adipim scing elit.",
    },
  ];
  return (
    <>
      {array.map((data) => (
        <div>
          <a href="#" className="block max-w-sm p-6  ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.heading}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {data.text}
            </p>
          </a>
        </div>
      ))}
    </>
  );
}
