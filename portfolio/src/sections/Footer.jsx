function Footer(){
    return (
        <>
            <div className="py-8 min-h-28 bg-background text-white border-t flex justify-center items-center flex-col">
                <div className="flex gap-24 mb-4 text-xl vs:flex-col vs:gap-4 ls:flex-col ls:gap-4">
                    <a className="text-center" href="">About</a>
                    <a className="text-center" href="">Projects</a>
                    <a className="text-center" href="">Contact</a>
                </div>
                <div>
                    <p>@2024 Suraj Kumar All Rights Reserved</p>
                </div>
            </div>
        </>
    )
}

export default Footer;