import { useContext, useEffect, useState } from "react";
import loginContext from "../context/loginContext";
import { useNavigate } from "react-router-dom";

function Dashboard(props) {

    const navigate = useNavigate();
    const {userLoggedIn} = props;

    const [projectImage, setProjectImage] = useState("")
    const [projectCategory, setProjectCategory] = useState("")
    const [projectName, setProjectName] = useState("")
    const [projectDescription, setProjectDescription] = useState("")
    const [projectSourceCode, setProjectSourceCode] = useState("")
    const [projectLiveURL, setProjectLiveURL] = useState("")
    
    const createProject = async (e) => {
        e.preventDefault()
        const response = await fetch("/api/adminRegister", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email, password
            })
        }).then((res) => {
            console.log(res.json())
        }).catch((error) => {
            console.log(error)
        })
        console.log(name, email, password)
    }

    const Logout = async () => {
        const response = await fetch("/api/adminLogin", {
            method: "GET",
            headers: {
                "Content-Type" : "application/json"
            }
        })

        const data = response.json();
        data.then((res) => {
            if(res.success){
                navigate("/adminLogin")
            }
        })
    }



    return (
        <>
        <div>
            {userLoggedIn ? 
            <div>
            <nav className="bg-background">
            <ul className="text-white flex justify-center items-center gap-12 py-8">
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

          <div className="bg-background flex justify-evenly items-center">
            <div className="bg-background h-[90vh] w-[100vw] flex justify-center items-center flex-col">
                <form encType="multipart/form-data" action="post" className="flex justify-center items-start flex-col gap-2">
                    <h1 className="text-white text-3xl mb-4">Create Project</h1>

                    <input className="text-white p-2 min-w-full border-dashed border-2 border-white w-full" type="file" accept="image/*" name="projectImage" placeholder="Add Image" onChange={(e) => setProjectImage(e.target.value)} value={projectImage} />

                    <input className="p-2 min-w-[30vw]" type="text" name="projectCategory" placeholder="Category" onChange={(e) => setProjectCategory(e.target.value)} value={projectCategory}  />

                    <input className="p-2 min-w-[30vw]" type="text" name="projectName" placeholder="Name" onChange={(e) => setProjectName(e.target.value)} value={projectName} />

                    <textarea className="p-2 min-w-[30vw]" name="projectDescription" rows={6} placeholder="Description" onChange={(e) => setProjectDescription(e.target.value)} value={projectDescription}></textarea>

                    <input className="p-2 min-w-[30vw]" type="text" name="projectSourceCode" placeholder="Github Link" onChange={(e) => setProjectSourceCode(e.target.value)} value={projectSourceCode}  />

                    <input className="p-2 min-w-[30vw]" type="text" name="projectLiveURL" placeholder="Live Project URL" onChange={(e) => setProjectLiveURL(e.target.value)} value={projectLiveURL} />

                    <button onClick={createProject} className="bg-card shadow-lg text-white text-lg px-8 py-1 mt-2">Add Project</button>
                </form>
            </div>

            <div className="w-[50vw] min-h-[90vh] flex justify-center items-start border-dashed border-2 border-white">
            <div id="Project">
                <div className="flex flex-col justify-center items-center">
                    <p className="italic text-white text-3xl">All Projects</p>
                </div>
                <div className="mx-8 max-w-80 max-h[400px] flex flex-col justify-center shadow-2xl 
                ls:flex-col
                vs:flex-col
                sm:flex-col
                md:flex-col">

                    <div className="">
                        <img src="https://graduate.northeastern.edu/resources/wp-content/uploads/sites/4/2019/09/iStock-1150384596-2.jpg" className="h-[100%] min-w-[100px] object-cover" alt="" />
                    </div>  
                    <div className="text-white flex justify-start flex-col m-8">
                        <div className="text-xl">Web Development</div>
                        <div className="text-3xl mt-2">Portfolio Website</div>
                        <div className="mt-2" style={{whiteSpace:"nowrap", width:"100%",  overflow:"hidden", textOverflow:"ellipsis"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ex non corporis nemo maxime adipisci. Omnis quae accusantium totam quibusdam qui tenetur corrupti sint tempore, nam commodi, labore aliquam voluptatibus? Est maxime eius natus iusto ratione, ipsam voluptate in, culpa nobis quis nesciunt, debitis pariatur eaque nihil repudiandae quam iste!</div>
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