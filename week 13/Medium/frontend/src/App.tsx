
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import './App.css'
import { Root } from './pages/Root'
import { GetPost } from './pages/GetPost'
import { Post } from './pages/Post'
import { DesktopOnly } from './pages/Desktop'

function App() {

  return (
    <>
      <BrowserRouter>
      <DesktopOnly> 
          <Routes>
            <Route path='/' element={<Root />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/get/:id' element={<GetPost />} />
            <Route path='/post' element={<Post />} />
          </Routes>
        </DesktopOnly>
      </BrowserRouter>
    </>
  )
}

export default App
