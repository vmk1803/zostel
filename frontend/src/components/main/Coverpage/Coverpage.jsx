import React from "react";

import { Carousel } from "react-bootstrap";

import landingPic1 from "../assets/images/all_images/Landing_Page_Photo1.svg";
import landingPic2 from "../assets/images/all_images/landingpage2.svg";
import landingPic3 from "../assets/images/all_images/landingpage3.svg";
import landingPic4 from "../assets/images/all_images/landingpage4.svg";
import landingPic5 from "../assets/images/all_images/landingpage5.svg";

// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../../../../node_modules/bootstrap/uti";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
export const CoverPage = () => {
  return (
    <div className="imageContainer">
      <Carousel fade>
        <Carousel.Item interval={500}>
          <img className="imageshow" src={landingPic1} alt="" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="imageshow" src={landingPic2} height="100%" alt="" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="imageshow" src={landingPic3} height="100%" alt="" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="imageshow" src={landingPic4} height="100%" alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
