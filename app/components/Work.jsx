'use client'
import localFont from "next/font/local";
import {  useRef, useState } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useTheme } from "./ThemeContext";

const steps = [
    {step: "Research", desc: "Most important step before design and development is analyzing the target audience, study competitors, and determine key SEO factors. This helps build a solid foundation for the project."},
    {step: "Design", desc: "Based on the research, I create initial designs and prototypes to define the website's structure and appearance in Figma, focusing on new and modern UI design."},
    {step: "Development", desc: "After the design is approved I go into developing a fully functional website. The frontend handles the visual part such as animations, while the backend manages data and logic."},
    {step: "Testing", desc: "Testing is one of the most important steps of building websites to ensure it works correctly across all devices and browsers. Fixing bugs, speed up the performance, and enhance the user experience."},
    {step: "Optimization", desc: "Improving loading speed, security, and SEO with right words/keywords while ensuring the site is responsive, fast and mobile-friendly."},
    {step: "Launch", desc: "Once everything is tested and optimized, I deploy the website and monitor its performance to ensure smooth operation on Vercel or hosting platform of choice."},
];


export default function Work () {
    const {bgColor, txtColor} = useTheme()
    const [openIndex, setOpenIndex] = useState()
    const refTitle= useRef(null)
    const isInView = useInView(refTitle, {
        once:true, 
        margin: "0px 0px -20% 0px"
    })

    const toggleStep = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="work" className="min-h-screen w-full flex flex-col justify-center p-10 md:p-20 lg:p-30 space-y-7 overflow-hidden" 
        style={{background:bgColor, color:txtColor}} >
            <div  className={`text-4xl md:text-2xl font-black capitalize overflow-hidden mb-10`}>
            <motion.h2 
                ref={refTitle}
                initial={{y: "100%"}}
                animate={isInView ? {y:-5} : {}}
                transition={{duration: 0.5, ease: "easeOut"}}
                >
                    Steps to perfect website
                </motion.h2>
            </div>

            {steps.map((el, i) => {
                const ref = useRef(null)
                const { scrollYProgress } = useScroll({
                    target: ref,
                    offset: ['start 100%', 'start 70%'], 
                });
                const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
                const xNum = useTransform(scrollYProgress, [0, 1], ["-200px", "0px"])
                const xTxt = useTransform(scrollYProgress, [0, 1], ["200px", "0px"])

                return (
                    <div className="space-y-5 w-full flex justify-center"  key={i} onClick={() => toggleStep(i)} ref={ref} >
                        <motion.div className="flex flex-col w-full border-b-1 cursor-pointer " style={{opacity}}>
                            <div className={`flex justify-between py-2 text-3xl font-bold `} >
                                <motion.span style={{x: xNum}}>
                                    {"0" + (i+1)}
                                </motion.span>

                                <motion.div className="flex gap-2 md:gap-5" style={{x:xTxt}}>
                                    <span>{el.step}</span>
                                    <motion.img 
                                            src="/arrow.svg" 
                                            alt="arrow" 
                                            className="w-7"
                                            style={{ color: txtColor }}
                                            animate={{ rotate: openIndex === i ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                </motion.div>
                            </div>

                            <motion.div
                                    className="text-right text-lg w-full flex justify-end overflow-hidden"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={openIndex === i ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <p className="w-full md:w-3/4">{el.desc}</p>
                            </motion.div>
                        </motion.div>
                    </div>
                )
            })}
        </section>
    )
}