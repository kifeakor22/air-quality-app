import React from "react";
import PollutionScore from '../pollution-score/PollutionScore';

const PollutionText = ({ PollutionScore }) => {
  let text = "";
  if (pollutionScore >= 0 && PollutionScore <= 25) {
    text = "Good";
  } else if (pollutionScore > 25 && PollutionScore <= 50) {
    text = "Moderate";
  } else if (pollutionScore > 50 && PollutionScore <= 100) {
    text = "Moderately Unhealthy";
  } else if (pollutionScore > 100 && PollutionScore <= 150) {
    text = "Unhealthy for Sensitive Groups";
  } else if (pollutionScore > 150 && PollutionScore <= 200) {
    text = "Very Unhealthy";
  } else if (pollutionScore > 200 && PollutionScore <= 500) {
    text = "Hazardous";
  }

  return (
    <div>
      <h1>Pollution Text</h1>
      <h2>{text}</h2>
    </div>
  );
};

export default PollutionText;

// for import into main file later:
// import PollutionScore from "./PollutionScore";
// import PollutionText from "./PollutionText";

// function App() {
//   const geo = {
//     lat: " ",
//     lng: " "
//   };

//   return (
//     <div>
//       <PollutionScore geo={geo} />
//       <PollutionText pollutionScore={aqiData.data.aqi} />
//     </div>
//   );
// }
