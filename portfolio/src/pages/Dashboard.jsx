import { useContext, useEffect } from "react";
import loginContext from "../context/loginContext";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {

    const {userLoggedIn, setUserLoggedIn} = useContext(loginContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async() => {
            const response = await fetch("/api/dashboard", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const data = response.json()
            
            data.then(res => {
                if(res.success === true){                    
                    setUserLoggedIn(res.success)
                    navigate("/dashboard")
                } else {
                    setUserLoggedIn(res.success)
                    navigate("/adminLogin")
                }
            })
        })()
    }, [])




    return (
        <>
          {userLoggedIn ? <h1>Dashboard</h1> : <h1>Acess Denied</h1>}  
        </>
    )
}

export default Dashboard;