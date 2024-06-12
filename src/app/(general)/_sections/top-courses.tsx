"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TopCourses = () => {
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

    return (
        <section
            id="about"
            ref={ref}
            className=" bg-white md:gap-16 gap-10 flex flex-col items-center justify-start md:py-20 py-10"
        >
            <motion.h1
                className="text-3xl md:text-5xl font-bold mt-8 flex space-x-2"
                initial="hidden"
                animate={controls}
                variants={containerVariants}
            >
                Top Courses
            </motion.h1>
            <motion.div
                id="content"
                className="flex flex-col md:flex-row  w-full gap-10 sm:px-44 px-4"
                initial="hidden"
                animate={controls}
                variants={containerVariants}
            >
                <motion.div
                    id="top-course"
                    className="relative bg-black-200 w-full md:w-1/2 h-60 md:h-[26rem] flex justify-end items-end"
                    variants={itemVariants}
                >
                    <motion.img
                        src="/assets/course-thumbnail.png" // Replace with your image URL
                        alt="Top Course"
                        className="absolute inset-0 w-full h-full object-cover shadow-md rounded-lg"
                        initial="hidden"
                        animate={controls}
                        variants={imageVariants}
                    />
                    <motion.div
                        id="learn-button"
                        className="relative m-4 md:m-10 text-white z-10 shadow-xl"
                        variants={itemVariants}
                    >
                        <Button>Let&apos;s Learn</Button>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="flex flex-col gap-6 w-full md:w-1/2"
                    variants={containerVariants}
                >
                    <p
                        id="course-topic"
                        className="text-2xl md:text-3xl font-semibold"
                    >
                        Next.js 14 Full Guide
                    </p>

                    <motion.path
                        id="course-description"
                        className=" bg-white overflow-auto no-scrollbar border border-green-600 p-6 rounded-md text-xl"
                        variants={itemVariants}
                    >
                        Next.js - The Full Course provides a in-depth look into
                        the Next.js App Router first introduced in version 13.2.
                        It puts React Server Components into practice by
                        building a full-stack application from scratch with
                        PostgreSQL and Prisma.
                    </motion.path>
                    <motion.div
                        id="reviews"
                        className=" bg-white h-40 md:h-[10rem] w-full p-5 overflow-auto border border-green-600 no-scrollbar rounded-lg"
                        variants={itemVariants}
                    >
                        <motion.div
                            id="account"
                            className="flex items-center mb-2 bg-slate-200 p-2 rounded-lg"
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
                            <p className="text-sm md:text-base text-black">
                                Top Student Name
                            </p>
                        </motion.div>
                        <motion.p
                            className="p-3 text-sm md:text-base"
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            variants={itemVariants}
                        >
                            BRO I CANT MAKE LANDING PAGE IN SO MUCH LOW TIME AND
                            I HAVE SO MANY THINGS YOU GUYS JUST GIVING ME MORE
                            PRESSURE. JUST KILL ME ALREADY
                        </motion.p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default TopCourses;
