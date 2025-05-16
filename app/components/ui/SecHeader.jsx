import { useTheme } from "../ThemeContext"


export default function SecHeader () {
    const {bgColor, txtColor} = useTheme()

    return (
        <section className="md:hidden flex w-full items-end h-[35vh]" style={{background: bgColor, color: txtColor}}>
            <div>
                
                <div className="w-full flex flex-col gap-5 px-3">
                <div className="text-4xl capitalize">
                    <h3 className="border-t border-b py-1 ">Front-end</h3>
                    <h3 className="border-b py-1">Developer &</h3>
                    <h3 className="border-b py-1">Web designer</h3>
                </div>
                <p className="text-sm">I'm freelance front-end developer & web designer. Helping brands and ideas make an impact and come to life on the web.</p>
                <a href="https://xtwo.dev" className="font-bold w-fit">
                    <span className="relative inline-block overflow-hidden group">
                        Explore more.
                        <span className="absolute left-0 bottom-0 h-[1px] w-0  transition-all duration-300 ease-out group-hover:w-full" style={{background:bgColor}}></span>
                    </span>
                </a>
                </div>

            </div>
        </section>
    )
}