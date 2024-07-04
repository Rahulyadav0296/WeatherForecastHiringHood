import React, { useContext, useState } from "react";
import { AuthContext } from "../../utils/AuthContext";
import TenDayForecast from "../10DayForecast/TenDayForecast";
import HourlyWeather from "../HourlyWeather/HourlyWeather";
import RealTimeWeather from "../RealTimeWeather/RealTimeWeather";
import Form from "./Form";
import "./Weather.css";

function Weather() {
  const [error, setError] = useState("");
  const [front, setFront] = useState(true);
  const [weather, setWeather] = useState(null);
  const { location, setLocation } = useContext(AuthContext);

  const handleSearch = async (event) => {
    event.preventDefault();

    if (!location) {
      setError("Please Enter a Location");
      return;
    }

    try {
      console.log("Fetching weather data for location: ", location);
      console.log("API Key: ", import.meta.env.VITE_API_KEY);

      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${
          import.meta.env.VITE_API_KEY
        }&q=${location}&days=10&aqi=yes&alerts=yes`
      );

      if (!response.ok) {
        throw new Error("The response is not ok!");
      }

      const data = await response.json();
      console.log("The RealTime data is: ", data);
      setWeather(data);
      setFront(false);
      setError("");
    } catch (err) {
      console.error("Error fetching weather data: ", err);
      setWeather(null);
      setError("Failed to fetch weather data, please try again!");
    }
  };

  return (
    <div className="weather-containerOne">
      <Form
        onChange={(e) => setLocation(e.target.value)}
        location={location}
        onSubmit={handleSearch}
      />

      {front && (
        <div className="front-view">
          <h1>
            <strong>SkyPlanner:</strong> Expert Weather Insights for Seamless
            Events and Travels
          </h1>
        </div>
      )}

      {error && <p className="error">{error}</p>}
      {weather && (
        <>
          <div className="weather-details">
            <RealTimeWeather weather={weather} />
            <div className="weather-forecastDetails">
              <HourlyWeather weather={weather} />
              <TenDayForecast weather={weather} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Weather;
