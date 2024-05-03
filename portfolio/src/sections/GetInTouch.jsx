import github from '../assets/icons/white/github.svg';
import gmail from '../assets/icons/white/gmail.svg';
import linkedin from '../assets/icons/white/linkedin.svg';

function GetInTouch(){
    return (
        <>
            <div id='Contact' className="text-white h-[80vh] flex justify-center items-center flex-col bg-background">
                <div className="mb-2 italic text-3xl">
                    Get in Touch
                </div>
                <div className="mb-4 max-w-[550px] flex justify-center flex-col items-center">
                    <p className='ls:text-center ls:mx-6 vs:text-center vs:mx-6'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, 
                    </p>
                    <p className='ls:text-center ls:mx-6 vs:text-center vs:mx-6'>
                        reiciendis? Error nostrum eaque consequuntur sed.
                    </p>
                </div>
                <div className=" flex gap-8">
                    <a href="https://github.com/surajkumar8558" target='_blank'>
                        <img src={github} width={24} height={24} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/suraj-prajapati8558/" target='_blank'>
                        <img src={linkedin} width={24} height={24} alt="" />
                    </a>
                    <a href="mailto:prajaptisuraj02@gmail.com">
                        <img src={gmail} width={24} height={24} alt="" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default GetInTouch;