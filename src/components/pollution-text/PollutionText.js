import React from "react";

const PollutionText = ({ aqi }) => {
  console.log(aqi);
  let text = "";
  if (aqi >= 0 && aqi <= 25) {
    text = "Good";
  } else if (aqi > 25 && aqi <= 50) {
    text = "Moderate";
  } else if (aqi > 50 && aqi <= 100) {
    text = "Moderately Unhealthy";
  } else if (aqi > 100 && aqi <= 150) {
    text = "Unhealthy for Sensitive Groups";
  } else if (aqi > 150 && aqi <= 200) {
    text = "Very Unhealthy";
  } else if (aqi > 200 && aqi <= 500) {
    text = "Hazardous";
  }

  return (
    <div>
      <h1>Pollution Level:</h1>
      <h2>{text}</h2>
    </div>
  );
};

export default PollutionText;

// for import into main file later:
// import aqi from "./aqi";
// import PollutionText from "./PollutionText";

// function App() {
//   const geo = {
//     lat: " ",
//     lng: " "
//   };

//   return (
//     <div>
//       <aqi geo={geo} />
//       <PollutionText aqi={aqiData.data.aqi} />
//     </div>
//   );
// }