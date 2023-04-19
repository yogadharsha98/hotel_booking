import React from "react";
import "./FligthSearchItem.css";

const FlightSearchItem = () => {
  return (
    <div className="searchItem">
      <img src="https://img.freepik.com/free-vector/airplane-sky_1308-31202.jpg?w=2000" alt="item1" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">ABC Airlines</h1>
        <span className="siDistance">Destination- India</span>
        <span className="siSubtitle">
          Arival Time : 8.00 am
        </span>
        <span className="siSubtitle">
          Departure Time : 10.00 am
        </span>
        <span className="siSubtitle">
          Reached : 3.00 pm
        </span>
        
      </div>
      <div className="siDetails">
        <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className="siDetailTexts">
            <span className="siPrice">$124</span>
            <button className="siCheckButton">See availability</button>
        </div>
      </div>

    </div>
  );
};

export default FlightSearchItem;
