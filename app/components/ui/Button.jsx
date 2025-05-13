"use client"
import { useEffect, useState } from "react"
import { useTheme } from "../ThemeContext"


export default function Button ({text, link, onClick} ) {
    const [hover, sethover] = useState(false)
    const [mobileAnimation, setMobileAnimation] = useState(false)
    const {bgColor, txtColor} = useTheme()

    useEffect(() => {
            const handleResize = () => {
                const mobile = window.innerWidth;
                setMobileAnimation(mobile <= 600);
            };
            handleResize(); 
            window.addEventListener('resize', handleResize); 
        }, []);

    function animateClick () {
        sethover(true)
        
        setTimeout(() => {
            sethover(false)
            if(onClick) onClick()
        }, 300);
    }

    return (
        <a href={mobileAnimation ? undefined : link} 
        onMouseEnter={() => sethover(true)} 
        onMouseLeave={() => sethover(false)} 
        onClick={mobileAnimation ? animateClick : onClick}>
            <button className="border-1 rounded-2xl py-[0.5] px-3 cursor-pointer md:px-6 md:py-[0.5] lg:px-5 relative flex items-center justify-center overflow-hidden ">
                <div className={`absolute rounded-full transition-all duration-700 ease-in-out ${hover ? "w-2 h-2 scale-[100] " : "w-0 h-0 " } `} style={{background:txtColor}}></div>
                <span className={`relative z-10 transition-colors text-sm md:text-normal md:text-lg`} style={hover ? {color:bgColor} : {color:txtColor}}>
                    {text}
                </span>
            </button>
        </a>
    )
}