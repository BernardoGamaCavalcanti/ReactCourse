import React from 'react'

/*Para usar a desestruturação de objetos devemos iniciar com {} - Lembrando que o JSX é um obj*/
const DestructuringProps = ({marca, ano, cor, velho, km}) => {

  return (

    <div>
        <h1>DestructuringProps - Lista</h1>
        <h2>Lista de Carros</h2>
        <ul>
          <li>Marca: {marca}</li>
          <li>Ano: {ano}</li>
          <li>Cor: {cor}</li>
          <li>Km: {km} </li>
          <li>Velho: {velho === true ? (<p>Sim</p>) : (<p>Não</p>)}</li>
        </ul>
    </div>
  )
}

export default DestructuringProps