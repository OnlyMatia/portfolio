"use client"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"


export default function Loader() {
    const controls = useAnimation()

    useEffect(() => {
        const timeout = setTimeout(() => {
            controls.start({
                y: "-100%", 
                transition: { duration: 0.3 }
            })
        }, 300) 

        return () => clearTimeout(timeout)
    }, [controls])

    return (
        <motion.section 
        initial={{ y: 0 }}
        animate={controls}
        className="fixed min-h-screen bg-black z-60 w-full flex justify-center items-center">
            
            <motion.div 
                className="w-16 h-16 border-t-3 border-b-2 border-white rounded-full animate-spin"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.2, repeat: Infinity, ease: "linear" }}
            />
        </motion.section>
    )
}