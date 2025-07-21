"use client"; // This is a client component
import React, { useState, useRef, useEffect } from 'react'
import { useSnackbar } from 'notistack'

const Contact = () => {
    const { enqueueSnackbar } = useSnackbar()
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        // const apiPath = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
        const apihref = window.location.href
        const apiPath = apihref.charAt(apihref.length - 1) === '/' ? apihref.slice(0, -1) : apihref;
        e.preventDefault();
        // enqueueSnackbar('Sending...', { variant: 'info' });
        try {
            // const response = await fetch(`${apiPath}/api/sendEmail`, {
            const response = await fetch(`/api/sendEmail`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setFormData({ name: "", email: "", message: "" });
                enqueueSnackbar('Email sent successfully!', { variant: 'success' });
            } else {
                enqueueSnackbar('Failed to send email!', { variant: 'warning' });
            }
        } catch (error) {
            enqueueSnackbar('An error occurred!', { variant: 'error' });
        }
    };

    // gmail icon
    const [showOptions, setShowOptions] = useState(false);
    // const wrapperRef = useRef(null);

    const toEmail = 'mileesonani08@gmail.com'; // Replace with desired email
    const subject = 'Contact for';
    const body = 'I wanted to reach out...';

    const handleOpenClient = (client) => {
        let url = '';
        if (client === 'gmail') {
            url = `https://mail.google.com/mail/?view=cm&fs=1&to=${toEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        } else if (client === 'outlook') {
            url = `https://outlook.office.com/mail/deeplink/compose?to=${toEmail}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        } else if (client === 'mailto') {
            url = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }
        window.open(url, '_blank');
        setShowOptions(false);
    };

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
                <form onSubmit={handleSubmit} className="contents">
                    <div className="flex md:flex-row flex-col items-center justify-evenly w-[100%] md:mt-[2rem] mt-[1rem]">
                        <input className="border border-solid border-gray-300 form-control block md:w-[42.5%] w-[80%] px-4 py-2 font-normal text-gray-700 bg-white bg-clip-padding rounded transition ease-in-out md:m-0 my-2 focus:text-gray-700 focus:bg-white focus:border-secondary1 focus:outline-none"
                            id="name" placeholder="Your Name" type="text" name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required />
                        <input className="border border-solid border-gray-300 form-control block md:w-[42.5%] w-[80%] px-4 py-2 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out md:m-0 my-2 focus:text-gray-700 focus:bg-white focus:border-secondary1 focus:outline-none"
                            id="email" placeholder="Your Email" type="email" name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="md:my-[2rem] my-[1rem] w-full">
                        <textarea className="border border-solid border-gray-300 form-control block ml-[5%] w-[90%] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-secondary1 focus:outline-none"
                            id="message" rows="3" placeholder="Your message for me" name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required></textarea>
                    </div>
                    <div>
                        <button className="button_fancy__vhaj8 py-[0.5rem] px-[1rem] rounded-[4px] bg-secondary1 text-[1.05rem] tracking-wider"
                            style={{ color: "grey", borderColor: "grey" }}
                            type='submit'
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <div className="flex items-center md:mt-[3rem] md:mb-[1rem] mt-[2rem] mb-[1rem] ">
                    <span className="h-[0.8rem] w-[2rem] bg-spanColor rounded-[3px] mr-6 "></span>
                    {/* <h1 className="sm:text-[1.2rem] text-[0.9rem] text-border tracking-[0.4rem]">Contact Me On</h1> */}
                    <h1 className="sm:text-[1.2rem] text-[0.9rem] tracking-[0.4rem]" style={{ color: "black" }}>Contact Me On</h1>
                </div>
                <div className="relative text-spanColor flex justify-center items-center ">
                    <a href="https://github.com/mileesonani" target="_blank" rel="noreferrer" className="mx-[1rem] hover:text-border transition-all">
                        <img src="assets/contact/dark/github.svg" style={{ height: "28px", width: "28px" }} />
                    </a>
                    <a href="https://www.linkedin.com/in/milee-sonani" target="_blank" rel="noreferrer" className="mx-[1rem] hover:text-border transition-all">
                        <img src="assets/contact/dark/linkedin.svg" style={{ height: "28px", width: "28px" }} />
                    </a>
                    {/* <a href="#" target="_blank" rel="noreferrer" className="mx-[1rem] hover:text-border transition-all">
                        Phone
                    </a> */}
                    <a className="mx-[1rem] hover:text-border transition-all"
                        onClick={() => {
                            // setShowOptions(!showOptions)
                            handleOpenClient('mailto')
                        }}
                    >
                        <img src="assets/contact/dark/gmail.svg" style={{ height: "28px", width: "28px" }} />
                    </a>
                    {showOptions && (
                        <div className="absolute top-0 right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                            <button
                                onClick={() => handleOpenClient('gmail')}
                                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                            >
                                Open in Gmail
                            </button>
                            <button
                                onClick={() => handleOpenClient('outlook')}
                                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                            >
                                Open in Outlook
                            </button>
                            <button
                                onClick={() => handleOpenClient('mailto')}
                                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                            >
                                Open in Default Mail App
                            </button>
                        </div>
                    )}
                </div>

                <div className="sm:text-[1.2rem] text-[0.9rem] text-border tracking-[0.4rem] mb-[4rem]"></div>
            </div>
        </div>
    )
}

export default Contact