import React from "react";



const PollutionDashboard = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "20px" }}>
        {props.icons}
        
      </div>
      <div style={{ marginRight: "20px" }}>
        {props.Airquality}
      </div>
      <div>
        <h3>description</h3>
      </div>
    </div>
  );
};

export default PollutionDashboard;
