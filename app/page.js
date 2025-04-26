
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


export default function Page() {


  return (
    <main className="items-center justify-items-center gap-16 ">
      <Mouse />
      
      <Loader /> 
      <Navbar />     
      <Header />
      <SecHeader />
      <About />
      
      <Labs />
      <Work />
      <ContactAction />
      <Footer />
    </main>
  );
}