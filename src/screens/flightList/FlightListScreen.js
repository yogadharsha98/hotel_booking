import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import "./FlightListScreen.css";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import FlightSearchItem from "../../components/flightSearchItem/FlightSearchItem";

const FlightListScreen = () => {
  const [openDate, setOpenDate] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" />
            </div>
            <div className="lsItem">
              <label>Checkin date</label>
              <span></span>

            </div>

            <button>Search</button>
          </div>
          <div className="listResult">
            <FlightSearchItem />
            <FlightSearchItem />
            <FlightSearchItem />
            <FlightSearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightListScreen;
