import React from "react";
import "../styles/section.css";

const Section = () => {
  return (
    <div className="section">
      <div className="cards">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h2 className="card-title">148</h2>
            <p className="card-text">Projects</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h2 className="card-title">2</h2>
            <p className="card-text">Years</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h2 className="card-title">11</h2>
            <p className="card-text">Investments</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h2 className="card-title">889</h2>
            <p className="card-text">Colleagues</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
