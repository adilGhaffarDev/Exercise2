import React from 'react'
import Person from './Person'

const Persons = (props) => <ul>
    {(props.persons.filter(props.containsFilter)).map(person => <Person key={person.name} name={person.name} number={person.number}/>)}
    </ul>
export default Persons