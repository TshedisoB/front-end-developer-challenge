import React from "react";

import "../styles/main.css";

export default function NavBar() {
  const handleViewProject = () => {
    window.open("https://projects-5584f.web.app/", "_blank");
  };

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
          <button className="cta-btn" onClick={handleViewProject}>
            View project
          </button>
        </div>
      </div>
    </div>
  );
}
