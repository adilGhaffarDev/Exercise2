import React, { useState } from 'react'
import Person from './components/Person'
import Form from './components/Form'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const addPerson = (event)=>{
    event.preventDefault()
    let alreadyExist = false
    persons.forEach((person)=>{
      if(person.name.localeCompare(newName)===0)
      alreadyExist = true
    })
    if(newName && !alreadyExist){
      const nameObject = {
        name : newName,
        number : newNumber
      }
      setPersons(persons.concat(nameObject))
    }
    else{
      let message = alreadyExist ? `${newName} is already added to phonebook` : 'empty string not allowed'
      window.alert(message)
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Form newName={newName} nameChangeHandler={handleNameChange} newNumber={newNumber} numberChangeHandler={handleNumberChange} onSubmitCallback={addPerson}/>
      <h2>Numbers</h2>
      <ul>
      {persons.map(person =>
          <Person key={person.name} name={person.name} number={person.number} />
        )}
      </ul>
    </div>
  )
}
export default App