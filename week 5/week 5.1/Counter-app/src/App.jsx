import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { disconnect } from 'mongoose'


function App() {
  const [todos, setTodos] = useState([{
    title: "go to gym",
    description: "go to gym at 7PM",
    completed: false
  }, {
    title: "study DSA ",
    description: "study DSA at 9 PM",
    completed: true
  }, ]);
  const [count, setCount] = useState(0);
  // function onClickHandler(){
  //   setCount(count + 1);
  // }
  return (
    <div>
      {todos.map((todo) => {
        return <Todo title={todo.title} description={todo.description} />
      })}
      {/* <button onClick={onClickHandler}>Counter {count}</button> */}
      {/* <CustomButton count={count} setCount={setCount}></CustomButton> */}
    </div>
  )
}

function CustomButton(props){
  function onClickHandler(){
    props.setCount(props.count + 1);
  }
  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
