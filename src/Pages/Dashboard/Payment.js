import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Looding from "../Share/Looding";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe('pk_test_51L5saqAqlGujQC2wq9MHnFEpO0G6SNB7K5XtOjQSnXcbjfXgRyhv1NwSZbMiuI9OuXhNdkRsKYV6Ce3bCbBw737Z00ieD9uE9a');


const Payment = () => {
  const { id } = useParams();
  const url = `https://lit-everglades-81475.herokuapp.com/booking/${id}`;
  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url).then((res) => res.json())
  );
  if (isLoading) {
    return <Looding />;
  }
  return <div className="grid justify-center py-10">
      <div className="card bg-base-100 shadow-xl mb-10">
  <div className="card-body">
      <p className="text-success">Hello, {appointment.patientName}</p>
    <h2 className=" text-center font-bold text-2xl">Pay for {appointment.treatment}</h2>
    <p>We will see you on {appointment.date} at {appointment.slot}</p>
    <p className="text-xl">Please pay : $ {appointment.price}</p>
  </div>
</div>
<div className="card bg-base-100 shadow-xl">
  <div className="card-body">
  <Elements stripe={stripePromise}>
      <CheckoutForm appointment={appointment}/>
    </Elements>
  </div>
</div>
  </div>;
};

export default Payment;
