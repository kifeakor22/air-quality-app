import "./App.css";
import React, { useState } from "react";
import CurrentLocation from "./components/current-location/CurrentLocation";
import Jumbotron from "./components/jumbotron";
import Health from "./components/Health/health";
import Author from "./components/Author/author"
import Search from "./components/search/Search";

function App() {
  const [currentLocation, setCurrentLocation] = useState("");

  return (
    <div className="App">
      <Jumbotron />

      <CurrentLocation />
      <Health/>
      <Author/>

      <Search setLocation={setCurrentLocation} />
      <CurrentLocation {...currentLocation} />

    </div>
  );
}

export default App;
