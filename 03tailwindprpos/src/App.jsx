import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

    let myObj ={
      username : "ZgOD",
      age : 20
    }

    let newArr = [1,2,3,4]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind Test</h1>
      <Card username="ZGOD"  btnText="Clicked Me"/>
      <Card username="Jonathan" />
    </>
  )
}

export default App
