import MenuContext from "../context/MenuContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

function ShowMenu(){

    const {open} = useContext(MenuContext);

    return (
        <>
            {
                open ?
                <div className="flex justify-center items-center flex-col flex-wrap gap-4 py-8 bg-card">    
                <a href="#About" className="text-white">ABOUT</a>
                <a href="#Skills" className="text-white">SKILLS</a>
                <a href="#Contact" className="text-white">CONTACT</a>
                <Link to={"/adminLogin"} >
                <button className="bg-button text-white px-4 py-1 rounded-full">ADMIN LOGIN</button>
                </Link>
                </div>
                :
                <></>
            }
        </>
    )
}

export default ShowMenu;