import React from 'react'
import WeatherIcon from './WeatherIcon'
const WeatherIcons = (props) => {
    return(
        <ul>
            {props.weather_icons.map(weather_icon => <WeatherIcon img={weather_icon} key={weather_icon}/>)}
        </ul>)
}
export default WeatherIcons