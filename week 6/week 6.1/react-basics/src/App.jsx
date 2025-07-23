import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App() {

  const [todos, setTodos] = useState([]);
  useEffect( () => {
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async (res) => {
      const json = await res.json();
      setTodos(json);
    })
  }, [])
  

  return <div>
    {todos.map(todo => <Todo title={todo.title} description={todo.description} />)}
    </div>
  
}

function Todo({title, description}) {
  return <div>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </div>
}


// function TextComponent() {
//   return <div>
//     hi there
//   </div>
// }

// function CardWapper({innerComponent}) {
//   return <div style={{
//     border:"2px solid black"
//   }}>
//     {innerComponent}
//   </div>
// }

export default App
