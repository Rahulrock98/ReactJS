import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
 

function App() {
  const [count, setCount] = useState(0)

let myObj={
  username : "rahul",
  age:23
}
let newArr=[1,2,3]

  return (
    <>
      <h1 className='bg-green-500 text-black p-5 rounded-xl mb-5'>Tailwind Test</h1>

 

<Card username="chai" btnText="click me"/>
<Card username="rock" btnText/> 
    </>
  )
}

export default App
