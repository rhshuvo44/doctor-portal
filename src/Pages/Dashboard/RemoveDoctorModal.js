import React from "react";
import { toast } from "react-toastify";

const RemoveDoctorModal = ({deleteDoctor,refetch,setDeleteDoctor}) => {
  const {name,email}=deleteDoctor;
  const removeDoctor = () => {
    fetch(`https://lit-everglades-81475.herokuapp.com/doctor/${email}`,{
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
      <input type="checkbox" id="remove-doctor-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-primary">
             {name}
          </h3>
          <p className="py-4 text-red-500 text-lg">
          Are you want to deleted confirm!
          </p>
          <div className="modal-action">
          <label onClick={removeDoctor} for="remove-doctor-modal"  className="btn btn-xs">
              Confirm
            </label>
            <label for="remove-doctor-modal" className="btn btn-xs">
             Cancle
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveDoctorModal;
