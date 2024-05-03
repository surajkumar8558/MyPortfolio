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
                    <p className="text-white vs:text-center ls:text-center sm:text-center md:text-center">Hello my name is suraj, and i love creating new things. <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aperiam veniam sequi animi unde harum iusto officiis tenetur nesciunt quas quibusdam, rerum atque corrupti necessitatibus architecto recusandae praesentium quod itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sint possimus alias, odio molestias, reprehenderit, a nesciunt illo perspiciatis harum nihil corrupti veritatis ipsam accusamus odit impedit. Magni, corrupti iusto?
                    </p>
                </div>
            </div>
        </>
    )
}

export default About;