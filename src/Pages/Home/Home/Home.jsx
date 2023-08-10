import React from 'react';
import Slider from '../Slider/Slider';
import ShortDescription from '../ShortDescription/ShortDescription';
import AboutUs from '../AboutUs/AboutUs';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <ShortDescription></ShortDescription>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;