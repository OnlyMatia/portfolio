"use client"

import { useState } from "react"
import { useTheme } from "../components/ThemeContext"
import { projects } from "../utils/projects"
import { motion, AnimatePresence } from "framer-motion"


export default function Page () {
    const {bgColor, txtColor, hoverColor} = useTheme()

    return (
        <section className="w-full min-h-screen flex justify-center" style={{background: bgColor, color: txtColor}}>
            <div className="w-full md:w-[90%] px-3 md:px-0 flex flex-col gap-20">
                <div className="flex flex-row justify-between pt-[40vw] md:pt-[10vw] pr-[15vw]">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase ">Projects</h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase opacity-[0.6]">{projects.length}</h3>
                </div>
                <div className="border-t">
                    {projects.map((el) => {
                        return (
                            <DisplayProject el={el} key={el.id} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

function DisplayProject({ el }) {
    const { txtColor } = useTheme()
    const [hover, setHover] = useState(false)

    return (
        <div className="w-full border-b py-2 text-sm flex flex-col">
            <div className="grid grid-cols-12 items-center gap-4 ">
                
                <h3 className="col-span-4 font-bold">
                    {el.title}
                </h3>

                <ul className="col-span-5 flex gap-1 opacity-80">
                    {el.tech.map((elem) => (
                        <li key={elem}>{elem}</li>
                    ))}
                </ul>

                <div className="col-span-1 text-right opacity-80 font-bold">
                    {el.year}
                </div>

                <div className="col-span-2 flex justify-end">
                    <button
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        className="font-medium cursor-pointer hover:opacity-[0.8] duration-200 transition-all"
                        style={{ color: txtColor }}
                    >
                        See more →
                    </button>
                </div>
            </div>

            <div className="w-full">
            
            </div>
        </div>
    )
}
