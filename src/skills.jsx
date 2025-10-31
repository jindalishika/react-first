import React, { useState } from "react";

function Skills() {
    const [skills,setSkills]=useState([])
    const handleSkills=(event)=>{
        const value=event.target.value;
        if(event.target.checked){
            setSkills([...skills,value])
        }else{
            setSkills(skills.filter((skill)=>skill!==value))
        }
    }
    return (
        <>
        <div>
        <h2> Select Skills</h2>
        <input type="checkbox"onChange={handleSkills} id ="react"value="react"/>
        <label htmlFor="react">React</label>
        <br/>
        <br/>   
        <input type="checkbox" onChange={handleSkills} id ="angular"value="angular"/>
        <label htmlFor="angular">angular</label>
        <br/>
        <br/>
        <input type="checkbox" onChange={handleSkills} id ="html"value="html"/>
        <label htmlFor="html">HTML</label>
        <br/>
        <br/>
        <input type="checkbox" onChange={handleSkills} id ="css"value="css"/>
        <label htmlFor="css">CSS</label>
        <br/>
        <h1>{skills.toString()}</h1>
        </div >
        </>
    )
    
    }
export default Skills