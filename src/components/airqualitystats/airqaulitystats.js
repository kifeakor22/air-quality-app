import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Airquality = ({aqi,dominentpol, iaqi })=> {
    let bgColor;

   
return (
    <>
     <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="card airstat">
        <div>AQI: {aqi}</div>
        <div>Main Pollutant: {dominentpol}</div>
        {iaqi && (
          <div>
            {Object.keys(iaqi).filter(key => key !== "w" && key !== "t" && key !== "h" && key !== "p" && key !== "wg")
            .map((key) => {   
                if(iaqi[key].v <= 50) {
                    bgColor = 'var(--vgoodColor)';
            } else if (iaqi[key].v >= 51) {
                bgColor = 'var(--fairColor)';
            } else if (iaqi[key].v>=101 ) {
                bgColor = 'var(--poorColor)';
            }else if (iaqi[key].v >=2001 ){
                bgColor = 'var(--vpoorColor)';
            }
            return (
              <div className="card" style={{ width: "18rem" }}>
                <ul className="list-group list-group-flush" style={{ listStyleType: "none", display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 0 }}>
                  <li key={key}>
                    {key}: {iaqi[key].v}
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircle} className='fa-beat' style={{color: bgColor, border: '1px solid white', borderRadius: '50%'}}/>
                  </li>
                </ul>
              </div>)
})}
          </div>
        )}
      </div>
    </div>
   
   <img className='image-fluid' src={require('./images/aqiKey.PNG')} alt='color code'/>
  </>
);

}

export default Airquality