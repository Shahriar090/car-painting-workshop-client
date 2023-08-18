import React from "react";

const BookingsRow = ({ booking, handleDelete }) => {
  const { customerName, _id, email, img, date, service, price } = booking;
  console.log(booking);
  return (
    <>
      <tr>
        <th>
          <button onClick={()=> handleDelete(_id)} className="btn  btn-xs sm:btn-sm md:btn-md lg:btn-md btn-circle btn-outline  border-red-600 hover:bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="w-24 h-24 rounded">
              {<img src={img} alt="Loading" />}
            </div>

            <div>
              <div className="font-bold">{service}</div>
              <div className="text-sm opacity-50">Date : {date}</div>
            </div>
          </div>
        </td>
        <td className="text-lg">
          Customer Name :{" "}
          <span className="text-orange-600 font-semibold">{customerName}</span>
          <br />
          <span className="text-sm">
            Customer Email :{" "}
            <span className="text-orange-600 font-semibold underline">
              {" "}
              {email}
            </span>
          </span>
        </td>
        <td>{price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </>
  );
};

export default BookingsRow;
