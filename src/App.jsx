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
  },
  {
    name: "Bob",
    age: 24,
    city: "Chennai"
  },
  {    name: "Eve",
    age: 22,
    city: "Kolkata"
  },
  {    name: "Charlie",
    age: 23,
    city: "Hyderabad"
  }
  ]

  const [cardStyle, setCardStyle] = useState({border: "1px solid black",
            padding: "10px",
            borderRadius: "10px",
            width: "250px",
            height: "330px",
            margin: "10px",
            boxSizing: "border-box",
            background: "white",
            color: "#000"})
  const [imgStyle, setImgStyle] = useState({width: "200px", display: "block", margin: "8px auto"})
  const [infoStyle, setInfoStyle] = useState({paddingLeft: "20px", textAlign: "left", fontSize: "10px"})

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
              <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", margin: "10px" }}>
                {users.map((user, index) => (
                  <User key={index} user={user} cardStyle={cardStyle} imgStyle={imgStyle} infoStyle={infoStyle} />
                ))}
              </div>
            )
        }
      </div>
    </>
      )
}

      export default App
