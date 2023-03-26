import React from 'react'
import './style.css'

const Airquality = ({aqi,dominentpol, iaqi })=> {
    
return (
    <>
   
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div className="card airstat">
      <div>AQI: {aqi}</div>
      <div>Main Pollutant: {dominentpol}</div>
      {iaqi && (
        <div>
          {Object.keys(iaqi).map((key) => (
            <div className="card" style={{ width: "18rem" }}>
              <ul className="list-group list-group-flush" style={{ listStyleType: "none" }}>
                <li key={key}>
                  {key}: {iaqi[key].v}
                </li>
              </ul>
            </div>
        
          ))}
        </div>
      )}
    </div>
  </div>
   <img src={require('./images/aqiKey.PNG')}/>
  </>
);

}

export default Airquality