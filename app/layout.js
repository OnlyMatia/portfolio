"use client"

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./globals.css";
import { ReactLenis } from "./utils/lenis"
import { ThemeContext } from "./components/ThemeContext";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next"

const themes=[
    {
      bgColor: "#111111",
      txtColor: "#fff",
      hoverColor: "#272727",
    },
    {
      bgColor: "#283949",   /*blue*/
      txtColor: "#8DCBE4",
      hoverColor: "#1A242F",
    },
    {
      bgColor: "#5C0100",   /*red*/
      txtColor: "#FFA664",
      hoverColor: "#921C1C",
    },
    {
      bgColor: "#004D34",   /*green*/   
      txtColor: "#ffc0e9",           
      hoverColor: "#28483a",
    },
    {
      bgColor: "#040F49",   /*dark blue*/
      txtColor: "#FF0000",
      hoverColor: "#070449",
    },
    {
      bgColor: "#a78900",   /*yellow*/
      txtColor: "#FFF6C2",
      hoverColor: "#B89002",
    },
    
  ]

export default function RootLayout({children}) {
    const [theme, setTheme] = useState(0)
  
  useEffect(() => {
    const stored = localStorage.getItem("storedTheme");
    if (stored !== null) {
      const parsed = parseInt(stored, 10);
      if (!isNaN(parsed)) {
        setTheme(parsed);
      }
    }
  }, []);

  const changeColor = () => {
    setTheme((prev) => {
      const next = (prev + 1) % themes.length;
      localStorage.setItem("storedTheme", next.toString());
      return next;
    });
  };

  return (
    <html lang="en">
      <head>
        <Script id="ld-json" type="application/ld+json" strategy="beforeInteractive">
          {`{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Matija Šajin Portfolio",
            "jobTitle":"Web Developer",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rafaela Bobana b.b.",
              "postalCode": "88000",
              "addressLocality": "Mostar",
              "addressCountry": "BA"
            },
            "telephone": "+38763568408",
            "url": "https://matijasajin.com",
            "email":"mailto:sajin.matija@gmail.com",
            "sameAs":[
            "https://www.linkedin.com/in/matija-%C5%A1ajin-732696251/",
            "https://github.com/OnlyMatia"
            ]
          }`}
        </Script>
      </head>
      <body cz-shortcut-listen="true" >
        <ThemeContext.Provider value={themes[theme]}>
          <ReactLenis root>
          <Navbar changeColor={changeColor} /> 
            {children}
          <Footer />
          </ReactLenis>
        </ThemeContext.Provider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
