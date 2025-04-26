import Image from "next/image";


export default function Footer (){


    return (
        <footer className="bottom-0 w-full bg-[#101010] overflow-hidden h-auto flex justify-center">
            <div className="flex flex-col justify-center gap-5 w-full">
                
                <ul className="flex flex-col md:flex-row gap-5 justify-around  pt-5 border-t text-[#ffffff6e] mt-10 ml-10 mr-10 text-xs md:text-base ">
                    <li >Feel free to contact me for a<br/>  project you have in mind. <a href="mailto:sajin.matija@gmail.com" className="hover:text-[#ffffffd5]">Email</a></li>
                    <li><span className="hover:text-[#ffffffd5] cursor-pointer">LinkedIn</span><br/> <span className="hover:text-[#ffffffd5] cursor-pointer">GitHub</span></li>
                    <li>I also help out here :d <br /><a href="xtwo.dev" className="hover:text-[#ffffffd5] cursor-pointer">Explore xTwo.dev</a></li>
                    <li>Designed & <br/> Developed by:</li>
                </ul>
                
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