"use client"
import {  motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import localFont from "next/font/local";
import Counter from "./ui/Counter";
import { useTheme } from "./ThemeContext";

const pixelify = localFont({
    src: "../fonts/Pixelify_sans.ttf",
    weight: "700",
    style: "normal",
});


export default function Loader() {
    const controls = useAnimation()
    const {bgColor, txtColor} = useTheme()

    useEffect(() => {
        const timeout = setTimeout(() => {
            controls.start({
                y: "-100%", 
                transition: { duration: 0.5 }
            })
        }, 800) 

        return () => clearTimeout(timeout)
    }, [controls])


    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.05, 
            },
        },
    };
    
    const child = {
        hidden: { y: "150px" },
        visible: {
            y: 0,
            transition: {
                duration: 0.2,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.section 
        initial={{ y: 0 }}
        animate={controls}
        className="fixed h-[100dvh]  z-60 w-full flex justify-between flex-col md:p-15 border-b-[1px]"
        style={{background:bgColor, color:txtColor}}>
            <div className="text-6xl md:text-9xl font-bold overflow-hidden p-2">
                <motion.h2
                className="relative inline-block"
                variants={container}
                initial="hidden"
                animate="visible">
                    {"Hello".split("").map((el, i) => {
                        return (
                            <motion.span
                            key={i}
                            className="inline-block"
                            variants={child}>
                                {el}
                            </motion.span>
                        )
                    })}
                </motion.h2>
            </div>
        
            <div className={`w-full justify-end text-8xl md:text-9xl flex flex-row overflow-hidden `}>
                <Counter duration={0.5} />
            </div>



        </motion.section>
    )
}