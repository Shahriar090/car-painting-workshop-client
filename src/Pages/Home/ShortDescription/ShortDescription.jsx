import React from "react";


const ShortDescription = () => {
  return (
    <div className=" bg-sky-950 grid grid-cols-1 lg:grid-cols-3 px-12 -mt-10">
        {/* card 01 */}
      <div className="card w-96 bg-sky-950 text-white shadow-xl border-2 border-yellow-400 mx-auto">
        <div className="card-body">
          <h2 className="card-title">Awesome Painter</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-start">
            <button className="btn btn-outline text-white border-yellow-400 hover:bg-sky-700">Book Now</button>
          </div>
        </div>
      </div>
        {/* card 02 */}
      <div className="card w-96 bg-sky-950 text-white shadow-xl border-2 border-yellow-400 mx-auto">
        <div className="card-body">
          <h2 className="card-title">Best Equipment</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-start">
            <button className="btn btn-outline text-white border-yellow-400 hover:bg-sky-700">Book Now</button>
          </div>
        </div>
      </div>
        {/* card 03 */}
      <div className="card w-96 bg-sky-950 text-white shadow-xl border-2 border-yellow-400 mx-auto">
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
