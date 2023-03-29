import React from 'react';
import './health.css'
const HealthInfo = () => {
    return(
        <div>
            <div className='info-container'>
            <div className="information">
              <h2 className='health-info'>Health information</h2>
              <p>
                Measures concentrations of pollutants on a 1-500 scale. You may need to change your outdoor exercise schedule or location depending on pollutants concentrations:<br></br>
                Good(0-5): Air quality is good. it's safe to exercise outdoors.<br></br>
                Moderate(26-50): Air quality is fine.<br></br>
                Raised level of pollutants may affect your breathing if you exercise outdoors especially if you have asthma or allergies.<br></br>
                Moderately unhealth(51-100): Raised levels of pollutants amy affect your breathing if you exercise outdoors,even for healthy individuals. Pollutants can cause health problems if you have a lung or heart condition. try to exercise indoors or keep your outdoors workout short.<br></br>
                unhealth for sensitive groups(101-150): pollutants concentrations affect everyone, especially those with lung or heart problems. Exercise indoors to reduce exposure to pollution.<br></br>
                Veryunhealthy(151-200): Pollutants concentrations can cause health problems for everyone. DO NOT exercise outdoors.<br></br>
                Hazardous(201-500): Air quality is bad enough to be declared an emergency. stay indoors or evacuate the area until air quality improves.


              </p>


            </div>
            </div>
        </div>

    )


}
export default HealthInfo;