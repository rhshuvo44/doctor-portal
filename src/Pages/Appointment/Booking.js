import React from "react";

const Booking = ({ service, setTreatment }) => {
  const { name, slots, price } = service;
  return (
    <div className="card w-96 shadow-xl mb-20">
      <div className="card-body text-center">
        <h2 className="text-2xl text-primary">{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">No Slot Available</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "space" : "spaces"} available
        </p>
        <p> Price : $ {price}</p>
        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal"
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            className="btn btn-secondary text-white uppercase"
          >
            Book AppointMent
          </label>
        </div>
      </div>
    </div>
  );
};

export default Booking;
