"use client"
import localFont from "next/font/local";
import Button from "./ui/Button";
import { useTheme } from "./ThemeContext";

const pixelify = localFont({
    src: "../fonts/Pixelify_sans.ttf",
    weight: "700",
    style: "normal",
    display: "swap",
});

export default function ContactAction () {
    const {bgColor, txtColor} = useTheme()

    return (
    <section className="min-h-[80vh] w-full flex items-center justify-center p-5 md:p-0" 
    style={{background:bgColor,color:txtColor}}>
        
        <div className=" md:max-w-[90%] lg:max-w-[80%] flex gap-5 flex-col ">
            <div className="uppercase text-[32px] sm:text-6xl  md:text-8xl lg:text-8xl font-black w-full ">
                <h2>Need a website?</h2>
            </div>
            <div className=" flex flex-row  ">
                <div className="w-1/2  flex flex-col justify-between items-start gap-5">
                    <p className="w-[90%] md:w-[80%] lg:w-[70%] text-[12px]  sm:text-sm md:text-sm lg:text-base  ">
                    Whether you're launching a new business, building your personal brand, or simply looking to refresh your website, I'm here to help. Feel free to drop me a line about your idea or a project you have in mind.
                    We'll grab a coffee or a beer, discuss the idea and turn your vision into a fully functional website that not only looks great but also delivers real results.
                    I work closely with each client to understand their goals and provide a custom design tailored for their needs — from initial concept to final launch.
                    </p>
                    <Button text="Say hi" link="mailto:sajin.matija@gmail.com" />
                </div>
                <div className="w-1/2  flex flex-col gap-5 text-justify">
                    <h2 className="uppercase text-3xl md:text-6xl lg:text-7xl font-black md:font-bold">Say Hello!</h2>
                    <p className="w-[90%] md:w-[80%] lg:w-[70%] text-[12px] sm:text-sm lg:text-base ">
                        Have any questions about why having a website is important, about my design and development process or how it can help you grow your business or personal brand? Or maybe you just want to grab a cup of coffee to chat about an ideas? Feel free to reach out, I'm always happy to connect and answer your questions.
                    </p>

                </div>
            </div>
        </div>

    </section>
    )
}