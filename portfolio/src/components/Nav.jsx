import menu from "../assets/icons/menu.svg";
import MenuContext from "../context/MenuContext";
import x from "../assets/icons/white/x.svg"
import ShowMenu from "./ShowMenu";
import { useContext } from "react";

function Nav(){

    const {open, setOpen} = useContext(MenuContext);

    function showMenu(){
        setOpen((prev) => !prev);
    }

    return (
        <>
        <div className="bg-background flex justify-between items-center h-20 text-white p-10 border-b">
            <h1 className="text-2xl italic">Portfolio</h1>
            <div className="flex justify-center items-center gap-12">
                <div className="vs:hidden ls:hidden sm:hidden flex justify-center items-center gap-12">    
                    <a href="#About" className="text-white">ABOUT</a>
                    <a href="#Skills" className="text-white">SKILLS</a>
                    <a href="#Contact" className="text-white">CONTACT</a>
                    <button className="bg-button text-white px-4 py-1 rounded-full">ADMIN LOGIN</button>
                </div>                  
                <img className="xl:hidden lg:hidden md:hidden cursor-pointer" onClick={showMenu} src={open ? x : menu} alt="" />
            </div>
        </div>
        </>
    )
}

export default Nav;