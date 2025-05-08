"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence,  } from "framer-motion"
import localFont from "next/font/local";
import Zoop from "./ui/Zoop"
import Button from "./ui/Button";
import { useTheme } from "./ThemeContext";

const piazzolla = localFont({
    src: "../fonts/piazzolla.ttf",
    weight: "600",
    style: "normal",
})

const pixelify = localFont({
    src: "../fonts/Pixelify_sans.ttf",
    weight: "700",
    style: "normal",
});


export default function Navbar({changeColor}){
    const [isOpen, setIsOpen] = useState(false)
    const [fade, setFade] = useState(false)
    const links = [{name:"home", link:"#header"}, {name:"about", link:"#about"}, {name:"work", link:"#labs"}, {name:"contact", link:"mailto:sajin.matija@gmail.com"}]
    const {bgColor, txtColor, hoverColor} = useTheme()

    return (
        <motion.nav
        initial={{y: '-100%', opacity: 0}}           
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 1}}
        className={` fixed top-0 left-0 w-full z-50 py-3 sm:py-5 md:py-10 flex justify-center `} style={{color:txtColor}}>           
            <div className="flex items-center justify-between w-[90%] ">
                <div className="flex-1 min-w-0 truncate text-xl md:text-3xl z-50 ">
                    <div>
                        <a href="#header" className="cursor-pointer flex flex-col md:flex-row ">
                        <span className={piazzolla.className}>Matija</span>
                        <span className={pixelify.className}>Šajin</span>
                        </a>
                    </div>
                </div>

                
                <Button text="Mix" onClick={changeColor} />
                

                <div className="flex justify-end flex-1"><button
                    className="flex flex-col justify-center gap-1.5 py-3 px-auto rounded z-50 cursor-pointer "
                    onClick={()=> {
                        setFade(!fade) 
                        setIsOpen(!isOpen)}}
                >
                    <span className={`block w-12 h-0.5 rounded transition-transform duration-200 ease-in-out ${isOpen ? "rotate-45 translate-y-1" : ""}`} style={{background:txtColor}}></span>
                    <span className={`block w-12 h-0.5 rounded transition-transform duration-200 ease-in-out ${isOpen ? "-rotate-45 -translate-y-1" : ""}`} style={{background:txtColor}}></span>
                </button></div>
            </div>

            <AnimatePresence>
            {isOpen && (
                <motion.div 
                className={` absolute top-0 left-0 w-full min-h-screen flex flex-col justify-center items-center z-40  `}
                style={{background:hoverColor, color:txtColor}}
                key="fade-box"
                initial={{ y: "-100%"}}
                animate={{ y: 0}}
                exit={{y: "-100%", transition: { duration: 0.3, delay: 0.4}}}
                transition={{duration: 0.3}}
                >
                    <ul className="container px-10 sm:px-15 sm:py-0 space-y-15 md:space-y-10 flex flex-col justify-center">
                        {links.map((item, i) => (
                            <motion.li key={i} onClick={() => setIsOpen(!isOpen)}
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity:1, y:0 }}
                            exit={{
                                opacity: 0,
                                y: -10,
                                transition: { duration: 0.3, delay: (links.length - i - 1) * 0.1}   
                            }}
                            transition={{
                                duration: 0.3,
                                delay: (i + 4) * 0.1,
                            }}
                            className="w-full inline-block border-b-[1px]"
                            >
                                <a href={item.link} className="flex justify-between cursor-pointer text-5xl sm:text-6xl font-bold md:text-7xl uppercase">
                                    <h2>{item.name}</h2>
                                    <p>{"0"+(i+1)}</p>
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                    
                    <ul className="fixed bottom-0 flex justify-center left-0 gap-10 px-3 py-10 font-bold w-full">
                        {[{name:"Instagram", link:"https://www.instagram.com/matiasajin/"}, {name:"GitHub", link:"https://github.com/OnlyMatia"}, {name:"LinkedIn", link:"https://www.linkedin.com/in/matija-%C5%A1ajin-732696251/"}].map((item, i) => (
                            <motion.li key={i} 
                            className="sm:text-xl uppercase"
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity:1, y:0 }}
                            exit={{
                                opacity: 0,
                                y: -10,
                                transition: { duration: 0.3, delay:0.1 }   
                            }}
                            transition={{
                                duration: 0.3,
                                delay: 0.3
                            }}
                            ><Zoop text={item.name} href={item.link} /></motion.li>
                        ))}
                    </ul>
                </motion.div>
            )}
            </AnimatePresence>
        </motion.nav>
    )
}