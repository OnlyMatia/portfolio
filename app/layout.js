"use client"

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./globals.css";
import { ReactLenis } from "./utils/lenis"
import { ThemeContext } from "./components/ThemeContext";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next"
import Head from "next/head";

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
      <Head>
        <meta name="description" content="Portfolio Matija Šajin - Web Developer & Web Designer" />
        <title>Web Developer | Matija Šajin</title>
        <meta name="keywords" content="web programer, web developer, dizajner, mostar webstranica, matija šajin, jeftine stranice" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/ms.ico" />
        <link rel="canonical" href="https://matijasajin.com" />
        <meta property="og:title" content="Web Developer | Matija Šajin" />
        <meta property="og:description" content="Portfolio Matija Šajin - Web Developer & Web Designer" />
        <meta property="og:url" content="https://matijasajin.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" itemProp="image" content="/ms.ico" /> {/** slika */}
        <meta name="twitter:card" content="/ms.ico" />
        <meta name="twitter:title" content="Web Developer | Matija Šajin" />
        <meta name="twitter:description" content="Portfolio Matija Šajin - Web Developer & Web Designer" />
        <meta name="twitter:image" content="" />{/** slika */}
      </Head>
      <body cz-shortcut-listen="true" >
        <ThemeContext.Provider value={themes[theme]}>
          <ReactLenis root>
          <Navbar changeColor={changeColor} /> 
            {children}
          <Footer />
          </ReactLenis>
        </ThemeContext.Provider>
        <Analytics />
      </body>
    </html>
  );
}
