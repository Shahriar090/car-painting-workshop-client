import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingsRow from "./BookingsRow";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

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

  const handleDelete = (id) => {
    // const proceed = confirm('Are You Sure You Want To Delete?')
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        Swal.fire("Deleted!", "Your booking has been deleted.", "success");
        const remaining = bookings.filter((booking) => booking._id !== id);
        setBookings(remaining);
      }
    });
  };

  // TODO : Declare the update booking function and send it as props

  const handleUpdateBooking = (id)=>{
    fetch(`http://localhost:5000/bookings/${id}`,{
      method: 'PATCH',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({status : 'Confirm'})
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.modifiedCount > 0){
        // toast.success('Updated Successful')
        
        const remaining = bookings.filter(booking=>booking._id !== id);
        const updated = bookings.find(booking => booking._id === id);
        updated.status = 'Confirm'
        const newBookings = [updated, ...remaining]
        setBookings(newBookings);
      }
    })
  }
 
  return (
    <div className="text-white mt-0 lg:mt-1">
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center pt-5 font-bold uppercase underline mb-16">
        Your Bookings :{" "}
        <span className="text-orange-600 ">{bookings.length}</span>
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-white text-l md:text-xl lg:text-xl xl:text-2xl ">
            <tr>
              <th className="border-2 border-orange-600 md:border-0 lg:border-0 xl:border-0 font-bold">
                <label>
                  {/* <input type="checkbox" className="checkbox" /> */}
                  <th>Delete</th>
                </label>
              </th>
              <th className="border-2 border-orange-600 md:border-0 lg:border-0 xl:border-0 font-bold">Your Service & Booked Date</th>
              <th className="border-2 border-orange-600 md:border-0 lg:border-0 xl:border-0 font-bold">Your Name & Email</th>
              <th className="border-2 border-orange-600 md:border-0 lg:border-0 xl:border-0 font-bold">Your Service Price</th>
              <th className="border-2 border-orange-600 md:border-0 lg:border-0 xl:border-0 font-bold">View Details</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingsRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleUpdateBooking={handleUpdateBooking}
              ></BookingsRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
