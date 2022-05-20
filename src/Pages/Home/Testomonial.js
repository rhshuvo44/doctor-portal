import React from "react";
import quote from '../../assets/icons/quote.svg';
const Testomonial = () => {
  return (
    <div className="p-20">
      <div className="flex justify-between">
          <div>
          <h5 className="text-2xl font-bold text-[#0FCFEC]">Testimonial</h5>
      <h1 className=" mt-5 text-4xl font-bold">What Our Patients Says</h1>
          </div>
          <img className="w-24 lg:w-48" src={quote} alt="" />
      </div>
      <div className="carousel carousel-center p-4 space-x-4 rounded-box">
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            <figure>
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
              />
            </figure>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            <figure>
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
              />
            </figure>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            <figure>
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testomonial;
