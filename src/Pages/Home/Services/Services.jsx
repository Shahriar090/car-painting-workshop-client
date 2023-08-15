import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    // aos useEffect
    useEffect(() => {
        AOS.init({
          duration: 800, 
          once: false,     
        });
      }, []);

    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div className="texts text-center mt-8"data-aos="zoom-in">
                <h3 className='text-orange-600 text-2xl font-bold uppercase m-3'>Services</h3>
                <h1 className='text-3xl lg:text-5xl font-bold text-white uppercase'>We are qualified & professional</h1>
                <p className='text-white m-3 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br></br> Quas laborum architecto, iusto quidem, corrupti porro possimus id ducimus quis dolorum in quos!<br></br> Dolore eos explicabo ad ut. Numquam, sed cupiditate.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                {services.map(service => <ServicesCard
                key={service._id}
                service={service}
                ></ServicesCard>)}
            </div>
        </div>
    );
};

export default Services;