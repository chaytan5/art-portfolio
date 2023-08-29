"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Nav = () => {
  const path = usePathname();
  const [isHome, setIsHome] = useState();

  useEffect(() => {
    if (path === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [path]);

  return (
    <nav
      className={`${isHome ? "absolute top-0 z-10" : "static bg-black"} w-full`}
    >
      <div
        className={`mx-auto flex w-11/12 max-w-screen-1.5xl items-center justify-between py-8 text-xl text-gold-90 `}
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
