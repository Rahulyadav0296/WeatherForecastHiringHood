import React, { useState } from "react";
import "./TenDayForecast.css";
import TravelerAdvisor from "./TravelerAdvisor";
import WeatherAdvisory from "./WeatherAdvisory";

function TenDayForecast({ weather }) {
  const [showCrops, setShowCrops] = useState(false); // State for each day
  const [showAdvisory, setShowAdvisory] = useState(false);
  const [tenForecast, setTenForecast] = useState(false);

  if (!weather || !weather.forecast || !weather.forecast.forecastday) {
    return null;
  }

  const dayForecast = weather.forecast.forecastday;

  return (
    <div className="day-weather-container">
      <h2>
        <i className="fa-solid fa-calendar"></i> 10-Day Forecast
      </h2>
      <button
        className="hourforecastbutton"
        onClick={() => {
          setTenForecast((prev) => !prev);
        }}
      >
        {tenForecast ? "10 Days Forecast" : "Click Here For 10 Days Forecast"}
      </button>
      {tenForecast && (
        <div className="day-forecast">
          {dayForecast.map((day, index) => {
            return (
              <div key={index} className="day-forecast-item">
                <p className="time">{day.date}</p>
                <img
                  src={day.day.condition.icon}
                  alt={day.day.condition.text}
                  className="weather-icon"
                />
                <p className="temp-c">
                  <strong>{day.day.avgtemp_c} °C</strong>
                </p>
                <p className="rain-chance">
                  <strong>{day.day.daily_chance_of_rain}%</strong>
                </p>
                <p className="wind">Wind: {day.day.maxwind_kph} kph</p>
                {showCrops && <WeatherAdvisory day={day} />}
                {showAdvisory && <TravelerAdvisor day={day} />}
              </div>
            );
          })}
        </div>
      )}
      <button
        className="crops-button"
        onClick={() => setShowCrops((prev) => !prev)}
      >
        Harvest Advisory
      </button>
      <button
        className="travel-button"
        onClick={() => setShowAdvisory((prev) => !prev)}
      >
        Travel Advisory
      </button>
    </div>
  );
}

export default TenDayForecast;
