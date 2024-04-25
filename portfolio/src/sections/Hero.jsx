import github from '../assets/github.svg';
import gmail from '../assets/gmail.svg';
import linkedin from '../assets/linkedin.svg';

function Hero(){
    return (
        <>
            <section className="bg-background flex justify-center items-center h-[90vh]">
                <div className="flex justify-center items-center flex-col bg-white w-[1110px] h-[372px] rounded-3xl"> 
                    <div className=" w-[100%] h-[100%] p-24">
                        <h2 className="italic text-3xl mb-2">hello!</h2>
                        <p>I'm Suraj, and I currently percieving my B.tech (IT). <br />
                            Welcome to my portfolio.
                        </p>
                        <div className='flex justify-between mt-10'>
                            <div className="flex gap-4">
                                <img src={github} width={24} height={24} alt="" />
                                <img src={linkedin} width={24} height={24} alt="" />
                                <img src={gmail} width={24} height={24} alt="" />
                            </div>
                            <div className='flex gap-4'>
                                <button className='bg-transparent border-black border-2 text-black px-8 py-2 rounded-full'>VIEW PROJECTS</button>
                                <button className='bg-button text-white px-8 py-2 rounded-full'>GET IN TOUCH</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;