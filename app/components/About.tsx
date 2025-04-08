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
        <section className="h-screen w-full flex justify-start items-center px-5 sm:px-10 py-5 sm:py-10 lg:p-10 ">
            <div className="flex flex-col lg:px-10">
                <div ref={element} className={`text-3xl sm:text-4xl md:text-5xl font-black pb-10  space-y-2 w-fit` }>
                    <h2 className="pb-3 inline-block">Short <span className={` ${pixelify.className}`}>introduction</span><br />about me</h2>
                    <motion.span className="block h-[1px] bg-white "  style={{ width: customWidth }}></motion.span>
                </div>
                <div className={`text-xl block md:text-2xl font-semibold w-5/6 leading-[1.4] text-[#d7d7d7] z-10` }>
                    <Loading value={"Hey, I'm a 24-year-old web developer working with modern full stack technologies, cool and creative animations, 3D and video and photo editing. Currently working on a few interesting projects as a freelancer but I'm always open for more. "} />

                </div>
            </div>
        </section>
    )
}