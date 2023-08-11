import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const ShortDescription = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: false,     
    });
  }, []);
  return (
    <div className=" bg-sky-950 grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-0 lg:px-12 lg:-mt-10">
        {/* card 01 */}
      <div className="card w-full lg:w-96 bg-sky-950 text-white shadow-xl border-2 border-yellow-400 mx-auto"data-aos="zoom-in">
        <div className="card-body">
          <h2 className="card-title">Awesome Painter</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-start">
            <button className="btn btn-outline text-white border-yellow-400 hover:bg-sky-700">Book Now</button>
          </div>
        </div>
      </div>
        {/* card 02 */}
      <div className="card w-full lg:w-96 bg-sky-950 text-white shadow-xl border-2 border-yellow-400 mx-auto"data-aos="fade-up">
        <div className="card-body">
          <h2 className="card-title">Best Equipment</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-start">
            <button className="btn btn-outline text-white border-yellow-400 hover:bg-sky-700">Book Now</button>
          </div>
        </div>
      </div>
        {/* card 03 */}
      <div className="card w-full lg:w-96 bg-sky-950 text-white shadow-xl border-2 border-yellow-400 mx-auto"data-aos="zoom-in">
        <div className="card-body">
          <h2 className="card-title">Excellent Materials</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-start">
            <button className="btn btn-outline text-white border-yellow-400 hover:bg-sky-700">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortDescription;
