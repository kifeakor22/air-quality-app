import React from "react";
import "./style.css";

const Forecast = ({ forecast, dominentpol }) => {
  if (!forecast) {
    return <div>No data available</div>;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Sets so that it is not actual time, but start of the day

  return (
    <div className="forecast-container container align-content-center">
      {forecast.daily?.[dominentpol]?.map((day) => {
        const date = new Date(day.day);
        // Return null for days before today to remove old dates from data
        if (date < today) {
          return null;
        }

        const weekday = date.toLocaleString("en-US", { weekday: "long" });
        const avg = day.avg;
        let bgColor;

        if (avg <= 50) {
          bgColor = "var(--vgoodColor)";
        } else if (avg <= 100) {
          bgColor = "var(--goodColor)";
        } else if (avg <= 150) {
          bgColor = "var(--fairColor)";
        } else if (avg <= 200) {
          bgColor = "var(--poorColor)";
        } else {
          bgColor = "var(--vpoorColor)";
        }

        return (
          <div
            className="day-card d-flex flex-column justify-content-around"
            key={day.day}
            style={{ backgroundColor: bgColor }}
          >
            <h1>{weekday}</h1>
            <p>Average: {day.avg}</p>
            <p>Min: {day.min}</p>
            <p>Max: {day.max}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
