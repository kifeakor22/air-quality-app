import "./App.css";
import React, { useState } from "react";
import CurrentLocation from "./components/current-location/CurrentLocation";
import Jumbotron from "./components/jumbotron";
import Search from "./components/search/Search";
import Airquality from "./components/airqualitystats/airqaulitystats";
import Forecast from "./components/forecast/Forecast";
import Navbar from "./components/Navbar/Navbar";
import AirPollutionIcon from "./icon-component/AirPollutionIcon";

function App() {
  const [currentLocation, setCurrentLocation] = useState("");
  const [apiData, setApiData] = useState({})

  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Search setLocation={setCurrentLocation} setApi={setApiData} />
      <CurrentLocation {...currentLocation} />
      <AirPollutionIcon />
      <Airquality {...apiData}/>
      <Forecast {...apiData}/>
    </div>
  );
}

export default App;
