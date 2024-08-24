import React from 'react'

const Second = ({ onYes, onNo }) => {
  return (
    <><div>second</div>
    <button onClick={onYes}>Yes</button>
    <button onClick={onNo}>No</button></>
    
  )
}

export default Second