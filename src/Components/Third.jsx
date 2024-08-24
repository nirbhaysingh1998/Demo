import React from 'react'

const Third = ({ onYes, onNo }) => {
  return (
    <div>
      <h1>Third</h1>
      <button onClick={onYes}>Yes</button>
    <button onClick={onNo}>No</button>
    </div>
  )
}

export default Third
