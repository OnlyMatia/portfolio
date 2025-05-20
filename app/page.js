

import About from "./components/About";
import ContactAction from "./components/ContactAction";
import Header from "./components/Header";
import Labs from "./components/Labs";
import Loader from "./components/Loader";
import SecHeader from "./components/ui/SecHeader";
import Steps from "./components/Steps";


export const metadata = {
  title: 'Web Developer | Matija Šajin',
  description: 'Portfolio Matija Šajin - Web Developer & Web Designer',
  keywords: [
    'web programer',
    'web developer',
    'dizajner',
    'mostar webstranica',
    'matija šajin',
    'jeftine stranice',
  ],
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  icons: {
    icon: '/favico.ico',
  },
  alternates: {
    canonical: 'https://matijasajin.com',
  },
  openGraph: {
    title: 'Web Developer | Matija Šajin',
    description: 'Portfolio Matija Šajin - Web Developer & Web Designer',
    url: 'https://matijasajin.com',
    type: 'website',
    images: [
      {
        url: '/favico.ico',
        alt: 'Matija Šajin Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Web Developer | Matija Šajin',
    description: 'Portfolio Matija Šajin - Web Developer & Web Designer',
    images: ['/favico.ico'],
  },
};

export default function Page() {

  return (
      <main className="items-center justify-items-center gap-16 ">
        {/* <Mouse hovered={hovered}/> */}
        <Loader /> 
        <Header />
        <SecHeader />
        <About />
        <Steps />
        <Labs />
        
        <ContactAction />
      </main>
  );
}