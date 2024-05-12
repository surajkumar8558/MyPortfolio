import { useState } from "react"
import baseURL from "../baseUrl"

function AdminSignup() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const CreateUser = async (e) => {
        e.preventDefault()
        // const response = await fetch(`${baseURL}/api/adminRegister`, {
        const response = await fetch(`/api/adminRegister`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, password
            })
        }).then((res) => {
            console.log(res.json())
        }).catch((error) => {
            console.log(error)
        })
        console.log(name, email, password)
    }

    return (
        <>
            <div className="bg-background h-[100vh] w-[100vw] flex justify-center items-center flex-col">
                <form action="" className="flex justify-center items-start flex-col gap-2">
                <h1 className="text-white text-3xl mb-4">Sign Up</h1>
                    <input className="p-2 min-w-[20vw]" type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} />
                    <input className="p-2 min-w-[20vw]" type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}  />
                    <input className="p-2 min-w-[20vw]" type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                    <button onClick={CreateUser} className="bg-card shadow-lg text-white text-lg px-8 py-1 mt-2">Signup</button>
                </form>
            </div>
        </>
    )
} 

export default AdminSignup;