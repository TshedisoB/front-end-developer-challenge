import React from "react";

import "../Styles/main.css";

export default function WhatWeDo() {
  return (
    <div className="what-we-do-container">
      <div className="what-we-do-header">
        <div className="section-header">
          <h2>What we do</h2>
        </div>
        <p>
          We offer a complete range of bespoke design and development services
          to help you turn your ideas into digital masterpieces.
        </p>
      </div>
      <div className="what-we-do-content">
        <div className="what-we-do-item">
          <div className="what-we-do-item-logo"></div>
          <h3>Web development</h3>
          <p>
            We help you define your business goals and technical requirements,
            and create a strategy to deliver them.
          </p>
        </div>
        <div className="what-we-do-item">
          <div className="what-we-do-item-logo"></div>
          <h3>User experience & design</h3>
          <p>
            We create beautiful, intuitive user interfaces that your customers
            will love to use.
          </p>
        </div>
        <div className="what-we-do-item">
          <div className="what-we-do-item-logo"></div>
          <h3>Mobile app development</h3>
          <p>
            We build scalable, secure and robust web applications that are
            tailored to your needs.
          </p>
        </div>
        <div className="what-we-do-item">
          <div className="what-we-do-item-logo"></div>
          <h3>Blockchain solutions</h3>
          <p>
            We offer a range of support and maintenance packages to keep your
            website running smoothly.
          </p>
        </div>
      </div>
    </div>
  );
}
