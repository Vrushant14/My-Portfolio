import { useState } from 'react'
import './intro.css'
import TypingEffect from './TypingEffect';


function Intro() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='vrushant'><TypingEffect text="Hi, I am Vrushant Mukherjee!" speed={100} /></h1>
      <hr></hr>
      <h2 className='subtext'>A Passionate Computer Science Student</h2>
      <a   className='mylinks' href = 'https://github.com/Vrushant14' target='_blank'><img className='githublogo' src='/assets/github.svg'></img></a>
      <a  className='mylinks' href = 'https://linkedin.com/in/vrushantmukherjee14' target='_blank'><img className='githublogo' src='/assets/linkedin.svg'></img></a>
      <a  className='mylinks' href= 'https://leetcode.com/u/Vrushant14/' target='_blank'><img className='githublogo' src='/assets/leetcode.svg'></img></a>
      
    </>
  )
}

export default Intro
