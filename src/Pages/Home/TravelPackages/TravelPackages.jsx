import React from "react";

const TravelPackages = () => {
  return (
    <div className="mx-auto max-w-7xl mb-20">
      <div className="space-y-5 mb-20 text-center">
        <h2 className="text-3xl font-reenie font-bold text-[#5ca13e]">
          Clear Price
        </h2>
        <h1 className="text-5xl font-bold">Affordable Travel Packages</h1>
        <p className="text-xl text-[#837e7e]">
          We believe that everyone deserves to experience their dream vacation
          without breaking the bank.
          <br /> That's why we offer a price section on our website that
          features a range of affordable travel
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-10">
        <div
          className="text-center bg-[#5ca13e] px-10 py-20 rounded-3xl text-xl text-white"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <h2 className="font-bold mb-3">Half Board</h2>
          <p className="font-bold mb-3">
            <span className="text-7xl">$50</span> /day
          </p>
          <div className="space-y-3 mb-10">
            <p>Transfers from Airport</p>
            <p>Minimum 3 Star Hotel</p>
            <p>Alcoholic beverages</p>
            <p>Incl. Museum Tickets</p>
            <p>Meals in Restaurants</p>
          </div>
          <button
            className="btn font-bold bg-[#1C211E] text-white px-10 hover:bg-[#1C211E] border-none transition-transform duration-300
            hover:scale-110"
          >
            More Info
          </button>
        </div>
        <div
          className=" text-center bg-[#F3F8F6] px-10 py-20 rounded-3xl text-xl"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h2 className="font-bold mb-3">All Inclusive</h2>
          <p className="font-bold mb-3">
            <span className="text-7xl">$32</span> /day
          </p>
          <div className="space-y-3 mb-10">
            <p>Transfers from Airport</p>
            <p>Minimum 3 Star Hotel</p>
            <p>Alcoholic beverages</p>
            <p>Incl. Museum Tickets</p>
            <p>Meals in Restaurants</p>
          </div>
          <button
            className="btn font-bold bg-[#5ca13e] border-none px-10 text-white hover:bg-[#5ca13e] transition-transform duration-300
            hover:scale-110"
          >
            More Info
          </button>
        </div>
        <div
          className=" text-center bg-[#1C211E] px-10 py-20 rounded-3xl text-xl text-white"
          data-aos="flip-right"
          data-aos-duration="1500"
        >
          <h2 className="font-bold mb-3">Excursions Included</h2>
          <p className="font-bold mb-3">
            <span className="text-7xl">$62</span> /day
          </p>
          <div className="space-y-3 mb-10">
            <p>Transfers from Airport</p>
            <p>Minimum 3 Star Hotel</p>
            <p>Alcoholic beverages</p>
            <p>Incl. Museum Tickets</p>
            <p>Meals in Restaurants</p>
          </div>
          <button
            className="btn font-bold bg-[#5ca13e] border-none px-10 text-white hover:bg-[#5ca13e] transition-transform duration-300
            hover:scale-110"
          >
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelPackages;
