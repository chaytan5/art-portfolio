import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="absolute top-0 z-10 w-full">
      <div className="text-gold-90 mx-auto flex w-11/12 max-w-7xl items-center justify-between py-8 text-xl">
        <div className="font-marc text-4xl">Neha Rastogi</div>
        <div>
          <ul className="flex items-center gap-10">
            <Link href={"/"}>
              <li className="cursor-pointer">Home</li>
            </Link>
            <Link href={"/work"}>
              <li className="cursor-pointer">Work</li>
            </Link>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
