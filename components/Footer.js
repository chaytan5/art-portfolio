import Link from "next/link";
import {
  FaArtstation,
  FaDiscord,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bottom-0 grid h-64 w-full place-items-center bg-black">
      <div className="mx-auto flex w-11/12 max-w-screen-xl items-baseline justify-between text-gold-90">
        <Link href={"/"} className="font-slagless text-4xl">
          Neha Rastogi
        </Link>
        <div>
          <ul className="flex items-center gap-10 text-xl">
            <Link href={"/work"}>
              <li className="cursor-pointer transition">Work</li>
            </Link>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex items-center gap-5 text-xl">
            <Link href={"/"}>
              <FaArtstation />
            </Link>
            <Link href={"/"}>
              <FaLinkedin />
            </Link>
            <Link href={"/"}>
              <FaDiscord />
            </Link>
            <Link href={"/"}>
              <FaInstagram />
            </Link>
          </div>
          <div>
            <a href="mailto:">mail@neharastogi.com</a>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="absolute bottom-4 z-10 ">
        <p className="text-sm text-gold-40">
          All rights reserved 2023 &copy; Neha Rastogi
        </p>
      </div>
    </footer>
  );
};

export default Footer;
