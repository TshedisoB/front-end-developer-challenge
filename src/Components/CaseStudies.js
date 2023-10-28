import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

  if (!data) return <div>Loading images...</div>;

  let fixedData = fixImageUrls(data);

  const settings = {
    dots: false,
    infinite: true,
    speed: 3500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="case-studies-container">
      <div className="section-header">
        <div className="rectangle"></div>
        <h2>Case Studies</h2>
      </div>
      <Slider {...settings}>
        {fixedData.map((item, index) => (
          <div key={index} className="horizontal-image">
            <img src={item.imageUrl} alt={item.title} className="image" />
            <div className="image-details" style={{ margin: "15px" }}>
              <div className="rectangle-case-study"></div>
              <h2 className="title">{item.title}</h2>
              <p className="description">{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
