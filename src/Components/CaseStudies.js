import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../Styles/main.css";
import fixImageUrls from "../helper";

const apiLink =
  "https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/";

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 10,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function CaseStudies() {
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
      <h1 className="section-topic">Case Studies</h1>
      <Slider {...sliderSettings}>
        {fixedData.map((item, index) => (
          <div key={index} className="slider-item">
            <img src={item.imageUrl} alt={item.title} className="image" />
            <div className="slider-content">
              <h2 className="title">{item.title}</h2>
              <p className="description">{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CaseStudies;
