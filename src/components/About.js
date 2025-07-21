import React, { useState } from 'react'
import PdfModal from './PdfModal'

const About = () => {
    // for new tab
    const handleViewPDF = () => {
        window.open('assets/resume/Milee_Sonani_CV.pdf', '_blank');
    };

    // view in model
    // const [isOpen, setIsOpen] = useState(false);
    return (
        <div id="about" className="pt-[6rem] z-[-100]">
            <div className="flex items-center relative">
                <span className="gsap-iden-about h-[24px] w-[24px] -z-50 bg-spanColor rounded-[3px] mr-6 "></span>
                <h1 className="gsap-heading-about text-[2.5rem] text-border tracking-[0.2rem]">About Me</h1>
            </div>
            <div className="gsap-container flex lg:flex-row flex-col md:justify-around items-center md:mt-[2rem] mt-[1rem] mb-4 mx-[3rem]">
                <img src="assets/Milee1.jpg" width="315px" height="420px" />
                <div className="flex flex-col">
                    <div className="flex items-center md:my-[1rem] mb-[1rem] mt-[4rem] md:ml-[3rem]">
                        <span className="gsap-sub-content-iden-about h-[0.8rem] w-[2rem] bg-spanColor rounded-[3px] mr-6 "></span>
                        <p className="gsap-p-about my-[1rem] md:text-[1.3rem] text-[0.9rem] text-border tracking-wider ">
                            Hello !!
                        </p>
                    </div>
                    <p className="gsap-p-about md:my-[0.5rem] md:ml-[7rem] ml-[1rem] md:text-[1.2rem] text-[0.8rem] text-border tracking-wider">
                        {/* I am Milee Sonani. Proficient in React, Redux hooks, Styled Components, React Router
                        DOM, and third-party libraries for enhanced user interface and features
                        such as charts and payment gateways. Experienced in MongoDB
                        schema design and developing RESTful APIs for efficient data interaction.
                        Skilled in cross-team collaboration for seamless project execution. */}

                        {/* I am Milee Sonani. A skilled software engineer with strong experience in full-stack web development. I have worked on projects involving Gantt chart applications, responsive form design, and secure payment integrations using modern technologies like React.js, Node.js, and REST APIs. I have solid technical expertise, Agile methodology knowledge, and strong soft skills in communication, teamwork, and leadership. */}
                        {/* lastone.....I'm Milee Sonani, software engineer with strong experience in
                        full-stack web development. I specialize in React, Redux Hooks, Styled Components,
                        React Router DOM, and third-party libraries that enhance UI features, such as
                        charts and payment gateways. My experience includes MongoDB schema design and
                        building efficient RESTful APIs. */}
                        {/* I've contributed to projects like Gantt chart
                        applications, responsive form builders, and secure payment integrations.  */}
                        {/* lastone.....I bring not only technical expertise but also a strong foundation in Agile
                        methodologies, along with effective communication, teamwork, and leadership skills
                        that support seamless project execution and cross-team collaboration. */}
                        I'm a web developer with experience in building scalable and responsive web
                        applications using React.js, Next.js, TypeScript, and modern UI libraries like
                        TailwindCSS, MUI, and Ant Design. I have a strong focus on creating clean, intuitive
                        user interfaces and seamless user experiences.
                        From internal tools and dashboards to e-commerce platforms and drag-and-drop
                        builders, I've worked on a variety of projects involving REST APIs, payment
                        integrations, and real-time communication features. I enjoy solving problems through
                        code and collaborating with teams to build meaningful digital products.
                    </p>
                    <a
                        // href="/assets/resume/Milee_Sonani_CV.pdf" download
                        //  target="_blank" rel="noreferrer"
                        className="gsap-contect-button-about w-fit md:my-[1rem] mb-[1rem] mt-[3rem] md:ml-[7rem] ml-[35%]">
                        <button className="button_fancy__vhaj8 py-[0.5rem] px-[1rem] rounded-[4px] bg-secondary1 text-[1.05rem] tracking-wider"
                            onClick={handleViewPDF}
                        // onClick={() => setIsOpen(true)}
                        >
                            Resume
                            <img src="assets/resume/download.svg" style={{ width: "24px", height: "24px", marginLeft: "10px" }} />
                        </button>
                    </a>
                    {/* <PdfModal
                        show={isOpen}
                        onClose={() => setIsOpen(false)}
                        fileUrl="/assets/resume/Milee_Sonani_CV.pdf" // Make sure this PDF exists in /public
                    /> */}
                </div>
            </div>
        </div>
    )
}

export default About