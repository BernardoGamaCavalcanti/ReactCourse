import {useState} from 'react'

const ConditionalRenderinSimple = () => {

  const [x] = useState(true)
  const [y] = useState(false)

  return (
    <div>
        <h1>Renderização condicional usando ternário simples</h1>
        {x && <p>Se x for true</p> }
        {!y && <p>Se y for false</p>}
        {/*A expressão como usada acimaserve para condicionais simples*/}
    </div>
  )
}

export default ConditionalRenderinSimple