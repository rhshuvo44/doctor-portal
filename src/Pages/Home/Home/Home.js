import React from "react";
import Banner from "../Banner/Banner";
import Info from "../Info";
import MakeAppointment from "../MakeAppointment";
import Services from "../Services/Services";
import Testomonial from "../Testomonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <MakeAppointment />
      <Testomonial />
    </div>
  );
};

export default Home;
