"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutWebsite = () => {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  const circleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="h-max w-full bg-black-100 flex flex-col md:flex-row gap-5 items-center justify-center md:px-[15%] px-2 md:py-20 py-10"
    >
      <motion.div
        variants={textVariants}
        className="w-full md:w-[80%] flex gap-4"
      >
        <div className="flex flex-col gap-4">
          <h1 className={`text-white font-bold text-2xl md:text-3xl`}>
            <span className="text-green-500 text-3xl md:text-6xl lg:text-7xl sm:text-5xl text-center block whitespace-nowrap">
              E-Book Archive.
            </span>
            <motion.div
              variants={circleVariants}
              className="flex flex-row justify-center items-center underline"
            >
              <div className="w-5 h-5 rounded-full bg-[#00af55]" />
              <div className="h-1 w-[50%] sm:w-[80%] violet-gradient" />
              <div className="w-5 h-5 rounded-full bg-[#00af55]" />
            </motion.div>
            <br />A Platform for Developers to Learn New Skills and Technologies
            through PDF-Formatted Courses. Learn for Free with the Option to
            Upgrade to Our Premium Packages!
          </h1>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutWebsite;
