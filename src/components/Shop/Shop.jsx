import React from "react";
import { useState } from "react";
import "../OrderPage/Order.css";
import { Link ,Route,Routes} from "react-router-dom";
import Order from '../OrderPage/Order.jsx'

function Shop() {
  let array = [
    { src: "/Mask group (16).png", text: 200000, key: 0 },
    { src: "/Mask group (15).png", text: 250000, key: 1 },
    { src: "/Mask group (14).png", text: 300000, key: 2 },
    { src: "/Mask group (17).png", text: 150000, key: 3 },
    { src: "/Mask group (13).png", text: 350000, key: 4 },
    { src: "/Mask group (12).png", text: 400000, key: 5 },
    { src: "/Mask group (11).png", text: 450000, key: 6 },
    { src: "/Mask group (10).png", text: 500000, key: 7 },
    { src: "/Mask group (9).png", text: 550000, key: 8 },
    { src: "/Mask group (8).png", text: 600000, key: 9 },
    { src: "/Mask group (7).png", text: 650000, key: 10 },
    { src: "/Mask group (6).png", text: 700000, key: 11 },
    { src: "/Mask group (19).png", text: 750000, key: 12 },
    { src: "/Reclaimed teak Sideboard 1.png", text: 800000, key: 13 },
    { src: "/Round coffee table_color 2 1.png", text: 850000, key: 14 },
    { src: "/SJP_0825  1.png", text: 900000, key: 15 },
  ];

  // const [selectedProduct, setSelectedProduct] = useState([]);
  // function productDetail(product) {
  //   setSelectedProduct(product);
  //   console.log(product);
  // }
  return (
    <>
      <Routes>
        <Route path="/product/:id" element={<Order />} />
      </Routes>
      {array.map((data) => (
        <div key={data.key} className="max-w-sm bg-white sm:p-2 md:p-4  ">
          <a href="#">
            <img
              class="rounded-t-lg w-[100%]"
              src={data.src}
              alt=""
              // onClick={() => productDetail(data)}
            />
          </a>
          <div className="px-2 pb-4">
            <p className="text-[20px]">Trenton modular sofa_3</p>
            {/* <h3 className="font-semibold text-[2rem]">{data.text}</h3> */}
            <div>
              <Link to={`/data/${data.id}`}>view Detail</Link>
            </div>
            <a
              href="#"
              className="inline-flex  items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
      ))}
    </>
  );
}
export default Shop;
