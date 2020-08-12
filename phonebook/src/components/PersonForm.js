import React from 'react'
import Input from './Input'
const PersonForm = (props) => {
  return (
  <div>
    <form onSubmit={props.onSubmitCallback}>
        <Input title='name' value={props.newName} onChangeHandler={props.nameChangeHandler}/>
        <Input title='number' value={props.newNumber} onChangeHandler={props.numberChangeHandler}/>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  </div>
)}
export default PersonForm