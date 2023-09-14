import Link from "next/link";
import {
  FaArtstation,
  FaDiscord,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-black">
      <div className="mx-auto flex w-11/12 max-w-screen-xl flex-col items-center justify-between gap-y-16 py-10 text-gold-90 md:flex-row md:items-baseline md:gap-2 md:py-20">
        <Link href={"/"} className="font-slagless text-4xl">
          Neha Rastogi
        </Link>
        <div>
          <ul className="flex flex-col items-center justify-center gap-10 text-xl md:flex-row">
            <Link href={"/work"}>
              <li className="cursor-pointer">Work</li>
            </Link>
            <Link href={"/about"}>
              <li className="cursor-pointer">About</li>
            </Link>
            <Link href={"/contact"}>
              <li className="cursor-pointer">Contact</li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-6 text-xl md:gap-5">
            <Link
              target="_blank"
              rel="noreferrer noopener"
              href={"https://www.artstation.com/neha_rastogi"}
            >
              <FaArtstation />
            </Link>
            <Link
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/neharastogi244/"
            >
              <FaLinkedin />
            </Link>
            <Link
              target="_blank"
              rel="noreferrer noopener"
              href={"http://discordapp.com/users/Neha#9446"}
            >
              <FaDiscord />
            </Link>
            <Link
              target="_blank"
              rel="noreferrer noopener"
              href={"https://www.instagram.com/thenehaink/"}
            >
              <FaInstagram />
            </Link>
          </div>
          <div>
            <a href="mailto:">contact@neharastogi.com</a>
          </div>
        </div>
      </div>
      <div className="w-full pb-4 text-center">
        <p className="text-sm text-gold-40">
          All rights reserved 2023 &copy; Neha Rastogi
        </p>
      </div>
    </footer>
  );
};

export default Footer;
