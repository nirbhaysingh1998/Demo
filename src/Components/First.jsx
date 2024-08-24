import React from 'react'

const First = ({ onYes, onNo }) => {
  return (
    <div>
      <h1>first</h1>
      <button onClick={onYes}>Yes</button>
    <button onClick={onNo}>No</button>
    </div>
  )
}

export default First
