import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter, setCounter] = useState(15)


  // let counter = 15

const addValue = ()=>{
  counter = counter +1

  setCounter(counter)

}
 const removeValue = () =>{

setCounter(counter -1)

 }
  return (
    <>
      <h1>Chai aur code</h1>
      <h2>conter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value </button>

      <p>counter value : {counter}</p>
    </>
  )
}

export default App
