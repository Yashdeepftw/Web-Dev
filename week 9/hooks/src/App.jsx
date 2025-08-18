
import { useEffect, useState } from 'react'
import './App.css'

function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000")
      .then((res) => {
        setTodos(res.data.todos);
      })
  }, [])

  return todos;
}

function Track({ todos }) {
  return <div>
    {todos.title} 
    <br />
    {todos.description}
  </div>
}

function App() {

  const todos = useTodos();

  return (
    <>
      {todos.map(todo => <Track todos={todo} />)}
    </>
  )

//   const [render, setRender] = useState(true);
//   useEffect(() => {
//     setInterval(() => {
//       setRender(render => !render);
//     }, 1000)
//   }, []);
//   if(!render) {
//     return <div style={{ background: 'red', height: '100px' }}>visible div</div>
//   }
//   return (
//     <>
//       <Mycomponent />
//     </>
//   )
// }

// function Mycomponent () {
//   useEffect(() => {
//     console.error('component mounted');

//     return () => {
//       console.log('component unmounted');
//     }
//   }, []);

//   return <div>
//     from the inside of the element
//   </div>
}

export default App
