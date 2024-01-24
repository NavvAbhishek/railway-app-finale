import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['100','300','400','500','700','900'],
  subsets: ['latin'],
})

export const metadata = {
  title: "Sri Lankan Railway",
  description: "this is the official site of Sri Lankan Railway",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
