import React from 'react';
import "./style.css";

const Forecast = ({ forecast }) => {
  if (!forecast) {
    return <div>No data available</div>
  }

  return (
    <div className="forecast-container">
      {forecast.daily?.o3?.map((day) => (
        <div className="day-card" key={day.day}>
            <h1>{day.day}</h1>
            <p>Average: {day.avg}</p>
            <p>Min: {day.min}</p>
            <p>Max: {day.max}</p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;

