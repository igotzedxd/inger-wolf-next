import { Inter } from "next/font/google";
import "./globals.css";

import Navigation from "@/components/navigation/nav";
import Footer from "@/components/footer/footer";
import Bg from "@/components/bg/bg";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Inger Wolf",
  description: "Forfatter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <Bg />
        {children}
        <Footer />
      </body>
    </html>
  );
}
