import React from "react";
import doctorSmall from "../../assets/images/doctor-small.png";
import "./MakeAppointment.css";

const MakeAppointment = () => {
  return (
    <div className="make-appointment">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctorSmall}
            className="max-w-sm md:max-w-2xl md:block hidden appointment-img"
            alt=""
          />
          <div>
            <h1 className="text-2xl font-bold text-primary mb-5">
              Appointment
            </h1>
            <h1 className="text-4xl font-bold text-white">
              Make an appointment Today
            </h1>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
