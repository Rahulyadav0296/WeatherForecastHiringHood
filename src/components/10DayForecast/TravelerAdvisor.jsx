import React from "react";
import "./TravelerAdvisory.css";

const TravelAdvisory = ({ day }) => {
  // Extract relevant weather information
  const { avgtemp_c, daily_chance_of_rain, maxwind_kph } = day.day;

  console.log(avgtemp_c, daily_chance_of_rain, maxwind_kph);
  // Determine advisory based on weather conditions
  let advisoryMessage = "";
  if (daily_chance_of_rain > 50) {
    advisoryMessage = "High chance of rain. Carry an umbrella or raincoat.";
  } else if (avgtemp_c < 10) {
    advisoryMessage = "Cold temperatures expected. Dress warmly.";
  } else if (maxwind_kph > 30) {
    advisoryMessage =
      "Strong winds expected. Be cautious, especially outdoors.";
  } else {
    advisoryMessage = "No specific advisories for today's weather.";
  }

  return (
    <div className="travel-advisory">
      <p>{advisoryMessage}</p>
    </div>
  );
};

export default TravelAdvisory;
