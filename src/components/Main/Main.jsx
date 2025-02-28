import React, { useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Human</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>
              If you could instantly become an expert in any skill, what would
              it be and why?
            </p>
            <img src={assets.compass_icon} alt="Compass" />
          </div>
          <div className="card">
            <p>
              What is a small change someone could make in their daily routine
              to significantly improve their life?
            </p>
            <img src={assets.bulb_icon} alt="Bulb" />
          </div>
          <div className="card">
            <p>
              If animals could talk, which species would have the most
              interesting stories to tell?
            </p>
            <img src={assets.message_icon} alt="Message" />
          </div>
          <div className="card">
            <p>
              What fictional world would you most like to live in, and what role
              would you play?
            </p>
            <img src={assets.code_icon} alt="Code" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Ask Gemini" />
            <div className="search-icons">
              <img src={assets.gallery_icon} alt="Gallery" />
              <img src={assets.mic_icon} alt="Microphone" />
              <img src={assets.send_icon} alt="Send" />
            </div>
          </div>
          <p className="bottom-info">Gemini can make mistakes, so double-check it</p>
        </div>
      </div>
    </div>
  );
};

export default Main;