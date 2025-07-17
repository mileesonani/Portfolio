import React from 'react'
import SkillSection from './SkillSection'

const SkillCategory = ({ name, array }) => {
    return (
        <div className="flex w-full">
            <p className="my-[1rem] md:text-[1.3rem] text-[0.9rem] text-border tracking-wider w-[30%]">
                {name}
            </p>
            {/* <div className="grid lg:grid-cols-6 grid-cols-3 content-center gap-12 md:w-[70%] w-[90%] place-items-center"> */}
            <div className="grid lg:grid-cols-6 grid-cols-3 content-center md:w-[70%] w-[90%] place-items-center">
                {array.map((x) => (
                    <SkillSection key={x.id} src={x.src} text={x.text} />
                ))}
            </div>
        </div>
    )
}

export default SkillCategory