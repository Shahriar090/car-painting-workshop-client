import React from "react";
import bgImage from "../../assets/login-page.jpg";
import { Link } from "react-router-dom";

const Login = () => {

    const handleLogin = (event)=>{
        event.preventDefault()
    }
  return (
    <div className="hero min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-95"></div>
      <div
        className="hero min-h-screen bg-cover bg-center bg-sky-950 text-white"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center m-10 border-b-2 border-orange-600 p-8 uppercase">
              Please Login Here
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparent border-4 border-orange-600">
            <div className="card-body ">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-orange-600">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered text-black"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-orange-600">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered text-black"
                  />
                  <label className="label">
                    <a
                      href="#"
                      className="label-text-alt link link-hover text-orange-600"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-outline text-white hover:bg-orange-600 border-orange-600"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <p className="mt-3">New Here? <Link to='/signUp' className="text-orange-600 font-semibold underline">Sign Up</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


