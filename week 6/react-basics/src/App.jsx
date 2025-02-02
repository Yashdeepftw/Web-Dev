import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App() {
  const [title, setTitle] = useState("Random number")

  function updateTitle() {
    setTitle("My name is : " + Math.random());
  }
  return (
    <div>
      <button style={{
        padding:10,
      }} onClick={updateTitle}>update the title</button>
      <Header title={title}></Header>
      <Header title="My name is : Harkirat Singh"></Header>
      <Header title="My name is : Harkirat Singh"></Header>
      <Header title="My name is : Harkirat Singh"></Header>

    {/* <HeaderWithButton></HeaderWithButton>  
    <Header title="My name is : Harkirat Singh"></Header> */}
    </div>
  )
}

// use this component function for re-rendering 

// function HeaderWithButton () {
//   const [title, setTitle] = useState("random number");

//   function updateTodo() {
//     setTitle("My title is : " + Math.random());
//   }
//   return <>
//     <button onClick={updateTodo}>Update Todo by clicking</button>
//     <Header title={title}></Header>
//   </>
// }

// function Header({title}) {
//   return <div>
//     {title}
//   </div>
// }

const Header = React.memo(function ({title}) {
  return <div>
    {title}
  </div>
})

export default App
