import { projects } from "../utils/projects"
import localFont from "next/font/local";

const pixelify = localFont({
    src: "../fonts/Pixelify_sans.ttf",
    weight: "700",
    style: "normal",
    display: "swap",
});
interface ProjectProps {
    title: string;
    desc: string;
    tech: string[];
    image: string;
    color: string;
    index: number;
}

export default function Labs () {
    return (
        <section className="min-h-screen w-full p-5">
            {projects.map((project, i) => {
                return (
                    <Project key={i} index={i} {...project} />
                )
            })}
        </section>
    )
}



function Project({title, desc, tech, image, color, index}:ProjectProps) {
    return (
        <div className=" h-screen flex justify-center items-center sticky top-0 " style={{top: `calc(0% + ${index * 30}px)`}}>
            <div className="sm:w-[90%] md:w-[80%] lg:w-[70%] h-[700px] sm:h-[500px] rounded-[80px] flex flex-col sm:flex-row  bg-[#fafafa] border-3 border-[#1e1e1e]" >

                <div className="p-8 sm:p-10 w-full md:w-1/2 flex flex-col justify-between gap-5">
                    <div className="text-[#1e1e1e] space-y-5">
                        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${pixelify.className}`}>{title}</h2>
                        <p>{desc}</p>
                    </div>
                    <div className="flex gap-2 flex-wrap ">
                        {tech.map((el, i) => {
                            return  <span key={i} className="bg-[#1e1e1e] text-white px-4 py-2 rounded-full">{el}</span>
                        })}
                    </div>
                </div>

                <div className=" w-full md:w-1/2 h-full rounded-[76px] border-3 border-[#1e1e1e] overflow-hidden" style={{backgroundColor:color}}>

                </div>
            </div>
        </div>
    )
}