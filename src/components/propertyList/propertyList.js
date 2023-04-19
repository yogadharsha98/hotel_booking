import React from "react";
import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/1b/86/be/f5/heritance-ahungalla.jpg"
          alt=" "
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.adsttc.com/media/images/5f48/cef3/b357/657c/a400/00e7/large_jpg/Diyathalawa-7.jpg?1598607069"
          alt=" "
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://www.altair.lk/wp-content/uploads/2020/02/cver.jpg"
          alt=" "
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/0b/5f/f9/c8/evening-pool-view.jpg"
          alt=" "
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://www.experiencetravelgroup.com/reposit/390_20200121192810.jpg"
          alt=" "
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>233 hotels</h2>
        </div>
      </div>

    </div>
  );
};

export default PropertyList;
