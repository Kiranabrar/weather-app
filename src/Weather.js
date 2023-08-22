import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = (props) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=dcdc4670986286d660736c7f0c57b601&units=metric`
      );
      setWeatherData(result.data);
    };
    fetchData();
  }, [props.city]);

  if (!weatherData) return <div>Loading...</div>;

  const iconUrl = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

  return (
    <div>
      <h2>{weatherData.name}</h2>
      <div>
        <img src={iconUrl} alt={weatherData.weather[0].description} />
        <span>{weatherData.weather[0].description}</span>
      </div>
      <div>{weatherData.main.temp}°C</div>
    </div>
  );
};

export default Weather;

