import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Meddon, Marcellus, Marck_Script } from "next/font/google";
import LightboxContextProvider from "@/contexts/lightbox-context";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TabsContextProvider from "@/contexts/tab-context";
import { Toaster } from "sonner";

const meddon = Meddon({
  subsets: ["latin"],
  variable: "--font-meddon",
  weight: "400",
});
const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
});

const marc = Marck_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marc",
});

export const metadata = {
  title: "Neha Rastogi | Concept Designer",
  description:
    "Neha creates art for Games, Film & Animation with an emphasis on Environments & Worldbuilding. The professional projects she's worked on include Game UI, VFX Illustration, Keyframes, Card Art, Marketing Art & Concept art.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${meddon.variable} ${marcellus.variable} ${marc.variable} scroll-smooth`}
    >
      <body className="overscroll-none font-marcellus">
        <Nav />
        <LightboxContextProvider>
          <TabsContextProvider>{children}</TabsContextProvider>
        </LightboxContextProvider>
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
