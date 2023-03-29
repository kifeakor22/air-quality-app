import React from "react";
import "./style.css";

const Jumbotron = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="image"></div>
          <div className="jumbotron">
            <h1 className="display-4">Air Quality Monitor</h1>
            <p className="lead">
              Welcome to our user-friendly air quality monitoring app! Enter
              your location and get real-time updates on air quality.
            </p>
            <p className="lead">
              Our app empowers you with knowledge to make informed decisions
              about your health. Get real-time air quality updates to protect
              yourself and loved ones from harmful pollutants.
            </p>
            <hr className="my-4" />
            <div className="cta"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
