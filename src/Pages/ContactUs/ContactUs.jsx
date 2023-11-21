import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <div className="bg-[url('https://i.ibb.co/5WFk0sj/image.png')]  w-full h-[500px] bg-cover bg-center justify-center items-center flex mb-20">
        <div className="bg-black/50 w-full h-full flex justify-center items-center">
          <h1 className="text-7xl font-bold text-white text-center">
            Contact Us
          </h1>
        </div>
      </div>
      {/* Contact Us Section */}
      <div className="max-w-7xl mx-auto mb-20">
        {/* Text Part */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold font-reenie text-[#5ca13e] mb-5">
            Contact Us
          </h3>
          <h1 className="text-5xl font-bold mb-5 leading-[60px]">
            Get in touch with us
          </h1>
          <p className="text-xl mb-5 text-[#837e7e]">
            We are a team of experienced travel experts who specialize in
            planning and organizing unforgettable travel experiences for our
            clients with a wide range of travel services, including flight
            bookings, hotel reservations and more.
          </p>
        </div>
        {/* Contact Info */}
        <div className="grid lg:grid-cols-3 mb-20">
          <div className="">
            <h2 className="flex items-center gap-5 text-2xl font-bold mb-5">
              <span>
                <FaMapMarkerAlt className="text-[#5ca13e] text-5xl bg-[#5ca13e17] rounded-full p-3" />
              </span>
              Location
            </h2>
            <div className="space-y-2 text-xl text-[#837e7e]">
              <p>Travel Agency</p>
              <p>Uttara 12 No sector</p>
              <p>Main Dhaka</p>
              <p>Bangladesh</p>
            </div>
          </div>
          <div className="">
            <h2 className="flex items-center gap-5 text-2xl font-bold mb-5">
              <span>
                <FaPhoneAlt className="text-white text-5xl bg-[#5ca13e] rounded-full p-3" />
              </span>
              Give us a call
            </h2>
            <div className="space-y-2 text-xl text-[#837e7e]">
              <p>Travel Agency</p>
              <p>Uttara 12 No sector</p>
              <p>Main Dhaka</p>
              <p>Bangladesh</p>
            </div>
          </div>
          <div className="">
            <h2 className="flex items-center gap-5 text-2xl font-bold mb-5">
              <span>
                <FaEnvelope className="text-white text-5xl bg-[#080808fd] rounded-full p-3" />
              </span>
              Write for anything
            </h2>
            <div className="space-y-2 text-xl text-[#837e7e]">
              <p>Travel Agency</p>
              <p>Uttara 12 No sector</p>
              <p>Main Dhaka</p>
              <p>Bangladesh</p>
            </div>
          </div>
        </div>
        {/* Form */}
        <div className="w-full text-center h-[900px] py-20 bg-[#5ca13e1a] rounded-xl ">
          <div>
            <h2 className="text-3xl font-bold text-[#5ca13e] font-reenie mb-10">
              Plan your Next Trip
            </h2>
            <h1 className="text-5xl font-bold mb-10">Fill out the form</h1>
            <p className="text-xl text-[#837e7e] mb-10">
              Write to us for personalized travel advice or for information on
              group travel
              <br /> and last minute travel, all travel is insured and safe.
            </p>
          </div>
          <div>
            <form>
              <input
                type="text"
                placeholder="Type Your Name"
                className="input w-full max-w-3xl mb-5"
              />
              <input
                type="text"
                placeholder="Type Your Email"
                className="input w-full max-w-3xl mb-5"
              />
              <textarea
                type="text"
                placeholder="Type Your Email"
                className="input-bordered w-full max-w-3xl  p-5 mb-5"
              ></textarea>
                      </form>
            <button className="btn bg-[#5ca13e] text-white w-full max-w-3xl">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
