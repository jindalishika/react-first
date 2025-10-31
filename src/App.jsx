import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Skills from './skills.jsx'
import Student from './student.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <h1> Checkboxes</h1>
       <Student />
       <br/>
       <hr/>
       <Skills />
      </div>
    </>
  )
}

export default App
