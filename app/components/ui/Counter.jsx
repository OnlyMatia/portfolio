import {  useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";


    
export default function Counter({ duration = 1 } ) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const controls = animate(count, 100, {
            duration: duration,
            ease: "easeOut",
        });

        const unsubscribe = rounded.on("change", (v) => {
            setDisplayValue(v);
        });

        return () => {
            controls.stop();
            unsubscribe();
        };
    }, [count, rounded, duration]);

    return (
        <div className={` w-full justify-end font-black text-8xl md:text-9xl flex flex-row overflow-hidden`}>
            <span>{displayValue}%</span>
        </div>
    );
}
