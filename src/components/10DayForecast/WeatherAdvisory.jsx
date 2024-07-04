import React from "react";
import "./WeatherAdvisory.css";
function WeatherAdvisory({ day }) {
  return (
    <div className="crop-advisory">
      {day.day.daily_chance_of_rain > 50 ? (
        <p className="advisor">
          High chance of rain. Prepare for potential flooding.
        </p>
      ) : (
        <p className="advisory">
          Low chance of rain. No significant flooding expected.
        </p>
      )}

      {day.day.avgtemp_c < 30 ? (
        <p className="advisory">
          Temperatures are {day.day.avgtemp_c}°C. No frost protection needed.
        </p>
      ) : (
        <p className="advisory ">
          High temperatures. Consider additional irrigation.
        </p>
      )}
    </div>
  );
}

export default WeatherAdvisory;
