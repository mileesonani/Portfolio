import React, { useEffect, useState } from 'react'
import SkillSection from './SkillSection'
import SkillCategory from './SkillCategory'
import SkillAccordion from './SkillAccordion'

const Skills = () => {
    const skillsArray = [
        { id: 1, src: "/assets/skills/html.png", text: "HTML" },
        { id: 2, src: "/assets/skills/css.png", text: "CSS" },
        { id: 3, src: "/assets/skills/javascript.png", text: "JavaScript" },
        { id: 4, src: "/assets/skills/ts.png", text: "TypeScript" },
        { id: 5, src: "/assets/skills/jquery.png", text: "JQuery" },
        { id: 6, src: "/assets/skills/sass.png", text: "SCSS" },
        { id: 7, src: "/assets/skills/react_js.png", text: "React.js" },
        { id: 8, src: "/assets/skills/node_js.png", text: "Node.js" },
        { id: 9, src: "/assets/skills/Next_js.png", text: "Next.js" },
        { id: 10, src: "/assets/skills/mui.png", text: "MUI" },
        { id: 11, src: "/assets/skills/tailwind.png", text: "TailwindCSS" },
        { id: 12, src: "/assets/skills/antD.png", text: "AntD" },
        { id: 13, src: "/assets/skills/postman.png", text: "Postman" },
        { id: 14, src: "/assets/skills/swagger.png", text: "Swagger" },
        { id: 15, src: "/assets/skills/git.png", text: "Git" },
        { id: 16, src: "/assets/skills/gitlab.png", text: "GitLab" },
        { id: 17, src: "/assets/skills/graphql.png", text: "GraphQL" },
        { id: 18, src: "/assets/skills/mongodb.jpg", text: "MongoDB" },
        { id: 19, src: "/assets/skills/webpack.png", text: "Webpack" },
        { id: 20, src: "/assets/skills/jest.png", text: "Jest" },
        { id: 21, src: "/assets/skills/react_test.png", text: "React Testing Library" },
        { id: 22, src: "/assets/skills/reduxToolKit.png", text: "React Redux" },
    ]
    const ProgrammingLangArray = [
        { id: 1, src: "assets/skills/html.png", text: "HTML" },
        { id: 2, src: "assets/skills/css.png", text: "CSS" },
        { id: 3, src: "assets/skills/javascript.png", text: "JavaScript" },
        { id: 4, src: "assets/skills/ts.png", text: "TypeScript" },
        // { id: 5, src: "/assets/skills/jquery.png", text: "JQuery" },
        { id: 5, src: "assets/skills/sass.png", text: "SCSS" },
        { id: 6, src: "assets/skills/c.png", text: "C" },
    ]
    const FrontendArray = [
        { id: 1, src: "assets/skills/react_js.png", text: "React.js" },
        { id: 2, src: "assets/skills/Next_js.png", text: "Next.js" },
        { id: 3, src: "assets/skills/jquery.png", text: "JQuery" },
        { id: 4, src: "assets/skills/bootstrap.png", text: "BootStrap" },
        { id: 5, src: "assets/skills/Mui.png", text: "MUI" },
        { id: 6, src: "assets/skills/tailwind.png", text: "TailwindCSS" },
        { id: 7, src: "assets/skills/antD.png", text: "AntD" },
        { id: 8, src: "assets/skills/react_js.png", text: "React Native" },
        { id: 9, src: "assets/skills/reduxToolKit.png", text: "React Redux" },
    ]
    const BackendArray = [
        { id: 1, src: "assets/skills/node_js.png", text: "Node.js" },
        { id: 2, src: "assets/skills/rest_api.webp", text: "REST APIs" },
        { id: 3, src: "assets/skills/graphql.png", text: "GraphQL" },
    ]
    const TestingArray = [
        { id: 1, src: "assets/skills/jest.png", text: "Jest" },
        // { id: 2, src: "/assets/skills/react_test.png", text: "React Testing Library" },
        { id: 2, src: "assets/skills/react_test.png", text: "Enzyme" },
        { id: 3, src: "assets/skills/postman.png", text: "Postman" },
        { id: 4, src: "assets/skills/swagger.png", text: "Swagger UI" },
    ]
    const DatabaseArray = [
        { id: 1, src: "assets/skills/mongodb.jpg", text: "MongoDB" },
    ]
    const ToolsPackageArray = [
        { id: 1, src: "assets/skills/webpack.png", text: "Webpack" },
        { id: 2, src: "assets/skills/vite.png", text: "Vite" },
    ]
    const PaymentArray = [
        { id: 1, src: "assets/skills/stripe.png", text: "Stripe" },
        { id: 2, src: "assets/skills/paytm.png", text: "Paytm" },
        { id: 3, src: "assets/skills/paypal.png", text: "PayPal" },
        // { id: 4, src: "/assets/skills/git.png", text: "Google API" },
        { id: 4, src: "assets/skills/whatsapp.webp", text: "WhatsApp" },
        { id: 5, src: "assets/skills/dlhsoft.webp", text: "DlhSoft Library" },
    ]
    const IDEArray = [
        { id: 1, src: "assets/skills/visual.jpg", text: "Visual Studio" },
        { id: 2, src: "assets/skills/visual_code.webp", text: "Visual Code" },
        { id: 3, src: "assets/skills/sublime.png", text: "Sublime Text" },
        { id: 4, src: "assets/skills/codeblocks.png", text: "Code::Blocks" },
    ]
    const VersionArray = [
        { id: 1, src: "assets/skills/git.png", text: "Git" },
        { id: 2, src: "assets/skills/github.png", text: "GitHub" },
        { id: 3, src: "assets/skills/gitlab.png", text: "GitLab" },
        { id: 4, src: "assets/skills/azure_devops.png", text: "Azure DevOps" },
        { id: 5, src: "assets/skills/git.png", text: "TFS (Team Foundation Server)" },
    ]
    const SkillsCategory = [
        { id: 1, name: "Programming Languages", array: ProgrammingLangArray },
        { id: 2, name: "Frontend Technologies & Frameworks", array: FrontendArray },
        { id: 3, name: "Backend Technologies & APIs", array: BackendArray },
        { id: 4, name: "Testing & Quality Assurance", array: TestingArray },
        { id: 5, name: "Databases", array: DatabaseArray },
        { id: 6, name: "Build Tools & Package Managers", array: ToolsPackageArray },
        { id: 7, name: "Payment & External Integrations", array: PaymentArray },
        { id: 8, name: "IDEs & Code Editors", array: IDEArray },
        { id: 9, name: "Version Control & DevOps", array: VersionArray },
    ]

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Set initial value
        const checkScreenSize = () => setIsMobile(window.innerWidth < 750);

        checkScreenSize(); // on mount

        // Add event listener
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <div id="skills" className="pt-[6rem] mb-[4rem]">
            <div className="flex items-center relative">
                <span className="gsap-iden-skils h-[1.5rem] w-[1.5rem] -z-50 bg-spanColor rounded-[3px] mr-6 "></span>
                <h1 className="gsap-heading-skils text-[2.5rem] text-border tracking-[0.2rem]">Skills</h1>
            </div>
            <div className="flex flex-col justify-evenly items-start mt-[4rem] mx-[3rem]">
                {isMobile ?
                    <SkillAccordion items={SkillsCategory} /> :
                    SkillsCategory.map((x) =>
                        <SkillCategory key={x.id} name={x.name} array={x.array} />
                    )
                }
            </div>

        </div>
    )
}

export default Skills