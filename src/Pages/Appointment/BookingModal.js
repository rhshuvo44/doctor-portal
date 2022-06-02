import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const BookingModal = ({ treatment, setTreatment, date, refetch }) => {
  const { _id, name, slots,price } = treatment;
  const treatmentDate = format(date, "PP");
  const handleBooking = (e) => {
    e.preventDefault();
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: treatmentDate,
      slot: e.target.slot.value,
      patient: user.email,
      price: price,
      patientName: user.displayName,
      phone: e.target.phone.value,
    };
    fetch("https://lit-everglades-81475.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast(
            `Appointment is set, ${treatmentDate} at ${e.target.slot.value}`
          );
        } else {
          toast.error(
            `Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        refetch();
        setTreatment(null);
      });
  };
  const [user] = useAuthState(auth);
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-primary text-lg">
            Boooking for : {name}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10 justify-items-center"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option name="slot" key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              disabled
              placeholder="Full Name"
              value={user?.displayName}
              className="input input-bordered w-full max-w-xs"
            />

            <input
              name="email"
              type="email"
              disabled
              value={user?.email}
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="price"
              type="number"
              disabled
              value={price}
              placeholder="Price"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-accent text-white w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
