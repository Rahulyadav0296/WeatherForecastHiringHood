import React, { useState } from "react";
import "./HourlyWeather.css";

function HourlyWeather({ weather }) {
  const [hourForecast, setHourForecast] = useState(false);
  if (!weather || !weather.forecast || !weather.forecast.forecastday) {
    return null;
  }

  const hourlyForecast = weather.forecast.forecastday[0].hour;

  return (
    <>
      <div className="hourly-weather-container">
        <h2>Hourly Forecast</h2>
        <button
          className="hourforecastbutton"
          onClick={() => {
            setHourForecast((prev) => !prev);
          }}
        >
          {hourForecast ? "Hour Forecast" : "Click Here For Hour Forecast"}
        </button>
        <div className="hourly-forecast">
          {hourForecast &&
            hourlyForecast.map((hour, index) => (
              <div key={index} className="hourly-forecast-item">
                <p className="time">{hour.time}</p>
                <img
                  src={hour.condition.icon}
                  alt={hour.condition.text}
                  className="weather-icon"
                />
                <p className="temp-c">
                  <strong>{hour.temp_c} °C</strong>
                </p>
                <p className="condition">{hour.condition.text}</p>
                <p className="wind">Wind: {hour.wind_degree}°</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default HourlyWeather;
