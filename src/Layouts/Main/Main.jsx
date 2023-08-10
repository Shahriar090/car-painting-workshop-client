import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Home/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-sky-950'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;