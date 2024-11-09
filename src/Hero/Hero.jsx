import React from "react";
import "./Hero.css";
import video from "../assets/1.2.mp4";
import logo from '../assets/logo.png';
import cpu from '../assets/case-Photoroom.png';
import { useNavigate } from 'react-router-dom';

const Hero = () => {


  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Form'); 
  };


  return (
    <>
    <div className="main_hero">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="back-video"
        fetchpriority="high"
        id="responsiveVideo"
      >
        <source
          id="videoSource"
          rel="preload"
          fetchpriority="high"
          className="source-vid"
          src={video}
          type="video/mp4"
        />
      </video>
      <div className="ab">
      <div className="logo">
        <img className="logoimg" src={logo} alt="" />
      </div>
      <div className="main-content">
      <div className="content">
        <h1>WE BUILD HIGH PERFORMANCE PC FOR YOUR REQUIREMENT</h1>
        <p>If You Want <span> to Crack the System,</span><br></br>
        You Have to <span>Understand the System.🪖</span></p>
        <button onClick={handleButtonClick} >BUILD NOW</button>

      </div>
      <div className="animation">
        <img src={cpu} alt="" />
      </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Hero;
