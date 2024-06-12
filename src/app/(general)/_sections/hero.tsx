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
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const scrollVariants = {
    hidden: { opacity: 0, scale: 0, y: -100 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.2 } },
  };

  return (
    <section
      id="hero"
      className="h-screen w-screen bg-black-100 flex items-center justify-center relative"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={`${styles.paddingX} h-full max-w-7xl mx-auto flex flex-col md:flex-row gap-5 items-center justify-between`}
      >
        <motion.div
          variants={circleVariants}
          className="flex flex-col justify-center items-center mt-5 md:mt-0"
        >
          <div className="w-5 h-5 rounded-full bg-[#00af55]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </motion.div>
        <motion.div
          variants={textVariants}
          className="w-full md:w-3/4 text-center md:text-left sm:justify-center sm:items-center"
        >
          <h1
            className={`${styles.heroHeadText} text-white text-2xl md:text-6xl`}
          >
            Learn <span className="text-secondary">Courses</span> <br /> And
            Build <br /> Your <span className="text-secondary">Career</span>
            <span className="text-[#00af55] underline"> Together!</span>
          </h1>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            className="flex flex-col sm:flex-row items-center"
          >
            <Button className="mt-6">Get Started</Button>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 sm:mt-0 sm:ml-5"
            >
              <Button variant="secondary" className="md:mt-6 sm:mt-0 sm:ml-5 ">
                Watch Demo
              </Button>
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          variants={boxVariants}
          className="relative bg-black w-full h-40 sm:w-[25rem] sm:h-[14rem] md:w-[50rem] md:h-[28rem] lg:w-[69rem] lg:h-[30rem] mt-10 md:mt-0 md:ml-10 sm:mb-20 lg:ml-20"
        >
          <img
            src="https://i1.pickpik.com/photos/916/460/15/dark-gloomy-books-pages-e0c7b7e43f53cd1388e7c1e8e003151a.jpg" // Replace with your image URL
            alt="Top Course"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
      <motion.div
        variants={scrollVariants}
        className="absolute xs:bottom-20 bottom-32 w-full flex justify-center items-center"
        initial="hidden"
        animate="visible"
      >
        <ScrollLink to="about" smooth={true} duration={500}>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start cursor-pointer">
            <motion.div
              animate={{
                y: [0, 30, 0],
                opacity: [1, 0.3, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </ScrollLink>
      </motion.div>
    </section>
  );
};

export default Hero;
