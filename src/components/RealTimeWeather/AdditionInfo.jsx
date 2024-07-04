import React from "react";
import "./AdditionInfo.css";
function AdditionInfo({ weather }) {
  return (
    <div className="additional-info">
      <div className="additional-info-one">
        <p>
          <strong>Feels Like:</strong> {weather.current.feelslike_c}°C
        </p>
        <p>
          <strong>Humidity:</strong> {weather.current.humidity}%
        </p>
        <p>
          <strong>Precip_mm:</strong> {weather.current.precip_mm}mm
        </p>
        <p>
          <strong>Wind:</strong> {weather.current.wind_kph} kph from{" "}
          {weather.current.wind_dir}
        </p>
      </div>
      <div className="additional-info-two">
        <p>
          <strong>Pressure:</strong> {weather.current.pressure_mb} mb
        </p>
        <p>
          <strong>Visibility:</strong> {weather.current.vis_km} km
        </p>
        <p>
          <strong>UV Index:</strong> {weather.current.uv}
        </p>
      </div>
      {weather.current.temp_c > 35 ? (
        <p>High temperature! Consider additional irrigation.</p>
      ) : (
        <p>
          The temperature is {weather.current.temp_c}°C, no additional
          irrigation needed.
        </p>
      )}

      {weather.current.precip_mm > 10 ? (
        <p>Heavy rain expected. Check for potential waterlogging in fields.</p>
      ) : (
        <p>
          The precipitation level is {weather.current.precip_mm} mm, no heavy
          rain expected.
        </p>
      )}
    </div>
  );
}

export default AdditionInfo;
