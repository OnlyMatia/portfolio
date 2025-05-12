"use client"


import { useEffect, useState } from "react"
import { useTheme } from "../ThemeContext";


export default function Mouse () {
    const { txtColor} = useTheme()
    const [position, setPosition] = useState({ x: "-10", y: 0 });


    useEffect(() => {
        if(window.innerWidth < 600) return
        const moveHandler = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        }
        window.addEventListener("mousemove", moveHandler);

        return () => window.removeEventListener("mousemove", moveHandler);
}, []);


    return (
        <div
        className={` w-2 h-2  fixed pointer-events-none z-60 transition-transform duration-100 ease-out flex justify-center items-center text-black mix-blend-difference`}
        style={{
        transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        transition: 'width 0.5s ease, height 0.5s ease, transform 0.5s ease-out',
        background: txtColor
        }}
        >

        </div>
    )
}