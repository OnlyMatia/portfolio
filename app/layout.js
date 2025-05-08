
import "./globals.css";
import { ReactLenis } from "./utils/lenis"

export const metadata = {
  title: 'Matija Šajin | Web Developer & Web Designer',
  description: 'Portfolio Matija Šajin, web developer & Web Designer. See more about my projects, skills and contact info.',
  keywords: [
    "web developer",
    "jeftine stranice",
    "web stranica",
    "web page",
    "web dizajner"
  ]
}

export default function RootLayout({children}) {

  return (
    <html lang="en">
      <body cz-shortcut-listen="true" >
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
