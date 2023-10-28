import React from "react";

import "../styles/main.css";
import data from "../data/whatWeDoData.json";

export default function WhatWeDo() {
  return (
    <div className="what-we-do-container">
      <div className="what-we-do-header">
        <div className="section-header">
          <div className="rectangle"></div>
          <h2>What we do</h2>
        </div>
        <p className="what-we-do-description">
          We offer a complete range of bespoke design and development services
          to help you turn your ideas into digital masterpieces.
        </p>
      </div>
      <div className="what-we-do-content">
        {data.map((item, index) => (
          <div className="what-we-do-item" key={index}>
            <div className="what-we-do-item-logo">
              <img src={item.logo} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
