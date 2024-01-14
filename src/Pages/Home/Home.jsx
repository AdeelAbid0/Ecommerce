import React from "react";
import Hero from "../Hero/Hero";
import "../Hero/Hero.css";
import Featuredsection from "../Featuredsection/Featuredsection";
import "../Featuredsection/Featuredsection.css";
import Deliveries from "../Deliveries/Deliveries";
import "../Deliveries/Deliveries.css";
import Companies from "../Companies/Companies";
import "../Companies/Companies.css";
const Home = () => {
  return (
    <>
      <Hero title="Home" />
      <Featuredsection />
      <Deliveries />
      <Companies />
    </>
  );
};

export default Home;
