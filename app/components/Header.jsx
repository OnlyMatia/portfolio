"use client"
import Zoop from "./ui/Zoop";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import { useEffect } from "react";

const pixelify = localFont({
    src: "../fonts/Pixelify_sans.ttf",
    weight: "700",
    style: "normal",
    display: "swap",
});

const LoaderDelay = 0.8

export default function Header () {
    const {bgColor, txtColor} = useTheme()

    return (
        <header id="header" className={`min-h-[100dvh] flex flex-col items-center justify-center w-full cursor-default md:gap-[5vw]`} 
        style={{
            background: bgColor,
            color: txtColor,
        }}>
        
        <section  className="flex flex-col justify-center md:justify-end items-center flex-grow text-center">
            <h1 className="text-7xl md:text-8xl lg:text-[9vw] font-bold flex space-x-5 md:flex-row flex-col ">
            <motion.span 
            initial={{y: '-100%', opacity: 0}}           
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 0.85}}
            className={`${pixelify.className}`}>
                <Zoop text="WEB" autoAnimate />
            </motion.span>

            <motion.span
            initial={{y: '-100%', opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 0.75}}>
                <Zoop text="Developer" autoAnimate />
            </motion.span>
            </h1>
            <h2 className={`mt-2 text-sm sm:text-lg px-4 flex flex-wrap justify-center font-bold md:font-normal text-[${txtColor}]`}>
            {"Specializing in frontend development using modern technologies and designs".split(" ").map((el, i) => {
                return (
                <motion.span key={i}
                initial={{ opacity: 0}}           
                animate={{ opacity: 1}}
                transition={{duration: 1.5, delay: LoaderDelay + (0.06 * i)}}
                className="pr-1 ">
                    {el}
                </motion.span>
                )
            })}
            </h2>

            
        </section>
        
        <section className={`w-[90%]  flex sm:pb-4 overflow-hidden flex-row justify-center md:justify-between`}>
            <motion.div
            initial={{x: '-100%', opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration:0.6, delay: LoaderDelay}}
            className="hidden md:block h-[20%]">
                
                <div className={`max-w-[280px] flex flex-col gap-5 text-[${txtColor}]`}>
                    <div className="text-4xl capitalize">
                        <h3 className="border-t border-b py-1 ">Front-end</h3>
                        <h3 className="border-b py-1">Developer &</h3>
                        <h3 className="border-b py-1">Web designer</h3>
                    </div>
                    <p className="text-sm">I'm freelance front-end developer & web designer. Helping businesses and ideas make an impact and come to life on the web.</p>
                    <a href="#about" className="font-bold w-fit">
                        <span className="relative inline-block overflow-hidden group">
                        Explore more.
                        <span className="absolute left-0 bottom-0 h-[1px] w-0 transition-all duration-300 ease-out group-hover:w-full" style={{background:txtColor}}></span>
                        </span>
                    </a>
                </div>

            </motion.div>

            <div className="flex items-end justify-between md:pb-0 pb-10 font-bold md:w-auto md:gap-10 w-full">
                {[{name:"Instagram", link:"https://www.instagram.com/matiasajin/"}, {name:"GitHub", link:"https://github.com/OnlyMatia"}, {name:"LinkedIn", link:"https://www.linkedin.com/in/matija-%C5%A1ajin-732696251/"}].map((el, i) => {
                return (
                    <motion.div
                    key={i} 
                    initial={{y: '-100%', opacity: 0}}           
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.6, delay: LoaderDelay+ (0.05 * i)}}>
                        <a href={el.link} className="group">
                            {el.name}
                            <span className={`h-[1px] w-0  block group-hover:w-full ease-in duration-200 rounded-full`} style={{backgroundColor: txtColor}} />
                        </a>
                    </motion.div>
                )
                })}
            </div>

            
        </section>
    </header>
    )
}