
import "./globals.css";
import { ReactLenis } from "./utils/lenis"

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
