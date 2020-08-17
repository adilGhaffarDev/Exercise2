import React from 'react'
import WeatherIcons from './WeatherIcons'

const Weather = (props) => {
  return (
    <div>
    <h2>Weather in {props.cityName}</h2>
    <p><b>Temperature:</b> {props.weather.temperature}</p>
    <WeatherIcons weather_icons={props.weather.weather_icons}/>
  <p><b>Wind:</b> {props.weather.wind_speed} mph direction {props.weather.wind_dir}</p>
  </div>
)}
export default Weather