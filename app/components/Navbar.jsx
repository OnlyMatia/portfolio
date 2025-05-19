"use client"

import {  useEffect, useState } from "react"
import { motion, AnimatePresence,  } from "framer-motion"
import Button from "./ui/Button";
import { useTheme } from "./ThemeContext";
import { usePathname } from "next/navigation";



export default function Navbar({changeColor}){
    const [isOpen, setIsOpen] = useState(false)
    const [fade, setFade] = useState(false)
    const links = [{name:"home", link:"/#header"}, {name:"about", link:"#about"}, {name:"work", link:"/projects"}, {name:"contact", link:"mailto:sajin.matija@gmail.com"}]
    const {bgColor, txtColor, hoverColor} = useTheme()
    const pathname = usePathname();

    useEffect(() => {
    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
    return () => {
        document.body.style.overflow = '';
    };
}, [isOpen]);

    return (
        <motion.nav
        initial={{y: '-100%', opacity: 0}}           
        animate={{y: 0, opacity: 1}}
        transition={{duration: pathname === '/' ? 0.5 : 0, delay: pathname === '/' ? 1 : 0}}
        className={` fixed top-0 left-0 w-full z-50 py-3 px-2 sm:py-4 md:py-5 flex justify-center items-center backdrop-blur`} style={{color:txtColor, background: bgColor+"90"}}>           
            <div className="flex items-center justify-between w-full md:w-[90%] z-50">
                <div className="flex-1 min-w-0 truncate text-xl md:text-3xl ">
                    <a href="/#header" className="text-base md:text-xl font-black cursor-pointer flex flex-col md:flex-row tracking-tight w-fit">
                        <span>MATIJA </span><span className="md:block hidden">ŠAJIN</span>
                    </a>
                </div>
                
                <Button text="set mood" onClick={changeColor} classname="border-1 rounded-2xl" />
                
                <div className="flex justify-end flex-1 items-center gap-2 cursor-pointer"
                >
                <p className=" text-xs md:text-sm z-50 " onClick={()=> {
                            setFade(!fade) 
                            setIsOpen(!isOpen)}}>{isOpen ? "Close" : "Menu"}</p>
                    <button
                        className={`flex flex-col justify-center gap-1.5 py-3 px-auto rounded cursor-pointer`}
                        onClick={()=> {
                            setFade(!fade) 
                            setIsOpen(!isOpen)}}
                    >
                        
                        <span className={`block w-5 md:w-10 h-0.5 rounded transition-transform duration-200 ease-in-out ${isOpen ? "rotate-45 translate-y-1" : ""}`} style={{background:txtColor}}></span>
                        <span className={`block  w-5 md:w-10 h-0.5 rounded transition-transform duration-200 ease-in-out ${isOpen ? "-rotate-45 -translate-y-1" : ""}`} style={{background:txtColor}}></span>
                    </button>
                </div>
            </div>

            <AnimatePresence>
            {isOpen && (
                <motion.div 
                className={` absolute top-0 left-0 w-full h-[100dvh] flex flex-col justify-center items-center z-40 pb-30 `}
                style={{background:hoverColor, color:txtColor}}
                key="fade-box"
                initial={{ y: "-100%"}}
                animate={{ y: 0}}
                exit={{y: "-100%", transition: { duration: 0.3, delay: 0.4}}}
                transition={{duration: 0.3}}
                >
                    <ul className="w-full px-10 sm:px-15 sm:py-0 md:space-y-5 flex flex-col space-y-3 md:justify-center">
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
                            className="w-full flex justify-center "
                            >
                                <a href={item.link} className="flex cursor-pointer text-6xl sm:text-6xl font-black md:text-7xl uppercase hover:opacity-[0.5] transition-all duration-100 ">
                                    <h2>{item.name}</h2>
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                    
                    <ul className="absolute bottom-0 flex justify-center left-0 gap-20 px-3 py-10  w-full">
                        {[{name:"Instagram", link:"https://www.instagram.com/matiasajin/"}, {name:"GitHub", link:"https://github.com/OnlyMatia"}, {name:"LinkedIn", link:"https://www.linkedin.com/in/matija-%C5%A1ajin-732696251/"}].map((item, i) => (
                            <motion.li key={i} 
                            className="sm:text-xl"
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
                            >
                                <a href={item.link} className="group">
                                    {item.name}
                                    <span className={`h-[1px] w-0  block group-hover:w-full ease-in duration-200 rounded-full`} style={{backgroundColor: txtColor}} />
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            )}
            </AnimatePresence>
        </motion.nav>
    )
}