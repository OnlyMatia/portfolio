"use client"
import { useRef } from "react";
import Loading from "./ui/Loading"
import localFont from "next/font/local";
import { motion, useScroll, useTransform } from "framer-motion";

const pixelify = localFont({
    src: "../fonts/Pixelify_sans.ttf",
    weight: "700",
    style: "normal",
    display: "swap",
});


export default function About () {
    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset:['start end', 'start 0.5'],
    });

    const customWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="about" className="min-h-[60vh] w-full flex justify-start items-center px-5 sm:px-10  lg:p-10 " > 
            <div className="flex flex-col lg:px-10">
                <div ref={element} className={`text-4xl md:text-5xl font-semibold pb-10  space-y-2 w-fit` }>
                    <h2 className="pb-3 inline-block uppercase">Something about me</h2>
                    
                </div>
                <div className={`text-sm sm:text-lg block md:text-2xl w-full md:w-4/6 leading-[1.4] text-[#d7d7d7] z-10` }>
                    <Loading value={"Hey, I'm a 24-year-old web developer from Mostar. I love playing guitar, exploring new places, watching good old movies or shows, cooking and video games. Always open for new things. Currently freelancing and working on new interesting projects I cross my paths with. "} />
                </div>
            </div>
        </section>
    )
}