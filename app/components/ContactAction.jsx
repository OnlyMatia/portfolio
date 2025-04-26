"use client"
import localFont from "next/font/local";
import Button from "./ui/Button";

const pixelify = localFont({
    src: "../fonts/Pixelify_sans.ttf",
    weight: "700",
    style: "normal",
    display: "swap",
});

export default function ContactAction () {


    return (
    <section className="min-h-screen w-full flex items-center justify-center p-5 md:p-0">
        
        <div className=" md:max-w-[90%] lg:max-w-[80%] flex gap-5 flex-col ">
            <div className="uppercase text-[32px] sm:text-6xl  md:text-8xl lg:text-8xl font-black w-full ">
                <h2>Need a website?</h2>
            </div>
            <div className=" flex flex-row  ">
                <div className="w-1/2  flex flex-col justify-between items-start">
                    <p className="w-[90%] md:w-[80%] lg:w-[70%] text-[12px]  sm:text-sm md:text-sm lg:text-base text-[#ffffffaa]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, architecto optio inventore tempora doloremque esse, magnam amet quas natus dicta maiores eos modi, ipsum aut magni nesciunt vero! Error, ducimus. Quibusdam placeat, deserunt, iste vel laborum expedita temporibus ratione qui repudiandae ab unde! Facilis, voluptas cumque nisi quibusdam asperiores animi, ipsum, voluptates aliquam totam facere eaque necessitatibus. Sed, est repellendus dolorum autem atque eaque explicabo ipsam magni dicta repudiandae quisquam </p>
                    <Button text="Say hi" link="mailto:sajin.matija@gmail.com" />
                </div>
                <div className="w-1/2  flex flex-col gap-5 ">
                    <h2 className="uppercase text-3xl md:text-6xl lg:text-7xl font-black md:font-bold">Say Hello!</h2>
                    <p className="w-[90%] md:w-[80%] lg:w-[70%] text-[12px] sm:text-sm lg:text-base text-[#ffffffaa]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, architecto optio inventore tempora doloremque esse, magnam amet quas natus dicta maiores eos modi, ipsum aut magni nesciunt vero! Error, ducimus. Quibusdam placeat, deserunt, iste vel laborum expedita temporibus ratione qui repudiandae ab unde! Facilis, voluptas cumque nisi quibusdam asperiores animi, ipsum, voluptates aliquam totam facere eaque necessitatibus. Sed, est repellendus dolorum autem atque eaque explicabo ipsam magni dicta repudiandae quisquam </p>

                </div>
            </div>
        </div>

    </section>
    )
}