import React from 'react';
import AboutInfo from './AboutInfo/AboutInfo';
import Services from './AboutInfo/Services/Services';

const About = () => {
    return (
      <div className="min-h-screen">
        <div className="bg-[url('https://i.ibb.co/nr7s6S8/i-parallax-08-destination-02.jpg')]  w-full h-[500px] bg-cover bg-center justify-center items-center flex mb-20">
          <div className='bg-black/30 w-full h-full flex justify-center items-center'>
            <h1 className="text-7xl font-bold text-white text-center">
              About Us
            </h1>
          </div>
            </div>
            <AboutInfo />
            <Services />
      </div>
    );
};

export default About;