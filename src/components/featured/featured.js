import React from "react";
import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img className="featuredImg" src="https://www.worldatlas.com/r/w768/upload/17/7c/bf/colombo.jpg" alt="" />
        <div className="featuredTitles">
          <h1>Colombo</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img className="featuredImg" src="https://www.srilankanexpeditions.com/images/experiences/explore-kandy-town-with-a-local-lady/slider1.jpg" alt="" />
        <div className="featuredTitles">
          <h1>kandy</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img className="featuredImg" src="https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2019/02/Laxapana-Falls-in-Sri-Lanka-og.jpg" alt="" />
        <div className="featuredTitles">
          <h1>Hatton</h1>
          <h2>123 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
