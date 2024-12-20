import React from "react";
import "./Shop.css";

export default function ShopFooter({heading,text}) {
  return (
    <>
      <div>
        <a
          href="#"
          class="block max-w-sm p-6  "
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
           {heading}
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            {text}
          </p>
        </a>
      </div>
    </>
  );
}
