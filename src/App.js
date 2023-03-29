import "./App.css";
import React, { useState, useEffect } from "react";
import CurrentLocation from "./components/current-location/CurrentLocation";
import Jumbotron from "./components/jumbotron";
import Health from "./components/Health/health";
import Author from "./components/Author/author"
import Search from "./components/search/Search";
import Airquality from "./components/airqualitystats/airqualitystats";
import Forecast from "./components/forecast/Forecast";
import Health from "./components/Health/Health"
import Navbar from "./components/Navbar/Navbar";
import AirPollutionIcon from "./icon-component/AirPollutionIcon";
import PollutionDashboard from "./components/pollution-dashboard/pollution-dashboard";

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
      <Jumbotron />
      <div id="div1">
        <CurrentLocation {...currentLocation} />
      </div>
      <div id="div2">
        <PollutionDashboard
          {...apiData}
          Airquality={<Airquality {...apiData} />}
          icons={<AirPollutionIcon {...apiData} />}
          health={<Health {...apiData} />}
        />
      </div>
      <div id="div3">
        <Forecast {...apiData} />
      </div>
    </div>
  );
}

export default App;

