import React, {useState} from 'react'

const HookuStateAndButton = () => {
 
  let numberChange = 50
  const [number, setNumber] = useState(2+2)

  return (
    <div>
        <hr />
        <br />
        <h1>Hook useState and Button</h1>
        number do useState {number}
        <div>
        <button onClick={() => setNumber(numberChange)}>Change Value</button>
        <br />
        </div>
    </div>
  )
}

export default HookuStateAndButton