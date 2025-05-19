"use client"

import { useState } from "react"
import { useTheme } from "../components/ThemeContext"
import { projects } from "../utils/projects"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"


export default function Page () {
    const {bgColor, txtColor, hoverColor} = useTheme()
    const [openIndex, setOpenIndex] = useState(0)

    return (
        <section className="w-full min-h-screen flex justify-center py-5" style={{background: bgColor, color: txtColor}}>
            <div className="w-full md:w-[90%] px-3 md:px-0 flex flex-col gap-10">
                <div className="flex flex-row justify-between pt-20 md:pt-[7vw] lg:pr-[15vw]">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase ">Projects</h2>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase opacity-[0.6]">{projects.length}</h2>
                </div>
                <div className="font-bold text-sm lg:text-base lg:pr-[50%]">
                    <p>Here you can find all completed projects with different designs, development and presentation. Each project was created with different purpose and functionality. Future projects, once completed, will be showcased here to provide detailed insight into website development and the vision behind. </p>
                </div>
                <div className="lg:border-t">
                    {projects.slice(0, 3).map((el, i) => {
                        return (
                            <DisplayProject 
                            el={el} 
                            key={i} 
                            isOpen={i === openIndex} 
                            onOpen={() => {
                                if(openIndex === i ){
                                    setOpenIndex(null)
                                }else{
                                    setOpenIndex(i)
                                }
                            }}

                            />
                        )
                    })}
                </div>
                <p className="font-bold">More projects coming soon!</p>
            </div>
        </section>
    )
}

function DisplayProject({ el, isOpen, onOpen }) {
    const { txtColor} = useTheme()
    
    return (
        <div className="w-full lg:border-b py-2 text-sm flex  flex-col lg:gap-2 cursor-pointer overflow-hidden"  onClick={onOpen} >
            <div className="lg:grid lg:grid-cols-12 flex flex-col lg:items-center gap-2 lg:gap-4 ">

                <div 
                className="lg:hidden block border-[1px]" 
                style={{borderColor: txtColor}} 
                onClick={() => {
                    window.location.href = `/projects/${el.slug}`
                } }>
                    <Image 
                    src={el.mainImage}
                    width={1440}
                    height={1080}
                    alt="mainImage"
                    className="block lg:hidden"
                    />
                </div>
                
                <div className="lg:col-span-4 font-bold flex flex-row  border-b lg:border-b-[0px] text-sm justify-between ">
                    <h3 className=" ">
                        {el.title}
                    </h3>
                    <h3 className="lg:hidden">
                        {el.year}
                    </h3>
                </div>

                <ul className="hidden col-span-5 lg:flex gap-1 opacity-80">
                    {el.tech.map((elem) => (
                        <li key={elem}>{elem},</li>
                    ))}
                </ul>

                <div className="hidden lg:block col-span-1 text-right opacity-80 font-bold">
                    {el.year}
                </div>

                <div className="lg:col-span-2 flex lg:justify-end border-b lg:border-b-[0px] justify-between">
                    <h3 className="lg:hidden font-bold">
                        {el.client}
                    </h3>
                    <button
                    onClick={(e) => e.stopPropagation()}
                    className="font-medium cursor-pointer hover:opacity-[0.8] duration-200 transition-all"
                    style={{ color: txtColor }}
                    >
                        <Link href={`/projects/${el.slug}`} onClick={(e) => e.stopPropagation()}>
                            See more →
                        </Link>
                    </button>
                </div>
            </div>

            <AnimatePresence initial={true}>
            {isOpen && 
            <motion.div 
            key="gallery"
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full overflow-hidden hidden lg:flex flex-row gap-2">
                {[el.mainImage, ...el.gallery].map((img, i) => (
                    <div key={i} className="">
                    <Image
                        src={img}
                        width={500}
                        height={500}
                        alt="cupter-gallery"
                        className="max-h-[150px] w-auto h-auto object-contain max-w-full"
                    />
                    </div>
                ))}
            </motion.div>}
            </AnimatePresence>
        </div>
    )
}
