import React from 'react';

const Booking = ({service,setTreatment}) => {
    const {name,slots}=service;
    return (
        <div className="card w-96">
        <div className="card-body">
          <h2 className="card-title text-primary">{name}</h2>
          <p>{
              slots.length ? <span>{slots[0]}</span>: <span className='text-red-500'>No Slot Available</span>
              }</p>
          <p>{slots.length} {slots.length > 1 ? 'space':'spaces' } available</p>
          <div className="card-actions justify-center">
            <label for="booking-modal" onClick={()=>setTreatment(service)} disabled={slots.length===0} className="btn btn-secondary text-white uppercase">Book AppointMent</label>
          </div>
        </div>
      </div>
    );
};

export default Booking;