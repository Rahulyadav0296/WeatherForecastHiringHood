import React from "react";
import "./AirQuality.css";
function AirQuality({ weather }) {
  return (
    <div className="air-quality">
      <h3>Air Quality Index</h3>
      <div className="air-quality-detail">
        <div className="air-quality-one">
          <p>CO: {weather.current.air_quality.co} μg/m³</p>
          <p>NO2: {weather.current.air_quality.no2} μg/m³</p>
          <p>O3: {weather.current.air_quality.o3} μg/m³</p>
          <p>PM2.5: {weather.current.air_quality.pm2_5} μg/m³</p>
        </div>
        <div className="air-quality-two">
          <p>PM10: {weather.current.air_quality.pm10} μg/m³</p>
          <p>SO2: {weather.current.air_quality.so2} μg/m³</p>
          <p>US EPA Index: {weather.current.air_quality["us-epa-index"]}</p>
          <p>GB DEFRA Index: {weather.current.air_quality["gb-defra-index"]}</p>
        </div>
      </div>
    </div>
  );
}

export default AirQuality;
