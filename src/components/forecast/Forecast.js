import React from "react";
import AirPollutionIcon from "../icon-component/AirPollutionIcon";
import "./style.css";

const Forecast = ({ forecast, dominentpol, icons }) => {
  console.log(icons);
  if (!forecast) {
    return null;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Sets so that it is not actual time, but start of the day

  return (
    <div className="card forecast-outer d-flex justify-content-center">
      <h1>5-day Forecast</h1>
      <div className="forecast-container container align-content-center">
        {forecast.daily?.[dominentpol]?.map((day) => {
          const date = new Date(day.day);
          // Return null for days before today to remove old dates from data
          if (
            date < today ||
            date >= today.getTime() + 5 * 1000 * 60 * 60 * 24
          ) {
            return null;
          }

          const weekday = date.toLocaleString("en-US", { weekday: "long" });
          const avg = day.avg;
          let bgColor;

          if (avg <= 25) {
            bgColor = "var(--vgoodColor)";
          } else if (avg <= 50) {
            bgColor = "var(--goodColor)";
          } else if (avg <= 100) {
            bgColor = "var(--fairColor)";
          } else if (avg <= 150) {
            bgColor = "var(--poorColor)";
          } else if (avg <= 200) {
            bgColor = "var(--vpoorColor)";
          } else {
            bgColor = "var(--hazardous)";
          }

          return (
            <div
              className="day-card d-flex flex-column justify-content-around"
              key={day.day}
              style={{ backgroundColor: bgColor }}
            >
              <h1>{weekday}</h1>
              <div className="bkg-transparent rounded">
                <AirPollutionIcon aqi={day.avg} />
              </div>
              <p>Average AQI: {day.avg}</p>
              <p>Min AQI: {day.min}</p>
              <p>Max AQI: {day.max}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;
