import { useState } from "react";
import loginContext from "./loginContext";

function LoginContextProvider({children}){
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    return (
        <loginContext.Provider value={{userLoggedIn, setUserLoggedIn}}>
            {children}
        </loginContext.Provider>
    )
}

export default LoginContextProvider;