import React from "react";

const DoctorTable = ({ doctor, index,setDeleteDoctor }) => {
  const { name, img, specialty } = doctor;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="avatar">
          <div className="w-8 rounded">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
        <label onClick={()=>setDeleteDoctor(doctor)} for="remove-doctor-modal" className="btn btn-xs ">
          Remove
        </label>
      </td>
    </tr>
  );
};

export default DoctorTable;
