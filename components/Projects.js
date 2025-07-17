import React from 'react'

const Projects = () => {
    const projectArray = [
        {
            id: 1, name: "Form Builder", discription: [
                { id: 1, data: "Developed a drag-and-drop form builder tool that allows users to create various templates by combining components like inputs, buttons, and more. These templates were then used to generate custom forms." },
                { id: 2, data: "UI design and implementation of module logic and functionality" }
            ], technology: "JavaScript, React.js, Webpack, MUI"
        },
        {
            id: 2, name: "Arms Library - Components", discription: [
                { id: 1, data: "Developed a custom component library intended for internal use within the company." },
                { id: 2, data: "Developed reusable components such as List View and Progress Bar with consistent styling and behavior." },
                { id: 3, data: "UI design and implementation of reusable components, Ensured design consistency and component reusability across internal projects" }
            ], technology: "JavaScript, React.js, MUI"
        },
        {
            id: 3, name: "Coach Panel - Zuryweb", discription: [
                { id: 1, data: "Zuryweb makes diet plans. Here a customer gives a body diet problem to Zuryweb. The operator assigns a coach to the customer according to their problems. and the coach handles that customer problem and assigns and gives suggestions about it." },
                {
                    id: 2, data: "Coach panel", discription: [
                        { id: 1, data: "All customer who is assigned by the operator's is display data here" },
                        { id: 2, data: "Using chat functionality customer communicate with coach .in chat system in include an audio and video calls also" },
                        { id: 3, data: "Coach's own details display here" },
                        { id: 4, data: "As per customer requirements, coaches assign diet plans." }
                    ]
                },
                {
                    id: 3, data: "Operator panel", discription: [
                        { id: 1, data: "All the customer details and all coach detail display in operator panel " },
                        { id: 2, data: "Operator can communicate with coach using chat and read only customer's chat" },
                        { id: 3, data: "Operator also approve reject and banned a coach which is not able to coach or not fulfilled all requirement details" },
                        { id: 4, data: "Operator also assign a coach to customers" }

                    ]
                },
                { id: 4, data: "Creating functional modules and dashboards for data display" }
            ], technology: "TypeScript, React.js, TailwindCSS"
        },
        {
            id: 4, name: "Campaign Wizard App", discription: [
                {
                    id: 1, data: "Campaign Wizard offers turnkey campaign templates for HubSpot users.", discription: [
                        { id: 1, data: "New HubSpot users looking to rapidly deploy initiatives" },
                        { id: 2, data: "Seasoned HubSpot users looking to spend more time on strategy" },
                        { id: 3, data: "Small teams that are budget-conscious but need results" },
                        { id: 4, data: "Agile teams that launch multiple initiatives (these campaigns are easily cloneable)" },
                        { id: 5, data: "Drastically reduce the amount of QA; templates are already vetted" },
                        { id: 6, data: "HubSpot users feeling scared to press the ON Button (it happens to the best of us!) (React, HubSpot Integration, Node JS)Redux and management use for storing values" }
                    ]
                },
                { id: 2, data: "Module creation, Integration of Payment API" }
            ], technology: "JavaScript, React.js, jQuery"
        },
        {
            id: 5, name: "Hometown", discription: [
                { id: 1, data: "An e-commerce platform for selling home decor items such as tables, furniture, beds, and sofas." },
                { id: 2, data: "UI design and implementation" }
            ], technology: "JavaScript, React.js, Node.js, MongoDB"
        },
        {
            id: 6, name: "Driver App", discription: [
                { id: 1, data: "A driver-facing application that allows drivers to create delivery trips and find optimal delivery routes. Integrated with Google Maps for address auto-completion and route optimization." },
                { id: 2, data: "UI design and interaction logic" }
            ], technology: "JavaScript, React.js, Node.js, MSSQL, Google Maps API"
        },
        {
            id: 7, name: "CSS design using AntD with animation", discription: [
                { id: 1, data: "Tasked by the manager to style a website and develop a reusable template using the Ant Design (AntD) CSS library. Included integration of UI animations." },
                { id: 2, data: "Designing responsive UI using AntD and animations" }
            ], technology: "TypeScript, React.js, AntD"
        },
        {
            id: 8, name: "Gantt Chart", discription: [
                { id: 1, data: "Designed and developed a dynamic Gantt Chart to visualize flight status, crew schedule, and perform different functionality/operations(edit, delete, add, reschedule) on flight, crew status." },
                { id: 2, data: "The chart supports multiple time zones with synchronization and integrates with various modules like ATSM, Crew Controller, and CWP." },
                { id: 3, data: "UI design, Module creation and unit testing" }
            ], technology: "JavaScript, DlhSoft Library, Jest"
        },
        {
            id: 9, name: "Staff Web Portal - SWP", discription: [
                { id: 1, data: "This portal is for internal staff operations. It is a centralized system for managing employee records, training, and qualifications." },
                { id: 2, data: "It supports analytics-based workforce planning, optimized staff scheduling, and real-time attendance monitoring." },
                { id: 3, data: "The platform helps identify disruptions early and ensures compliance with regulatory standards, including fatigue risk management." },
                { id: 4, data: "Bug Solving, Code Review" }
            ], technology: "JavaScript, React.js, Webpack, arms_global"
        },
        {
            id: 10, name: "Common Admin", discription: [
                { id: 1, data: "A centralized admin portal for managing airports, flights, and crew management." },
                { id: 2, data: "Serves as a foundational structure for integrating subsystems such as EMSS, CMSS, FRMS, HRMS, and CLS." },
                { id: 3, data: "Implemented real-time event handling using SignalR." },
                { id: 4, data: "Common admin project for all subsystems, basic structure and common forms." },
                { id: 5, data: "UI design and development, Unit testing and bug resolution" }
            ], technology: "JavaScript, React.js, Webpack, arms_global, Jest, React Testing Library"
        },
        {
            id: 11, name: "EMSS, CMSS", discription: [
                { id: 1, data: "Enterprise-level modules integrated with the Common Admin system." },
                { id: 2, data: "Code Review" }
            ], technology: "JavaScript, React.js, Webpack, arms_global"
        },
        {
            id: 12, name: "Resource Management System", discription: [
                { id: 1, data: "Developed a resource management system with secure login and registration functionality, including email confirmation. The system enables admins to perform full CRUD operations on both users and resources. Admins can assign multiple resources to users while tracking assignment dates for accurate record-keeping." },
                { id: 2, data: "The system includes an alert mechanism for low-stock resources." },
                {
                    id: 3, data: "A dynamic dashboard was implemented to visualize:", discription: [
                        { id: 1, data: "Available resources through interactive graphs" },
                        { id: 2, data: "Resource assignments per user" },
                        { id: 3, data: "Filters for users, assignment dates, and resource names" },
                    ]
                },
                { id: 4, data: "UI design, Module development, Core functionality implementation, Unit testing" }
            ], technology: "JavaScript, React.js, Node.js, Swagger, MongoDB"
        }
    ]
    return (
        <div id="experience" className="pt-[6rem]">
            <div className="flex items-center relative">
                <span className="gsap-iden-skils h-[1.5rem] w-[1.5rem] -z-50 bg-spanColor rounded-[3px] mr-6 "></span>
                <h1 className="gsap-heading-skils text-[2.5rem] text-border tracking-[0.2rem]">Projects</h1>
            </div>
            <div>
                {/* <!-- follow me on twitter @asad_codes --> */}

                <div className="flex flex-wrap place-items-center md:mt-[2rem] mt-[2rem] mx-[3rem]">
                    {/* <!-- card --> */}
                    {projectArray.map((x) => {
                        return (
                            <div key={x.id} className="overflow-hidden shadow-lg rounded-lg w-full border border-white mt-[2rem]">
                                <div className="w-full block">
                                    <div className="w-full p-4">
                                        <p className="text-2xl font-medium">{x.name}</p>
                                        <ul className="font-light text-md list-disc list-inside w-full">
                                            {x.discription.map((a) => {
                                                return (
                                                    <>
                                                        <li key={a.id}>{a.data}</li>
                                                        {a.discription && <ul className='list-disc list-inside ml-[2rem]'>
                                                            {a.discription?.map((b) => {
                                                                return (
                                                                    <li key={b.id}>{b.data}</li>
                                                                )
                                                            })}
                                                        </ul>}

                                                    </>
                                                )
                                            })}
                                            <li>Technical Stack: {x.technology}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>

            </div>
        </div>
    )
}

export default Projects