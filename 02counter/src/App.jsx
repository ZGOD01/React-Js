import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [Counter, setCounter] = useState(15)

  // let Counter = 15

  
  const addValue = ()=>{
    // Counter = Counter + 1
    setCounter(Counter + 1)
    // console.log("Clicked" , Counter);
  }

  const  removeValue = ()=>{
    setCounter(Counter - 1)
    // console.log("Removed", Counter);
  }

  return (
    <>
      <h1>ZGOD AND REACT </h1>
      <h2>Counter Value : {Counter}</h2>


      <button 
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
