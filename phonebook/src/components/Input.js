import React from 'react'
const Input = (props) => {
  return (
    <div>{props.title}
    <input
    value={props.value}
    onChange={props.onChangeHandler}
    />
  </div>
)}
export default Input