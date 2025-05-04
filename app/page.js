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
  const [theme, setTheme] = useState(1)
  const themes=[
    {
      bgColor: "#1e1e1e",
      txtColor: "#fff",
      hoverColor: "#7F7F79",
    },
    {
      bgColor: "#b2ecfe",
      txtColor: "#0b36d0",
      hoverColor: "",
    },
    {
      bgColor: "#FC4332",
      txtColor: "#69201E",
      hoverColor: "",
    },
    {
      bgColor: "#65C999",
      txtColor: "#193D34",
      hoverColor: "",
    },
    {
      bgColor: "#fd7807",
      txtColor: "#FDDB36",
      hoverColor: "",
    }
    
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