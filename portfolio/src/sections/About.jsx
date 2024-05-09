function About(){
    return (
        <>
            <div id="About" className="flex justify-center items-center h-[90vh] bg-background">
                <div className="flex justify-center items-start w-[40%] gap-8  
                vs:w-[80%]
                vs:flex-col 
                vs:items-center
                ls:w-[60%]
                ls:flex-col
                ls:items-center
                sm:w-[60%]
                sm:flex-col
                sm:items-center
                md:w-[60%]
                md:flex-col
                md:items-center">

                    <div className="text-white whitespace-nowrap text-2xl italic">About me</div>
                    <p className="text-white vs:text-center ls:text-center sm:text-center md:text-center">
                        Detail-oriented Web Developer, passionate about crafting exceptional digital experiences. Recently graduated with a degree in Computer Science, specializing in web development. Equipped with a solid academic background and hands-on project experience, adept at problem-solving and eager to contribute effectively to collaborative teams. Proficient in HTML, CSS, JavaScript, React and enthusiastic about Express, MongoDB and NodeJS. Dedicated to staying abreast of the latest web technologies and trends.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About;