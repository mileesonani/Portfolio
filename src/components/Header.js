import React from 'react'

const Header = () => {
    const handleViewPDF = () => {
        window.open('assets/resume/Milee_Sonani_CV.pdf', '_blank');
    };

    return (
        <nav className="flex justify-center items-center w-full fixed lg:h-[5rem] h-[3.rem] z-[1000] border-b-[1px] border-b-gray-200 bg-secondary2">
            <ul className="flex justify-between items-center w-full lg:text-[1.25rem] text-[1.05rem]">
                <li className="2xl:ml-[15rem] xl:ml-[10rem] md:ml-[5rem] ml-[2rem] flex justify-around items-center 2xl:w-[30%] xl:w-[40%] lg:w-[45%] md:w-[50%] w-[60%]">
                    <a href="#home" className="hidden sm:block hover:text-border border-b-2 border-b-transparent hover:border-b-border transition tracking-wider">
                        Home
                    </a>
                    <span>|</span>
                    <a href="#about" className="hover:text-border border-b-2 border-b-transparent hover:border-b-border transition tracking-wider">
                        About
                    </a>
                    <span>|</span>
                    <a href="#experience" className="hover:text-border border-b-2 border-b-transparent hover:border-b-border transition tracking-wider">
                        Experience
                    </a>
                    <span>|</span>
                    <a href="#skills" className="hover:text-border border-b-2 border-b-transparent hover:border-b-border transition tracking-wider">
                        Skills
                    </a>
                    <span>|</span>
                    <a href="#contact" className="hover:text-border border-b-2 border-b-transparent hover:border-b-border transition tracking-wider">
                        Contact
                    </a>
                </li>
                <li className="xl:mr-[5rem] lg:mr-[2.5rem] mr-[1rem]">
                    <a
                        // href="/assets/resume/Milee_Sonani_CV.pdf" download target="_blank" rel="noreferrer"
                        onClick={handleViewPDF}
                    >
                        <button className="button_fancy__vhaj8 py-[0.5rem] px-[1rem] rounded-[4px] bg-secondary1 text-[1.05rem] tracking-wider">
                            Resume
                            <img src="assets/resume/download.svg" style={{ width: "24px", height: "24px", marginLeft: "10px" }} />
                        </button>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Header