
import "./globals.css";
import { ReactLenis } from "./utils/lenis"

export const metadata = {
  title: 'Matija Šajin | Web Developer & UI/UX Designer',
  description: 'Portfolio Matija Šajin, web developer & UI/UX designer. See more about my projects, skills and contact info.',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {

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
