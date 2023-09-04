"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Nav = () => {
  return (
    <nav className={` relative z-10 w-full bg-black`}>
      <div
        className={`mx-auto flex w-11/12 max-w-screen-1.5xl items-center justify-between py-8 text-xl text-gold-90 `}
      >
        <Link href={"/"} className="font-slagless text-4xl">
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
