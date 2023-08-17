import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    },[])
    return (
        <div className='text-white mt-28'>
            <h1>Bookings here</h1>
            <h1>Bookings here</h1>
            <h1>Bookings here</h1>
            <h1>Bookings here</h1>
            <h1>Bookings here</h1>
            <h1>Bookings here</h1>
            <h1>Bookings here</h1>
            <h1>Bookings here</h1>
            <h1>Bookings here</h1>
            <h1>Bookings here</h1>
            <h1>Bookings here</h1>
            <h1>Bookings here</h1>
        </div>
    );
};

export default Bookings;