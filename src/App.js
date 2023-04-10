import './App.css';
import React from 'react'
import HookuStateAndButton from './Components/HookuStateAndButton';
import RenderList from './Components/RenderList';
import ConditionalRendering from './Components/ConditionalRendering';
import ConditionalRenderinSimple from './Components/ConditionalRenderinSimple';
import ConditionalRenderingTernario from './Components/ConditionalRenderingTernario';
import ComponentWithProp from './Components/ComponentWithProp';
import DestructuringProps from './Components/DestructuringProps';


function App() {

  const handleClick = () => {
    console.log("clicked")
  }

  const cars = [
    {id: 1, marca: "Ferrari", cor: "Vermelho", km: 0},
    {id: 2, marca: "Mazda", cor: "Prata", km: 100},
    {id: 3, marca: "Fiat", cor: "Branco", km: 100000},
    {id: 4, marca: "Gol", cor: "Verde", km: 200000}
  ]
  
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
      <DestructuringProps marca={car.marca} cor={car.cor} km={car.km}         />
    ))}
    </div>
  );
  
}

export default App;
