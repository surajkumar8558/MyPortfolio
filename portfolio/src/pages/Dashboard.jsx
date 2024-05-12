import { useContext, useEffect, useState } from "react";
import loginContext from "../context/loginContext";
import { useNavigate } from "react-router-dom";
import cut from "../assets/icons/white/cut.svg"
import baseURL from "../baseUrl";

function Dashboard(props) {

    const navigate = useNavigate();
    const {userLoggedIn} = props;

    const [projectImage, setProjectImage] = useState("")
    const [projectCategory, setProjectCategory] = useState("")
    const [projectName, setProjectName] = useState("")
    const [projectDescription, setProjectDescription] = useState("")
    const [projectSourceCode, setProjectSourceCode] = useState("")
    const [projectLiveURL, setProjectLiveURL] = useState("")

    const [editProjectId, setEditProjectId] = useState("")
    const [editProjectImage, setEditProjectImage] = useState("")
    const [editProjectCategory, setEditProjectCategory] = useState("")
    const [editProjectName, setEditProjectName] = useState("")
    const [editProjectDescription, setEditProjectDescription] = useState("")
    const [editProjectSourceCode, setEditProjectSourceCode] = useState("")
    const [editProjectLiveURL, setEditProjectLiveURL] = useState("")

    const [projectData, setProjectData] = useState([])
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        (async () => {
            await fetch(`${baseURL}/api/dashboard/project`, {
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
    
    const createProject = async (e) => {
        e.preventDefault()
        await fetch(`${baseURL}/api/dashboard/project`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              projectImage, projectCategory, projectName, projectDescription, projectSourceCode, projectLiveURL
            })
        }).then((res) => {
            console.log(res.json())
        }).catch((error) => {
            console.log(error)
        })

        navigate("/dashboard")
    }

    const editPost = (project) => {
        setEditProjectId(project._id)
        setEditProjectCategory(project.projectCategory)
        setEditProjectImage(project.projectImage)
        setEditProjectName(project.projectName)
        setEditProjectDescription(project.projectDescription)
        setEditProjectSourceCode(project.projectSourceCode)
        setEditProjectLiveURL(project.projectLiveURL)
        setShowModal(true)
    }

    const updateProject = async (e) => {
        e.preventDefault()
        await fetch(`${baseURL}/api/dashboard/updateProject`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              editProjectId, editProjectImage, editProjectCategory, editProjectName, editProjectDescription, editProjectSourceCode, editProjectLiveURL
            })
        }).then((res) => {
            console.log(res.json())
        }).catch((error) => {
            console.log(error)
        })
    }

    const deletProject = async (e) => {
        e.preventDefault()
        await fetch(`${baseURL}/api/dashboard/project`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              editProjectId
            })
        }).then((res) => {
            console.log(res.json())
            navigate("/dashboard")
        }).catch((error) => {
            console.log(error)
        })
    }

    // const Logout = async () => {
    //     const response = await fetch(`${baseURL}/api/adminLogout`, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type" : "application/json"
    //         }
    //     })

    //     const data = response.json();
    //     data.then((res) => {
    //         if(res.success){
    //             navigate("/adminLogin")
    //         }
    //     })
    // }


    return (
        <>
        <div>
            {showModal ?
             <div className="fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
                <div className=" bg-red-500 lg:w-[500px] lg:h-[600px] xl:w-[500px] xl:h-[600px] ">
                    <form action="" className="flex justify-center items-center flex-col gap-4 m-4">
                        <div className="w-full flex justify-between">
                        <h1 className="text-white text-xl" >Edit Project</h1>
                        <img className=" cursor-pointer" onClick={() => {setShowModal(false)}} src={cut} height={24} width={24} alt="" />
                        </div>
                        <input className="p-2 min-w-full  " type="text" name="projectImage" placeholder="Image URL" onChange={(e) => setEditProjectImage(e.target.value)} value={editProjectImage} />

                        <input className="p-2 min-w-full  " type="text" name="projectCategory" placeholder="Category" onChange={(e) => setEditProjectCategory(e.target.value)} value={editProjectCategory}  />

                        <input className="p-2 min-w-full  " type="text" name="projectName" placeholder="Name" onChange={(e) => setEditProjectName(e.target.value)} value={editProjectName} />

                        <textarea className="p-2 min-w-full  " name="projectDescription" rows={6} placeholder="Description" onChange={(e) => setEditProjectDescription(e.target.value)} value={editProjectDescription}></textarea>

                        <input className="p-2 min-w-full  " type="text" name="projectSourceCode" placeholder="Github Link" onChange={(e) => setEditProjectSourceCode(e.target.value)} value={editProjectSourceCode}  />

                        <input className="p-2 min-w-full  " type="text" name="projectLiveURL" placeholder="Live Project URL" onChange={(e) => setEditProjectLiveURL(e.target.value)} value={editProjectLiveURL} />

                        <div className="flex justify-center items-center gap-4">
                            <button onClick={updateProject} className="bg-card shadow-lg text-white text-lg px-8 py-1 mt-2">Save</button>
                            <button onClick={deletProject} className="bg-card shadow-lg text-white text-lg px-8 py-1 mt-2">Delete</button>
                        </div>
                    </form>
                </div>
             </div>
             : ""} 
            {userLoggedIn ?
        <div>
            <nav className="bg-background">
            <ul className="text-white flex justify-center items-center gap-12 py-6 ">
                <li>
                    <a href="/projects">Projects</a> 
                </li>
                <li>
                    <a href="/skills">Skills</a> 
                </li>
                <li>
                    <button onClick={Logout} className="bg-card shadow-lg text-white text-lg px-8 py-1">Logout</button>
                </li>
            </ul>
            <hr />
          </nav>

          <div className="bg-background flex justify-evenly items-center vs:flex-col ls:flex-col sm:flex-col md:flex-col ">
            <div className="bg-background h-[90vh] w-[100vw] flex justify-center items-center flex-col">
                <form encType="multipart/form-data" action="post" className="flex justify-center items-start flex-col gap-2">
                    <h1 className="text-white text-3xl mb-4">Create Project</h1>

                    <input className="p-2 min-w-[300px] w-[30vw]" type="text" name="projectImage" placeholder="Image URL" onChange={(e) => setProjectImage(e.target.value)} value={projectImage} />

                    <input className="p-2 min-w-[300px] w-[30vw]" type="text" name="projectCategory" placeholder="Category" onChange={(e) => setProjectCategory(e.target.value)} value={projectCategory}  />

                    <input className="p-2 min-w-[300px] w-[30vw]" type="text" name="projectName" placeholder="Name" onChange={(e) => setProjectName(e.target.value)} value={projectName} />

                    <textarea className="p-2 min-w-[300px] w-[30vw]" name="projectDescription" rows={6} placeholder="Description" onChange={(e) => setProjectDescription(e.target.value)} value={projectDescription}></textarea>

                    <input className="p-2 min-w-[300px] w-[30vw]" type="text" name="projectSourceCode" placeholder="Github Link" onChange={(e) => setProjectSourceCode(e.target.value)} value={projectSourceCode}  />

                    <input className="p-2 min-w-[300px] w-[30vw]" type="text" name="projectLiveURL" placeholder="Live Project URL" onChange={(e) => setProjectLiveURL(e.target.value)} value={projectLiveURL} />

                    <button onClick={createProject} className="bg-card shadow-lg text-white text-lg px-8 py-1 mt-2">Add Project</button>
                </form>
            </div>

            <div className="min-w-[50vw] h-[90vh] flex justify-center items-start lg:border-l lg:border-white xl:border-l xl:border-white over overflow-y-scroll">
            
            <div id="Project">
                { projectData.map((project, index) => (

                <div key={project._id} className="mx-8 my-16 max-w-80 max-h[400px] flex flex-col justify-center shadow-2xl 
                ls:flex-col
                vs:flex-col
                sm:flex-col
                md:flex-col">

                    <div className="">
                        <img src={project.projectImage} className="h-[100%] min-w-[100px] object-cover" alt="" />
                    </div>  
                    <div className="text-white flex justify-start flex-col m-4">
                        <div className="text-md">{project.projectCategory}</div>
                        <div className="text-xl mt-sm">{project.projectName}</div>
                        <div className="mt-2 projectDescription">{project.projectDescription}</div>
                        <div className="h-[100%] mt-4 flex justify-around items-end
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
                                <button className="bg-button px-8 py-2 rounded-full mt-4">View Live</button>
                            </a>
                        </div>
                            <button onClick={() => editPost(project)} className="bg-button mt-4 px-8 py-2 rounded-full">Edit Post</button>
                    </div>  
                </div>
                ))}

            </div>
            </div>
          </div>
          </div>
          : navigate("/adminLogin")}
          </div>
        </>
    )
}
export default Dashboard;