"use client"


import { useEffect, useState } from "react"


export default function Mouse ({hovered}) {
    const [position, setPosition] = useState({ x: "-10", y: 0 });
    const size = 8;

    useEffect(() => {
        const moveHandler = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        }
        window.addEventListener("mousemove", moveHandler);

        return () => window.removeEventListener("mousemove", moveHandler);
}, []);


    return (
        <div
        className={` w-2 h-2 rounded-full bg-white fixed pointer-events-none z-10 transition-transform duration-100 ease-out flex justify-center items-center text-black ${!hovered && "mix-blend-difference" }`}
        style={{
        transform: `translate(${position.x - size / 2}px, ${position.y - size / 2}px)`,
        width: `${size}px`,
        height: `${size}px`,
        transition: 'width 0.5s ease, height 0.5s ease, transform 0.5s ease-out',
        }}
        >

        </div>
    )
}