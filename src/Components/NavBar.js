import React from "react";

import "../Styles/main.css";

export const NavBar = () => {
  return (
    <div className="navigation-container">
      <div className="header-container">
        <nav>
          <div className="app-logo"></div>

          <ul className="nav-links">
            <li>
              <a
                href="https://www.accenture.com"
                target="_blank"
                rel="noreferrer">
                Services
              </a>
            </li>
            <li>
              <a
                href="https://www.accenture.com"
                target="_blank"
                rel="noreferrer">
                Industry
              </a>
            </li>
            <li>
              <a
                href="https://www.accenture.com"
                target="_blank"
                rel="noreferrer">
                Cases
              </a>
            </li>
            <li>
              <a
                href="https://www.accenture.com"
                target="_blank"
                rel="noreferrer">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button className="primary-btn">Let's Talk</button>
      </div>

      <div className="hero-container">
        <div className="hero-text">
          <h2>Live with Confidence</h2>
          <p>José Mourinho brings confidence to pan-African Sanlam campaign.</p>
          <button className="cta-btn">View project</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
