
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/api/v1/user/signup' element={<Signup />} />
          <Route path='/api/v1/user/signin' element={<Signin />} />
          <Route path='/api/v1/blog' element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
