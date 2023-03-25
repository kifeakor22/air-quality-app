import React from 'react';
import "./style.css";

const Forecast = ({ forecast, dominentpol}) => {
  if (!forecast) {
    return <div>No data available</div>
  }

  return (
    <div className="forecast-container">
      {forecast.daily?.[dominentpol]?.map((day) => {
        const date = new Date(day.day);
        const weekday = date.toLocaleString('en-US', { weekday: 'long' });
        const avg = day.avg;
        let bgColor;

        if (avg <= 20) {
          bgColor = 'var(--vgoodColor)';
        } else if (avg <= 22) {
          bgColor = 'var(--goodColor)';
        } else if (avg <= 24) {
          bgColor = 'var(--fairColor)';
        } else if (avg <= 26) {
          bgColor = 'var(--poorColor)';
        } else {
          bgColor = 'var(--vpoorColor)';
        }

        return (
          <div className="day-card" key={day.day} style={{ backgroundColor: bgColor}}>
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
