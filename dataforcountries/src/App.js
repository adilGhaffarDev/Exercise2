import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import CountryData from './components/CountryData'
import CountriesList from './components/CountriesList'
import Weather from './components/Weather'

const App = () => {
    const [countries, setCountries] = useState([])
    const [weather, setWeather] = useState([])
    const [newFilter, setNewFilter] = useState('')

    const api_key = process.env.REACT_APP_API_KEY
    const hook = () => {
      console.log('effect')
      axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => {
          setCountries(response.data)
        })
    }

    const weatherHook = () => {
      if(filteredCountries.length===1)
      {
        const url = 'http://api.weatherstack.com/current?access_key='+ api_key +'&query=' +filteredCountries[0].capital
        axios
        .get(url)
        .then(response => {
          setWeather(response.data)
        })
      }
    }

    useEffect(hook, [])

    const showCountry = (countryName)=>
    {
      setNewFilter(countryName)
    }
    const handleFilterChange = (event)=>setNewFilter(event.target.value)
    const containsFilter = (country)=> newFilter ? country.name.toLowerCase().includes(newFilter.toLowerCase()) : true
    const filteredCountries = countries.filter(containsFilter)
    useEffect(weatherHook, [filteredCountries.length===1])

    if(weather.current && filteredCountries.length===1)
    {
      return (
        <div>
            <Filter title='Find Countries:' onChangeHandler={handleFilterChange} />
            <CountryData country={filteredCountries[0]}/>
            <Weather cityName={filteredCountries[0].capital} weather={weather.current}/>
        </div>)
    }
    else
    {
      return (
        <div>
            <Filter title='Find Countries:' onChangeHandler={handleFilterChange} />
            <CountriesList countries = {filteredCountries} showCountryCallback = {showCountry}/>
        </div>)
    }
  }
  export default App