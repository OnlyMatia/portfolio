
import "./globals.css";
import { ReactLenis } from "./utils/lenis"

export const metadata = {
  title: 'Matija Šajin | Web Developer & UI/UX Designer',
  description: 'Portfolio Matija Šajin, web developer & UI/UX designer. See more about my projects, skills and contact info.',
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
