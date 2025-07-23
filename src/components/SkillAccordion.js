"use client";
import React, { useState } from 'react'
import SkillSection from './SkillSection';

const SkillAccordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full">
            {items.map((item, index) => (
                <div key={index} className="border border-gray-200 my-[1rem] rounded-lg">
                    <button
                        onClick={() => toggle(index)}
                        className="w-full flex justify-between items-center px-4 py-3 text-left text-lg font-medium"
                        aria-expanded={openIndex === index}
                    >
                        {item.name}
                        <span className="ml-2">{openIndex === index ? "−" : "+"}</span>
                    </button>
                    {openIndex === index && (
                        <div className="px-4 pb-4 animate-fade-in grid grid-cols-3">
                            {/* {item.array} */}
                            {item.array.map((x) => (
                                <div className="size-24 bg-white rounded-lg shadow-xl transition-all hover:scale-[1.25] self-center flex flex-col justify-center items-center text-center pt-[6px] my-[1rem]">
                                    <div className='w-full h-full' style={{ overflow: "auto" }}>
                                        <img src={x.src} className="w-full h-full" style={{ objectFit: "contain" }} />
                                    </div>
                                    <div className="py-4 text-center w-full">
                                        <p className="text-[0.9rem] font-medium text-center" style={{ color: "black" }}>{x.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default SkillAccordion
