import React from "react";
import "../styles/main.css";
import Lottie from "lottie-react";
import animationData from "../assets/animation.json";
import { FaHandsHelping } from "react-icons/fa";

const Main = () => {
  return (
    <div className="main">
      <div className="main_content">
        <div className="animation_container">
          <Lottie
            animationData={animationData}
            className="background_animation"
          />
          <div className="overlay_content">
            <h3>YOUR DREAM! OUR DESTINY!</h3>
            <h1>OCTANET</h1>
            <button>
              <FaHandsHelping />
              OUR SERVICES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
