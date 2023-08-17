import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const NavOptions = () => {
  const {user} = useContext(AuthContext);
  return (
    <div className="flex flex-col lg:flex-row gap-0 lg:gap-9 ">
      <li className="text-lg font-semibold">
        <Link className="bg-base-200 text-black lg:bg-sky-950 lg:text-white lg:hover:bg-white lg:hover:text-sky-950 transition-colors">
          <a>Home</a>
        </Link>
      </li>
      <li className="text-lg font-semibold">
        <Link className="bg-base-200 text-black lg:bg-sky-950 lg:text-white lg:hover:bg-white lg:hover:text-sky-950 transition-colors">
          <a>About Us</a>
        </Link>
      </li>
      <li className="text-lg font-semibold">
        <Link className="bg-base-200 text-black lg:bg-sky-950 lg:text-white lg:hover:bg-white lg:hover:text-sky-950 transition-colors">
          <a>Services</a>
        </Link>
      </li>

    
      <li className="text-lg font-semibold">
        <Link className="bg-base-200 text-black lg:bg-sky-950 lg:text-white  lg:hover:bg-white lg:hover:text-sky-950 transition-colors">
          {" "}
          Contact Us
        </Link>
      </li>
      <li className="text-lg font-semibold">
        {
          user?.email? <Link to='/bookings' className="bg-base-200 text-black lg:bg-sky-950 lg:text-white  lg:hover:bg-white lg:hover:text-sky-950 transition-colors">
          {" "}
          Bookings
        </Link> :

        <></>
        }
      </li>
    </div>
  );
};

export default NavOptions;
