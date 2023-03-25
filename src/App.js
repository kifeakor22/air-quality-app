import "./App.css";
import React, { useState } from "react";
import CurrentLocation from "./components/current-location/CurrentLocation";
import Jumbotron from "./components/jumbotron";
import Search from "./components/search/Search";
import Airquality from "./components/airqualitystats/airqaulitystats";

function App() {
  const [currentLocation, setCurrentLocation] = useState("");
  const [apiData, setApiData] = useState({})

  return (
    <div className="App">
      <Jumbotron />
      <Search setLocation={setCurrentLocation} setApi={setApiData} />
      <CurrentLocation {...currentLocation} />
      <Airquality {...apiData}/>
    </div>
  );
}

export default App;
