"use client"

import { useState } from "react";
import About from "./components/About";
import ContactAction from "./components/ContactAction";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Labs from "./components/Labs";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Mouse from "./components/ui/Mouse";
import SecHeader from "./components/ui/SecHeader";
import Work from "./components/Work";
import { ThemeContext } from "./components/ThemeContext";


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
      bgColor: "#283949", /*blue*/
      txtColor: "#8DCBE4",
      hoverColor: "#1A242F",
    },
    {
      bgColor: "#5C0100", /*red*/
      txtColor: "#FFA664",
      hoverColor: "#921C1C",
    },
    {
      bgColor: "#386652",/*green*/   /*#004D34*/
      txtColor: "#b0d3b9",            /*#A8FFD6*/
      hoverColor: "#28483a",
    },
    {
      bgColor: "#4D3B00",/*yellow*/
      txtColor: "#FFE791",
      hoverColor: "#7b5e00",
    },
    
  ]

  const changeColor = () => {
    setTheme((prev) => (prev + 1) % themes.length);
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
        <Work />
        <ContactAction />
        <Footer />
      </main>
    </ThemeContext.Provider>
  );
}