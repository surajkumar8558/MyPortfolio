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
                        <p>I'm Suraj, and I currently percieving my B.tech (IT). <br />
                            Welcome to my portfolio.
                        </p>
                        <div className='flex justify-between mt-10 vs:flex-col'>
                            <div className="flex gap-4">
                                <img src={github} width={24} height={24} alt="" />
                                <img src={linkedin} width={24} height={24} alt="" />
                                <img src={gmail} width={24} height={24} alt="" />
                            </div>
                            <div className='flex gap-4 sm:flex-col vs:flex-col vs:mt-8 ls:flex-col'>
                                <button className='bg-transparent border-black border-2 text-black px-8 py-2 rounded-full'>DOWNLOAD RESUME</button>
                                <button className='bg-button text-white px-8 py-2 rounded-full'>VIEW PROJECTS</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;