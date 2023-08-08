"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";

let clientSide = typeof window !== "undefined";
let isMobile: boolean;
isMobile = globalThis.window?.innerWidth < 600;
if (clientSide) isMobile = window.innerWidth < 600;

export function Hero() {
  return (
    <section id="hero" className="lg:min-h-screen flex overflow-hidden">
      <div className="container px-4 md:px-0 flex flex-col sm:items-center justify-end xl:flex-row xl:items-center xl:justify-start relative xl:pt-0">
        <div className="flex flex-col w-full pt-28 xl:p-0 sm:max-w-[400px] xl:max-w-[50%] xl:items-start xl:text-start select-none z-10">
          <h1 className="flex flex-col font-extrabold text-5xl xl:text-8xl">
            <motion.span
              initial={"initial"}
              animate={"animate"}
              variants={fadeIn(0, 30)}
              className="text-primary"
            >
              Startup
            </motion.span>

            <motion.span
              initial={"initial"}
              animate={"animate"}
              variants={fadeIn(0, 30, 0.2)}
              className=""
            >
              Development
            </motion.span>
          </h1>
          <motion.h2
            className="py-6 xl:py-8 xl:px-0 text-gray-400 dark:text-gray-600"
            initial={"initial"}
            animate={"animate"}
            variants={fadeIn(0, 30, 0.3)}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum
            assumenda nobis excepturi vitae eos quae nulla libero molestias
            sequi.
          </motion.h2>

          <div className="flex gap-x-6 xl:gap-x-10 w-full h-full lg:pl-0">
            <motion.div
              initial={"initial"}
              animate={"animate"}
              variants={fadeIn(0, 30, 0.4)}
              className="flex w-full lg:w-max"
            >
              <Link
                to="contact"
                duration={500}
                smooth={true}
                className="flex items-center justify-center px-0 py-2 lg:py-4 text-sm lg:text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-opacity-90 lg:px-8 xl:px-10 transition cursor-pointer w-full lg:w-fit"
              >
                Get Started
              </Link>
            </motion.div>

            <motion.div
              initial={"initial"}
              animate={"animate"}
              variants={fadeIn(0, 30, 0.5)}
              className="flex w-full lg:w-max"
            >
              <Link
                to="projects"
                duration={500}
                smooth={true}
                className="flex items-center justify-center px-0 py-2 lg:py-4 text-sm lg:text-base font-medium text-center rounded-lg border hover:bg-opacity-90 lg:px-8 xl:px-10 transition cursor-pointer w-full lg:w-fit dark:text-whitesmoke dark:border-whitesmoke text-black-111 border-black-111"
              >
                Read More
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={"initial"}
          animate={"animate"}
          variants={fadeIn(40, 0, 0.6, 1)}
          className="flex w-[460px] self-center xl:w-full xl:absolute xl:right-[-42%] lg:mt-[6%] z-0 overflow-hidden"
        >
          <img
            src="/illustration.png"
            alt="Illustration Hero Image"
            className="xl:w-[1000px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
