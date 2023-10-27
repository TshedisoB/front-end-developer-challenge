import React from "react";

import brands from "../data/brands.json";
import "../Styles/main.css";

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
            <img src={imageUrl.location} alt={`Brand${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
