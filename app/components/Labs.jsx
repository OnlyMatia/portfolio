"use client"

import { useRef } from "react"
import { projects } from "../utils/projects"
import { motion, useInView } from "framer-motion"
import { useTheme } from "./ThemeContext"

export default function Labs () {
    const {bgColor, txtColor} = useTheme()
    const titleRef = useRef(null)
    const isInView = useInView(titleRef, {
        once:true,
        margin: "0px 0px -15% 0px"
    })

    return (
        <section id="labs" className="h-auto w-full  " style={{background:bgColor, color:txtColor}}>
            <div
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase md:sticky top-15 overflow-hidden flex justify-center opacity-[0.5]`}>

                <motion.h2 
                ref={titleRef}
                initial={{y: "100%"}}
                animate={isInView ? {y:0} : {}}
                transition={{duration: 0.5, ease: "easeOut"}}
                className="w-full md:w-[90%] px-3 md:px-0 py-3"
                >
                    Featured Projects
                </motion.h2>
            </div>
            {projects.map((project, i) => {
                return (
                    <Project key={i} {...project} />
                )
            })}
        </section>
    )
}



function Project({title, desc, tech, image, color,}) {
    const {bgColor, txtColor} = useTheme()


    return (
        <div  className="w-full h-auto md:pt-20 flex justify-center items-center md:sticky top-0 p-3 md:p-0" style={{top: `calc(0% + 60px)`}}>
            
            <div className="border-t pt-5 w-full md:w-[90%] flex flex-col md:flex-row gap-5" style={{background:bgColor}}>
                <div className="border p-2 lg:p-5 lg:w-1/2 h-[60vw] md:h-[40vw] lg:h-[30vw] w-full">
                
                </div>
                <div className="lg:w-1/2 w-full flex flex-col justify-between">
                    <div className="flex flex-col-reverse lg:flex-row justify-between pr-2 gap-2 lg:gap-10 " >
                        <p className=" text-xs md:text-sm font-bold">{`${desc.slice(0, 200)}...`}</p>
                        <h3 className="font-black text-2xl lg:text-4xl uppercase lg:text-right">{title}</h3>
                    </div>
                    <div className="md:flex md:flex-row lg:flex-col font-bold hidden gap-1" >
                        {tech.map((el) => {
                            return (
                                <span key={el} style={{background:txtColor, color:bgColor}} className="relative overflow-hidden inline-block py-1 px-2 w-fit text-sm md:text-normal">
                                    {el}
                                </span>
                            )
                        })}
                    </div>
                </div>
            </div>
        
        </div>
    )
}