import { useState, useEffect } from 'react';
import PollutionScore from '../pollution-score/PollutionScore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPersonBiking,
  faPersonWalking,
  faFaceExhaling,
  faHeadSideMask,
  faLungsVirus,
  faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons';
// define function that takes in score prop (air pollution score pulled from API)
function AirPollutionIcon({ score }) {
    //useState hook to set first icon state
  const [icon, setIcon] = useState(faPersonBiking);
// depending on score value, set icon state variable to corresponding icon
  useEffect(() => {
    if (score >= 0 && score <= 25) {
      setIcon(faPersonBiking);
    } else if (score > 25 && score <= 50) {
      setIcon(faPersonWalking);
    } else if (score > 50 && score <= 100) {
      setIcon(faFaceExhaling);
    } else if (score > 100 && score <= 150) {
      setIcon(faHeadSideMask);
    } else if (score > 150 && score <= 200) {
      setIcon(faLungsVirus);
    } else if (score > 200 && score <= 500) {
      setIcon(faTriangleExclamation);
    }
  }, [PollutionScore]);
// return the component, use icon state variable as prop
  return <FontAwesomeIcon icon={icon} />;
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
  