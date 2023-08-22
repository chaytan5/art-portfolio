"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Nav = () => {
  const path = usePathname();
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    if (path === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [path]);

  return (
    <nav className="absolute top-0 z-10 w-full">
      <div
        className={`mx-auto flex w-11/12 max-w-7xl items-center justify-between py-8 text-xl ${
          isHome ? "text-gold-90" : "text-gold-40"
        } `}
      >
        <Link href={"/"} className="font-marc text-4xl">
          Neha Rastogi
        </Link>
        <div className="hidden md:block">
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
