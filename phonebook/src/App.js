import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import personsService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [notification, setNotification] = useState('')
  const [error, setError] = useState('')

  const hook = () => {
    console.log('effect')
    personsService.getAll()
    .then(intitialData => {
      setPersons(intitialData)
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
      personsService
        .create(nameObject)
        .then(returnedPerson=>{
      setPersons(persons.concat(returnedPerson))
      setNotification(`Added ${newName}`)
      setTimeout(()=> setNotification(''), 3000)
    })
    .catch(error => {
      setError(error.response.data.error)
      setTimeout(()=> setError(''), 3000)
    })
    }
    else{
      if(found){
        if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
          updateNumber(newName,newNumber)
        }
        else{
          console.log("user cancelled")
        }
      }
      else{
        window.alert('empty string not allowed')
      }
    }
    setNewName('')
    setNewNumber('')
  }

  const deletePerson = id => {
    const person = persons.find(n => n.id === id)
    console.log(person.name)
    console.log(person.id)
    console.log(person.number)
    console.log(person)

    personsService
      .deletePerson(id)
      .then(deletedPerson => {
        setPersons(persons.filter(person => person.id !== id))
        })
      .catch(error => {
        setError(`Information of ${person.name} has already been deleted from server.`)
        setTimeout(()=> setError(''), 3000)
      })
  }

  const updateNumber = (name,newNumber) => {
    const person = persons.find(n => n.name === name)
    const changedPerson = { ...person, number: newNumber}
    personsService
      .update(person.id,changedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.name !== name ? person : returnedPerson))
        setNotification(`Updated number of ${newName}`)
        setTimeout(()=> setNotification(''), 3000)
        })
      .catch(error => {
        setError(`Information of ${person.name} has already been deleted from server.`)
        setTimeout(()=> setError(''), 3000)
        })
  }

  const handleNameChange = (event)=>setNewName(event.target.value)
  const handleNumberChange = (event)=>setNewNumber(event.target.value)
  const handleFilterChange = (event)=>setNewFilter(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} classname='notification'/>
      <Notification message={error} classname='error'/>
      <Filter title='filter shown with' onChangeHandler={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm newName={newName} nameChangeHandler={handleNameChange} newNumber={newNumber} numberChangeHandler={handleNumberChange} onSubmitCallback={addPerson}/>
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} deletePersonCallBack={deletePerson}/>
    </div>
  )
}
export default App