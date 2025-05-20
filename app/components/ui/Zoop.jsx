"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react";



export default function Zoop ({text, autoAnimate}) {
    const controls = useAnimation();

    useEffect(() => {
        if (!autoAnimate) return;
    
        const isSmallScreen = window.innerWidth < 768;
        if (!isSmallScreen) return;
    
        let active = false;
    
        const interval = setInterval(() => {
            if (!active) {
                controls.start("hovered");
                active = true;
    
                setTimeout(() => {
                    controls.start("initial");
                    active = false;
                }, 10000);
            }
        }, 10000);
    
        return () => clearInterval(interval);
    }, [controls, autoAnimate]);
    
    return (
        <motion.div 
        initial="initial"
        whileHover="hovered"
        animate={controls}
        transition={{staggerChildren: 0.2}}
        className="relative block overflow-hidden whitespace-nowrap "
        >

            <div>
                {text.split("").map((el, i) => {
                    return (
                        <motion.span
                        variants={{
                            initial: {y:0},
                            hovered: {y:"-125%"}
                        }}
                        transition={{
                            duration: 0.25,
                            ease: "easeInOut",
                            delay: 0.025 * i
                        }}
                        className="inline-block"
                        key={i}>{el}</motion.span>
                    )
                })}
            </div>
            <div className="absolute inset-0">
                {text.split("").map((el, i) => {
                    return (
                        <motion.span 
                        variants={{
                            initial: {y:"125%"},
                            hovered: {y:0}
                        }}
                        transition={{
                            duration: 0.25,
                            ease: "easeInOut",
                            delay: 0.025 * i
                        }}
                        className="inline-block"
                        key={i}>{el}</motion.span>
                    )
                })}
            </div>

        </motion.div>
    )
}