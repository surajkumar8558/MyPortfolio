import { useState } from "react";
import Beach from "../assets/images/Suraj_Portfolio.png";
import axios from "axios";
import { useEffect } from "react";


function Project(){
    const [projectData, setProjectData] = useState([])

    useEffect(() => { 
        (async () => {
        const response = await axios.get("/api/admin")
            setProjectData(response.data);
        })()
    }, [])

    console.log(projectData)

    return (
        <>
            <div id="Project" className="min-h-[90vh] bg-background flex justify-center items-center flex-col py-28">
                <div className=" mb-8 flex flex-col justify-center items-center">
                    <p className="italic text-white text-3xl">Projects</p>
                    <p className=" mt-2 text-white">Some projects i have worked on</p>
                </div>
                <div className=" mb-16 mx-8 max-w-[1110px] max-h[400px] flex justify-center shadow-2xl 
                ls:flex-col
                vs:flex-col
                sm:flex-col
                md:flex-col">

                    <div className="">
                        <img src={Beach} className="h-[100%] min-w-[100px] object-cover" alt="" />
                    </div>  
                    <div className="text-white flex justify-start flex-col m-8">
                        <div className="text-xl">Web Development</div>
                        <div className="text-3xl mt-2">Portfolio Website</div>
                        <div className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ex non corporis nemo maxime adipisci. Omnis quae accusantium totam quibusdam qui tenetur corrupti sint tempore, nam commodi, labore aliquam voluptatibus? Est maxime eius natus iusto ratione, ipsam voluptate in, culpa nobis quis nesciunt, debitis pariatur eaque nihil repudiandae quam iste!</div>
                        <div className="h-[100%] flex justify-end items-end gap-4 
                        vs:mt-8
                        vs:items-start
                        vs:flex-col
                        ls:items-start
                        ls:mt-8
                        sm:mt-8
                        sm:items-start
                        md:mt-8">
                            <a href="https://github.com/surajkumar8558/MyPortfolio">
                            <button className="bg-button px-8 py-2 rounded-full">View Code</button></a>
                            <button className="bg-button px-8 py-2 rounded-full">View Live</button>
                        </div>
                    </div>
                </div>

               {/* <button onClick={fetchProjectData}>fetch</button> */}
            </div>
        </>
    )
}

export default Project;