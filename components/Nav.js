"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Work", href: "/work" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header className="h-full w-full">
      <nav className={`h-full w-full bg-black`}>
        <div
          className={`mx-auto flex w-11/12 max-w-screen-1.5xl items-baseline justify-between py-8 text-lg text-gold-90 md:text-xl `}
        >
          <Link href={"/"} className="font-slagless text-2xl md:text-4xl">
            Neha Rastogi
          </Link>
          <div className="hidden md:block">
            <ul className="flex items-center gap-12">
              {navLinks.map((item, idx) => (
                <Link key={idx} href={item.href}>
                  <li className="cursor-pointer">{item.title}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="block cursor-pointer md:hidden" onClick={toggleMenu}>
            Menu
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate="animate"
            initial="initial"
            exit="exit"
            variants={menuVars}
            className="fixed inset-0 z-50 w-full origin-top bg-yellow"
          >
            <div className="mx-auto h-screen w-11/12 max-w-screen-1.5xl  py-8 text-lg text-black">
              <div className="flex h-full w-full flex-col">
                <div className="flex items-baseline justify-between ">
                  <Link href={"/"} className="font-slagless text-2xl">
                    Neha Rastogi
                  </Link>
                  <div className="block cursor-pointer" onClick={toggleMenu}>
                    Close
                  </div>
                </div>
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="flex h-full flex-col items-center justify-center gap-6 "
                >
                  {navLinks.map((link, index) => {
                    return (
                      <div className="overflow-hidden" key={index}>
                        <MobileNavLink
                          title={link.title}
                          href={link.href}
                          onClick={toggleMenu}
                        />
                      </div>
                    );
                  })}
                </motion.div>
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                >
                  <div className="overflow-hidden">
                    <motion.div
                      variants={mobileNavLinkVars}
                      className="text-center"
                    >
                      <a
                        href="mailto:mail@neharastogi.com"
                        className="underline"
                      >
                        mail@neharastogi.com
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const mobileNavLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const MobileNavLink = ({ title, href, onClick }) => {
  return (
    <motion.div variants={mobileNavLinkVars} className="text-4xl">
      <Link href={href} onClick={onClick}>
        {title}
      </Link>
    </motion.div>
  );
};

export default Nav;
