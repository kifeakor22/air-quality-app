import "./App.css";
import CurrentLocation from "./components/current-location/CurrentLocation";
import Jumbotron from "./components/jumbotron";
import Health from "./components/Health/health";

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <CurrentLocation />
      <Health/>
    </div>
  );
}

export default App;
