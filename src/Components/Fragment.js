import React from 'react'

const Fragment = ({fraProp}) => {
  return (
    <>
    <h1>Fragment</h1>
    <p>Quando não desejamos ter apenas um elemento pai usamos a tag vazia <></> para encapsular o código</p>
    <p>{fraProp}</p>
    </>
  )
}

export default Fragment