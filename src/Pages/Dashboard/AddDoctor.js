import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Looding from "../Share/Looding";

const AddDoctor = () => {
  const { register, handleSubmit, reset } = useForm();
  const { data: services, isLoading } = useQuery("services", () =>
    fetch("https://lit-everglades-81475.herokuapp.com/service").then((res) => res.json())
  );
  if (isLoading) {
    return <Looding />;
  }
  const imgStoreKey = "84a5698c1163075e540df1dc6008c8cf";
  const onSubmit = (data) => {
    const image = data.image[0];
    const imageAvatar = new FormData();
    imageAvatar.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStoreKey}`;
    fetch(url, {
      method: "POST",
      body: imageAvatar,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };
          fetch("https://lit-everglades-81475.herokuapp.com/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Added A new Doctor");
                reset();
              }else{
                  toast.error("Faild to add the doctor")
              }
            });
        }
      });
  };
  return (
    <div className="flex h-screen justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Add A Doctor</h2>
          <div className="divider"></div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Specialty</span>
              </label>
              <select
                className="select w-full max-w-xs"
                {...register("specialty")}
              >
                {services.map((service) => (
                  <option key={service._id} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="File"
                className="input input-bordered w-full max-w-xs"
                {...register("image", {
                  required: {
                    value: true,
                    message: "Photo is Required",
                  },
                })}
              />
            </div>
            <input
              className="btn mt-5 w-full max-w-xs"
              type="submit"
              value="Add Doctor"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
