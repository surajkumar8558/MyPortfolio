import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import loginContext from "../context/loginContext";
import baseURL from "../baseUrl";
import Cookies from "universal-cookie";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PrivateRoute(props) {
    
    const {Component} = props;
    const newcookie = new Cookies();
    const access_token = newcookie.get("access_token");
    
    const navigate = useNavigate();
    const {userLoggedIn, setUserLoggedIn} = useContext(loginContext);


    useEffect(() => {
        (async() => {
            const response = await fetch(`${baseURL}/api/dashboard`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    access_token
                })
            })

            const data = response.json()
            
            data.then(res => {
                console.log(res)
                if(!res.success){               
                    toast("Only Admin Allowed", {
                        type: "warning",
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light"
                    })     
                    setUserLoggedIn(res.success)
                    navigate("/adminLogin")
                }
                toast("Login Successfully", {
                        type: "success",
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light"
                    }) 
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