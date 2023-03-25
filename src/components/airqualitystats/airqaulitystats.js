
import React from 'react'

const Airquality = ({aqi,dominentpol,city })=> {
   
    return(
        <>
        <div>
           AQI: {aqi}
        </div>
        <div>
            Main Pollutant: {dominentpol}
        </div>
        <div>
            City:  
        </div>
        </>
    )
}

export default Airquality