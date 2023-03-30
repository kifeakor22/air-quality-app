import React from "react";
import "./pollution-dashboard.css"

const PollutionDashboard = (props) => {
  return (
    <div className="dashboard" style={{ display: "flex" }}>
      <div>
        {props.icons}
        {props.health}
      </div>
      <div>
        {props.Airquality}
      </div>
      <div>
        {props.pollutionInformation}
      </div>
    </div>
  );
};

export default PollutionDashboard;