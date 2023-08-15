import React from "react";
import { useLoaderData } from "react-router-dom";
// import img from "../../assets/slider-01.jpg"
import bgImg from "./../../assets/checkout-page.jpg";

const Checkout = () => {
  const service = useLoaderData();
  const { _id, title, price } = service;
  return (
    <div className="hero min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-black to-sky-950 opacity-60"></div>
      <div
        className="hero min-h-screen bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="hero-content flex-col">
          <h1 className="text-5xl text-white  p-12">Book Service : <span className="text-orange-600 underline">{title}</span></h1>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparent border-4 border-orange-600 p-8 bg-black opacity-80">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-white">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white ">Date</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Due</span>
                  </label>
                  <input
                    type="text"
                    name="due"
                    placeholder="password"
                    defaultValue={'$'+price}
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-outline btn-block  text-white hover:bg-orange-600 border-orange-600"
                  value="Confirm Order"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
