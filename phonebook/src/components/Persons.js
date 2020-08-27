import React from 'react'
import Person from './Person'

const Persons = (props) =>{
    const containsFilter = (person)=> props.newFilter ? person.name.toLowerCase().includes(props.newFilter.toLowerCase()) : true
    return(
    <ul>
        {(props.persons.filter(containsFilter)).map(person => <Person key={person.name} name={person.name} number={person.number} id={person.id} deletePersonCallBack={props.deletePersonCallBack}/>)}
    </ul>
    )}
export default Persons