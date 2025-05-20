"use client"
import { useTheme } from "./ThemeContext"
import { steps } from "../utils/steps"

export default function Steps () {
    const {bgColor, txtColor} = useTheme()

    return (
        <section className="min-h-screen md:min-h-[100vh] w-full flex justify-center items-center p-3 md:p-0 md:py-20" style={{background:bgColor, color:txtColor}}>
            <div className="w-full md:w-[90%] flex flex-col gap-20 items-center justify-center">
                <div className="w-full font-black text-5xl md:text-6xl lg:text-7xl uppercase  text-left">
                    <h2>Modern.</h2>
                    <h2 >Styled to stand out.</h2>
                    <h2 >Made to impress.</h2>
                </div>

                <div className="w-full max-w-[900px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-x-5 lg:gap-x-10 gap-y-10 cursor-default">
                    {steps.map((el, i) => {
                        return (
                            <div className="w-full lg:w-[200px] flex flex-col gap-3 " key={i}>
                    <div className="w-fit inline-block group">
                        <h3 className="text-lg md:text-xl font-bold ">
                            {el.title}
                        </h3>
                        <span className="w-0 h-[1px] block group-hover:w-full transition-all duration-300" 
                        style={{background:txtColor}}/>
                    </div>
                    <p className="opacity-[0.8] text-xs md:text-sm font-bold">
                        {el.desc}
                    </p>
                    <div className="flex flex-row gap-1">
                        {el.tech.map((el) => {
                        return (
                            <span 
                            key={el}
                            style={{background:txtColor, color:bgColor}}
                            className="py-[1px] px-[5px] font-bold text-sm">
                                {el}
                            </span>
                        )
                            })}
                            </div>
                        </div>    
                        )
                    })}
                    
                </div>

            </div>
        </section>
    )
}

