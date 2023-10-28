import React, { useEffect } from "react";
import painterImg from "../../../assets/painter-img.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <div className="flex flex-col lg:flex-row lg:px-20 lg:pt-10">
      <div
        className="text text-white w-1/2"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
       <div className="texts">
       <h3 className="text-2xl lg:text-3xl text-orange-600 font-semibold">
          About Glitz
        </h3>
        <h1 className="text-3xl lg:text-5xl text-white font-bold mt-2">
          We Treat Your Car Like Family
        </h1>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          architecto nobis voluptatem! Inventore maiores placeat, natus ipsum
          sapiente reiciendis. Expedita nulla dolor non tempore dicta quaerat
          culpa exercitationem reprehenderit sunt.
        </p>
       </div>

        <div className="list-parent flex gap-6 text-lg lg:text-xl text-orange-600 mt-6">
          <div className="first-three">
            <ul>
              <li>Experienced Paint Workshop</li>
              <li>Reliable Painter</li>
              <li>High Quality Paint</li>
            </ul>
          </div>
          <div className="second-three">
            <ul>
              <li>Fast & Neat Work</li>
              <li>Satisfaction Guarantee</li>
              <li>Certified & Warranty</li>
            </ul>
          </div>
        </div>
        <div className="button mt-5">
          <button className="btn btn-outline border-orange-600 btn-sm lg:btn-md text-white hover:bg-sky-700">
            More About Us
          </button>
        </div>
      </div>

      <div
        className="image w-full  lg:w-1/2   relative"
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <img src={painterImg} alt="Painter Image" className="w-full"/>
        <div className="opacity-50  text-overlay absolute top-0 left-0   w-full h-full border-dotted border-2 border-orange-600 bg-sky-950">
          <h1 className="text-3xl text-orange-600 absolute bottom-10 left-3 opacity-95">
            25 Years Plus Experience
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
