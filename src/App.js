import "./App.css";
import React, { useState, useEffect } from "react";
import CurrentLocation from "./components/current-location/CurrentLocation";
import Jumbotron from "./components/jumbotron";
import Airquality from "./components/airqualitystats/airqualitystats";
import Forecast from "./components/forecast/Forecast";
import Navbar from "./components/Navbar/Navbar";
import AirPollutionIcon from "./icon-component/AirPollutionIcon";
import PollutionDashboard from "./components/pollution-dashboard/pollution-dashboard";
import PollutionText from "./components/pollution-text/PollutionText";
import Health from "./components/Health/Health";

function App() {
  const [currentLocation, setCurrentLocation] = useState("");
  const [apiData, setApiData] = useState({});
  const [activeDiv, setActiveDiv] = useState(1);

  useEffect(() => {
    // Scroll to the active div whenever it changes
    const el = document.getElementById(`div${activeDiv}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeDiv]);

  useEffect(() => {
    // Set the active div to 2 once the apiData is loaded
    if (Object.keys(apiData).length > 0) {
      setActiveDiv(2);
    }
  }, [apiData]);

 return (

  <div className="App">
    <Navbar setLocation={setCurrentLocation} setApi={setApiData} />
    <div style={{ display: activeDiv === 2 ? "block" : "none" }} id="div1">
      <CurrentLocation {...currentLocation} />
    </div>
    <div style={{ display: activeDiv === 2 ? "block" : "none" }} id="div2">
      <PollutionDashboard
        {...apiData}
        Airquality={<Airquality {...apiData} />}
        icons={<AirPollutionIcon {...apiData} />}
        health={<PollutionText {...apiData} />}
        pollutionInformation={<Health {...apiData}/>}
      />
    </div>
    <div  id="div3">
      <Forecast {...apiData} icons={<AirPollutionIcon {...apiData} />} />
    </div>
    <Jumbotron />
  </div>

);
}

export default App;
