"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence,  } from "framer-motion"
import localFont from "next/font/local";
import Zoop from "./ui/Zoop"

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


export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false)
    const [fade, setFade] = useState(false)
    const links = [{name:"home", link:"/"}, {name:"about", link:"/"}, {name:"work", link:"/"}, {name:"contact", link:"mailto:sajin.matija@gmail.com"}]
    const [hover, sethover] = useState(false)
    const [mobileAnimation, setMobileAnimation] = useState(false)
    
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth;
            setMobileAnimation(mobile <= 600);
        };
        handleResize(); 
        window.addEventListener('resize', handleResize); 
    }, []);


    function animateClick () {
        sethover(true)
        setTimeout(() => {
            sethover(false)
            window.open('mailto:sajin.matija@gmail.com', '_blank')
        }, 300);
    }

    return (
        <motion.nav
        initial={{y: '-100%', opacity: 0}}           
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.7}}
        className={` fixed top-0 left-0 w-full  z-50 p-3 sm:p-5 `} >           {/* ${isOpen ? "" : "mix-blend-difference" } bug prolaze efekti kada se klikne da se zatvori*/}
            <div className="container mx-auto flex items-center justify-between px-2.5 p-5 ">
                <div className="flex-1 min-w-0 truncate text-xl md:text-3xl z-50 ">
                    <h1>
                        <a href="/" className="cursor-pointer flex flex-col md:flex-row ">
                        <span className={piazzolla.className}>Matija</span>
                        <span className={pixelify.className}>Šajin</span>
                        </a>
                    </h1>
                </div>

                <a href={mobileAnimation ? undefined : "mailto:sajin.matija@gmail.com"} onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)} onClick={mobileAnimation ? animateClick : undefined}>
                    <button className="border-1 rounded-3xl py-3 px-4  cursor-pointer md:px-6 md:py-1 lg:px-7 relative flex items-center justify-center overflow-hidden ">
                        <div className={`absolute rounded-full transition-all duration-800 ease-in-out  bg-white ${hover ? "w-2 h-2 scale-[100] " : "w-0 h-0 " } `}></div>
                        <span className={`relative z-10 transition-colors  ${hover ? "text-[#1e1e1e]" : "text-white"}`}>
                        Contact
                        </span>
                    </button>
                </a>

                <div className="flex justify-end flex-1"><button
                    className="flex flex-col justify-center gap-1.5 py-3 px-auto rounded z-50 cursor-pointer "
                    onClick={()=> {
                        setFade(!fade) 
                        setIsOpen(!isOpen)}}
                >
                    <span className={`block w-12 h-0.5 bg-white rounded transition-transform duration-200 ease-in-out ${isOpen ? "rotate-45 translate-y-1" : ""}`}></span>
                    <span className={`block w-12 h-0.5 bg-white rounded transition-transform duration-200 ease-in-out ${isOpen ? "-rotate-45 -translate-y-1" : ""}`}></span>
                </button></div>
            </div>

            <AnimatePresence>
            {isOpen && (
                <motion.div 
                className={`absolute top-0 left-0 w-full bg-[#101010] min-h-screen flex flex-col justify-between pt-35 z-40  `}
                key="fade-box"
                initial={{ y: "-100%"}}
                animate={{ y: 0}}
                exit={{y: "-100%", transition: { duration: 0.3, delay: 0.4}}}
                transition={{duration: 0.3}}
                >
                    <ul className="px-10 sm:px-15 sm:py-0 space-y-15 md:space-y-10  flex flex-col justify-center">
                        {links.map((item, i) => (
                            <motion.li key={i}
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
                            className="w-full inline-block border-b-[1px] text-white hover:text-[#797979]"
                            >
                                <a href={item.link} className="flex justify-between cursor-pointer text-5xl sm:text-6xl font-bold md:text-7xl uppercase">
                                    <h2>{item.name}</h2>
                                    <p>{"0"+(i+1)}</p>
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                    
                    <ul className="flex justify-center gap-10 px-3 py-10 font-bold ">
                        {[{name:"Instagram", link:"https://www.instagram.com/matiasajin/"}, {name:"GitHub", link:"https://github.com/OnlyMatia"}, {name:"LinkedIn", link:"https://www.linkedin.com/in/matija-%C5%A1ajin-732696251/"}].map((item, i) => (
                            <motion.li key={i} 
                            className="text-xl uppercase"
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