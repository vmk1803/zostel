import React from "react";
import Slider from "react-slick";
import "./zostelhome.css"


import rashil from "../../assets/images/all_images/rashil.jpg"
import tiri from "../../assets/images/all_images/tiri.jpg"
import tabo from "../../assets/images/all_images/tabo.jpg"
import sara from "../../assets/images/all_images/sara.jpg"
import pushkar from "../../assets/images/all_images/pushkar.jpg"





export const Zostelhomes = () => {



    return (
        <div className="majourdiv" >
            <div>
                <h2 className="h2text">ZOSTAL HOMES</h2>
                <p className="rxptex">Explore&#x3e; </p>
            </div>
            <div className="sliderDiv">
            <div className="whatshomeimg">
                <img className="imagehome" src={rashil} alt="" />
           
            <div className="explore">
                <div>
                <h5 className="h5zhtext">RASHIL, LAHAUL</h5>
              
                  <p className="ptext">
                  A red chalet perched upon a lush green hill, surrounded by houses and vibrant fields, with a dusty brown backdrop of snow-capped mountains, and a river flowing by
                  </p>
                </div>
                <button className="explbtn">EXPLORE</button>
              </div>
              </div>

              <div className="whatshomeimg">
                <img className="imagehome" src={tiri} alt="" />
           
            <div className="explore">
                <div>
                <h5 className="h5zhtext">RASHIL, LAHAUL</h5>
              
                  <p className="ptext">
                  A red chalet perched upon a lush green hill, surrounded by houses and vibrant fields, with a dusty brown backdrop of snow-capped mountains, and a river flowing by
                  </p>
                </div>
                <button className="explbtn">EXPLORE</button>
              </div>
              </div>

              <div className="whatshomeimg">
                <img className="imagehome" src={sara} alt="" />
           
            <div className="explore">
                <div>
                <h5 className="h5zhtext">RASHIL, LAHAUL</h5>
              
                  <p className="ptext">
                  A red chalet perched upon a lush green hill, surrounded by houses and vibrant fields, with a dusty brown backdrop of snow-capped mountains, and a river flowing by
                  </p>
                </div>
                <button className="explbtn">EXPLORE</button>
              </div>
              </div>

              <div className="whatshomeimg">
                <img className="imagehome" src={tabo} alt="" />
           
            <div className="explore">
                <div>
                <h5 className="h5zhtext">RASHIL, LAHAUL</h5>
              
                  <p className="ptext">
                  A red chalet perched upon a lush green hill, surrounded by houses and vibrant fields, with a dusty brown backdrop of snow-capped mountains, and a river flowing by
                  </p>
                </div>
                <button className="explbtn">EXPLORE</button>
              </div>
              </div>

              <div className="whatshomeimg">
                <img className="imagehome" src={pushkar} alt="" />
           
            <div className="explore">
                <div>
                <h5 className="h5zhtext">RASHIL, LAHAUL</h5>
              
                  <p className="ptext">
                  A red chalet perched upon a lush green hill, surrounded by houses and vibrant fields, with a dusty brown backdrop of snow-capped mountains, and a river flowing by
                  </p>
                </div>
                <button className="explbtn">EXPLORE</button>
              </div>
              </div>

</div>
        </div>
    );
}


