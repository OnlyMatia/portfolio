"use client"

import {useState } from "react";
import About from "./components/About";
import ContactAction from "./components/ContactAction";
import Header from "./components/Header";
import Labs from "./components/Labs";
import Loader from "./components/Loader";
import Mouse from "./components/ui/Mouse";
import SecHeader from "./components/ui/SecHeader";
import Steps from "./components/Steps";


export default function Page() {
  const [hovered, setHovered] = useState(false);

  return (
      <main className="items-center justify-items-center gap-16 ">
        {/* <Mouse hovered={hovered}/> */}
        <Loader /> 
        <Header />
        <SecHeader />
        <About />
        <Steps />
        <Labs setHovered={setHovered} />
        
        <ContactAction />
      </main>
  );
}