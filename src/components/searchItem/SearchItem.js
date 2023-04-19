import React from "react";
import "./SearchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src="https://media-cdn.tripadvisor.com/media/photo-s/1b/86/be/f5/heritance-ahungalla.jpg" alt="item1" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">Main street Apartment</h1>
        <span className="siDistance">500m form center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Appartment with air conditioning
        </span>
        <span className="siFeatures">
          Entire Studio + 1 bathroom + 21m^2 1 full bed
        </span>
        <span className="siCancelOp">Free cancelation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this greate price today!
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

export default SearchItem;
