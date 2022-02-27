import React from "react";
import "./features.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import wni from "../../assets/images/all_images/wni.svg";
import wn2I from "../../assets/images/all_images/wn2I.svg";
import w4i from "../../assets/images/all_images/w4i.png";
import wn3I from "../../assets/images/all_images/wn3I.svg";

export const FeaturesHotels = () => {
  //   const responsive = {
  //     desktop: {
  //       breakpoint: { max: 3000, min: 1024 },
  //       items: 3,
  //       partialVisibilityGutter: 40, // this is optional if you are not using partialVisible props
  //     },
  //     tablet: {
  //       breakpoint: { max: 1024, min: 464 },
  //       items: 2,
  //       partialVisibilityGutter: 30, // this is optional if you are not using partialVisible props
  //     },
  //     mobile: {
  //       breakpoint: { max: 464, min: 0 },
  //       items: 1,
  //       partialVisibilityGutter: 30, // this is optional if you are not using partialVisible props
  //     },
  //   };

  return (
    <div className="feturemain">
      <h2 className=" fetext">Feature Hotels</h2>
      <p className="featexp">Explore&#x3e; </p>
      <div className="container-fluid  col-11 my-5 mx-10 fetmain">
        {/* <div className="container-fluid d-flex w-100 Caroseldiv"> */}

        {/* <Carousel
          arrows={false}
          containerClass="container-padding-bottom"
          responsive={responsive}
          customButtonGroup={<CustomButtonGroup />}
        > */}
        <div className="d-flex boxes " style={{ width: "" }}>
          <img className="favhimagewid" src={wni} alt="featured1" />
          <div className="fetexplore">
            <div>
              <h5 className="feh5text">ZOSTEL KODAIKANAL</h5>
              <p className="feptext">
                Zostel Kodaikanal | Top Rated Branded Hostel in Kodaikanal
                EXPLORE.
              </p>
            </div>
            <button className="feexpbtn">EXPLORE</button>
          </div>

          {/* <img className="w-60" src={wn1} alt="featured1" /> */}
        </div>

        <div className="d-flex boxes " style={{ width: "" }}>
          <img className="w-60" src={wni} alt="featured1" />
          <div className="fetexplore">
            <div>
              <h5 className="feh5text">ZOSTEL KODAIKANAL</h5>
              <p className="feptext">
                Zostel Kodaikanal | Top Rated Branded Hostel in Kodaikanal
                EXPLORE.
              </p>
            </div>
            <button className="feexpbtn">EXPLORE</button>
          </div>

          {/* <img className="w-60" src={wn1} alt="featured1" /> */}
        </div>

        {/* </Carousel> */}
      </div>
      {/* </div> */}
    </div>
  );
};

const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }) => {
  const { totalItems, currentSlide } = carouselState;
  return (
    <div className="custom-button-group">
      <div>Current slide is {currentSlide}</div>
      <button className="nextbtn" onClick={() => previous()}>
        Previous slide
      </button>
      <button onClick={() => next()}>Next slide</button>
      <button
        onClick={() => goToSlide(Math.floor(Math.random() * totalItems + 1))}
      ></button>
    </div>
  );
};
