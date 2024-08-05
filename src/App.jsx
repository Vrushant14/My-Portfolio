import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hi, I am Vrushant Mukherjee</h1>
      <h2>A Passionate Computer Science Student</h2>
      <button onClick={() => {window.location = 'https://github.com/Vrushant14'}} className="btn">Github</button>
      <button onClick={() => {window.location = 'https://linkedin.com/in/vrushantmukherjee14'}} className="btn">LinkedIn</button>
      <button onClick={() => {window.location = 'https://leetcode.com/u/Vrushant14/'}} className="btn">LeetCode</button>
    </>
  )
}

export default App
