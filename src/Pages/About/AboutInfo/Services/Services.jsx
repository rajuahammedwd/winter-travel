import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
      // Fetch data from the JSON file
      fetch("fakeData.json")
        .then((response) => response.json())
        .then((data) => {
          setServices(data.services);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);
    
    return (
      <div className="max-w-7xl mx-auto mb-20">
        <div className="text-center space-y-5 mb-20">
          <h3 className="text-3xl font-bold font-reenie text-[#5ca13e] mb-5">
            Let us help you plan your next adventure
          </h3>
          <h1 className="text-5xl font-bold">Perfect Vacation come True</h1>
          <p className="text-xl text-[#837e7e]">
            Various destinations around the world. With our knowledge and
            expertise in the travel industry, we ensure that all aspects of your
            trip are tailored to your preferences and budget and make it an
            experience of a lifetime.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {services.map((service) => (
            <div
              key={service.id}
              className="justify-center items-center flex-col text-center"
            >
              <img
                className="w-32 mb-5 block mx-auto"
                src={service.image}
                alt=""
              />
              <h2 className="text-xl font-bold">{service.title}</h2>
              <p className="text-lg text-[#837e7e]">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-4 md:h-[300px] lg:bg-black">
          <div className="">
            <img
              className="h-[300px]"
              src="https://i.ibb.co/vQnBZL3/valley.jpg"
              alt=""
            />
          </div>
          <div className="col-span-2 flex justify-center items-center">
            <div className="md:ml-8 md:text-white">
              <h3 className="text-xl font-bold">Exclusive travel deals</h3>
              <h2 className="text-5xl font-bold">
                Book your dream vacation today !
              </h2>
            </div>
          </div>
          <div className="flex md:justify-center md:items-center">
            <Link to={"/about"}>
              <button
                className="btn border-none px-10 font-bold bg-[#5ca13e] text-white hover:bg-[#5ca13e] transition-transform duration-300
                    hover:scale-110"
              >
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Services;