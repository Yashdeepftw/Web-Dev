import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  
  let sum = 0;
  for(let i = 0; i <= value; i++) {
    sum = sum + i;
  }
  return (
    <>
    <input onChange={(e) => {
      setValue(e.target.value);
    }}  placeholder='Find sum from 1 to n'/>
    <br />
    Sum is {sum}
    <br />
    <button onClick={() => {
      setCount(count+1);
    }
    }>Counter({count})</button>
    </>
  )
}




export default App
