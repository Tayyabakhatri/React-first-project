import React from "react";
import "./Homepage.css";

export default function Blog({ src, text, date, time }) {
  // console.log(props);

  return (
    <>
      <div className="card border-none">
        <img className="card-img-top" src={src} alt="Card image cap" />
        <div className="card-body text-center ">
          <p className="card-text flex flex-column">
            {text}
            <a href="">
              <button className=" border-b-2 border-black mt-1 font-bold">Read more</button>
            </a>
            <div className="flex justify-center gap-4 mt-2">
              <div>
                <i className="fa-regular fa-clock icon"></i>
                {time}
              </div>
              <div>
                <i class="fa-regular fa-calendar-days icon"></i>
                {date}
              </div>
            </div>
          </p>
        </div>
      </div>
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
