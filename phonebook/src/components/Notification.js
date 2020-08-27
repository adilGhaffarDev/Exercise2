
import React from 'react'

const Notification = ({ message, classname }) => {
    if (message==='') {
      return null
    }
    return (
      <div className={classname}>
        {message}
      </div>
    )
  }
  export default Notification