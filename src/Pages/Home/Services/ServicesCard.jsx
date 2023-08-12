import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesCard = ({service}) => {
    useEffect(() => {
        AOS.init({
          duration: 800, 
          once: false,     
        });
      }, []);
    const {title, img, price, description} = service;
  return (
    <>
        <div className="card w-96 bg-sky-950 text-orange-600 shadow-xl mx-auto border-2 border-orange-600 mt-5"data-aos="zoom-in">
      <figure>
        <img
          src={img}
          alt="Service img"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title"data-aos="zoom-in">{title}</h2>
        <p className=""data-aos="zoom-in">Price : {price}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline border-0 border-b-4 border-orange-600 text-orange-600 hover:bg-sky-950"data-aos="fade-right">Buy Now</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ServicesCard;
