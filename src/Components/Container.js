//Usado quando um componente precisa ter JSX dentro dele, porém este JSX vem do componente pai
//Então o componente age como um container que abraça estes elementos. E children é considerada uma prop do componente

import React from 'react'

const Container = ({ children }) => {
  return (
    <div>
      <h1>ChildrenProp</h1>
      {children}
    </div>
  )
}

export default Container