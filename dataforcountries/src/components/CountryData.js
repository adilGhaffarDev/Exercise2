import React from 'react'
import Language from './Language'
import "./CountryData.css";

const CountryData = (props) => {
  return (
    <div>
    <h1>{props.country.name}</h1>
    <p>Capital: {props.country.capital}</p>
    <p>Population: {props.country.population}</p>
    <h2>Languages</h2>
    <ul>
        {props.country.languages.map(language=><Language key = {language.name} name = {language.name}/>)}
    </ul>
    <img src={props.country.flag} alt="Country Flag" className="flag"></img>
  </div>
)}
export default CountryData