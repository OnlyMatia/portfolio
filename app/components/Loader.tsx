"use client"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"


export default function Loader() {
    const controls = useAnimation()

    useEffect(() => {
        const timeout = setTimeout(() => {
            controls.start({
                y: "-100%", 
                transition: { duration: 0.5 }
            })
        }, 300) 

        return () => clearTimeout(timeout)
    }, [controls])

    return (
        <motion.section 
        initial={{ y: 0 }}
        animate={controls}
        className="fixed min-h-screen bg-black z-60 w-full flex justify-center items-center flex-col gap-20">
            
            <motion.div 
                className="w-20 h-20 border-t-2 border-b-1 border-white rounded-full animate-spin"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.3, repeat: 1, ease: "linear" }}
            />
            <div className="w-full flex justify-center relative" >
                <span className="absolute w-[30%] h-[1px] block bg-[#fffbfb38]"></span>
                <motion.span 
                initial={{ width: "0%" }}
                animate={{ width: "30%" }}
                transition={{ duration: 0.3, repeat: 1, ease: "linear" }} className={`absolute h-[1px] block bg-[#fffffffa] `}></motion.span>
            </div>
        </motion.section>
    )
}