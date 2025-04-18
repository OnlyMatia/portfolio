'use client'
import { useScroll, motion, useTransform } from "framer-motion"
import {  useRef } from "react"

export default function Loading ({value} : {value:string}) {
    
    const element = useRef(null)
    const { scrollYProgress} = useScroll({
        target: element,
        offset: ['start 0.9', 'start 0.3']
    })

    const words = value.split(" ")
    return (
        <p
        ref={element}
        className="flex flex-wrap w-full "
        >
            {words.map((word, i) => {
                const start = i / words.length
                const end = start + (1 / words.length)
                return <Word key={i} range={[start,end]} progress={scrollYProgress} >{word}</Word>
            })}
        </p>
    )
}

const Word = ({children, range, progress}:{children:string, range:[number, number], progress:any}) => {
    const char = children.split("")
    const amount = range[1] - range[0]
    const step = amount / char.length
    return (
        <span className=" mr-2">
            {
                char.map((el, i) => {
                    const start = range[0] + (step * i)
                    const end = range[0] + (step * (i + 1))
                    return <Char key={i} range={[start,end]} progress={progress} >{el}</Char>
                })
            }
        </span>
    )
}

const Char = ({children, range, progress}:{children:string, range:[number, number], progress:any}) =>{
    const opacity = useTransform(progress, range, [0,1])

    return (
        <span className="relative customZ">
            <span className="absolute opacity-[0.1]">{children}</span>
            <motion.span style={{opacity}}>
            {children}
            </motion.span>
        </span>
    )
}