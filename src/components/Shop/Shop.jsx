import React from "react";


export default function Shop(props) {
  return (
    <>
    
      {/* card 1 */}
      <div className="max-w-sm bg-white sm:p-2 md:p-4 ">
        <a href="#">
          <img class="rounded-t-lg w-[100%]" src={props.src} alt="" />
        </a>
        <div className="px-2 pb-4">
          <p className="text-[20px]">Trenton modular sofa_3</p>
          <h3 className="font-semibold text-[2rem]">{props.text}</h3>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
