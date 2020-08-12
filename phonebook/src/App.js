import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

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