import React from "react";

import brands from "../data/brands.json";
import "../styles/main.css";

export default function TrustedBrands() {
  return (
    <div className="brands-container">
      <div className="section-header">
        <div className="rectangle"></div>
        <h2>You'll be in good company</h2>
      </div>

      <h1 className="brands-statement">Trusted by leading Brands</h1>

      <div className="logos-container">
        {brands.map((imageUrl, index) => (
          <div key={index} className="brand-item">
            <img
              src={imageUrl.location}
              alt={`Brand${index + 1}`}
              className="brand-logo"
              style={{ width: "220px", height: "220px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
