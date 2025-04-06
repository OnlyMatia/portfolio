import localFont from "next/font/local";

const pixelify = localFont({
    src: "../fonts/Pixelify_sans.ttf",
    weight: "700",
    style: "normal",
});



export default function Skills () {
    return (
    <div className="w-full flex px-2 py-10 sm:p-0">
        <ul className={` sm:hidden space-y-2 text-right text-2xl text-[#d7d7d76d] ${pixelify.className}`}>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Next.js</li>
        </ul>
    </div>
    )
}