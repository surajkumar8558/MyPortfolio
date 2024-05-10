import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import loginContext from "../context/loginContext";

function PrivateRoute(props) {
    
    const {Component} = props;
    
    const navigate = useNavigate();
    const {userLoggedIn, setUserLoggedIn} = useContext(loginContext);


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
                console.log(res)
                if(!res.success){                    
                    setUserLoggedIn(res.success)
                    navigate("/adminLogin")
                }
            })
        })()
    }, [])



    return (
        <>
            <Component userLoggedIn={userLoggedIn}/>
        </>
    )
}

export default PrivateRoute;