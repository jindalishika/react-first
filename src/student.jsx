import { useState } from "react";
function Student() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");
    const [batch, setBatch] = useState("");
    return (
        <>
        <div>
            <h1>Enter Student Details</h1>
            <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter Name"/><br/><br/>
            <input type="number" value ={age} onChange={(event)=>setAge(event.target.value)} placeholder="Enter Age"/><br/><br/>
            <input type="text" value = {course} onChange={(event)=>setCourse(event.target.value)} placeholder="Enter Course"/><br/><br/>
            <input type="text" value = {batch} onChange={(event)=>setBatch(event.target.value)} placeholder="Enter Batch"/><br/><br/>
            <h2>{`Name: ${name},  Age: ${age}, Course: ${course}, Batch: ${batch}`}</h2>
            <br/>
            <button onClick={()=> {setName(""), setAge("") ,setCourse("") ,setBatch("")}}>Clear</button>
            
            </div>
            </>
    )
}
export default Student