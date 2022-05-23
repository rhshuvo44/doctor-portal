import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [appointment,setAppointment]=useState([]);
    const [user]=useAuthState(auth)
    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then(res=>res.json())
        .then(data=>setAppointment(data))
        }
    },[user])
    return (
        <div>
            <h2 className='py-5 font-bold text-2xl capitalize text-primary'>my appointment :{appointment.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th>Name</th>
        <th>date</th>
        <th>time</th>
        <th>treatment</th>
      </tr>
    </thead>
    <tbody>
        {
            appointment.map(a=>  <tr>
                <th>{a.patientName}</th>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
              </tr>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;