import React, { useState } from "react";
import AdditionInfo from "./AdditionInfo";
import "./CurrentSummary.css";

function CurrentSummary({ weather }) {
  const [celcius, setCelcius] = useState(true);
  return (
    <div className="current-summary">
      <div className="temperature-weathers">
        <img
          className="weather-icon"
          src={weather.current.condition.icon}
          alt={weather.current.condition.text}
        />
        <div className="temperature">
          <span className="temperature-value">
            {celcius ? weather.current.temp_c : weather.current.temp_f}
          </span>
          <span
            className={`temperature-celce ${celcius ? "active" : ""}`}
            onClick={() => {
              setCelcius(true);
            }}
          >
            °C
          </span>
          <span> | </span>
          <span
            className={`temperature-unit-temp ${!celcius ? "active" : ""}`}
            onClick={() => {
              setCelcius(false);
            }}
          >
            °F
          </span>
        </div>
        <p className="weather-condition">{weather.current.condition.text}</p>
      </div>

      <AdditionInfo weather={weather} />
    </div>
  );
}

export default CurrentSummary;
