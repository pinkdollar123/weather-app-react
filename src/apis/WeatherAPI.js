import React, { useState } from 'react';
import axios from 'axios';

// Current Weather Checker for certain City provided as input
const Weather = () => {
    // * Declared variables for useState() to render the city value to setCity value and also get the weatherData and setWeatherData
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  const fetchWeatherData = () => {
    // Check if a city is provided before making the API request
    if (city.trim() === '') {
      alert('Please enter a city name.');
      return;
    }

    // Making the API request to fetch weather data
    axios
      .get(apiUrl, {
        params: {
          q: city,
          appid: apiKey,
          units: 'metric', // Use 'imperial' for Fahrenheit
        },
      })
      .then((response) => {
        // Handle the response data and update the state
        setWeatherData(response.data);
      })
      .catch((error) => {
        // Handle API errors
        alert('Error fetching weather data. Please try again later.');
        console.error(error);
      });
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    fetchWeatherData();
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input type="text" value={city} onChange={handleCityChange} />
      <button onClick={handleSearch}>Search</button>

      {weatherData && (
        <div>
          <h2>Weather Information for {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Weather Conditions: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
