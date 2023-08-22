import React from 'react';
import imgOne from '../../../assets/project-01.jpg'
import imgTwo from '../../../assets/project-02.jpg'
import imgThree from '../../../assets/project-03.jpg'

const Portfolio = () => {
    return (
        <div>
            <div className="text text-center mt-5">
                <h3 className='text-orange-600 font-semibold text-3xl uppercase'>Portfolio</h3>
                <h1 className='text-5xl text-white font-bold uppercase m-3'>Some Of Our Projects</h1>
                <p className='text-white max-w-lg mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem enim minus numquam, nobis amet mollitia, officia provident voluptate ab eligendi dolorum, iste dicta nesciunt ea tempora illum eaque. Quam.</p>
            </div>

            <section>
                <div className="projects">
                    {/* 01 */}
                <div className="collapse bg-sky-950 text-white shadow-xl shadow-sky-700 w-9/12 mx-auto m-5">
  <input type="radio" name="my-accordion-1" checked="checked" /> 
  <div className="collapse-title text-xl font-medium ">
  Click to open this one.
  </div>
  <div className="collapse-content mx-auto flex flex-col md:flex-row lg:flex-row gap-10 "> 
  <div className="img">
        <img src={imgOne} alt="Loading" className='rounded-lg'/>
  </div>
  <div className="text">
        <h1 className='text-orange-600 text-2xl font-bold uppercase'>Ivory White City Car Project</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dicta ad molestias voluptate quas, eveniet obcaecati perspiciatis! Vero, voluptas libero!</p>
        <button className='btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-l text-white border-orange-600 mt-2'>Read More</button>
  </div>
  </div>
</div>
{/* 02 */}
<div className="collapse bg-sky-950 text-white shadow-xl shadow-sky-700 w-9/12 mx-auto">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one.
  </div>
  <div className="collapse-content mx-auto flex flex-col md:flex-row lg:flex-row gap-10"> 
  <div className="img">
        <img src={imgTwo} alt="Loading" className='rounded-lg'/>
  </div>
  <div className="text">
        <h1 className='text-orange-600 text-2xl font-bold uppercase'>Audi R8 Car Project</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dicta ad molestias voluptate quas, eveniet obcaecati perspiciatis! Vero, voluptas libero!</p>
        <button className='btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-l text-white border-orange-600 mt-2'>Read More</button>
  </div>
  </div>
</div>
{/* 03 */}
<div className="collapse bg-sky-950 text-white shadow-xl shadow-sky-700 w-9/12 mx-auto m-5">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
  Click to open this one.
  </div>
  <div className="collapse-content mx-auto flex flex-col md:flex-row lg:flex-row gap-10"> 
  <div className="img">
        <img src={imgThree} alt="Loading" className='rounded-lg'/>
  </div>
  <div className="text">
        <h1 className='text-orange-600 text-2xl font-bold uppercase'>BMW I8 Car Project</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dicta ad molestias voluptate quas, eveniet obcaecati perspiciatis! Vero, voluptas libero!</p>
        <button className='btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-l text-white border-orange-600 mt-2'>Read More</button>
  </div>
  </div>
</div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;