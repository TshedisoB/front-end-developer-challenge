import React, { useEffect, useState } from "react";
import axios from "axios";

import fixImageUrls from "../helper";

const apiLink =
  "https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/";

export default function CaseStudies() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(apiLink)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        throw new Error(`Error fetching data: ${JSON.stringify(error)}`);
      });
  }, []);

  if (!data) return null;

  let fixedData = fixImageUrls(data);

  return (
    <div className="case-studies-container">
      <div className="section-header">
        <div className="rectangle"></div>
        <h2>Case Studies</h2>
      </div>
      <div className="horizontal-images">
        {fixedData.map((item, index) => (
          <div key={index} className="horizontal-image">
            <img src={item.imageUrl} alt={item.title} className="image" />
            <div className="image-details">
              <div className="rectangle-case-study"></div>
              <h2 className="title">{item.title}</h2>
              <p className="description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
