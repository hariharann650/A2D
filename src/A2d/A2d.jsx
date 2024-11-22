import React from "react";
import "./a2d.css";
import ai from '../assets/images/ai.jpeg';
import caben from '../assets/images/caben.jpeg';
import gpu from '../assets/images/gpu.jpeg';
import gpu2 from '../assets/images/gpu2.jpeg';
import graphics from '../assets/images/graphics card.jpg';
import motherboard from '../assets/images/mother board.jpeg';
import ram from '../assets/images/ram.jpeg';
import rom from '../assets/images/rom.jpeg';
import rom2 from '../assets/images/rom1.jpeg';
import diff from '../assets/images/rom1.jpeg';
// import robot from '../assets/images/robot.png';
const A2d = () => {
  return (
    <div className="banner">
      <div className="slider" style={{ "--quantity": 10 }}>
        <div className="item" style={{ "--position": 1 }}>
          <img src={ai} alt="ai" />
        </div>
        <div className="item" style={{ "--position": 2 }}>
          <img src={caben} alt="cabenimage" />
        </div>
        <div className="item" style={{ "--position": 3 }}>
          <img src={gpu} alt="gpu" />
        </div>
        <div className="item" style={{ "--position": 4 }}>
          <img src={gpu2} alt="gpu2" />
        </div>
        <div className="item" style={{ "--position": 5 }}>
          <img src={graphics} alt="graphics" />
        </div>
        <div className="item" style={{ "--position": 6 }}>
          <img src={motherboard} alt="motherboard" />
        </div>
        <div className="item" style={{ "--position": 7 }}>
          <img src={rom} alt="ram" />
        </div>
        <div className="item" style={{ "--position": 8 }}>
          <img src={rom2} alt="rom" />
        </div>
        <div className="item" style={{ "--position": 9 }}>
          <img src={ram} alt="rom1" />
        </div>
        <div className="item" style={{ "--position": 10 }}>
          <img src={diff} alt="nothingjustimage" />
        </div>
      </div>
      <div className="content2">
        <h1 data-content="A2D PC Factory">A2D PC Factory</h1>
        <div className="author">
          {/* <h2>PC DOC</h2> */}
          <p>
            <b className="soldiers">Hi soldier's</b>
          </p>
          <p className="buildpc">Build Your Dream PC's With Us</p>
        </div>
        <div className="model">
          {/* <img src={robot} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default A2d;
