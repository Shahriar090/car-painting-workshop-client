import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
// import img from "../../assets/slider-01.jpg"
import bgImg from "./../../assets/checkout-page.jpg";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Checkout = () => {
  const service = useLoaderData();
  const { _id, title, price, img } = service;
  const {user} = useContext(AuthContext);

  const handleBookService = (event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    
    const booking = {
      customerName:name,
      date,
      img,
      email,
      service : title,
      serviceId_id : _id
    }
    console.log(booking);

    fetch('http://localhost:5000/bookings',{
     method: 'POST',
     headers:{
      'content-type' : 'application/json',
     },
     body: JSON.stringify(booking)
      
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);

      if(data.insertedId){
        toast.success("Booking successful!");
      }
      else{
        toast.error("Booking failed. Please try again.");
      }
    })

    
    
  }
  return (
    <div className="hero min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-black to-sky-950 opacity-90"></div>
      <div
        className="hero min-h-screen bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="hero-content flex-col">
          <h1 className="text-3xl lg:text-5xl text-white  lg:p-12">Book Your Service : <span className="text-orange-600 underline">{title}</span></h1>
          <div className="card flex-shrink-0 w-full mx-auto max-w-sm md:max-w-2xl lg:max-w-4xl shadow-2xl bg-transparent border-4 border-orange-600 p-8 bg-black opacity-80">
            <form onSubmit={handleBookService}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-white">User Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    defaultValue={user?.displayName}
                    className="input input-bordered border-orange-600"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-white ">Date</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    placeholder="password"
                    className="input input-bordered border-orange-600"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={user?.email}
                    placeholder="email"
                    className="input input-bordered border-orange-600"
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
                    className="input input-bordered border-orange-600"
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-outline btn-block text-white hover:bg-orange-600 border-orange-600"
                  value="Confirm Order"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Checkout;
