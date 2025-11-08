import { useState } from "react";
import { useFormStatus } from "react-dom";
function Student() {
    // const [name, setName] = useState("");
    // const [age, setAge] = useState("");
    // const [course, setCourse] = useState("");
    // const [batch, setBatch] = useState("");
    // const [gender, setGender] = useState("");
    // const [city, setCity] = useState("");

    const handleSubmit = async (event) => {
        await new Promise(res => setTimeout(res, 6000));
        console.log("Submitted")
    }

    function StudentForm() {
        const [name, setName] = useState("");
        const [age, setAge] = useState("");
        const [course, setCourse] = useState("");
        const [batch, setBatch] = useState("");
        const [gender, setGender] = useState("");
        const [city, setCity] = useState("");
        const { pending } = useFormStatus();
        return (
            <div>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter Name" /><br /><br />
                <input type="number" value={age} onChange={(event) => setAge(event.target.value)} placeholder="Enter Age" /><br /><br />
                <input type="text" value={course} onChange={(event) => setCourse(event.target.value)} placeholder="Enter Course" /><br /><br />
                <input type="text" value={batch} onChange={(event) => setBatch(event.target.value)} placeholder="Enter Batch" /><br /><br />
                <h2>Select Gender</h2>
                <input type="radio" onChange={(event) => setGender(event.target.value)} checked={gender == "male"} name="gender" value="male" id="male" />
                <label htmlFor="male">Male</label>
                <input type="radio" onChange={(event) => setGender(event.target.value)} checked={gender == "female"} name="gender" value="female" id="female" />
                <label htmlFor="female">Female</label>
                <br /><br />
                <h2>Select City</h2>
                <select value={city} onChange={(event) => setCity(event.target.value)}>
                    <option value="" disabled hidden>Select City</option>
                    <option value="delhi">Delhi</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="chennai">Chennai</option>
                </select>
                <br /><br />
                <button disabled={pending} type="submit">{pending ? 'Submitting..' : 'Submit'}</button>
                <br />
                <h2>{`Name: ${name},  Age: ${age}, Course: ${course}, Batch: ${batch}, Gender: ${gender} City: ${city}`}</h2>
                <br />
                <button onClick={() => { setName(""), setAge(""), setCourse(""), setBatch(""), setGender(""), setCity("") }}>Clear</button>
            </div>
        )
    }
    return (
        <>
            <div>
                <h1>Enter Student Details</h1>
                <form action={handleSubmit}>
                    <StudentForm />
                </form>
            </div>
        </>
    )
}
export default Student