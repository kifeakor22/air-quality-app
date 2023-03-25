import React, { useState, useEffect, useCallback } from "react";
import cities from "./cities.json";
import "./style.css";

const Search = ({ setLocation, setApi }) => {
   const [selectedCity, setSelectedCity] = useState('london')
  const [inputValue, setInputValue] = useState("");
  // Filter the object of cities
  const [filteredOptions, setFilteredOptions] = useState([]);
  // User selected choice from list
  const [selectedOption, setSelectedOption] = useState("");
  

  // Function to update the filtering on every key stroke after 3 characters are entered
  const handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    setInputValue(value);

    // Reset selectedOption if user continues to type
    if (selectedOption) {
      setSelectedOption(null);
      setFilteredOptions([]);
    } else {
      // Check if user has entered at least 3 characters, then start filtering the cities object
      if (value.length >= 3) {
        const filteredCities = cities.filter((city) =>
          city.name.toLowerCase().startsWith(value)
        );
        // Display new list of cities that match the filter
        setFilteredOptions(filteredCities);
      } else {
        // Set no filter if the user hasn't typed at least 3 characters
        setFilteredOptions([]);
      }
    }
  };

  // Function to handle what happens when a user clicks on an option from the list
  const handleOptionSelect = (option) => {
   

   
    // Display city name and country code
    setInputValue(`${option.name}, ${option.country}`);
    setSelectedOption(option);
    setFilteredOptions([]);
    // option is now the object with lon and lat values which can be used elsewhere in the app
    console.log(option);
    setLocation(option);
    setSelectedCity(option.name);
    console.log(selectedCity)
    
    
  };
  const fetchAirStat = useCallback(async () => {
    let city = selectedCity
        const data = await fetch(`https://api.waqi.info/feed/${city}/?token=cdcd0887b8ffcd7fd08989ee1d28e5df9c271831`)
        const response = await data.json()

        console.log(`searched city is ${city}`)
        console.log(response.data)
        setApi(response.data)
        
    },[selectedCity])
  

   


 useEffect(()=> {
  fetchAirStat()   
    }, [selectedCity, fetchAirStat])
  
  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Start typing your city..."
        value={
          selectedOption
            ? `${selectedOption.name}, ${selectedOption.country}`
            : inputValue
        }
        onChange={handleInputChange}
        onFocus={() => setFilteredOptions([])}
      />
      {filteredOptions.length === 0 &&
        inputValue.length >= 3 &&
        !selectedOption && <div>No cities found</div>}
      {filteredOptions.length > 0 && !selectedOption && (
        <section>
          {filteredOptions.map((option) => (
            <div key={option.name} onClick={() => handleOptionSelect(option)}>
              {`${option.name}, ${option.country}`}
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default Search;
