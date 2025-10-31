import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Skills from './skills.jsx'
import Student from './student.jsx'
import User from './user.jsx'

function App() {
  const [display, setDisplay] = useState("student")
  const users = [{
    name: "Ishika", age: 22, city: "Mumbai"
  }, {
    name: "John",
    age: 23,
    city: "Delhi"
  }, {
    name: "Alice",
    age: 21,
    city: "Bangalore"
  }
  ]

  return (
    <>
      <div>
        <h1> React</h1>
        <button onClick={() => setDisplay("student")}>Go to Student</button>
        <button onClick={() => setDisplay("skills")}>Got to skills</button>
        <button onClick={() => setDisplay("users")}>Go to Users</button>
        {display == "skills" ? <Skills />
          : display == "student" ? <Student />
            : (
              users.map((user, index) => (
                <div key={index}>
                  <User user={user} />
                </div>
              ))
            )
        }
      </div>
    </>
      )
}

      export default App
