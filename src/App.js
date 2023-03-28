import "./App.css";
import React, { useState } from "react";
import CurrentLocation from "./components/current-location/CurrentLocation";
import Jumbotron from "./components/jumbotron";
import Search from "./components/search/Search";
import Airquality from "./components/airqualitystats/airqaulitystats";
import Forecast from "./components/forecast/Forecast";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [currentLocation, setCurrentLocation] = useState("");
  const [apiData, setApiData] = useState({})

  return (
    <div className="App">
      <Navbar setLocation={setCurrentLocation} setApi={setApiData}/>
      <CurrentLocation {...currentLocation} />
      <Airquality {...apiData}/>
      <Forecast {...apiData}/>
      <Jumbotron />
    </div>
  );
}

export default App;
