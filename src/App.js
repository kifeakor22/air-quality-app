import "./App.css";
import React, { useState } from "react";
import CurrentLocation from "./components/current-location/CurrentLocation";
import Jumbotron from "./components/jumbotron";
import Search from "./components/search/Search";

function App() {
  const [currentLocation, setCurrentLocation] = useState("");

  return (
    <div className="App">
      <Jumbotron />
      <Search setLocation={setCurrentLocation} />
      <CurrentLocation {...currentLocation} />
    </div>
  );
}

export default App;
