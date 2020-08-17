import React from 'react'

const WeatherIcon = (props) => {
    return(
    <li>
        <img src={props.img} alt="Weather Icon" ></img>
    </li>
    )
}

export default WeatherIcon