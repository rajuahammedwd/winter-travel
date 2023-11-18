import React from 'react';

const Info = () => {
    return (
      <div className="max-w-7xl mx-auto  mb-20 grid lg:grid-cols-2">
        <div className="space-y-5">
          <h2 className="text-3xl font-reenie font-bold text-[#5ca13e]">
            Dream Vacation Destination
          </h2>
          <h1 className="text-5xl font-bold">
            Plan the Trip of a Lifetime
            <br /> with Ease
          </h1>
          <p className="text-xl">
            Whether you're looking for a romantic getaway, a family-friendly
            adventure, or a solo journey to explore the world, a travel agency
            can provide you with a custom-tailored itinerary that exceeds your
            expectations.
          </p>
          <button
            className="btn font-bold bg-[#5ca13e] text-white hover:bg-[#5ca13e] transition-transform duration-300
            hover:scale-110"
          >
            More Info
          </button>
        </div>
        <div>
          <img src="https://i.ibb.co/5xMp2Ct/World-Map.png" alt="" />
        </div>
      </div>
    );
};

export default Info;