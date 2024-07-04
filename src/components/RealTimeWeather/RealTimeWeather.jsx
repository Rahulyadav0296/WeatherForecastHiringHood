import React, { useState } from "react";
import EventCalander from "../EventCalander/EventCalander";
import AirQuality from "./AirQuality";
import Button from "./Button";
import CurrentSummary from "./CurrentSummary";
import "./RealTimeWeather.css";
function RealTimeWeather({ weather }) {
  const [airQuality, setAirQuality] = useState(false);
  const [eventCalender, setEventCalender] = useState(false);

  return (
    <div className="weather-container">
      <h2 className="weather-title">
        {weather.location.name}, {weather.location.region},{" "}
        {weather.location.country}
      </h2>

      <CurrentSummary weather={weather} />

      <Button
        className="AirQuality"
        onClick={() => {
          setAirQuality((prev) => !prev);
        }}
      >
        Air Quality
      </Button>

      <Button
        className="event-button"
        onClick={() => {
          setEventCalender((prev) => !prev);
        }}
      >
        Event Advisor
      </Button>

      {airQuality && <AirQuality weather={weather} />}
      {eventCalender && <EventCalander />}
    </div>
  );
}

export default RealTimeWeather;
