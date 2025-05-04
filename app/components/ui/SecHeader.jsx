import { useTheme } from "../ThemeContext"


export default function SecHeader () {
    const {bgColor, txtColor} = useTheme()

    return (
        <section className="md:hidden flex w-full items-end h-[50vh]" style={{background: bgColor, color: txtColor}}>
            <div>
                
                <div className="w-full flex flex-col gap-5  px-5">
                <div className="text-4xl capitalize">
                    <h3 className="border-t border-b py-1 ">Front-end</h3>
                    <h3 className="border-b py-1">Developer &</h3>
                    <h3 className="border-b py-1">Web designer</h3>
                </div>
                <p className="text-sm">I'm freelance front-end developer & web designer, co-founder of xTwo.dev, a web development studio focused on making the best shit ever. </p>
                <a href="https://xtwo.dev" className="font-bold w-fit">
                    <span className="relative inline-block overflow-hidden group">
                    Explore my favorite studio.
                    <span className="absolute left-0 bottom-0 h-[1px] w-0  transition-all duration-300 ease-out group-hover:w-full" style={{background:bgColor}}></span>

                    </span>
                </a>
                </div>

            </div>
        </section>
    )
}