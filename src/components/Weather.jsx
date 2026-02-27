import React, { useState, useEffect } from "react";
import "./Weather.css";

const API_KEY = import.meta.env.VITE_API_KEY; 

const Weather = () => {
  const [city, setCity] = useState("London");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  const fetchWeather = async () => {
    try {
      // reset error only
      setError("");

      if (!city.trim()) {
        setError("⚠️ Please enter a city name");
        return;
      }

      // CURRENT WEATHER
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      const data = await res.json();

      // API error handling
      if (data.cod !== 200) {
        setShake(true);
        setTimeout(() => setShake(false), 500);
        throw new Error("⚠️ City not found. Please enter a valid city.");
      }

      // Only update if successful
      setWeather(data);

      // FORECAST DATA
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );

      const forecastData = await forecastRes.json();

      // one forecast per day (12 PM)
      const dailyForecast = forecastData.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );

      setForecast(dailyForecast.slice(0, 5));
    } catch (err) {
      setError(err.message);
      setShake(true);
      setTimeout(() => {
        setShake(false);
        setError("");
      }, 3000);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <>
      {/* LOGO */}
      <div className="logo">WeatherX</div>

      {/* ERROR NOTIFICATION */}
      {error && <div className="error-notification">{error}</div>}
      
      <div className={`app ${shake ? 'shake' : ''}`}>
      <div className="weather-wrapper">

        {/* LEFT SIDE */}
        {weather && (
          <div className="main-weather">
            <div className="top">
              <h2>{weather.name}</h2>

              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Search city..."
              />

              <button onClick={fetchWeather}>Search</button>
            </div>

            <h1 className="temp">
              {Math.round(weather.main.temp)}°C
            </h1>

            <p className="desc">
              {weather.weather[0].description}
            </p>

            <div className="details">
              <p>💨 Wind: {weather.wind.speed} km/h</p>
              <p>💧 Humidity: {weather.main.humidity}%</p>
            </div>

            <div className="icon">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                alt="weather"
              />
            </div>
          </div>
        )}

        {/* FORECAST PANEL */}
        {forecast.length > 0 && (
          <div className="forecast-panel">
            <h3>Forecast</h3>

            {forecast.map((item, index) => (
              <div key={index} className="forecast-item">
                <p>
                  {new Date(item.dt_txt).toLocaleDateString("en-US", {
                    weekday: "long",
                  })}
                </p>
                <p>{Math.round(item.main.temp)}°C</p>
              </div>
            ))}
          </div>
        )}
      </div>

      </div>
    </>
  );
};

export default Weather;