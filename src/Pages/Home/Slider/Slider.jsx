import sliderImgOne from "../../../assets/slider-01.jpg";
import sliderImgTwo from "../../../assets/slider-02.jpg";
import sliderImgThree from "../../../assets/slider-03.jpg";
import sliderImgFour from "../../../assets/new-slider-img-3.jpg";
import { TypeAnimation } from 'react-type-animation';

const Slider = () => {
  return (
    <div className="carousel w-full">
      {/* slide one */}
      <div id="slide1" className="carousel-item relative w-full">
        <img src={sliderImgOne} className="w-full h-auto " />
        <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 bottom-0 justify-between">
          <a href="#slide4" className="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-l text-white hover:bg-sky-700">
            ❮
          </a>
          <a href="#slide2" className="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-l lg:btn-md text-white hover:bg-sky-700">
            ❯
          </a>
        </div>
        {/* slider one texts */}
        <div className="absolute text-center top-32 lg:top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-row md:flex-col lg:flex-col">
            <div>
            <h3 className="text-xl lg:text-3xl font-semibold text-orange-600 mb-3 lg:mb-8">
              GLITZ PAINT WORKSHOP
            </h3>
            <h1 className="text-white text-xl lg:text-5xl font-bold mb-6">
              REPAINT YOUR CAR TO THE NEXT LEVEL
            </h1>
            </div>
            <div className="type-animation hidden md:block lg:block">
            <TypeAnimation 
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We have experienced professionals for the job',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We take great care of your car',
        1000,
        'We ensure the quickest delivery in town',
        1000,
        'We provide value-for-money services',
        1000
      ]}
      wrapper="span"
      speed={50}
      className="text-xs md:text-xl lg:text-2xl xl:text-3xl"
      style={{ fontSize: '2em', display: 'inline-block', color: 'orangered'}}
      repeat={Infinity}
    />
            </div>
            <p className="text-white  mt-2 hidden md:block lg:block xl:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              illo saepe praesentium quos expedita repudiandae voluptate,
              dignissimos, assumenda reiciendis ad corporis doloribus sapiente
              maxime. Possimus omnis officiis ab exercitationem eius?
            </p>
          </div>
            <button className="btn btn-outline  btn-xs sm:btn-sm md:btn-md lg:btn-l text-white hover:bg-orange-600  lg:mt-6">
              Discover More
            </button>
        </div>
      </div>
      {/* slide two */}
      <div id="slide2" className="carousel-item relative w-full">
        <img src={sliderImgTwo} className="w-full h-auto" />
        <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 bottom-0 justify-between">
          <a href="#slide1" className="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-l lg:btn-md text-white hover:bg-sky-700">
            ❮
          </a>
          <a href="#slide3" className="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-l lg:btn-md text-white hover:bg-sky-700">
            ❯
          </a>
        </div>
        {/* slider one texts */}
        <div className="absolute text-center top-32 lg:top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-row mg:flex-col lg:flex-col">
            <div>
            <h3 className="text-xl lg:text-3xl font-semibold text-orange-600 mb-3 lg:mb-8">
              GLITZ PAINT WORKSHOP
            </h3>
            <h1 className="text-white text-xl lg:text-5xl font-bold mb-6">
              REPAINT YOUR CAR TO THE NEXT LEVEL
            </h1>
            </div>
            <div className="type-animation hidden md:block lg:block">
            <TypeAnimation 
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We have experienced professionals for the job',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We take great care of your car',
        1000,
        'We ensure the quickest delivery in town',
        1000,
        'We provide value-for-money services',
        1000
      ]}
      wrapper="span"
      speed={50}
      className="text-xs md:text-xl lg:text-2xl xl:text-3xl"
      style={{ fontSize: '2em', display: 'inline-block', color: 'orangered'}}
      repeat={Infinity}
    />
            </div>
            <p className="text-white  mt-2 hidden md:block lg:block xl:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              illo saepe praesentium quos expedita repudiandae voluptate,
              dignissimos, assumenda reiciendis ad corporis doloribus sapiente
              maxime. Possimus omnis officiis ab exercitationem eius?
            </p>
          </div>
            <button className="btn btn-outline  btn-xs sm:btn-sm md:btn-md lg:btn-l text-white hover:bg-orange-600  lg:mt-6">
              Discover More
            </button>
        </div>
      </div>
      {/* slide three */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src={sliderImgThree} className="w-full h-auto" />
        <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 bottom-0 justify-between">
          <a href="#slide2" className="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-l text-white hover:bg-sky-700">
            ❮
          </a>
          <a href="#slide1" className="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-l text-white hover:bg-sky-700">
            ❯
          </a>
        </div>
        {/* slider  texts */}
        <div className="absolute text-center top-32 lg:top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-row mg:flex-col lg:flex-col">
            <div>
            <h3 className="text-xl lg:text-3xl font-semibold text-orange-600 mb-3 lg:mb-8">
              GLITZ PAINT WORKSHOP
            </h3>
            <h1 className="text-white text-xl lg:text-5xl font-bold mb-6">
              REPAINT YOUR CAR TO THE NEXT LEVEL
            </h1>
            </div>
            <div className="type-animation hidden md:block lg:block">
            <TypeAnimation 
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We have experienced professionals for the job',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We take great care of your car',
        1000,
        'We ensure the quickest delivery in town',
        1000,
        'We provide value-for-money services',
        1000
      ]}
      wrapper="span"
      speed={50}
      className="text-xs md:text-xl lg:text-2xl xl:text-3xl"
      style={{ fontSize: '2em', display: 'inline-block', color: 'orangered'}}
      repeat={Infinity}
    />
            </div>
            <p className="text-white  mt-2 hidden md:block lg:block xl:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              illo saepe praesentium quos expedita repudiandae voluptate,
              dignissimos, assumenda reiciendis ad corporis doloribus sapiente
              maxime. Possimus omnis officiis ab exercitationem eius?
            </p>
          </div>
            <button className="btn btn-outline  btn-xs sm:btn-sm md:btn-md lg:btn-l text-white hover:bg-orange-600  lg:mt-6">
              Discover More
            </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;

<div id="slide2" className="carousel-item relative w-full">
  <div className="relative w-full h-auto">
    <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent"></div>
    <img src={sliderImgTwo} className="w-full" alt="Slider 2" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle">
        ❮
      </a>
      <a href="#slide3" className="btn btn-circle">
        ❯
      </a>
    </div>
    {/* slider two texts */}
    <div className="absolute text-center text-white top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h3 className="text-2xl font-semibold text-orange-600 mb-4">
        GLITZ PAINT WORKSHOP
      </h3>
      <h1 className="text-white text-5xl font-bold mb-4">
        REPAINT YOUR CAR TO THE NEXT LEVEL
      </h1>
      <p className="text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque illo
        saepe praesentium quos expedita repudiandae voluptate, dignissimos,
        assumenda reiciendis ad corporis doloribus sapiente maxime. Possimus
        omnis officiis ab exercitationem eius?
      </p>
    </div>
  </div>
</div>;
