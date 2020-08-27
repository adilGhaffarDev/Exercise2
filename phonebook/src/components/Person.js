import React from 'react'

const Person = ({name,number,id,deletePersonCallBack}) => {
    return(
    <li>{name} {number}
        <button onClick={()=>deletePersonCallBack(id)}>Delete</button>
    </li>
    )
}
export default Person