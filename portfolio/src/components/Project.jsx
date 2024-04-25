import Beach from "../assets/images/Beach.jpg";
import evening from "../assets/images/evening.jpg";


function Project(){
    return (
        <>
            <div className="min-h-[100vh] bg-background flex justify-center items-center flex-col gap-16 py-28">
                <div className="max-w-[1110px] flex justify-center shadow-lg">
                    <div className="">
                        <img src={Beach} className="" alt="" />
                    </div>  
                    <div className="text-white flex justify-start flex-col m-8">
                        <div className="text-xl">Web Devlopment</div>
                        <div className="text-3xl mt-2">Portfolio Website</div>
                        <div className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ex non corporis nemo maxime adipisci. Omnis quae accusantium totam quibusdam qui tenetur corrupti sint tempore, nam commodi, labore aliquam voluptatibus? Est maxime eius natus iusto ratione, ipsam voluptate in, culpa nobis quis nesciunt, debitis pariatur eaque nihil repudiandae quam iste!</div>
                        <div className="h-[100%] flex justify-end items-end">
                            <div>
                                <img src="" alt="" />
                            </div>
                            <button className="bg-button px-8 py-2 rounded-full">View More</button>
                        </div>
                    </div>
                </div>

                <div className="max-w-[1110px] flex justify-center shadow-lg">
                    <div className="text-white flex justify-start flex-col m-8">
                        <div className="text-xl">Web Devlopment</div>
                        <div className="text-3xl mt-2">Portfolio Website</div>
                        <div className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ex non corporis nemo maxime adipisci. Omnis quae accusantium totam quibusdam qui tenetur corrupti sint tempore, nam commodi, labore aliquam voluptatibus? Est maxime eius natus iusto ratione, ipsam voluptate in, culpa nobis quis nesciunt, debitis pariatur eaque nihil repudiandae quam iste!</div>
                        <div className="h-[100%] flex justify-end items-end">
                            <div>
                                <img src="" alt="" />
                            </div>
                            <button className="bg-button px-8 py-2 rounded-full">View More</button>
                        </div>
                    </div>
                    <div className="">
                        <img src={evening} className="" alt="" />
                    </div>  
                </div>
            </div>
        </>
    )
}

export default Project;