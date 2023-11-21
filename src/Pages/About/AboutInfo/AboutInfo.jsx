import React from 'react';
import { Link } from 'react-router-dom';

const AboutInfo = () => {
    return (
      <div className="max-w-7xl mx-auto mb-20 grid lg:grid-cols-2">
        <div>
          <h3 className="text-3xl font-bold font-reenie text-[#5ca13e] mb-5">
            Explore the world with us, one adventure at a time.
          </h3>
          <h1 className="text-5xl font-bold mb-5 leading-[60px]">
            The perfect{" "}
            <span className="bg-[#5ca13e] text-white px-2">vacation</span>{" "}
            <br /> come true with our Travel Agency
          </h1>
          <p className="text-xl mb-5 text-[#837e7e]">
            We are a team of experienced travel experts who specialize in
            planning and organizing unforgettable travel experiences for our
            clients with a wide range of travel services, including flight
            bookings, hotel reservations and more.
          </p>
          <div className="mb-5">
            <h3 className="text-xl mb-5">Local travel guides</h3>
            <div className="w-full h-2 bg-gray-300 rounded-md">
              <div className="h-full bg-black transition-all w-10/12 rounded-md"></div>
            </div>
          </div>
          <Link to={"/about"}>
            <button
              className="btn font-bold bg-[#5ca13e] text-white hover:bg-[#5ca13e] transition-transform duration-300
                    hover:scale-110"
            >
              More Info
            </button>
          </Link>
        </div>
        <div>
          <img
            className="w-full"
            src="https://i.ibb.co/5xMp2Ct/World-Map.png"
            alt=""
          />
        </div>
      </div>
    );
};

export default AboutInfo;
