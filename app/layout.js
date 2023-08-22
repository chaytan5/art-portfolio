import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Limelight, Meddon, Marcellus, Marck_Script } from "next/font/google";

const limelight = Limelight({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-limelight",
});
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
  title: "Neha Rastogi | Creative Designer",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${limelight.variable} ${meddon.variable} ${marcellus.variable} ${marc.variable} scroll-smooth`}
    >
      <body className="font-marcellus">{children}</body>
    </html>
  );
}
