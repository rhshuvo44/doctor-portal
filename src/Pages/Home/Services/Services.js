import React from "react";
import cavity from "../../../assets/images/cavity.png";
import fluoride from "../../../assets/images/fluoride.png";
import treatment from "../../../assets/images/treatment.png";
import whitening from "../../../assets/images/whitening.png";
import ServicesCard from "../Services/ServiceCard";
const services = [
  {
    _id: 1,
    name: "Fluoride Treatment",
    discrtion:
      "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    img: `${fluoride}`,
  },
  {
    _id: 2,
    name: "Fluoride Treatment",
    discrtion:
      "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    img: `${cavity}`,
  },
  {
    _id: 3,
    name: "Fluoride Treatment",
    discrtion:
      "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    img: `${whitening}`,
  },
];
const Services = () => {
  return (
    <div className="text-center py-5">
      <h5 className="text-2xl font-bold text-[#0FCFEC]">OUR SERVICES</h5>
      <h1 className="text-5xl font-bold">Services We Provide</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-10 py-10 ">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service} />
        ))}
      </div>
      <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row px-20">
    <img  src={treatment} class="h-96 max-w-sm md:max-w-2xl rounded-lg shadow-2xl" alt=""/>
    <div className="px-20">
      <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <button class="btn btn-primary text-white">Get Started</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Services;
