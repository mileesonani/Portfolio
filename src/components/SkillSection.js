import React from 'react'

const SkillSection = ({ src, text }) => {
    return (
        <>
            {/* <div className="sm:h-[10rem] sm:w-[10rem] h-[6rem] w-[6rem] bg-white rounded-lg shadow-xl transition-all hover:scale-[1.25] self-center flex flex-col justify-center items-center md:p-6 p-4 text-center"> */}
            <div className="size-24 bg-white rounded-lg shadow-xl transition-all hover:scale-[1.25] self-center flex flex-col justify-center items-center text-center pt-[6px] my-[1rem]">
                <div
                    // className="size-24"
                    className='w-full h-full'
                    style={{ overflow: "auto" }}>
                    {/* <img src={src} className="object-scale-down w-full h-full" style={{ objectFit: "cover" }} /> */}
                    <img src={src} className="w-full h-full" style={{ objectFit: "contain" }} />
                </div>
                <div className="py-4 text-center w-full">
                    <p className="text-[0.9rem] font-medium text-center" style={{ color: "black" }}>{text}</p>
                </div>
            </div>
        </>
    )
}

export default SkillSection