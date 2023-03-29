import "./App.css";
import React, { useState } from "react";
import CurrentLocation from "./components/current-location/CurrentLocation";
import Jumbotron from "./components/jumbotron";
import HealthInfo from "./components/Health-info/health-info";
import Author from "./components/Author/author"
import Search from "./components/search/Search";

function App() {
  const [currentLocation, setCurrentLocation] = useState("");

  return (
    <div className="App">
      <Jumbotron />

      <CurrentLocation />
      <HealthInfo/>
      <Author/>

      <Search setLocation={setCurrentLocation} />
      <CurrentLocation {...currentLocation} />

    </div>
  );
}

export default App;
