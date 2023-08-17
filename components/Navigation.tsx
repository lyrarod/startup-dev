"use client";

import { useState } from "react";
import { fadeIn } from "@/lib/animations";
import { LuMenu, LuX } from "react-icons/lu";
import { motion } from "framer-motion";
import { ModeToggle } from "./ModeToggle";
import { Link } from "react-scroll";
import { LuRocket } from "react-icons/lu";

export const navLinks = [
  ["Home", "hero"],
  ["About", "about"],
  ["Projects", "projects"],
  ["Services", "services"],
  ["Contact", "contact"],
];

export function Navigation() {
  const [isOpen, setOpen] = useState(false);

  const toogle = () => {
    setOpen(!isOpen);

    !isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  };

  return (
    <header
      className={`w-full h-16 xl:h-24 flex fixed top-0 left-0 ${
        !isOpen && "backdrop-blur-sm"
      } bg-white/90 dark:bg-black/90 duration-150 menu_shadow z-50`}
    >
      <nav className="container w-full flex items-center justify-between px-4 xl:px-0">
        <motion.strong
          className={`nav-logo`}
          initial={"initial"}
          animate={"animate"}
          variants={fadeIn(-25, 0, 0.6)}
        >
          <Link
            to="hero"
            smooth={true}
            duration={250}
            className="text-2xl xl:text-4xl cursor-default lg:cursor-pointer flex items-center gap-x-2"
          >
            <LuRocket className="text-3xl xl:text-5xl text-primary" />
            Startup.
          </Link>
        </motion.strong>

        <ul className="hidden md:flex md:items-center justify-center gap-x-6">
          {navLinks.map(([name, target], i) => {
            // const nameToLower = name.toLowerCase();
            const nameToLower = name;
            const link =
              nameToLower !== "Contact" && nameToLower !== "Home"
                ? nameToLower
                : "";
            return (
              <motion.li
                key={`li-${i}`}
                className="flex items-center justify-center select-none"
                initial={"initial"}
                animate={"animate"}
                variants={fadeIn(0, -25, 0.6 + i * 0.15)}
              >
                <Link
                  className={`nav-link uppercase font-semibold tracking-widest text-sm`}
                  activeClass="active"
                  to={target}
                  href={`#${target}`}
                  spy={true}
                  smooth={true}
                  hashSpy={target !== "hero" && true}
                  offset={0}
                  duration={500}
                  delay={0}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
                >
                  {link}
                </Link>
              </motion.li>
            );
          })}
        </ul>

        <motion.div
          className="hidden md:flex items-center gap-x-4"
          initial={"initial"}
          animate={"animate"}
          variants={fadeIn(25, 0, 0.6)}
        >
          <ModeToggle variant={"link"} />

          <Link
            to={"contact"}
            href="#contact"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
            delay={0}
            isDynamic={true}
            ignoreCancelEvents={false}
            spyThrottle={500}
            className={`nav-link-contact`}
          >
            contact
          </Link>
        </motion.div>

        <div className="md:hidden flex items-center justify-center z-[999]">
          <motion.button
            onClick={toogle}
            className="cursor-default sm:cursor-pointer"
            initial={"initial"}
            animate={"animate"}
            variants={fadeIn(25, 0, 0.6)}
          >
            {isOpen ? (
              <LuX className="text-[2rem] text-black dark:text-white" />
            ) : (
              <LuMenu className="text-[2rem] text-black dark:text-white" />
            )}
          </motion.button>
        </div>
      </nav>

      {/* Menu Mobile */}
      <ul
        className={`md:hidden fixed top-0 right-0 ${
          !isOpen && `right-[-100vw]`
        } w-screen h-screen bg-white/75 dark:bg-black/75 backdrop-blur-md flex flex-col items-center justify-center duration-150 overflow-hidden select-none z-[100]`}
      >
        <div className="mb-6">
          <ModeToggle variant={"link"} />
        </div>

        {navLinks.map(([link, target], i) => {
          return (
            <li key={`li-${i}`} className="w-full text-center p-2">
              <Link
                to={target}
                href={`#${target}`}
                onClick={toogle}
                spy={true}
                smooth={true}
                duration={500}
                offset={0}
                activeClass="active"
                className="nav-link text-2xl uppercase tracking-widest font-bold cursor-default"
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
