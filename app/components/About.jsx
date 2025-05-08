"use client"

import Loading from "./ui/Loading"
import { useTheme } from "./ThemeContext";



export default function About () {
    const {bgColor, txtColor} = useTheme()

    return (
        <section id="about" className="min-h-[70vh] md:min-h-[80vh] w-full flex justify-center items-center" style={{background:bgColor, color:txtColor}} > 
            <div className="flex flex-col w-full md:w-[90%] px-3 sm:px-0">
                <div  className={`text-4xl md:text-5xl font-black pb-10  space-y-2 w-fit` }>
                    <h2 className="pb-3 inline-block uppercase">Something about me</h2>
                    
                </div>
                <div className={`text-sm sm:text-lg block md:text-2xl w-full md:w-4/6 leading-[1.4]` }>
                    <Loading value={"Hey, I'm a 24-year-old web developer from Mostar. I love playing guitar, exploring new places, watching good old movies or shows, cooking and video games. Always open for new things. Currently freelancing and working on new interesting projects I cross my paths with. "} />
                </div>
            </div>
        </section>
    )
}