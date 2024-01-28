import { Roboto } from "next/font/google";
import "./globals.css";
import Script from "next/script"; 

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Sri Lankan Railway",
  description: "this is the official site of Sri Lankan Railway",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet" />
      </head>
      <body className={roboto.className}>
        {children}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/datepicker.min.js"
          strategy="afterInteractive" // Loads the script after the main page becomes interactive
        />
      </body>
    </html>
  );
}
