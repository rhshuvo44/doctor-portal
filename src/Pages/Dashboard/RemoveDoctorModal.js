import React from "react";
import { toast } from "react-toastify";

const RemoveDoctorModal = ({deleteDoctor,refetch,setDeleteDoctor}) => {
  const {name,email}=deleteDoctor;
  const removeDoctor = () => {
    fetch(`http://localhost:5000/doctor/${email}`,{
      method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      if (data.deletedCount) {
        toast.success(`${name} doctor is deleted`);
        setDeleteDoctor(null);
        refetch();
      }
    })
  };
  return (
    <div>
      <input type="checkbox" id="remove-doctor-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-primary">
             {name}
          </h3>
          <p class="py-4 text-red-500 text-lg">
          Are you want to deleted confirm!
          </p>
          <div class="modal-action">
          <label onClick={removeDoctor} for="remove-doctor-modal"  class="btn btn-xs">
              Confirm
            </label>
            <label for="remove-doctor-modal" class="btn btn-xs">
             Cancle
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveDoctorModal;
