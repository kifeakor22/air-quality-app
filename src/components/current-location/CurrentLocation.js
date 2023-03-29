import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const CurrentLocation = ({ name, lat, lng, country }) => {
  return (
    <div className="current-location">
      <FontAwesomeIcon icon={faLocationDot} className="icon" />
      {name}, <span className="bold">{country}</span>
      <div className="latlong">
        Latitude: {lat} Longitude: {lng}
      </div>
    </div>
  );
};

export default CurrentLocation;
