import About from "./components/About";
import Header from "./components/Header";
import Labs from "./components/Labs";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";


export default function Page() {
  return (
    <main className="items-center justify-items-center min-h-screen gap-16 ">
      <Loader />
      <Navbar />
      
      <Header />
      <Skills />
      <About />
      <Work />
      <Labs />
      <section className="h-screen"></section>
    </main>
  );
}