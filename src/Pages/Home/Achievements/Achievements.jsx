import React, { useEffect } from 'react';
import { Parallax, Background } from 'react-parallax';
import parallaxImg from '../../../assets/paralax-img.avif'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Achievements = () => {
    useEffect(() => {
        AOS.init({
          duration: 800, 
          once: false,     
        });
      }, []);
    return (
        <div className='mt-8 mb-2 relative'>
         <Parallax
        blur={{ min: -15, max: 25 }}
        bgImage={parallaxImg}
        bgImageAlt="Loading"
        strength={-200}
    >
        
        <div style={{ height: '500px' }} />

        <div className="absolute inset-0 bg-gradient-to-l from-sky-950 to-sky-800 opacity-40" />
        <div className="absolute inset-0 flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between px-10 items-center  text-white">
                        <div className='happy-customer border-2 py-5 px-5 lg:py-10 lg:px-10 border-orange-600 text-2xl font-semibold'data-aos="fade-right"><span className='text-4xl text-orange-600 font-bold'>200</span>+ Happy Customer</div>

                        <div className='experience border-2 py-5 px-5 lg:py-10 lg:px-10 border-orange-600 text-2xl font-semibold'data-aos="fade-up"><span className='text-4xl text-orange-600 font-bold'>25 Years</span> + Experience</div>

                        <div className='win-awards border-2 py-5 px-5 lg:py-10 lg:px-10 border-orange-600 text-2xl font-semibold'data-aos="zoom-in"><span className='text-4xl text-orange-600 font-bold'>90</span>+ Awards</div>

                        <div className='complete-project border-2 py-5 px-5 lg:py-10 lg:px-10 border-orange-600 text-2xl font-semibold'data-aos="fade-left"><span className='text-4xl text-orange-600 font-bold'>150</span>+ Complete Project</div>

                       
                    </div>
    </Parallax>
    
    </div>
    );
};

export default Achievements;







