"use client"

import { useRef } from "react"
import { projects } from "../utils/projects"
import { motion, useInView } from "framer-motion"

export default function Labs ({ setHovered }) {
    const titleRef = useRef(null)
    const isInView = useInView(titleRef, {
        once:true,
        margin: "0px 0px -15% 0px"
    })

    return (
        <section id="labs" className="min-h-screen w-full p-3 md:p-0">
            <div
            className={`text-4xl font-bold uppercase text-center overflow-hidden`}>

                <motion.h2 
                ref={titleRef}
                initial={{y: "100%"}}
                animate={isInView ? {y:0} : {}}
                transition={{duration: 0.5, ease: "easeOut"}}
                >
                    Some of my work
                </motion.h2>
            </div>
            {projects.map((project, i) => {
                return (
                    <Project key={i} index={i} {...project} setHovered={setHovered} />
                )
            })}
        </section>
    )
}



function Project({title, desc, tech, image, color, index, setHovered}) {



    return (
        <div  className=" h-screen flex justify-center items-center sticky top-0 " style={{top: `calc(0% + ${index * 30}px)`}}>
            <div 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="cursor-none sm:w-[90%] md:w-[80%] lg:w-[70%] h-[700px] sm:h-[550px] rounded-[50px] sm:rounded-[60px] md:rounded-[80px] flex flex-col sm:flex-row  bg-[#fafafa] border-1 border-[#1e1e1e]" >

                <div className="p-8 sm:p-10 w-full md:w-1/2 flex flex-col justify-between gap-5"  >
                    <div className="text-[#1e1e1e] space-y-5 cursor-default">
                        <h2 className={`text-3xl md:text-4xl  font-bold cursor-none`}>{title}</h2>
                        <p className="text-xs md:text-base cursor-none">{desc}</p>
                    </div>
                    <div className="flex gap-2 flex-wrap cursor-none">
                        {tech.map((el, i) => {
                            return  <span key={i} className="bg-[#1e1e1e] text-white px-4 py-2 rounded-full">{el}</span>
                        })}
                    </div>
                </div>

                <div className=" w-full md:w-1/2 h-full rounded-[50px] md:rounded-[80px] border-1 border-[#1e1e1e] overflow-hidden" style={{backgroundColor:color}}>

                </div>
            </div>

            
        </div>
    )
}