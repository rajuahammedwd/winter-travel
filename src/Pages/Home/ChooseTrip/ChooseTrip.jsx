import React from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaListUl,
  FaChevronDown,
} from "react-icons/fa";

const ChooseTrip = () => {
  return (
    <div className="bg-[#eff8ec] py-20 mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-7 mb-16">
          <h3 className="text-3xl font-bold text-[#5ca13e] font-reenie">
            Choose your Trip
          </h3>
          <h1 className="text-5xl font-bold">Start your Vacation Now</h1>
          <p className="text-xl">
            Looking for your dream vacation destination but don't know where to
            start? With the help of
            <br /> experienced and knowledgeable travel agents, you can plan the
            trip of a lifetime with ease.
          </p>
        </div>
        <div
          className="lg:w-[1150px] mx-auto bg-white grid lg:grid-cols-4 rounded-xl shadow-md items-center px-10 py-8"
          data-aos="fade-down"
          data-aos-duration="900"
        >
          <div className="flex items-center gap-5">
            <span>
              <FaSearch className="text-[#5ca13e] text-3xl font-bold" />
            </span>
            <div>
              <h3 className="font-bold">Search</h3>
              <p>Insert Keyword</p>
            </div>
            <span className="divider lg:divider-horizontal"></span>
          </div>

          <div className="flex items-center gap-5">
            <span>
              <FaMapMarkerAlt className="text-[#5ca13e] text-3xl font-bold" />
            </span>
            <div>
              <h3 className="font-bold">Destination</h3>
              <p className="flex items-center">
                <span className="mr-3">All Destination </span>
                <span>
                  <FaChevronDown />
                </span>
              </p>
            </div>
            <span className="divider lg:divider-horizontal"></span>
          </div>
          <div className="flex items-center gap-5">
            <span>
              <FaListUl className="text-[#5ca13e] text-3xl font-bold" />
            </span>
            <div>
              <h3 className="font-bold">Search</h3>
              <p className="flex items-center">
                <span className="mr-3">All Typologies</span>
                <span>
                  <FaChevronDown />
                </span>
              </p>
            </div>
            <span className="divider lg:divider-horizontal"></span>
          </div>
          <div>
            <button className="lg:w-full btn font-bold bg-[#5ca13e] text-white hover:bg-[#5ca13e] transition-transform duration-300 hover:scale-110">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseTrip;
