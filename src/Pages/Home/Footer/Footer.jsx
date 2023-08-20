import React from 'react';

const Footer = () => {
    return (
        <div className='pt-5'>
        <footer className="footer p-10 bg-sky-950 border-2 border-orange-600 text-base-content">
  <div>
  <img
            src="https://gtkit.rometheme.pro/glitz/wp-content/uploads/sites/11/2022/10/Glitz-Logo-1.png"
            alt="" className="h-20 w-48"
          />
    <p className='text-white'>Hero Motor Industries Ltd.<br/>Providing reliable Vehicle Instruments & Paints since 1992</p>
  </div> 
  <div className='text-white'>
    <span className="footer-title text-orange-600">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div className='text-white'>
    <span className="footer-title text-orange-600">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div className='text-white'>
    <span className="footer-title text-orange-600">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
 </footer>
<div className="footer border-b-2 border-orange-600 footer-center p-4 bg-gradient-to-l from-black to-sky-950  text-white">
  <div>
    <p>Copyright © 2023 - All right reserved by Hero Motors Industries Ltd</p>
  </div>
</div>
</div>
    );
};

export default Footer;