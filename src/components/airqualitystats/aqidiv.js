import React, { useEffect } from 'react';

function AQIWidget({ selectedCity }) {
  useEffect(() => {
    console.log(`Loading AQI widget for city ${selectedCity}...`);
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = `//feed.aqicn.org/feed/${selectedCity}/en/feed.v1.js`;
    script.async = true;
    script.onload = () => {
      console.log('AQI widget loaded successfully');
    };
    script.onerror = () => {
      console.error('Failed to load AQI widget');
    };
    const container = document.getElementById('city-aqi-container');
    container.innerHTML = '';
    container.appendChild(script);
    return () => {
      console.log(`Cleaning up AQI widget for city ${selectedCity}...`);
      container.innerHTML = '';
    };
  }, [selectedCity]);

  return <span id="city-aqi-container"></span>;
}

export default AQIWidget;
