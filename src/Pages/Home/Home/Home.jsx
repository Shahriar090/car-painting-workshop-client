import React from 'react';
import Slider from '../Slider/Slider';
import ShortDescription from '../ShortDescription/ShortDescription';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <ShortDescription></ShortDescription>
            <AboutUs></AboutUs>
            <Services></Services>
        </div>
    );
};

export default Home;