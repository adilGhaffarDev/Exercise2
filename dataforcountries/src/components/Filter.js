import React from 'react'
const Filter = (props) => {
  return (
    <div>{props.title}
    <input
    value={props.value}
    onChange={props.onChangeHandler}
    />
  </div>
)}
export default Filter