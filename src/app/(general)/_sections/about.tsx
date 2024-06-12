"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const words = [
    { text: "Our", color: "" },
    { text: "Top", color: "text-secondary" },
    { text: "Courses", color: "text-primary" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen bg-black-100 flex flex-col items-center justify-start"
    >
      <motion.h1
        className="text-3xl md:text-5xl mt-8 underline flex space-x-2"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className={word.color}
            variants={itemVariants}
          >
            {word.text}
          </motion.span>
        ))}
      </motion.h1>
      <motion.div
        id="content"
        className="flex flex-col md:flex-row w-full mt-10"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.div
          id="top-course"
          className="relative bg-black-200 w-full md:w-1/2 h-60 md:h-[26rem] m-5 md:m-10 flex justify-end items-end"
          variants={itemVariants}
        >
          <motion.img
            src="https://via.placeholder.com/800x400" // Replace with your image URL
            alt="Top Course"
            className="absolute inset-0 w-full h-full object-cover"
            initial="hidden"
            animate={controls}
            variants={imageVariants}
          />
          <motion.div
            id="learn-button"
            className="relative m-4 md:m-10 text-white z-10"
            variants={itemVariants}
          >
            <Button>Let&apos;s Learn</Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-col w-full md:w-1/2 m-5 md:m-10"
          variants={containerVariants}
        >
          <motion.div
            id="course-details"
            className="h-40 md:h-[15rem] flex flex-col items-center justify-start mb-5"
            variants={itemVariants}
          >
            <p id="course-topic" className="text-lg md:text-xl mt-2">
              Course Topic
            </p>
            <motion.div
              id="course-description"
              className=" bg-slate-950 w-full h-full p-3 overflow-auto"
              variants={itemVariants}
            >
              <p className="text-white">
                Course Description: Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nullam convallis ligula nec vehicula tempus.
                Proin dictum semper neque, in hendrerit magna ultricies et.
                Suspendisse potenti. Curabitur vehicula accumsan erat, a
                facilisis arcu. Nullam sed lorem id purus hendrerit luctus.
                Quisque et ex nec justo auctor fermentum et non urna. Fusce at
                bibendum erat. Nullam egestas vestibulum lorem, sed interdum est
                fermentum et. Vivamus cursus convallis nunc vel volutpat. Duis
                vestibulum malesuada sapien, eget dignissim tortor gravida nec.
                Praesent nec convallis erat. Curabitur vehicula consectetur
                ligula, at cursus lorem interdum sed. Etiam ut malesuada nisl.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            id="reviews"
            className=" bg-slate-950 h-40 md:h-[10rem] w-full p-3 overflow-auto"
            variants={itemVariants}
          >
            <motion.div
              id="account"
              className="flex items-center mb-2 bg-slate-950 p-2"
              variants={itemVariants}
            >
              <motion.div
                id="pfp"
                className="mr-2 bg-purple-500 h-10 w-10 rounded-full flex items-center justify-center text-white"
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.5, delay: 0.2 }}
                variants={imageVariants}
              >
                PFP
              </motion.div>
              <div id="name">
                <p className="text-sm md:text-base">Top Student Name</p>
              </div>
            </motion.div>
            <motion.div
              id="review"
              className="p-3"
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={itemVariants}
            >
              <p className="text-sm md:text-base">
                BRO I CANT MAKE LANDING PAGE IN SO MUCH LOW TIME AND I HAVE SO
                MANY THINGS YOU GUYS JUST GIVING ME MORE PRESSURE. JUST KILL ME
                ALREADY
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
