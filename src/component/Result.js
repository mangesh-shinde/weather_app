import React from "react";
import Images from '../images/index'

function Result({weatherData, weatherDesc}) {

    const icon = weatherDesc.icon
    const weatherIcon = Images[icon]

    const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

  return (
    <>
      <div className="result-div">
        <h1 className="city-name">
          {weatherData.city_name} <span>{weatherData.country_code}</span>
        </h1>
        <h4 className="weekday">{weekdays[new Date("2021-11-04").getDay()]}</h4>
        <p className="temp">
          {weatherData.temp}
          <span>
            <sup>&deg;</sup>
          </span>
        </p>
        <p className="weather-desc">{weatherDesc.description}</p>
        <div className="weather-icon">
          <img src={weatherIcon} alt={weatherDesc.icon} srcSet="" />
        </div>
        <h4 className="fees-like-temp">
          <span>Feels like </span>
          {weatherData.app_temp}
          <span>
            <sup>&#8451;</sup>
          </span>
        </h4>
        <div className="extra-param-div">
          <div className="param-div air-index">
            <h5 className="param-title">{"AQI:"}</h5>
            <p className="param-data">{weatherData.aqi}</p>
          </div>
          <div className="param-div precipitation">
            <h5 className="param-title">{"Precipitation:"}</h5>
            <p className="param-data">{weatherData.precip}</p>
          </div>
          <div className=" param-div wind-speed">
            <h5 className="param-title">{"Wind Speed"}</h5>
            <p className="param-data">{weatherData.wind_spd}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Result;