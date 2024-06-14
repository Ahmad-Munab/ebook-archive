"use client";

import { FEATURES } from "../../constants";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../../style";

const Features = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex-col justify-center items-center overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24 bg-black-100"
    >
      <div className="max-container padding-container relative w-full flex justify-center">
        <div className="z-20 flex w-[85%] flex-col lg:w-[60%]">
          <div className="relative">
            <h2
              className={`bold-40 lg:bold-64 text-center ${styles.sectionHeadText}`}
            >
              Our Features
            </h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20 relative ">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                custom={index}
                initial="hidden"
                animate="visible"
              >
                <FeatureItem
                  title={feature.title}
                  icon={feature.icon}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <motion.li
      className="flex w-full flex-1 flex-col items-center "
      variants={itemVariants}
    >
      {/* <motion.div
        className="rounded-full p-4 lg:p-7 bg-green-50 flex items-center justify-center"
        variants={itemVariants}
      {/* <Image src={icon} alt="map" width={15} height={15} /> */}
      {/* </motion.div> */}
      <motion.h2
        className="bold-20 lg:bold-32 mt-5 capitalize text-center text-primary text-3xl underline"
        variants={itemVariants}
      >
        {title}
      </motion.h2>{" "}
      {/* Centered the text */}
      <motion.p
        className="regular-16 mt-5 bg-black-100/80 text-gray-30 lg:mt-[30px] lg:bg-none text-center text-white text-lg"
        variants={itemVariants}
      >
        {" "}
        {/* Centered the text */}
        {description}
      </motion.p>
    </motion.li>
  );
};

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default Features;
