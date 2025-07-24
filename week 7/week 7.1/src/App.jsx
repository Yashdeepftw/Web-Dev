import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { Dashboard } from '../components/Dashboard'
import { Landing } from '../components/Landing'

function App() {

  return (
    <div>
      
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate();

  return <div>
      <div >
        <button onClick={() => {
          navigate("/");
        }}> Landing Page </button>
        <button onClick={() => {
          navigate("/dashboard")
        }}> Dashboard Page </button>
      </div>
  </div>
}

export default App