import './App.css';
import React from 'react'
import HookuStateAndButton from './Components/HookuStateAndButton';
import RenderList from './Components/RenderList';
import ConditionalRendering from './Components/ConditionalRendering';
import ConditionalRenderinSimple from './Components/ConditionalRenderinSimple';
import ConditionalRenderingTernario from './Components/ConditionalRenderingTernario';
import ComponentWithProp from './Components/ComponentWithProp';
import DestructuringProps from './Components/DestructuringProps';
import Fragment from './Components/Fragment';
import Container from './Components/Container';
import ExecuteFunction from './Components/ExecuteFunction';


function App() {

  const handleClick = () => {
    console.log("clicked")
  }

  const cars = [
    {id: 1, marca: "Ferrari", ano: 1990, cor: "Vermelho", km: 0,      velho: false},
    {id: 2, marca: "Mazda",   ano: 1965, cor: "Prata",    km: 100,    velho: true},
    {id: 3, marca: "Fiat",    ano: 1972, cor: "Branco",   km: 100000, velho: true},
    {id: 4, marca: "Gol",     ano: 1986, cor: "Verde",    km: 200000, velho: false}
  ]

  function reloadPage() {
    window.location.reload()
  }
  
  return (
    <div>
      <button onClick={handleClick}>Active Event</button>

      
    <ConditionalRendering/>
    <ConditionalRenderinSimple/>
    <ConditionalRenderingTernario/>
    <HookuStateAndButton/>
    <RenderList/>
    <br />
    <hr />
    <h1>ComponentWithProp</h1>
    <ComponentWithProp prop1="firstProp"/>
    <ComponentWithProp prop2="secondProp"/>
    <ComponentWithProp prop3="thirdProp" />
    <DestructuringProps dia={23} mes="abril" ano={1990} />
    <br />
    <hr />
    <h1>Reusing Components with Props e Conditional Rendering</h1>
    <DestructuringProps dia={23} marca="Fiat" ano={1970} cor="branco" velho={false}/>
    <DestructuringProps dia={23} marca="Ferrari" ano={1960} cor="vermelho" velho={true}/>
    <DestructuringProps dia={23} marca="Mazda" ano={1950} cor="prata" velho={true}/>
    <br />
    <hr />
    <h1>Modo mais correto de imprimir listas - Loop em Array de Obj</h1>
    {cars.map((car) => (
      <DestructuringProps id={car.id} marca={car.marca} cor={car.cor} km={car.km} velho={car.velho}/>
    ))}
    <br />
    <hr />
    <Fragment fraProp="Testando as props"/>
    <br />
    <hr />
    <Container>
      {/*A prop children é usada quando um componente precisa ter JSX dentro dele sendo escrito no app principal*/}
      <p>Testando o container</p>
    </Container>
    <br />
    <hr />
    <ExecuteFunction MyFunction={reloadPage}/>

    </div>
  );
  
}

export default App;
