import { useState } from "react";
import Beach from "../assets/images/Suraj_Portfolio.png";
import axios from "axios";
import { useEffect } from "react";


function Project(){
     const [projectData, setProjectData] = useState([])

    useEffect(() => {
        (async () => {
            await fetch("/api/projects", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res) => {
                return res.json()
            }).then((value) =>{
                setProjectData(value.data)
            })
        })()
    },[])

    return (
        <>
            <div id="Project" className="min-h-[90vh] bg-background flex justify-center items-center flex-col py-28">
                <div className=" mb-8 flex flex-col justify-center items-center">
                    <p className="italic text-white text-3xl">Projects</p>
                    <p className=" mt-2 text-white">Some projects i have worked on</p>
                </div>


                {projectData.map((project, index) => (
                    <div className="mb-16 mx-8 max-w-[1110px] max-h[400px] flex justify-center shadow-2xl 
                    ls:flex-col
                    vs:flex-col
                    sm:flex-col
                    md:flex-col">

                        <div className="xl:w-[50%] lg:w-[50%]">
                            <img src={project.projectImage} className="object-cover" 
                            alt="" />
                        </div>  
                        <div className="text-white flex justify-start lg:w-[50%] xl:w-[50%] flex-col m-8">
                            <div className="text-xl">{project.projectCategory}</div>
                            <div className="text-3xl mt-2">{project.projectName}</div>
                            <div className="mt-2">{project.projectDescription}</div>
                            <div className="h-[100%] flex justify-end items-end gap-4 
                            vs:mt-8
                            vs:items-start
                            vs:flex-col
                            ls:items-start
                            ls:mt-8
                            sm:mt-8
                            sm:items-start
                            md:mt-8">
                                <a href={project.projectSourceCode}>
                                    <button className="bg-button px-8 py-2 rounded-full">View Code</button>
                                </a>
                                <a href={project.projectLiveURL}>
                                    <button className="bg-button px-8 py-2 rounded-full">View Live</button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}

export default Project;