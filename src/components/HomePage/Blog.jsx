import React from "react";
import "./Homepage.css";

export default function Blog({ src, text, date, time }) {
  let array = [
    {
      src: "/Rectangle 13.png",
      text: "Going all-in with millennial design",
      time: "5min",
      date: "12th Oct 2022",
    },
    {
      src: "/Rectangle 14.png",
      text: "Going all-in with millennial design",
      time: "20min",
      date: "24th Oct 2022",
    },
    {
      src: "/Rectangle 15.png",
      text: "Going all-in with millennial design",
      time: "15min",
      date: "30th Oct 2022",
    },
  ];

  return (
    <>
      {array.map((data) => (
        <div className="card border-none">
          <img className="card-img-top" src={data.src} alt="Card image cap" />
          <div className="card-body text-center ">
            <p className="card-text flex flex-column">
              {data.text}
              <a href="">
                <button className=" border-b-2 border-black mt-1 font-bold">
                  Read more
                </button>
              </a>
              <div className="flex justify-center gap-4 mt-2">
                <div>
                  <i className="fa-regular fa-clock icon"></i>
                  {data.time}
                </div>
                <div>
                  <i className="fa-regular fa-calendar-days icon"></i>
                  {data.date}
                </div>
              </div>
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
// <>
{
  /* <div>
        <p>Our Blogs</p>
        <p>Find a bright ideal to suit your taste with our great selection</p>
      </div> */
}

// </>
