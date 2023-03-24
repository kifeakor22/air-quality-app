import "./App.css";
import CurrentLocation from "./components/current-location/CurrentLocation";
import Jumbotron from "./components/jumbotron";
import Health from "./components/Health/health";
import Author from "./components/Author/author";

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <CurrentLocation />
      <Health/>
      <Author/>
    </div>
  );
}

export default App;
