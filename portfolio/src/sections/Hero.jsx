import github from '../assets/icons/black/github.svg';
import gmail from '../assets/icons/black/gmail.svg';
import linkedin from '../assets/icons/black/linkedin.svg';

function Hero(){
    return (
        <>
            <section className=" bg-background flex justify-center items-center h-[90vh]">
                <div className="w-[1110px] flex justify-center items-center flex-col bg-white min-w-[300px] rounded-3xl mx-8"> 
                    <div className=" w-[100%] h-[100%] p-24 vs:flex-col ls:flex-col vs:p-8 ls:p-8">   
                        <h2 className="italic text-3xl mb-2">hello!</h2>
                        <p>I'm Suraj, and I currently percieving B.tech (IT) from AKTU. <br />
                            Welcome to my portfolio.
                        </p>
                        <div className='flex justify-between mt-10 vs:flex-col'>
                            <div className="flex gap-4">
                                <a href="https://github.com/surajkumar8558" target="_blank">
                                    <img src={github} width={24} height={24} alt="" />
                                </a>
                                <a href="https://www.linkedin.com/in/suraj-prajapati8558/" target="_blank">
                                    <img src={linkedin} width={24} height={24} alt="" />
                                </a>
                                <a href="mailto:prajaptisuraj02@gmail.com" target="_blank">
                                    <img src={gmail} width={24} height={24} alt="" />
                                </a>
                            </div>
                            <div className='flex gap-4 sm:flex-col vs:flex-col vs:mt-8 ls:flex-col'>
                                <a href="https://drive.google.com/file/d/1SsPXzMSZYB8mFJM3RcCNn-MommaZT7_y/view" target="_blank">
                                <button className='bg-transparent border-black border-2 text-black px-8 py-2 vs:w-full rounded-full'>DOWNLOAD RESUME</button>
                                </a>
                                <button className='bg-button text-white px-8 py-2 vs:w-full rounded-full'> <a href="#Project">VIEW PROJECTS</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;