"use client"

import Image from "next/image";
import { useTheme } from "./ThemeContext";


export default function Footer (){
    const {bgColor, txtColor} = useTheme()

    return (
        <footer className="bottom-0 w-full  overflow-hidden h-auto flex justify-center" style={{background:bgColor, color:txtColor}}>
            <div className="flex flex-col justify-center gap-1 w-full">
                
                <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-around pt-3 md:pt-5 border-t px-3   ml-[5vw] mr-[5vw] text-xs md:text-base ">
                    <div className="inline-block md:w-1/2">
                        Feel free to contact me for a <br/>
                        project you have in mind. <br/>
                        <a href="mailto:sajin.matija@gmail.com" className="cursor-pointer relative inline-block overflow-hidden group" >
                            Email
                            <span className="absolute left-0 bottom-0 h-[1px] w-0 transition-all duration-300 ease-out group-hover:w-full" style={{background:txtColor}}/>
                        </a>
                    </div>
                    <div className="flex justify-between md:flex-row items-end md:w-1/2">
                        <div className="flex flex-col ">
                        <a href="https://www.instagram.com/matiasajin/" className=" cursor-pointer relative inline-block overflow-hidden group w-fit" >
                            Instagram
                            <span className="absolute left-0 bottom-0 h-[1px] w-0 transition-all duration-300 ease-out group-hover:w-full" style={{background:txtColor}}/>
                        </a>
                        <a href="https://github.com/OnlyMatia" className=" cursor-pointer relative inline-block overflow-hidden group w-fit" >
                            GitHub
                            <span className="absolute left-0 bottom-0 h-[1px] w-0 transition-all duration-300 ease-out group-hover:w-full" style={{background:txtColor}}/>
                        </a>
                        <a href="https://www.linkedin.com/in/matija-%C5%A1ajin-732696251/" className=" cursor-pointer relative inline-block overflow-hidden group w-fit" >
                            LinkedIn
                            <span className="absolute left-0 bottom-0 h-[1px] w-0 transition-all duration-300 ease-out group-hover:w-full" style={{background:txtColor}}/>
                        </a>
                    </div>
                    <div className="text-right opacity-[0.5]">
                        Designed & 
                        <br/> 
                        Developed by:
                    </div>
                    </div>
                </div>
                
                <div className="w-full flex justify-center ">
                    <Image 
                    src={"/footer.png"}
                    width={1000}
                    height={1000}
                    alt="Matija Šajin"
                    className="w-full"
                    />
                </div>
            </div>
        </footer>
    )
}