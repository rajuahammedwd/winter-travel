import React, { useEffect, useState } from "react";
import Gallery from "./Gallery/Gallery";
import Info from "./Info/Info";
import Packages from "./Packages/Packages";
import ChooseTrip from "./ChooseTrip/ChooseTrip";
import Adventure from "./Adventure/Adventure";
import TravelPackages from "./TravelPackages/TravelPackages";

const Home = () => {
  useEffect(() => {
    fetch("/public/fakeData.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data.destinations);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [data, setData] = useState([]);

  return (
    <div>
      {/* <h1>This is Home</h1> */}
      <Gallery data={data} />
      <Info />
      <Packages />
      <ChooseTrip />
      <Adventure />
      <TravelPackages />
    </div>
  );
};

export default Home;
