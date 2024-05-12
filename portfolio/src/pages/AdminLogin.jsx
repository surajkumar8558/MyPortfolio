import { useContext, useState } from "react"
import loginContext from "../context/loginContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminLogin() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [validUser, setValidUser] = useState(true);

    const navigate = useNavigate();

    
    const {userLoggedIn, setUserLoggedIn} = useContext(loginContext);

    
    const adminLogin = async (e) => {

        e.preventDefault()
        const response = await fetch("/api/adminLogin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })
        
        const data = response.json();
        
        data.then((res) => {
            setValidUser(res.success)
            if(res.success){
                console.log(userLoggedIn)
                setUserLoggedIn(res.success)
                navigate("/dashboard")
            } else {
                console.log(userLoggedIn)
                setUserLoggedIn(res.success)
                navigate("/adminLogin")
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <>
            <div className="bg-background h-[100vh] w-[100vw] flex justify-center items-center flex-col">
                <form action="" className="flex justify-center items-start flex-col gap-2">
                <h1 className="text-white text-3xl mb-4">Login</h1>
                    <input className="p-2 min-w-[20vw]" type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}  />
                    <input className="p-2 min-w-[20vw]" type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                    {validUser ? "" : <span className="text-gray-400">Only admin allowed</span>}
                    <button onClick={adminLogin} className="bg-card shadow-lg text-white text-lg px-8 py-1 mt-2">Login</button>
                </form>
            </div>
        </>
    )
} 

export default AdminLogin;