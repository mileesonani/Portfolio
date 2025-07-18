import React from 'react'
import Image from 'next/image';

const Homepage = () => {
    return (
        // <div id="home" className="flex justify-center items-center lg:h-[53rem] h-[60rem] w-full z-[-10]">
        <div id="home" className="flex justify-center items-center lg:h-[50rem] h-[57rem] w-full z-[-10]">
            <div className="flex lg:flex-row lg:justify-around flex-col-reverse justify-center items-center w-full">
                <div className="flex flex-col w-full">
                    <div className="flex items-center mt-12">
                        <span className="gsap-content-iden h-[2rem] w-[2rem] bg-spanColor rounded-[3px] mr-6  "></span>
                        <h1 className="xl:text-[4rem] md:text-[3rem] sm:text-[2.5rem] text-[2rem] text-border tracking-[0.2rem]">
                            Milee Sonani
                        </h1>
                    </div>
                    <div className="flex items-center my-[1rem] md:ml-[3rem]">
                        <span className="gsap-sub-content-iden h-[0.8rem] w-[2rem] bg-spanColor rounded-[3px] mr-6 "></span>
                        <h1 className="gsap-sub-content xl:text-[1.2rem] text-[1rem] text-border tracking-[0.4rem]">
                            Web Developer
                        </h1>
                    </div>
                    <p className="gsap-p my-[1rem] md:ml-[3rem] sm:text-[1rem] text-[0.9rem] text-border tracking-wider lg:w-[70%]">
                        {/* Passionate about coding and experienced in making beautiful UI and providing great UX to the users. */}
                    </p>
                    <a href="#contact" className="gsap-contect-button w-fit my-[1rem] sm:ml-[3rem] ml-[32%]">
                        <button className="button_fancy__vhaj8 py-[0.5rem] px-[1rem] rounded-[4px] bg-secondary1 text-[1.05rem] tracking-wider">Contact Me</button>
                    </a>
                </div>
                <Image src="/assets/home.png" alt="Home" className="2xl:w-[35%] lg:w-[40%] md:w-[450px] sm:w-[375px] w-[300px] h-auto" />
                {/* <img src="/assets/home.png" className="gsap-illu-img 2xl:w-[35%] lg:w-[40%] md:w-[450px] sm:w-[375px] w-[300px] h-auto" /> */}
                {/* <img src="/assets/bg.svg" className="gsap-illu-img 2xl:w-[35%] lg:w-[40%] md:w-[450px] sm:w-[375px] w-[300px] h-auto" /> */}
            </div>
        </div>
    )
}

export default Homepage