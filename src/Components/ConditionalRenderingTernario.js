import React, {useState} from 'react'

const ConditionalRenderingTernario = () => {

    const [name, setName] = useState("Bernardo")

  return (
    <div>
        <h1>Conditional Rendering com Ternario</h1>
        {name === "Bernardo" ? (
            <div>
                <p>É Bernardo</p>
            </div>
        ) : (
        <div>
            <p>Mudou para Miguel</p>
        </div>
        )}

        <button onClick={() => setName("Miguel")}>Mudar nome para Miguel</button>
        <button onClick={() => setName("Bernardo")}>Mudar para Bernardo</button>

    </div>
  )
}

export default ConditionalRenderingTernario