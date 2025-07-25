import './App.css';
import { lazy } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
const Landing = lazy(() => import('../components/Landing'))
const Dashboard = lazy(() => import('../components/Dashboard'))

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