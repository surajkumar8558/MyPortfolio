import menu from "../assets/icons/menu.svg";

function Nav(){
    return (
        <>
        <div className="bg-background flex justify-between items-center h-20 text-white p-10 border-b">
            <h1 className="text-2xl italic">Portfolio</h1>
            <div className="flex justify-center items-center gap-12">
                <img className="xl:hidden lg:hidden md:hidden" src={menu} alt="" />
                <div className="vs:hidden ls:hidden sm:hidden flex justify-center items-center gap-12">    
                    <a href="#" className="text-white">ABOUT</a>
                    <a href="#" className="text-white">SKILLS</a>
                    <a href="#" className="text-white">PROJECTS</a>
                    <button  className="bg-button text-white px-4 py-1 rounded-full">ADMIN LOGIN</button>
                </div>                    
            </div>
        </div>
        </>
    )
}

export default Nav;