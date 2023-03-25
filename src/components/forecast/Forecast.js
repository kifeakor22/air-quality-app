import React from 'react';

const Forecast = ({ forecast }) => {
  if (!forecast) {
    return <div>No data available</div>
  }

  return (
    <div>
      {forecast.daily?.o3?.map((day) => (
        <div key={day.day}>
          {day.day}
        </div>
      ))}
    </div>
  );
};

export default Forecast;

