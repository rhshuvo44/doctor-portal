import React from 'react';
import cavity from '../../../assets/images/cavity.png';
import fluoride from '../../../assets/images/fluoride.png';
import whitening from '../../../assets/images/whitening.png';
import ServicesCard from '../Services/ServiceCard';
const services=[
    {
        _id:1,
        name:'Fluoride Treatment',
        discrtion:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        img:`${fluoride}`
    },
    {
        _id:2,
        name:'Fluoride Treatment',
        discrtion:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        img:`${cavity}`
    },
    {
        _id:3,
        name:'Fluoride Treatment',
        discrtion:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        img:`${whitening}`
    },
]
const Services = () => {
    return (
        <div className='text-center py-5'>
            <h5 className='text-2xl font-bold text-[#0FCFEC]'>OUR SERVICES</h5>
            <h1 className='text-5xl font-bold'>Services We Provide</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-10 py-10 '>
                {
                    services.map(service=><ServicesCard key={service._id} service={service}/>)
                }
            </div>
        </div>
    );
};

export default Services;