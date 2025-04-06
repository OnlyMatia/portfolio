"use client"
import Image from "next/image";
import Zoop from "./ui/Zoop";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import { useState } from "react";

const pixelify = localFont({
  src: "../fonts/Pixelify_sans.ttf",
  weight: "700",
  style: "normal",
  display: "swap",
});


export default function Header () {
  const [gif, setGif] = useState(false)

    return (
        <header className="flex flex-col h-screen items-center justify-between w-full cursor-default">
        
        <section className="flex flex-col justify-center items-center flex-grow text-center pt-20 h-min">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold flex space-x-5 md:flex-row flex-col ">
            <motion.span 
            initial={{y: '-100%', opacity: 0}}           
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 0.5}}
            className={pixelify.className}>
              <Zoop text="WEB" />
            </motion.span>

            <motion.span
            initial={{y: '-100%', opacity: 0}}           
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 0.55}}>
              <Zoop text="Developer" />
            </motion.span>
          </h1>
          <h3 className=" font-bold mt-2 text-sm sm:text-lg px-4 flex flex-wrap justify-center ">
            {"Specializing in frontend development using modern technologies and designs".split(" ").map((el, i) => {
              return (
                <motion.span key={i}
                initial={{ opacity: 0}}           
                animate={{ opacity: 1}}
                transition={{duration: 1.5, delay: 0.5 + (0.06 * i)}}
                className="pr-1 ">
                  {el}
                </motion.span>
              )
            })}
          </h3>

          <div className="flex justify-center gap-5 pt-5 font-bold ">
            {[{name:"Instagram", link:"https://www.instagram.com/matiasajin/"}, {name:"GitHub", link:"https://github.com/OnlyMatia"}, {name:"LinkedIn", link:"https://www.linkedin.com/in/matija-%C5%A1ajin-732696251/"}].map((el, i) => {
              return (
                <motion.div
                key={i} 
                initial={{y: '-100%', opacity: 0}}           
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 0.6+ (0.05 * i)}}>
                  <Zoop text={el.name} href={el.link} />
                </motion.div>
              )
            })}
          </div>
        </section>

        
        <section className={`w-full flex justify-end sm:justify-between items-end sm:px-5 sm:pb-4 overflow-hidden`}>
          <motion.ul
          initial={{x: '-100%', opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration:0.6}}
          className={`hidden sm:block space-y-2 text-right text-2xl text-[#d7d7d76d] ${pixelify.className}`}>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
          </motion.ul>

          <motion.div
          initial={{x: '100%', opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration:0.6}}
          onClick={() => {
            if(window.innerWidth < 600){
              setGif(!gif)
            }
          }}
          onMouseEnter={() => {
            setGif(true)
          }}
          onMouseLeave={() => {
            setGif(false)
          }}
          className="relative w-[300px] h-[160px]">
            <span>{!gif ? "Hello there, I'm Matija" : "I'm Matija 🤧"}</span>
            <Image 
            unoptimized
            src={gif ? "/spider.gif" : "/gif.gif" }
            alt="Animated GIF" 
            width={300} 
            height={300} 
            className="object-fit"
            />
          </motion.div>
        </section>
      </header>
    )
}