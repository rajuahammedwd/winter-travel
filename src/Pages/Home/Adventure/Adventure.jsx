import React from "react";
import style from "./Projects.module.css";

const Adventure = () => {
  return (
    <div className="mx-auto max-w-7xl mb-20">
      <div className="space-y-5 mb-20">
        <h2 className="text-3xl font-reenie font-bold text-[#5ca13e]">
          Dream Vacation Destination
        </h2>
        <h1 className="text-5xl font-bold">
          Plan the Trip of a Lifetime
          <br /> with Ease
        </h1>
        <p className="text-xl">
          Whether you're looking for a romantic getaway, a family-friendly
          adventure, or a solo journey to explore the world, a travel agency can
          provide you with a custom-tailored itinerary that exceeds your
          expectations.
        </p>
        <button
          className="btn font-bold bg-[#5ca13e] text-white hover:bg-[#5ca13e] transition-transform duration-300
            hover:scale-110"
        >
          More Info
        </button>
      </div>
      <div className="grid lg:grid-cols-4">
        <div className={`${style.projects}`}>
          <img
            src="https://i.ibb.co/bHBqSCL/i-parallax-07-destination-01.jpg"
            alt=""
            className={`${style.projects_image}`}
          />
          <div className={`${style.projects_title}`}>
            <div className="text-center">
              <h2 className="text-2xl mb-5">Greece</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div className={`${style.projects}`}>
          <img
            src="https://i.ibb.co/nr7s6S8/i-parallax-08-destination-02.jpg"
            alt=""
            className={`${style.projects_image}`}
          />
          <div className={`${style.projects_title}`}>
            <div className="text-center">
              <h2 className="text-2xl mb-5">Greece</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div className={`${style.projects}`}>
          <img
            src="https://i.ibb.co/Snh10Tt/i-parallax-09-destination-03.jpg"
            alt=""
            className={`${style.projects_image}`}
          />
          <div className={`${style.projects_title}`}>
            <div className="text-center">
              <h2 className="text-2xl mb-5">Greece</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div className={`${style.projects}`}>
          <img
            src="https://i.ibb.co/stYphLZ/i-parallax-10-destination-04.jpg"
            alt=""
            className={`${style.projects_image}`}
          />
          <div className={`${style.projects_title}`}>
            <div className="text-center">
              <h2 className="text-2xl mb-5">Greece</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adventure;
