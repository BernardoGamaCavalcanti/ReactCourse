import React from 'react'

const ExecuteFunction = ({ MyFunction }) => {
  return (
    <div> <h1>Função como Prop</h1>
    <button onClick={MyFunction}>Reload</button>
    </div>
  )
}

export default ExecuteFunction