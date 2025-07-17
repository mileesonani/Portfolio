import React from 'react'

const Contact = () => {
    return (
        <div id="contact" className="pt-[6rem]">
            <div className="flex items-center relative">
                <span className="gsap-iden-contect h-[1.5rem] w-[1.5rem] -z-50 bg-spanColor rounded-[3px] mr-6 "></span>
                <h1 className="gsap-heading-contect text-[2.5rem] text-border tracking-[0.2rem]">Contact</h1>
            </div>
            <div className="gsap-container-contect bg-white mx-[3rem] my-[8rem] rounded-lg shadow-2xl flex flex-col justify-center items-center md:mt-[4rem] mt-[2rem]">
                <div className="flex items-center my-[1rem] mt-[3rem]">
                    <span className="h-[0.8rem] w-[2rem] bg-spanColor rounded-[3px] mr-6 "></span>
                    {/* <h1 className="sm:text-[1.2rem] text-[0.9rem] text-border tracking-[0.4rem]">Send Me A Note</h1> */}
                    <h1 className="sm:text-[1.2rem] text-[0.9rem] tracking-[0.4rem]" style={{ color: "black" }}>Send Me A Note</h1>

                </div>
                <div className="flex md:flex-row flex-col items-center justify-evenly w-[100%] md:mt-[2rem] mt-[1rem]">
                    <input className="border border-solid border-gray-300 form-control block md:w-[42.5%] w-[80%] px-4 py-2 font-normal text-gray-700 bg-white bg-clip-padding rounded transition ease-in-out md:m-0 my-2 focus:text-gray-700 focus:bg-white focus:border-secondary1 focus:outline-none"
                        id="name" placeholder="Name" type="text" />
                    <input className="border border-solid border-gray-300 form-control block md:w-[42.5%] w-[80%] px-4 py-2 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out md:m-0 my-2 focus:text-gray-700 focus:bg-white focus:border-secondary1 focus:outline-none"
                        id="email" placeholder="Email" type="email" />
                </div>
                <div className="md:my-[2rem] my-[1rem] w-full">
                    <textarea className="border border-solid border-gray-300 form-control block ml-[5%] w-[90%] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-secondary1 focus:outline-none"
                        id="message" rows="3" placeholder="Your message for me"></textarea>
                </div>
                <div>
                    <button className="button_fancy__vhaj8 py-[0.5rem] px-[1rem] rounded-[4px] bg-secondary1 text-[1.05rem] tracking-wider" style={{ color: "grey", borderColor: "grey" }}>Submit</button>
                </div>
                <div className="flex items-center md:mt-[3rem] md:mb-[1rem] mt-[2rem] mb-[1rem] ">
                    <span className="h-[0.8rem] w-[2rem] bg-spanColor rounded-[3px] mr-6 "></span>
                    {/* <h1 className="sm:text-[1.2rem] text-[0.9rem] text-border tracking-[0.4rem]">Contact Me On</h1> */}
                    <h1 className="sm:text-[1.2rem] text-[0.9rem] tracking-[0.4rem]" style={{ color: "black" }}>Contact Me On</h1>
                </div>
                <div className=" text-spanColor flex justify-center items-center ">
                    <a href="https://github.com/mileesonani" target="_blank" rel="noreferrer" className="mx-[1rem] hover:text-border transition-all">
                        <img src="/assets/contact/dark/github.svg" style={{ height: "28px", width: "28px" }} />
                    </a>
                    <a href="https://www.linkedin.com/in/milee-sonani" target="_blank" rel="noreferrer" className="mx-[1rem] hover:text-border transition-all">
                        <img src="/assets/contact/dark/linkedin.svg" style={{ height: "28px", width: "28px" }} />
                    </a>
                    {/* <a href="#" target="_blank" rel="noreferrer" className="mx-[1rem] hover:text-border transition-all">
                        Phone
                    </a> */}
                    <a href="" target="_blank" rel="noreferrer" className="mx-[1rem] hover:text-border transition-all">
                        <img src="/assets/contact/dark/gmail.svg" style={{ height: "28px", width: "28px" }} />
                    </a>
                </div>
                <div className="sm:text-[1.2rem] text-[0.9rem] text-border tracking-[0.4rem] mb-[4rem]"></div>
            </div>
        </div>
    )
}

export default Contact