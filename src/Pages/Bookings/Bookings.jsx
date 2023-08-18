import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingsRow from "./BookingsRow";


const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, []);
  return (
    <div className="text-white mt-5">
      <h1 className="text-5xl text-center pt-5 font-bold uppercase underline mb-16">Your Bookings : <span className="text-orange-600 ">{bookings.length}</span></h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-white text-xl font-bold">
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Your Service & Booked Date</th>
              <th>Your Name & Email</th>
              <th>Your Service Price</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
          {
            bookings.map(booking=> <BookingsRow
            key={booking._id}
            booking={booking}
            ></BookingsRow>)
          }
            
            
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default Bookings;
