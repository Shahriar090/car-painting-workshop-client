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
    <div className="flex flex-col lg:flex-row">
      <div
        className="text text-white w-1/2 m-12"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h3 className="text-3xl text-orange-600 font-semibold p-2">
          About Glitz
        </h3>
        <h1 className="text-5xl text-white font-bold p-2">
          We Treat Your Car Like Family
        </h1>
        <p className="p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          architecto nobis voluptatem! Inventore maiores placeat, natus ipsum
          sapiente reiciendis. Expedita nulla dolor non tempore dicta quaerat
          culpa exercitationem reprehenderit sunt.
        </p>

        <div className="list-parent flex gap-6 text-xl text-orange-600 mt-6">
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
          <button className="btn btn-outline text-white hover:bg-sky-700">
            More About Us
          </button>
        </div>
      </div>

      <div
        className="image w-1/2 m-12 relative"
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <img src={painterImg} alt="Painter Image" />
        <div className="text-overlay absolute bottom-5 left-0 right-0 flex flex-col items-center justify-center w-52 h-48 border-dotted border-2 border-orange-600 bg-sky-950 ">
          <h1 className="text-2xl text-orange-600 pl-5 ">
            25 Years Plus Experience
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
