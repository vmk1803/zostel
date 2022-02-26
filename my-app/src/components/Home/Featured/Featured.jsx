import React from "react";
import "../Featured/Feature.css";
import featured1 from "../../../assets/images/Featured1.svg";
export const Featured = () => {
  return (
    <div>
      <h2>FEATURED HOSTELS</h2>
       <div className="div1"> 
      <div >
      <img
            className=""
            style={{ width: "32%" }}
            src={featured1}
            alt="featured1"
          />
            <h3> ZOSTEL KODAIKANAL </h3>
          <h4> Zostel Kodaikanal | Top Rated Branded Hostel in Kodaikanal</h4>
          </div>
        {/* <div className="featured-div1"> */}
      
        {/* </div> */}
      </div>
    </div>
  );
};
