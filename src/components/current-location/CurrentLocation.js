
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const CurrentLocation = ({ name = 'london', lat, lng, country }) => {
  console.log(`name is ${name}`);
  return (
    <div className="current-location">
      <FontAwesomeIcon icon={faLocationDot} className="icon" />
     {name}, <span className="bold">{country}</span>
    </div>
  );
};

export default CurrentLocation;
