"use client"
import { useEffect, useState } from "react"
import { useTheme } from "../ThemeContext"

export default function Button({ text, link, onClick, classname }) {
    const [hover, sethover] = useState(false)
    const [mobileAnimation, setMobileAnimation] = useState(false)
    const { bgColor, txtColor } = useTheme()

    useEffect(() => {
        const handleResize = () => {
            setMobileAnimation(window.innerWidth <= 600)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
    }, [])

    function animateClick(e) {
        e.preventDefault()
        sethover(true)
        setTimeout(() => {
            sethover(false)
            if (onClick) onClick()
        }, 300)
    }

    const baseProps = {
        onMouseEnter: () => sethover(true),
        onMouseLeave: () => sethover(false),
        onClick: mobileAnimation ? animateClick : onClick,
        className: `py-[0.5] px-2 cursor-pointer md:px-3 md:py-[0.5] lg:px-3 relative flex items-center justify-center overflow-hidden ${classname}`,
        style: { position: "relative", display: "inline-flex" },
    }

    const content = (
        <>
            <div
                className={`absolute rounded-full transition-all duration-700 ease-in-out ${
                    hover ? "w-2 h-2 scale-[100]" : "w-0 h-0"
                }`}
                style={{ background: txtColor }}
            />
            <span
                className="relative z-10 transition-colors text-xs md:text-sm"
                style={hover ? { color: bgColor } : { color: txtColor }}
            >
                {text}
            </span>
        </>
    )

    if (link) {
        return (
            <a href={link} {...baseProps}>
                {content}
            </a>
        )
    } else {
        return (
            <button type="button" {...baseProps}>
                {content}
            </button>
        )
    }
}
