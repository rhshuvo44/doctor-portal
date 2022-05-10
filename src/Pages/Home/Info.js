import React from "react";
import clock from "../../assets/icons/clock.svg";
import map from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-4 lg:grid-cols-3 gap-5 px-10 py-10 text-white">
      <div class="card lg:card-side bg-primary shadow-xl px-5">
        <figure>
          <img src={clock} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Opening Hours</h2>
          <p>Lorem Ipsum is simply dummy text of the pri</p>
          
        </div>
      </div>
      <div class="card lg:card-side bg-base-100 shadow-xl px-5">
        <figure>
          <img src={map} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Visit our location</h2>
          <p>Brooklyn, NY 10036, United States</p>
        </div>
      </div>
      <div class="card lg:card-side bg-primary shadow-xl px-5">
        <figure>
          <img src={phone} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Contact us now</h2>
          <p>+000 123 456789</p>
          
        </div>
      </div>
    </div>
  );
};

export default Info;
