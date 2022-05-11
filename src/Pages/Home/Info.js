import React from "react";
import clock from "../../assets/icons/clock.svg";
import map from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-10 py-10 text-white">
      <div className="card lg:card-side bg-primary shadow-xl p-5">
        <figure>
          <img src={clock} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Opening Hours</h2>
          <p>Lorem Ipsum is simply dummy text of the pri</p>
          
        </div>
      </div>
      <div className="card lg:card-side bg-accent shadow-xl p-5">
        <figure>
          <img className="" src={map} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Visit our location</h2>
          <p>Brooklyn, NY 10036, United States</p>
        </div>
      </div>
      <div className="card lg:card-side bg-primary shadow-xl p-5">
        <figure>
          <img src={phone} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Contact us now</h2>
          <p>+000 123 456789</p>
          
        </div>
      </div>
    </div>
  );
};

export default Info;
