import React, { useContext } from 'react';
import bgImage from "../../assets/login-page.jpg"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
    .then(result =>{
        const user = result.user
        console.log(user);
        toast.success('User created successfully!');
    })
    .catch(error=>{
        console.log(error);
        toast.error('Error creating user.');
    })
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
              Please Sign Up Here
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparent border-4 border-orange-600">
            <div className="card-body ">
              <form onSubmit={handleSignUp}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-orange-600">Name</span>
                  </label>
                  <input
                    type="text"
                    name='name'
                    placeholder="name"
                    className="input input-bordered text-black"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-orange-600">Email</span>
                  </label>
                  <input
                    type="email"
                    name='email'
                    placeholder="email"
                    className="input input-bordered text-black"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-orange-600">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    name='password'
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
                    value="Sign Up"
                  />
                </div>
              </form>
              <p className="mt-3">Already Have An Account? <Link to='/login' className="text-orange-600 font-semibold underline">Login</Link></p>
            </div>
          </div>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
    );
};

export default SignUp;