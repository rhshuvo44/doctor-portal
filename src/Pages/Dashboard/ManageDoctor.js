import React, { useState } from "react";
import { useQuery } from "react-query";
import Looding from "../Share/Looding";
import DoctorTable from "./DoctorTable";
import RemoveDoctorModal from "./RemoveDoctorModal";

const ManageDoctor = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("https://lit-everglades-81475.herokuapp.com/doctor").then((res) => res.json())
  );
  if (isLoading) return <Looding />;
  return (
    <div className="p-10">
      <h1 className="text-2xl py-5">Manage Doctors</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Doctor Name</th>

              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <DoctorTable
                key={doctor._id}
                refetch={refetch}
                index={index}
                setDeleteDoctor={setDeleteDoctor}
                doctor={doctor}
              ></DoctorTable>
            ))}
          </tbody>
        </table>
      </div>
      {deleteDoctor && (
        <RemoveDoctorModal
          deleteDoctor={deleteDoctor}
          refetch={refetch}
          setDeleteDoctor={setDeleteDoctor}
        />
      )}
    </div>
  );
};

export default ManageDoctor;
