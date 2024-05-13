import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import loginContext from "../context/loginContext";
import baseURL from "../baseUrl";
import Cookies from "universal-cookie";

function PrivateRoute(props) {
    
    const {Component} = props;
    const newcookie = new Cookies();
    const cookie = newcookie.get("access_token");
    
    const navigate = useNavigate();
    const {userLoggedIn, setUserLoggedIn} = useContext(loginContext);


    useEffect(() => {
        (async() => {
            const response = await fetch(`${baseURL}/api/dashboard`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: {
                    cookie
                }
            })

            const data = response.json()
            
            data.then(res => {
                console.log(res)
                if(!res.success){                    
                    setUserLoggedIn(res.success)
                    navigate("/adminLogin")
                }
                setUserLoggedIn(res.success)
            })
        })()
    }, [])

    console.log(userLoggedIn)

    return (
        <>
            <Component userLoggedIn={userLoggedIn}/>
        </>
    )
}

export default PrivateRoute;