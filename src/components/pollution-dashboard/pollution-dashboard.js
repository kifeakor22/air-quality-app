import React from "react";
import "./pollution-dashboard.css"



const PollutionDashboard = (props) => {
  return (
    <div className="dashboard container" style={{ display: "flex" }}>
      <div style={{ marginRight: "20px" }}>
        {props.icons}  
      </div>
      <div style={{ marginRight: "20px" }}>
        {props.Airquality}
      </div>
      <div>
        {props.health}
      </div>
    </div>
  );
};

export default PollutionDashboard;
