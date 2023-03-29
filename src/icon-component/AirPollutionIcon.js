import { useState, useEffect } from 'react';
import "./AirPollutionIcon.css";
import PollutionScore from '../pollution-score/PollutionScore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPersonBiking,
  faPersonWalking,
  faSadTear,
  faHeadSideMask,
  faLungsVirus,
  faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons';
// define function that takes in score prop (air pollution score pulled from API)
function AirPollutionIcon({ aqi }) {
    //useState hook to set first icon state
  const [icon, setIcon] = useState(faPersonBiking);
  const [bgColor, setBgColor] = useState("var(--vgoodColor)");
// depending on score value, set icon state variable to corresponding icon
  useEffect(() => {
    if (aqi >= 0 && aqi <= 25) {
      setIcon(faPersonBiking);
       setBgColor("var(--vgoodColor)");
    } else if (aqi > 25 && aqi <= 50) {
      setIcon(faPersonWalking);
       setBgColor("var(--fairColor)");
    } else if (aqi > 50 && aqi <= 100) {
      setIcon(faSadTear);
     setBgColor("var(--fairColor)");
    } else if (aqi > 100 && aqi <= 150) {
      setIcon(faHeadSideMask);
      setBgColor("var(--poorColor)");
    } else if (aqi > 150 && aqi <= 200) {
      setIcon(faLungsVirus);
     setBgColor("var(--vpoorColor)");
    } else if (aqi > 200 && aqi <= 500) {
      setIcon(faTriangleExclamation);
      setBgColor("var(--fairColor)");
    }
  }, [PollutionScore, bgColor,aqi]);
  console.log(`aqi ${aqi}`)
// return the component, use icon state variable as prop
  return (
    <>
    <div className='container con'>
      <FontAwesomeIcon icon={icon} className="fa-beat" style={{fontSize: '8em', color: bgColor}}></FontAwesomeIcon>
    </div>
    
    </>
  )
}


export default AirPollutionIcon;

// to use this component in code " <AirPollutionIcon score={} /> " where the score number is dynamic

// to import this component and use elsewhere:

//import AirPollutionIcon from './AirPollutionIcon';

// function App() {
//     return (
//       <div>
//         <AirPollutionIcon score={} />
//       </div>
//     );
//   }
  