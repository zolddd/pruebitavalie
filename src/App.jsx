import { useState,useEffect } from 'react'
import './App.css'
function App() {


  /*const [nombres, setnombres] = useState(["yahir","vale","cristian","alison","renata"]);

  const [changeName, setchangeName] = useState(false);

  useEffect(()=>{



  },[]);

  setInterval(()=>{

    if(changeName===false){
      setchangeName(true)
      console.log("cambio a true");
    }
    if(changeName===true){
      setchangeName(false);
      console.log("cambio a false");
    }
   
  },4000);
   
  function randomNumberInRange(min, max) {
    let posicion= Math.floor(Math.random() * (max - min + 1)) + min;
     {changeName ? <h1>hola {nombres[randomNumberInRange(0,4)]}</h1> :undefined} 
    console.log(posicion);
    return posicion;
  }*/


function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });}


  return (
    <div className="App">
    <h1>I've rendered {count} times!</h1>
    </div>
  )
}

export default App
