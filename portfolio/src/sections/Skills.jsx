import Skill from "../components/Skill";

function Skills(){

    const skills = [
        "HTML/CSS",
        "Javascript",
        "React",
        "Redux",
        "NextJS",
        "MongoDB"   
    ]

    return (
        <>
            <div className=" min-h-[90vh] bg-background flex justify-center items-center flex-col">
                <span className="text-white text-3xl italic">Skills</span>
                <p className="text-white mb-6">I love to explore new technologies</p>
                <div className="max-w-[1110px] grid grid-cols-3 gap-4  
                vs:grid-cols-1
                ls:grid-cols-1
                sm:grid-cols-2 
                md:grid-cols-2
                " >
                    {
                        skills.map((skill, index) => (
                            <div className="bg-card shadow-2xl flex h-40 w-72 rounded-xl justify-center items-center">
                                <p className="text-white" key={index}>{skill}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Skills;