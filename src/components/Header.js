import React, { useEffect, useState } from 'react'

const Header = () => {
    const handleViewPDF = () => {
        window.open('assets/resume/Milee_Sonani_CV.pdf', '_blank');
    };

    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const openSidebar = () => {
        console.log('open')
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth > 1024);
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <nav className="flex justify-center items-center w-full fixed lg:h-[5rem] h-[3.rem] z-[1000] border-b-[1px] border-b-gray-200 bg-secondary2">
            {/* >1024 px */}
            {isMobile ?
                <ul className="flex justify-between items-center w-full lg:text-[1.25rem] text-[1.05rem]">
                    <li className="2xl:ml-[15rem] xl:ml-[10rem] md:ml-[5rem] ml-[2rem] flex justify-around items-center 2xl:w-[30%] xl:w-[40%] lg:w-[45%] md:w-[50%] w-[60%]">
                        <a href="#home" className="hover:text-border border-b-2 border-b-transparent hover:border-b-border transition tracking-wider">
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
                </ul> :
                <>
                    {/* <1024 px */}
                    <ul className="flex justify-between items-center w-full lg:text-[1.25rem] text-[1.05rem]">
                        <li className="ml-[2rem] flex justify-around items-center">
                            <a
                                // href="/assets/resume/Milee_Sonani_CV.pdf" download target="_blank" rel="noreferrer"
                                onClick={openSidebar}
                            >
                                <button className="button_fancy__vhaj8 py-[0.5rem] px-[1rem] rounded-[4px] bg-secondary1 text-[1.05rem] tracking-wider">
                                    <img src="assets/menu_white.svg" style={{ width: "24px", height: "24px" }} />
                                </button>
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
                    <div
                        className={`fixed top-0 left-0 h-full w-64 bg-secondary2 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                            } transition-transform duration-300 ease-in-out z-40 text-[1.25rem]`}
                    >
                        <div className="p-4 flex justify-between items-center">
                            <h2 className="text-xl font-bold">Milee Sonani</h2>
                            <button onClick={openSidebar}>
                                <img src="assets/cross_white.png" style={{ width: "32px", height: "32px", marginLeft: "10px" }} />
                            </button>
                        </div>
                        <hr />
                        <nav className="p-4">
                            <ul className="space-y-4">
                                <li>
                                    <a href="#home" className="hover:text-border border-b-2 border-b-transparent hover:border-b-border transition tracking-wider">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#about" className="hover:text-border border-b-2 border-b-transparent hover:border-b-border transition tracking-wider">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#experience" className="hover:text-border border-b-2 border-b-transparent hover:border-b-border transition tracking-wider">
                                        Experience
                                    </a>
                                </li>
                                <li>
                                    <a href="#skills" className="hover:text-border border-b-2 border-b-transparent hover:border-b-border transition tracking-wider">
                                        Skills
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="hover:text-border border-b-2 border-b-transparent hover:border-b-border transition tracking-wider">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </>}
        </nav>
    )
}

export default Header