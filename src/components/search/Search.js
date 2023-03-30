import React, { useState} from "react";
import cities from "./cities.json";
import axios from "axios";
import "./style.css";

const Search = ({ setLocation, setApi }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchResultsClass, setSearchResultsClass] = useState("hide");

  const onChange = (e) => {
    setQuery(e.target.value);
    if (query.length < 2) {
      setSearchResultsClass("hide");
    } else {
      setSearchResultsClass("dropdown-menu");
    }
  };

  const handleCitySelect = (city) => {
    setQuery(`${city.name}, ${city.country}`);
    setLocation(city);
    setSearchResultsClass("hide");

    const lat = city.lat;
    const long = city.lng;
    getAQI(lat, long);
  };

  const getAQI = async (lat, long) => {
    try {
      setLoading(true);
      // .env file and added to gitignore
      const response = await axios.get(
        `http://api.waqi.info/feed/geo:${lat};${long}/?token=7e16c570675ce49f3b7fe0cffe35149adc77cf8f`
      );
      console.log(response.data);
      if (response.data) {
        setApi(response.data.data);
        setLoading(false);
      }
    } catch (err) {
      //if promise fails, catch and show error (+ for slow loading)
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div className="search-container flex-column justify-content-center">
      <div>
        <input
          className="search text-center"
          type="text"
          placeholder="Start typing your city name..."
          value={query}
          onChange={onChange}
        ></input>
      </div>
      <div className="d-flex justify-content-center">
        <ul className={searchResultsClass}>
          {cities
            .filter((city) => {
              const searchTerm = query.toLowerCase();
              const cityName = city.name.toLowerCase();

              return (
                searchTerm.length >= 3 &&
                cityName.startsWith(searchTerm) &&
                `${city.name}, ${city.country}` !== query
              );
            })
            .map((city) => (
              <li
                className="dropdown-item"
                onClick={() => handleCitySelect(city)}
              >
                {city.name}, {city.country}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
