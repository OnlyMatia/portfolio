"use client"

import Loading from "./ui/Loading"
import { useTheme } from "./ThemeContext";



export default function About () {
    const {bgColor, txtColor} = useTheme()

    return (
        <section id="about" className="min-h-[50vh] md:min-h-[60vh] w-full flex justify-center items-center" style={{background:bgColor, color:txtColor}} > 
            <div className="flex flex-col w-full md:w-[90%] px-3 sm:px-0">
                <div  className={`text-4xl md:text-5xl lg:text-6xl font-black pb-5  space-y-2 w-fit` }>
                    <h2 className="pb-3 inline-block uppercase opacity-[0.5]">About</h2>
                </div>
                <div className={`text-base sm:text-lg block md:text-2xl w-full md:w-4/6 leading-[1.4] font-bold`}>
                    <Loading value={"Creating cool and unforgettable websites since 2023 - from bold, creative concepts to clean, functional designs. Specializing in modern web development, responsive design, SEO-optimized and fast websites using the best tools. Always keeping it fresh with speacial ideas, sharp execution & eye catching elements that focus on user experience."} />
                </div>
            </div>
        </section>
    )
}