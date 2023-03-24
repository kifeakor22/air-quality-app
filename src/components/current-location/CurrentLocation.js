import React from "react";

const CurrentLocation = ({ name, lat, lng, country }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{lat}</div>
      <div>{lng}</div>
      <div>{country}</div>
    </div>
  );
};

export default CurrentLocation;
