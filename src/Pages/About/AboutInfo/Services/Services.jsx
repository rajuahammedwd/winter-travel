import React, { useEffect, useState } from 'react';

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
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-5 mb-10">
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
      </div>
    );
};

export default Services;