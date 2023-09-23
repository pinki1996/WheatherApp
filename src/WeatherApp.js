import React, { useState } from 'react';

function WeatherApp() {
  const [weatherData, setWeatherData] = useState({
    temperature: '',
    humidity: '',
    windSpeed: '',
    description: ''
  });

  const fetchWeatherData = async (cityName) => {
    const API_KEY = 'fc9784d55049785e6fe381c9c004c332';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data)

    setWeatherData({
      temperature: data.main.temp,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      description: data.weather[0].description
    });
  }
//   console.log(fetchWeatherData)

  const handleSubmit = (event) => {
    event.preventDefault();
    const cityName = event.target.elements.cityName.value;
    // console.log(cityName)
    fetchWeatherData(cityName);
  }

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cityName">Enter city name: </label>
        <input type="text" name="cityName" id="cityName" required />
        <button type="submit">Search</button>
      </form>
      <div className="weather-info">
        <p>Temperature: {weatherData.temperature} &deg;C</p>
        <p>Humidity: {weatherData.humidity} %</p>
        <p>Wind Speed: {weatherData.windSpeed} m/s</p>
        <p>Description: {weatherData.description}</p>
      </div>
    </div>
  );
}

export default WeatherApp;
