import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import LoginForm from './component/LoginForm'
import Home from './component/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  )
}

export default App
