import React from 'react'
import CountryListItem from './CountryListItem'
const CountriesList = (props) => {
    if(props.countries.length <=10){
        return(
            <ul>
            {props.countries.map(country => <CountryListItem key={country.name} name={country.name} showCountry = {props.showCountryCallback}/>)}
            </ul>)}
    else{
        return(
        <div>Too many matches spcify anaother filter</div>)
    }
}
export default CountriesList