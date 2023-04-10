import React, {useState} from 'react'

const RenderList = () => {

  const [list] = useState(["Bernardo", "Pedro", "Ingredi", "Lucio"])

  const [users] = useState([
    {id: 1095, name: "Bernardo"},
    {id: 1158, name: "Ingredi"},
    {id: 2028, name: "Miguel"}
  ])

  return (
    <div>
        <hr />
        <br />
        <h1>RenderList - Método meia boca</h1>
        <ul>
           {/*método não tão recomendado, pois caso um item seja deletado os índices mudam*/}
           {/*constroi o array com useState e usa o método de array .map(parâmetro, index)*/}
           {list.map((item, i) => (
            <li key={i}>{item}</li>
           ))}
        </ul>
        <hr />
        <br />
        <h1>RenderList - Método usando o Id único como key</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
            {user.name}
            </li>
          ))}
        </ul>
        
        </div>
  )
}

export default RenderList