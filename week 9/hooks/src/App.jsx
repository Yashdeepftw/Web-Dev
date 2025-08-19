
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    setTimeout(() => {
      axios.get("http://localhost:3000/todo")
        .then((res) => {
          setTodos(res.data.todos);
          setLoading(false);
        })
    }, n*1000)

    axios.get("http://localhost:3000/todo")
        .then((res) => {
          setTodos(res.data.todos);
          setLoading(false);
        })
  }, [])

  return {todos, loading};
}

function Track({ todos }) {
  return <div>
    {todos.title} 
    <br />
    {todos.description}
  </div>
}

function App() {

  const {todos, loading} = useTodos(5);

  return (
    <>
    {loading ? <div>Loading... </div> : todos.map(todo => <Track key={todo._id} todos={todo} />) }
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
