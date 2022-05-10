import React from "react";
import bannerImg from "../../../assets/images/chair.png";
import './Bannger.css';

const Banner = () => {
  return (
    <div class="hero min-h-screen px-12 bannger">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImg}
          alt="chair"
          class="max-w-2xl rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p class="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;