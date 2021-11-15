import React, { useState } from "react";
import Result from "./Result";

function Weather() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [weatherDesc, setWeatherDesc] = useState({});
  const [isDataFetched, setIsDataFetched] = useState(false)

  const API_KEY = "d39ac9035d254de19d2271313b470568";

  const onChangeHandler = (e) => {
    setCityName(e.target.value);
    console.log(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const api_url = `https://api.weatherbit.io/v2.0/current?&city=${cityName}&key=${API_KEY}`
    fetch(api_url)
    .then(response => response.json())
    .then(data => {
            setWeatherData(data.data[0]); 
            setWeatherDesc(data.data[0].weather);
            setIsDataFetched(true)
        })
  };

  

  
  return (
    <div className="app-container">
      <h1 className="app-title">Weather App</h1>
      <div className="weather-form-container">
        <form>
          <input
            type="text"
            name="city_name"
            placeholder="Enter city name"
            value={cityName}
            onChange={onChangeHandler}
            autoComplete="off"
          />
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-submit"
              onClick={submitHandler}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="result-container">
        {/* <div className="result-div">
          <h1 className="city-name">
            {weatherData.city_name} <span>{weatherData.country_code}</span>
          </h1>
          <h4 className="weekday">
            {weekdays[new Date("2021-11-04").getDay()]}
          </h4>
          <p className="temp">
            {weatherData.temp}
            <span>
              <sup>&deg;</sup>
            </span>
          </p>
          <p className="weather-desc">{weatherDesc.description}</p>
          <div className="weather-icon">
            <img src={a01d } alt={weatherDesc.icon} srcSet="" />
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
        </div> */}

        {isDataFetched ? <Result weatherData={weatherData} weatherDesc={weatherDesc} /> : ''}
        
      </div>
    </div>
  );
}

export default Weather;
