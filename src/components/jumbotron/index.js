import React from "react";
import "./style.css";

const Jumbotron = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="image"></div>
          <div className="jumbotron">
            <p className="lead">
              Welcome to our Air Quality Monitoring app! Enter the name of a city into the search bar above and get real-time updates on air quality.
            </p>
            <p className="lead">
              Our app empowers you with knowledge to make informed decisions to protect yourself and loved ones from harmful pollutants.
            </p>
            <hr className="my-4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;