import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Skills from './skills.jsx'
import Student from './student.jsx'

function App() {
  const [display, setDisplay] = useState("student")

  return (
    <>
      <div>
       <h1> React</h1>
       <button onClick={()=> setDisplay("student")}>Go to Student</button>
       <button onClick={()=> setDisplay("skills")}>Got to skills</button>
       { display=="skills" ? <Skills /> : <Student /> }
       
      </div>
    </>
  )
}

export default App
