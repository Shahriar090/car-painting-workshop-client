import React from "react";
import { Link } from "react-router-dom";

const NavOptions = () => {
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

      {/* about us dropdown */}
      {/* <li className="">
        <details className="dropdown mb-10 lg:mb-32">
          <summary className="m-1 btn btn-sm border-0  transition-colors hover:bg-sky-950 hover:text-white">
            About Us
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-sky-950 rounded-box w-full border-2 border-white">
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Our Team</a>
            </li>
          </ul>
        </details>
      </li> */}
      {/* services dropdown */}
      {/* <li>
        <details className="dropdown mb-10 lg:mb-32">
          <summary className="m-1 btn btn-sm border-0 transition-colors hover:bg-sky-950 hover:text-white">
            Services
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-sky-950 rounded-box w-full border-2 border-white">
            <li>
              <a>Service</a>
            </li>
            <li>
              <a>Service Details</a>
            </li>
          </ul>
        </details>
      </li> */}
      {/* pages dropdown */}
      {/* <li>
        <details className="dropdown mb-10 lg:mb-32">
          <summary className="m-1 btn btn-sm border-0 transition-colors hover:bg-sky-950 hover:text-white">
            Pages
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-sky-950 rounded-box w-full border-2 border-white">
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Gallery</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </details>
      </li> */}
      <li className="text-lg font-semibold">
        <Link className="bg-base-200 text-black lg:bg-sky-950 lg:text-white  lg:hover:bg-white lg:hover:text-sky-950 transition-colors">
          {" "}
          Contact Us
        </Link>
      </li>
    </div>
  );
};

export default NavOptions;
