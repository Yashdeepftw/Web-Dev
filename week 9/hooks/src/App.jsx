
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function useDebounce(value, timeout) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    setTimeout(() => {
      setDebounceValue(value)
    }, timeout)
  }, [value])
  return debounceValue;
}

function App() {
  const [inputValue, setInputValue] = useState('');
  const debounceValue = useDebounce(inputValue, 1000);

  return (
    <>
    Debounced Value is {debounceValue}
    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Search' />
    </>
  )
}

// function useIsOnline() {
//   const [isOnline, setIsOnline] = useState(window.navigator.onLine);

//   useEffect(() => {
//     window.addEventListener('online', () => {
//       setIsOnline(true);
//     })
//     window.addEventListener('offline', () => {
//       setIsOnline(false);
//     })
//   }, [])
  
//   return isOnline;
// }
// function App() {
//   const isOnline = useIsOnline();

//   return (
//   <>
//   {isOnline ? <div>You are Online</div> : <div>You are Offline</div>}
//   </>
//   )
// }

// custom hook

// function useTodos(n) {
//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const value = setInterval(() => {
//       axios.get("http://localhost:3000/todos/new")
//         .then((res) => {
//           setTodos(res.data);
//           setLoading(false);
//         })
//     }, n*1000)

//     axios.get("http://localhost:3000/todos/new")
//         .then((res) => {
//           setTodos(res.data);
//           setLoading(false);
//         })
//         return () => {
//           clearInterval(value);
//         }
//   }, [n])

//   return {todos, loading};
// }

// function Track({ todos }) {
//   return <div>
//     {todos.title} 
//     <br />
//     {todos.description}
//   </div>
// }

// function App() {

//   const {todos, loading} = useTodos(5);

//   return (
//     <>
//     {loading ? <div>Loading... </div> : todos.map(todo => <Track key={todo._id} todos={todo} />) }
//     </>
//   )


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
// }

export default App
