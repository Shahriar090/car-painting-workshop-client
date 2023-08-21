import React from 'react';
import Slider from '../Slider/Slider';
import ShortDescription from '../ShortDescription/ShortDescription';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';
import Achievements from '../Achievements/Achievements';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <ShortDescription></ShortDescription>
            <AboutUs></AboutUs>
            <Services></Services>
            <Achievements></Achievements>
            <Skills></Skills>
            <Footer></Footer>
        </div>
    );
};

export default Home;