import React from "react";
import { FaClock, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Packages = () => {
  return (
    <div className="max-w-7xl mx-auto mb-20">
      <div className="grid lg:grid-cols-3 gap-10">
        {/* Card 1 */}
        <div
          className="card relative  shadow-xl rounded-xl"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <figure>
            <img
              className="w-full overflow-hidden"
              src="https://i.ibb.co/1bXXB5J/Package-1.jpg"
              alt=""
            />
          </figure>
          <div className="w-80 absolute bottom-[340px] z-10  right-12 bg-white flex justify-between items-center px-5 shadow-md py-3 rounded-md">
            <span className="flex items-center gap-2">
              <FaClock className="text-[#5ca13e] text-xl" />1 Weeks
            </span>
            <span className="flex items-center gap-2">
              <FaEnvelope className="text-[#5ca13e] text-xl" />
              <FaMapMarkerAlt className="text-[#5ca13e] text-xl" />
            </span>
          </div>

          <div className="p-5 mt-10">
            <div>
              <h2 className="text-xl font-bold ">Sajek Valley</h2>

              <p className="flex items-center ">
                <span>
                  <FaMapMarkerAlt className="text-[#5ca13e] text-xl mr-2" />
                </span>
                Rangamati
              </p>
            </div>
            <div className="divider"></div>
            <p className="text-xl">
              Visit the temples and the Chiang Mai Night Bazaar, a huge huge
              market located on Chiang Klan Road.
            </p>
            <div className="divider"></div>
            <div className="flex justify-between items-center">
              <button
                className="btn px-8 font-bold bg-[#5ca13e] text-white hover:bg-[#5ca13e] transition-transform duration-300
            hover:scale-110"
              >
                Details
              </button>
              <div className="flex flex-col items-end">
                <p>From</p>
                <p className="text-xl font-bold">$500</p>
              </div>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div
          className="card relative shadow-xl rounded-xl"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <figure>
            <img
              className="w-full overflow-hidden"
              src="https://i.ibb.co/MRMc685/package-02.jpg"
              alt=""
            />
          </figure>
          <div className="w-80 absolute bottom-[340px] z-10  right-12 bg-white flex justify-between items-center px-5 shadow-md py-3 rounded-md">
            <span className="flex items-center gap-2">
              <FaClock className="text-[#5ca13e] text-xl" />5 Days
            </span>
            <span className="flex items-center gap-2">
              <FaEnvelope className="text-[#5ca13e] text-xl" />
              <FaMapMarkerAlt className="text-[#5ca13e] text-xl" />
            </span>
          </div>
          <div className="p-5 mt-10">
            <div>
              <h2 className="text-xl font-bold ">Sentmartin</h2>

              <p className="flex items-center ">
                <span>
                  <FaMapMarkerAlt className="text-[#5ca13e] text-xl mr-2" />
                </span>
                Chattogram
              </p>
            </div>
            <div className="divider"></div>
            <p className="text-xl">
              Visit the temples and the Chiang Mai Night Bazaar, a huge huge
              market located on Chiang Klan Road.
            </p>
            <div className="divider"></div>
            <div className="flex justify-between items-center">
              <button
                className="btn px-8 font-bold bg-[#5ca13e] text-white hover:bg-[#5ca13e] transition-transform duration-300
            hover:scale-110"
              >
                Details
              </button>
              <div className="flex flex-col items-end">
                <p>From</p>
                <p className="text-xl font-bold">$300</p>
              </div>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div
          className="card relative shadow-xl rounded-xl"
          data-aos="fade-left"
          data-aos-duration="900"
        >
          <figure>
            <img
              className="w-full overflow-hidden"
              src="https://i.ibb.co/LkQsn57/package-03.jpg"
              alt=""
            />
          </figure>
          <div className="w-80 absolute bottom-[340px] z-10  right-12 bg-white flex justify-between items-center px-5 shadow-md py-3 rounded-md">
            <span className="flex items-center gap-2">
              <FaClock className="text-[#5ca13e] text-xl" />3 Days
            </span>
            <span className="flex items-center gap-2">
              <FaEnvelope className="text-[#5ca13e] text-xl" />
              <FaMapMarkerAlt className="text-[#5ca13e] text-xl" />
            </span>
          </div>
          <div className="p-5 mt-10">
            <div>
              <h2 className="text-xl font-bold ">Sundarban</h2>

              <p className="flex items-center ">
                <span>
                  <FaMapMarkerAlt className="text-[#5ca13e] text-xl mr-2" />
                </span>
                Khulna
              </p>
            </div>
            <div className="divider"></div>
            <p className="text-xl">
              Visit the temples and the Chiang Mai Night Bazaar, a huge huge
              market located on Chiang Klan Road.
            </p>
            <div className="divider"></div>
            <div className="flex justify-between items-center">
              <button
                className="btn px-8 font-bold bg-[#5ca13e] text-white hover:bg-[#5ca13e] transition-transform duration-300
            hover:scale-110"
              >
                Details
              </button>
              <div className="flex flex-col items-end">
                <p>From</p>
                <p className="text-xl font-bold">$150</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
