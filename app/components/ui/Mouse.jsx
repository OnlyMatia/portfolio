"use client"
import { useEffect, useState } from "react"


export default function Mouse () {
    const [position, setPosition] = useState({ x: -10, y: 0 });

    useEffect(() => {
        const isSmallScreen = window.innerWidth < 768
        if (isSmallScreen) return;
        

        const moveHandler = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", moveHandler);

        return () => window.removeEventListener("mousemove", moveHandler);
}, []);

    return (
        <div
        className="w-2 h-2 rounded-full bg-white fixed pointer-events-none z-10 transition-transform duration-200 ease-out"
        style={{
        transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
    />
    )
}