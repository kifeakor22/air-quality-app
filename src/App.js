import "./App.css";
import React, { useState } from "react";
import CurrentLocation from "./components/current-location/CurrentLocation";
import Jumbotron from "./components/jumbotron";
<<<<<<< HEAD
import Health from "./components/Health/health";
import Author from "./components/Author/author";
=======
import Search from "./components/search/Search";
>>>>>>> da0b353136cfd353a09a5e058f8377d7ef6375cb

function App() {
  const [currentLocation, setCurrentLocation] = useState("");

  return (
    <div className="App">
      <Jumbotron />
<<<<<<< HEAD
      <CurrentLocation />
      <Health/>
      <Author/>
=======
      <Search setLocation={setCurrentLocation} />
      <CurrentLocation {...currentLocation} />
>>>>>>> da0b353136cfd353a09a5e058f8377d7ef6375cb
    </div>
  );
}

export default App;
