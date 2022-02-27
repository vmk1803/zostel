import React from "react";

import "./Escape.css";

export const Escape = () => {
  return (
    <div className="majourdiv">
      <div>
        <h2 className="h2text">ZOSTAL ESCAPE</h2>
        <p className="rxptex">Explore&#x3e; </p>
      </div>

      <div className="whatshomeimg">
        <img
          className="imagehome"
          src="https://img.cdn.zostel.com/cache/_a26f4db00aef86dfdcf3b03f09443eb5/image_26_500x400.jpg"
          alt=""
        />

        <div className="explore">
          <div>
            <h5 className="h5zhtext">ADVENTURE | JAISALMARE</h5>
            <h5 style={{ marginTop: "-15px", textAlign: "left", color: "#43474b"}}>DESERT SAFARI </h5>

            <div className="inside-content">
              <div className="left-content"> 
              <p> 2500</p> 
               <p className="left-contentt"> onwards </p>
               </div>
                  
              <div className="right-content">
            
              <p> <span> <img className="rating-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq6TtjLMujm_STXm6zFgucfG2yu1Xoxxw" />  </span>  4.9 Rating</p>
              <p > 1 Days </p>
              <p > 12 Reviews </p>
              </div>
            </div>
          </div>
          <button className="explbtn">EXPLORE</button>
     
        </div>
      </div>
    </div>
    
    );
    
      
};
