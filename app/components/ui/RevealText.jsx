"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"


export default function RevealText({ text, href, autoAnimate = true }) {
    const controls = useAnimation();

    useEffect(() => {
        if (autoAnimate) {
            controls.start("visible");
        }
    }, [autoAnimate, controls]);

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const child = {
        hidden: { y: "125%" },
        visible: {
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeInOut",
            },
        },
    };

    const Wrapper = href ? motion.a : motion.div;

    return (
        <Wrapper
            href={href}
            className="relative block overflow-hidden whitespace-nowrap"
            variants={container}
            initial="hidden"
            animate={controls}
        >
            <div className="absolute inset-0">
                {text.split("").map((el, i) => (
                    <motion.span
                        className="inline-block"
                        variants={child}
                        key={i}
                    >
                        {el}
                    </motion.span>
                ))}
            </div>
        </Wrapper>
    );
}
