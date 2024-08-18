import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Intro from './intro.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Intro />
    </>
  )
}

export default App
