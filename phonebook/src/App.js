import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  
  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  useEffect(hook, [])

  const addPerson = (event)=>{
    event.preventDefault()
    const found = persons.some(person => person.name === newName);
    if(newName && !found){
      const nameObject = {
        name : newName,
        number : newNumber
      }
      setPersons(persons.concat(nameObject))
    }
    else{
      let message = found ? `${newName} is already added to phonebook` : 'empty string not allowed'
      window.alert(message)
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event)=>setNewName(event.target.value)
  const handleNumberChange = (event)=>setNewNumber(event.target.value)
  const handleFilterChange = (event)=>setNewFilter(event.target.value)

  const containsFilter = (person)=> newFilter ? person.name.toLowerCase().includes(newFilter.toLowerCase()) : true

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter title='filter shown with' onChangeHandler={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm newName={newName} nameChangeHandler={handleNameChange} newNumber={newNumber} numberChangeHandler={handleNumberChange} onSubmitCallback={addPerson}/>
      <h2>Numbers</h2>
      <Persons persons={persons} containsFilter={containsFilter} />
    </div>
  )
}
export default App