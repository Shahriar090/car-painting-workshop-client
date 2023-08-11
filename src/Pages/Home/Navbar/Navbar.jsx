import React from "react";
import NavOptions from "./NavOptions";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-sky-950 text-white h-28">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavOptions></NavOptions>
          </ul>
        </div>
        <div className="img">
          <img
            src="https://gtkit.rometheme.pro/glitz/wp-content/uploads/sites/11/2022/10/Glitz-Logo-1.png"
            alt="" className="w-3/6"
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavOptions></NavOptions>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn btn-outline rounded-full border-2 border-white text-white hover:bg-white hover:text-sky-950 transition-colors">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
