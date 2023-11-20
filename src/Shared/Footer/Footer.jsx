import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 py-20">
        <div
          className="col-span-2"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <h2 className="text-white text-5xl font-bold line-height-10">
            Travel beyond your imagination, with our Travel Agency!
          </h2>
        </div>
        <div className="text-white justify-self-center space-y-5">
          <h2 className="font-bold text-xl">Address</h2>
          <p>Uttara 12 No sector</p>
          <p>Main Dhaka</p>
          <p>Bangladesh</p>
        </div>
        <div className="text-white space-y-5 text-xl">
          <h2 className="font-bold">Contact</h2>
          <button className="btn border-none font-bold bg-[#5ca13e] text-white hover:bg-[#5ca13e] transition-transform duration-300 hover:scale-110">
            info@travel.com
          </button>
          <p className="font-bold">+880 123 456 789</p>
          <ul className="flex gap-6">
            <li>
              <FaFacebook className="text-xl hover:text-[#3E54AB]" />
            </li>
            <li>
              <FaTwitter className="text-xl hover:text-[#60B8FF]" />
            </li>
            <li>
              <FaYoutube className="text-xl hover:text-[#FE2E3C]" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
