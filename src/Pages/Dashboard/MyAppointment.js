import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const MyAppointment = () => {
  const [appointment, setAppointment] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setAppointment(data));
    }
  }, [user]);
  return (
    <div>
      <h2 className="py-5 font-bold text-2xl capitalize text-primary">
        my appointment :{appointment.length}
      </h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>date</th>
              <th>time</th>
              <th>treatment</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {appointment.map((a, index) => (
              <tr>
                <th>{index + 1}</th>
                <th>{a.patientName}</th>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
                <td>
                  {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`} ><button className="btn btn-xs btn-success">Pay</button></Link>}
                  {(a.price && a.paid) && <div>
                    <p><span className="text-success">Paid</span></p>
                    <p><span className="text-success">{a.transactionId}</span></p>
                  </div> }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
