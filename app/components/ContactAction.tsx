"use client"
import localFont from "next/font/local";
import { useEffect, useState } from "react";

const pixelify = localFont({
    src: "../fonts/Pixelify_sans.ttf",
    weight: "700",
    style: "normal",
    display: "swap",
});

export default function ContactAction () {
    const [hover, sethover] = useState(false)
    const [mobileAnimation, setMobileAnimation] = useState(false)

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
            window.open('mailto:sajin.matija@gmail.com', '_blank')
        }, 300);
    }

    return (
    <section className="h-screen flex items-center">
        <div className="max-w-7xl flex flex-col gap-6  px-5 md:px-20 lg:px-30 py-10 items-start ">
            <h3 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${pixelify.className}`}>Need a website or have an idea?</h3>
            <p className="max-w-[90%] lg:max-w-[70%] text-normal md:text-xl ">
                If you're looking for a modern, high-quality website or have an interesting project you'd like to
                collaborate on, feel free to reach out, I'm always open to new ideas.
                Contact me below and let's make something awesome together!
            </p>
            <a href={mobileAnimation ? undefined : "mailto:sajin.matija@gmail.com"} onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)} onClick={mobileAnimation ? animateClick : undefined}>
                    <button className="border-1 rounded-3xl py-3 px-4  cursor-pointer md:px-6 md:py-2 lg:px-6 relative flex items-center justify-center overflow-hidden ">
                        <div className={`absolute rounded-full transition-all duration-800 ease-in-out  bg-white ${hover ? "w-2 h-2 scale-[100] " : "w-0 h-0 " } `}></div>
                        <span className={`relative z-10 transition-colors text-normal md:text-lg  ${hover ? "text-[#1e1e1e]" : "text-white"}`}>
                            Contact me 
                        </span>
                    </button>
                </a>
        </div>
    </section>
    )
}