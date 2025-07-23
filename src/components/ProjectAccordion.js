"use client";

import { useState } from "react";

export default function Accordion({ projectArray1, projectArray2 }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="block md:flex w-full">
            <div className="w-full mx-2">
                {projectArray1.map((item1, index1) => {
                    return (
                        <div key={item1.id} className="overflow-hidden shadow-lg rounded-lg w-full border border-white my-[1rem]">
                            <button
                                onClick={() => toggle(item1.id)}
                                className={`text-lg font-medium w-full flex justify-between items-center px-4 py-3 text-left font-medium ${openIndex === item1.id && "border-b border-white"}`}
                                aria-expanded={openIndex === item1.id}
                            >
                                {item1.name}
                                <span className="ml-2">{openIndex === item1.id ? "−" : "+"}</span>
                            </button>
                            {openIndex === item1.id && (
                                <ul className="p-4 font-light text-md list-disc list-inside w-full">
                                    {item1.discription.map((a) => {
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
                                    <li>Technical Stack: {item1.technology}</li>
                                </ul>
                            )}
                        </div>
                    )
                })}

            </div>
            <div className="w-full mx-2">
                {projectArray2.map((item2, index2) => {
                    return (
                        <div key={item2.id} className="overflow-hidden shadow-lg rounded-lg w-full border border-white my-[1rem]">
                            <button
                                onClick={() => toggle(item2.id)}
                                className={`text-lg font-medium w-full flex justify-between items-center px-4 py-3 text-left font-medium ${openIndex === item2.id && "border-b border-white"}`}
                                aria-expanded={openIndex === item2.id}
                            >
                                {item2.name}
                                <span className="ml-2">{openIndex === item2.id ? "−" : "+"}</span>
                            </button>
                            {openIndex === item2.id && (
                                <ul className="p-4 font-light text-md list-disc list-inside w-full">
                                    {item2.discription.map((a) => {
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
                                    <li>Technical Stack: {item2.technology}</li>
                                </ul>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
