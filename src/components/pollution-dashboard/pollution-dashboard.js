import React from "react";
import AirPollutionIcon from "./AirPollutionIcon";
import PollutionScore from "./PollutionScore";
import PollutionText from "./PollutionText";

const PollutionDashboard = ({ geo }) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "20px" }}>
        <AirPollutionIcon score={50} />
      </div>
      <div style={{ marginRight: "20px" }}>
        <PollutionScore geo={geo} />
      </div>
      <div>
        <PollutionText pollutionScore={50} />
      </div>
    </div>
  );
};

export default PollutionDashboard;
