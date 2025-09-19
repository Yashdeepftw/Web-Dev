
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import './App.css'
import { Root } from './pages/Root'
import { GetPost } from './pages/GetPost'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Root />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/get/:id' element={<GetPost />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
