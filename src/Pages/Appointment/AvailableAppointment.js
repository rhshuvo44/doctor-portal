import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Looding from '../Share/Looding';
import Booking from './Booking';
import BookingModal from './BookingModal';

const AvailableAppointment = ({date}) => {
    const [treatment,setTreatment]=useState(null);
    const formattedDAte=format(date, "PP");
    const { isLoading, refetch, data:services } = useQuery(['available',formattedDAte], () =>
    fetch(`http://localhost:5000/available?date=${formattedDAte}`).then(res =>
      res.json()
    )
  )

  if (isLoading) return <Looding/>
    return (
        <div className='px-12'>
            <h4 className='text-xl text-secondary text-center py-10'>Available Appointment on {format(date, "PP")}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {services.map(service=><Booking key={service._id} service={service} setTreatment={setTreatment}/>)}
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}
            refetch={refetch}
            />}
        </div>
    );
};

export default AvailableAppointment;