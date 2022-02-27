import React from "react";
import "./whatsnew.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import wni from "../../../assets/images/all_images/wni.svg";
import wn2I from "../../../assets/images/all_images/wn2I.svg";
import w4i from "../../../assets/images/all_images/w4i.png";
import wn3I from "../../../assets/images/all_images/wn3I.svg";

export const WhatsNew = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40, // this is optional if you are not using partialVisible props
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30, // this is optional if you are not using partialVisible props
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30, // this is optional if you are not using partialVisible props
    },
  };

  return (
    <>
      <h2 className=" text">What's New</h2>
      <p className="whatexp">Explore&#x3e; </p>
      <div className="container-fluid  col-11 my-5 mx-10 main">
       

        {/* <div className="container-fluid d-flex w-100 Caroseldiv"> */}

        <Carousel
          arrows={false}
          containerClass="container-padding-bottom"
          responsive={responsive}
          customButtonGroup={<CustomButtonGroup />}
        >
          <div className="d-flex boxes " style={{ width: "" }}>
            <img className="w-60" src={wni} alt="featured1" />
            <div className="explore">
              <div>
                <h6 className="h6text">Launch</h6>
                <br />
                <h5 className="h5text">ZOSTEL - BACK IN DALHOUSIE!</h5>
                <p className="ptext">
                  Bringing back our hostel in Dalhousie after a great revamp!
                  Your holiday in this beautiful town of Chamba valley got all
                  the more bright, comfy, and happening.
                </p>
              </div>
              <button className="expbtn">EXPLORE</button>
            </div>

            {/* <img className="w-60" src={wn1} alt="featured1" /> */}
          </div>

          <div
            className="d-flex onebox"
            style={{ width: "", marginLeft: "27%" }}
          >
            <img className="w-90" src={wn2I} alt="featured1" />
            <div className="explore">
              <div>
                <h6 className="h6text">Launch</h6>
                <br />
                <h5 className="h5text">ZOSTEL - BACK IN DALHOUSIE!</h5>
                <p className="ptext">
                  Bringing back our hostel in Dalhousie after a great revamp!
                  Your holiday in this beautiful town of Chamba valley got all
                  the more bright, comfy, and happening.
                </p>
              </div>
              <button className="expbtn">EXPLORE</button>
            </div>
          </div>

          <div className="d-flex" style={{ width: "", marginLeft: "53%" }}>
            <img className="w-90" src={wn3I} alt="featured1" />
            <div className="explore">
              <div>
                <h6 className="h6text">Launch</h6>
                <br />
                <h5 className="h5text">ZOSTEL - BACK IN DALHOUSIE!</h5>
                <p className="ptext">
                  Bringing back our hostel in Dalhousie after a great revamp!
                  Your holiday in this beautiful town of Chamba valley got all
                  the more bright, comfy, and happening.
                </p>
              </div>
              <button className="expbtn">EXPLORE</button>
            </div>
          </div>
          <div className="d-flex" style={{ width: "", marginLeft: "80%" }}>
            <img className="w-90" src={w4i} alt="featured1" />
            <div className="explore">
              <div>
                <h6 className="h6text">Launch</h6>
                <br />
                <h5 className="h5text">ZOSTEL - BACK IN DALHOUSIE!</h5>
                <p className="ptext">
                  Bringing back our hostel in Dalhousie after a great revamp!
                  Your holiday in this beautiful town of Chamba valley got all
                  the more bright, comfy, and happening.
                </p>
              </div>
              <button className="expbtn">EXPLORE</button>
            </div>
          </div>
        </Carousel>
      </div>
      {/* </div> */}
    </>
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
