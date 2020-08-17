import React from 'react'

const CountryListItem = (props) => {
    return(
        <li>
            {props.name}
            <button onClick={()=>props.showCountry(props.name)}>show</button>
        </li>)
}
export default CountryListItem