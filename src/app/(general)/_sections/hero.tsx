"use client";

import React from "react";
import { styles } from "../../style";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../../hoc";
import { Button } from "@/components/ui/button";

const Hero = () => {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  const circleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const boxVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  const buttonVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0, x: 0, transition: { duration: 1 } },
  };
  const fontVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="hero"
      className="h-screen bg-blue-200 flex items-center justify-center relative"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={`${styles.paddingX} h-full max-w-7xl mx-auto flex gap-5 items-center justify-between`}
      >
        <motion.div
          variants={circleVariants}
          className="flex flex-col justify-center items-center mt-5"
        >
          <div className="w-5 h-5 rounded-full bg-[#00af55]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </motion.div>
        <motion.div variants={textVariants}>
          <h1 className={`${styles.heroHeadText} text-white text-6xl`}>
            Learn <span className="text-[#00af55]">Courses</span> <br /> And
            Build Your <br />
            <span className="text-[#00af55]">career</span>
            <span className="text-[#00af55]"> Together!</span>
          </h1>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <Button className="mt-6">Get Started</Button>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" className="ml-5">
                Watch Demo
              </Button>
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          variants={boxVariants}
          className="bg-black w-[40rem] h-[28rem] ml-20"
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
