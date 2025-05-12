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
    <section className="min-h-[80vh] w-full flex items-center justify-center px-3 md:p-0" 
    style={{background:bgColor,color:txtColor}}>
        
        <div className=" md:max-w-[90%] lg:max-w-[80%] flex gap-2 md:gap-5 flex-col ">
            <div className="uppercase text-[32px] sm:text-6xl  md:text-8xl lg:text-8xl font-black w-full ">
                <h2>Need a website?</h2>
            </div>
            <div className=" flex flex-row  ">
                <div className="w-1/2  flex flex-col justify-between items-start gap-5">
                    <p className="w-[90%] md:w-[80%] lg:w-[70%] text-[12px]  sm:text-sm lg:text-base text-justify ">
                        Whether you're launching a business, building a brand, or refreshing your site, I'm here to help. Share your idea, and we'll discuss it over a call or in person. Together, we'll create a custom website that looks great and delivers real results.
                    </p>
                    <Button text="Connect" link="mailto:sajin.matija@gmail.com" />
                </div>
                <div className="w-1/2  flex flex-col gap-5 text-justify">
                    <h2 className="uppercase text-3xl md:text-6xl lg:text-7xl font-black md:font-bold">Say Hello!</h2>
                    <p className="w-full md:w-[80%] lg:w-[70%] text-[12px] sm:text-sm lg:text-base ">
                        Curious about why a website matters, how my process works, or how it can help grow your brand or business? Or just want to grab a coffee and chat ideas? Feel free to reach out I'm always happy to connect.
                    </p>

                </div>
            </div>
        </div>

    </section>
    )
}