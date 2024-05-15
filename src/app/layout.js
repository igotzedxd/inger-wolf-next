import "./globals.css";
import { roboto, protest } from "@/utils/fonts";
import Navigation from "@/components/navigation/nav";
import Footer from "@/components/footer/footer";
import Bg from "@/components/bg/bg";
import Sidebar from "@/components/sidebar/sidebar";
import Socials from "@/components/socials/socials";
import Snow from "@/components/snow/snow";

export const metadata = {
  title: "Inger Wolf",
  description: "Forfatter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navigation />
        <Snow />
        <Sidebar className={protest.className} />
        <Socials />
        <Bg />
        {children}
        <Footer />
      </body>
    </html>
  );
}
