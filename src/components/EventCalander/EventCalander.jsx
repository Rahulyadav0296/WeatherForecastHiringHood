import React, { useContext, useState } from "react";
import Calendar from "react-calendar";
import { AuthContext } from "../../utils/AuthContext";
import "./EventCalander.css";

function EventCalander() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [selectedDate, setSelectedDate] = useState(""); // Initialize as empty to avoid confusion
  const { location } = useContext(AuthContext);

  const fetchWeatherForDate = async (date) => {
    const formattedDate = convertDate(date);
    setSelectedDate(formattedDate);

    if (!isValidateRange(date)) {
      setError("Please select a date between 14 and 300 days from today.");
      setWeatherData(null);
      return;
    }

    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/future.json?key=bf7943c111424f4694f141052242806&q=${location}&dt=${formattedDate}`
      );
      if (!response.ok) {
        throw new Error("The response is not ok!");
      }
      const data = await response.json();
      setWeatherData(data);
      setError("");
    } catch (error) {
      console.error(error);
      setError("Failed to fetch weather data, please try again!");
      setWeatherData(null);
    }
  };

  const handleDayClick = (date) => {
    fetchWeatherForDate(date);
  };

  return (
    <div className="event-calendar-container">
      <h1>Event Planner</h1>
      {error && <p className="error-message">{error}</p>}
      <Calendar
        onClickDay={handleDayClick}
        minDate={new Date(new Date().setDate(new Date().getDate() + 1))} // Start from tomorrow
      />
      {weatherData && (
        <div className="weather-details-events">
          <h2>
            <strong>Date: </strong> : {selectedDate}
          </h2>
          <p>
            <strong>Location:</strong> {weatherData.location.name}
          </p>
          <img
            src={weatherData.forecast.forecastday[0].day.condition.icon}
            alt={weatherData.forecast.forecastday[0].day.condition.text}
          />
          <p>
            Condition for Event :{" "}
            {weatherData.forecast.forecastday[0].day.condition.text}
          </p>
          <p>
            Temperature: {weatherData.forecast.forecastday[0].day.avgtemp_c}°C
          </p>
        </div>
      )}
    </div>
  );
}

const convertDate = (dateString) => {
  // extract year, month, and day
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const isValidateRange = (date) => {
  const today = new Date();
  const futureStart = new Date(today);
  futureStart.setDate(today.getDate() + 14); // Start from tomorrow
  const futureEnd = new Date(today);
  futureEnd.setDate(today.getDate() + 300); // 300 days from today
  return date >= futureStart && date <= futureEnd;
};

export default EventCalander;
