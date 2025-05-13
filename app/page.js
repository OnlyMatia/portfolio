"use client"

import { useEffect, useState } from "react";
import About from "./components/About";
import ContactAction from "./components/ContactAction";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Labs from "./components/Labs";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Mouse from "./components/ui/Mouse";
import SecHeader from "./components/ui/SecHeader";
import { ThemeContext } from "./components/ThemeContext";
import Steps from "./components/Steps";


export default function Page() {
  const [hovered, setHovered] = useState(false);
  const [theme, setTheme] = useState(0)
  const themes=[
    {
      bgColor: "#1e1e1e",
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
    <ThemeContext.Provider value={themes[theme]}>
      <main className="items-center justify-items-center gap-16 ">
        <Mouse hovered={hovered}/>
        
        <Loader /> 
        <Navbar changeColor={changeColor} />     
        <Header />
        <SecHeader />
        <About />
        
        <Labs setHovered={setHovered} />
        <Steps />
        <ContactAction />
        <Footer />
      </main>
    </ThemeContext.Provider>
  );
}