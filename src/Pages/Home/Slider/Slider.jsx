import sliderImgOne from "../../../assets/slider-01.jpg";
import sliderImgTwo from "../../../assets/slider-02.jpg";
import sliderImgThree from "../../../assets/slider-03.jpg";

const Slider = () => {
  return (
    <div className="carousel w-full">
      {/* slide one */}
      <div id="slide1" className="carousel-item relative w-full">
        <img src={sliderImgOne} className="w-full" />
        <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 bottom-0 justify-between">
          <a href="#slide4" className="btn btn-outline text-white hover:bg-sky-700">
            ❮
          </a>
          <a href="#slide2" className="btn btn-outline text-white hover:bg-sky-700">
            ❯
          </a>
        </div>
        {/* slider one texts */}
        <div className="absolute text-center  top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="">
            <h3 className="text-3xl font-semibold text-orange-600 mb-8">
              GLITZ PAINT WORKSHOP
            </h3>
            <h1 className="text-white text-5xl font-bold mb-8">
              REPAINT YOUR CAR TO THE NEXT LEVEL
            </h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              illo saepe praesentium quos expedita repudiandae voluptate,
              dignissimos, assumenda reiciendis ad corporis doloribus sapiente
              maxime. Possimus omnis officiis ab exercitationem eius?
            </p>
            <button className="btn btn-outline text-white hover:bg-orange-600 mt-6">
              Discover More
            </button>
          </div>
        </div>
      </div>
      {/* slide two */}
      <div id="slide2" className="carousel-item relative w-full">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-tl from-black to-transparent"></div>
          <img src={sliderImgTwo} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-outline text-white hover:bg-sky-700">
              ❮
            </a>
            <a href="#slide3" className="btn btn-outline text-white hover:bg-sky-700">
              ❯
            </a>
          </div>
          {/* slider two texts */}
          <div className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h3 className="text-3xl font-semibold text-white mb-8">
              GLITZ PAINT <span className="text-sky-700">WORKSHOP</span>
            </h3>
            <h1 className="text-white text-5xl font-bold mb-8">
              REPAINT YOUR CAR TO THE NEXT LEVEL
            </h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              illo saepe praesentium quos expedita repudiandae voluptate,
              dignissimos, assumenda reiciendis ad corporis doloribus sapiente
              maxime. Possimus omnis officiis ab exercitationem eius?
            </p>
            <button className="btn btn-outline text-white hover:bg-sky-700 mt-6">
              Discover More
            </button>
          </div>
        </div>
      </div>
      {/* slide three */}
      <div id="slide3" className="carousel-item relative w-full">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent"></div>
          <img src={sliderImgThree} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-outline text-white hover:bg-sky-700">
              ❮
            </a>
            <a href="#slide4" className="btn btn-outline text-white hover:bg-sky-700">
              ❯
            </a>
          </div>
          {/* slider three texts */}
          <div className="absolute text-center  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="">
              <h3 className="text-3xl font-semibold text-orange-600 mb-8">
                GLITZ PAINT WORKSHOP
              </h3>
              <h1 className="text-white text-5xl font-bold mb-8">
                REPAINT YOUR CAR TO THE NEXT LEVEL
              </h1>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                illo saepe praesentium quos expedita repudiandae voluptate,
                dignissimos, assumenda reiciendis ad corporis doloribus sapiente
                maxime. Possimus omnis officiis ab exercitationem eius?
              </p>
              <button className="btn btn-outline text-white hover:bg-orange-600 mt-6">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

<div id="slide2" className="carousel-item relative w-full">
  <div className="relative w-full h-full">
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
