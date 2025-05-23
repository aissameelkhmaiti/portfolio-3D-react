import React from "react";
import { Link } from "react-router-dom";
import linkedin from "../assets/linkedin.svg";
import {  github } from "../assets";
import insta from "../assets/insta.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6 mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        
        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/aissame-elkhmaiti/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className='w-9 h-9 hover:opacity-80 transition' />
          </a>
          <a href="https://github.com/aissameelkhmaiti" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className='w-9 h-9 hover:opacity-80 transition' />
          </a>
          <a href="https://www.instagram.com/aissame_elkhmaiti/" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="X" className='w-9 h-9 hover:opacity-80 transition' />
          </a>
        </div>
        
        {/* Copyright & Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Aissame Elkhmaiti. All rights reserved.
          </p>
         
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
