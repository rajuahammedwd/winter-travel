import React from 'react';

const Info = () => {
    return (
      <div className="max-w-7xl mx-auto mb-20">
        <div className="mb-20 grid lg:grid-cols-2">
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
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="bg-[url('https://i.ibb.co/TbqL2t6/banner-01.jpg')] rounded-xl bg-cover">
            <img
              className="w-40"
              src="https://i.ibb.co/Bgkdv7q/c-icon-visual-01-1.gif"
              alt=""
            />
          </div>
          <div className="bg-[url('https://i.ibb.co/1MvHcnS/banner-02.jpg')] rounded-xl bg-cover">
            <img
              className="w-40"
              src="https://i.ibb.co/pJ3rgSQ/c-icon-visual-02-1.gif"
              alt=""
            />
          </div>
          <div className="bg-[url('https://i.ibb.co/Z2znr00/banner-03.jpg')] rounded-xl bg-cover">
            <img
              className="w-40"
              src="https://i.ibb.co/2dmsHNY/c-icon-visual-03-1.gif"
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default Info;