import "./App.css";
import React, { useState } from "react";
import CurrentLocation from "./components/current-location/CurrentLocation";
import Jumbotron from "./components/jumbotron";
import Search from "./components/search/Search";
import Airquality from "./components/airqualitystats/airqualitystats";
import Forecast from "./components/forecast/Forecast";
import Health from "./components/Health/Health"
import Navbar from "./components/Navbar/Navbar";
import AirPollutionIcon from "./icon-component/AirPollutionIcon";

function App() {
  const [currentLocation, setCurrentLocation] = useState("");
  const [apiData, setApiData] = useState({});

  return (
    <div className="App">
      <Navbar setLocation={setCurrentLocation} setApi={setApiData} />
      <CurrentLocation {...currentLocation} />
      <Forecast {...apiData} />
      <Health {...apiData} />
    </div>
  );
}

export default App;
