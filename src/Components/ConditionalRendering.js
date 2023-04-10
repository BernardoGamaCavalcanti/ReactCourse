import React from 'react'

const ConditionalRendering = () => {

  const ConditionalRendering = (x) => {
    if (x) {
      return <div className='peidao'>
        <h1>true é peidão</h1>
      </div>

    } else {
      return <div className='fodao'>
        <h1>false é fodão</h1>
      </div>
    }
  }

  return (
    <div>
      <hr />
      <br />
      <h1>ConditionalRendering</h1>
      <div>
        {ConditionalRendering(true)}
        {ConditionalRendering(false)}
      </div>
    </div>
  )
}

export default ConditionalRendering