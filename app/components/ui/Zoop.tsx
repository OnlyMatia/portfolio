"use client"

import { motion } from "framer-motion"

type ZoopProps = {
    text: string;
    href?: string; 
};

export default function Zoop ({text, href} : ZoopProps) {

    return (
        <motion.a 
        initial="initial"
        whileHover="hovered"
        transition={{staggerChildren: 0.2}}
        className="relative block overflow-hidden whitespace-nowrap "
        href={href}>

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

        </motion.a>
    )
}