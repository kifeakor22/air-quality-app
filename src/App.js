import "./App.css";
import CurrentLocation from "./components/current-location/CurrentLocation";
import Jumbotron from "./components/jumbotron";

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <CurrentLocation />
    </div>
  );
}

export default App;
