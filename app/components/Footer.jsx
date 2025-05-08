import Image from "next/image";
import { useTheme } from "./ThemeContext";


export default function Footer (){
    const {bgColor, txtColor, hoverColor} = useTheme()

    return (
        <footer className="bottom-0 w-full  overflow-hidden h-auto flex justify-center" style={{background:bgColor, color:txtColor}}>
            <div className="flex flex-col justify-center gap-2 w-full">
                
                <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-around pt-3 md:pt-5 border-t px-3 text-center  ml-[5vw] mr-[5vw] text-xs md:text-base ">
                    <div >
                        Feel free to contact me for a <br/>
                        project you have in mind. 
                        <a href="mailto:sajin.matija@gmail.com" >
                            Email
                        </a>
                    </div>
                    <div>
                        <span className=" cursor-pointer">
                            LinkedIn
                        </span>
                        <br/> 
                        <span className=" cursor-pointer">
                            GitHub
                        </span>
                        <br/> 
                        <span className=" cursor-pointer">
                            Instagram
                        </span>
                    </div>
                    <div>
                        Designed & 
                        <br/> 
                        Developed by:
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