"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

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
        <motion.section
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="h-max w-full bg-black-100 flex flex-col md:flex-row gap-5 items-center justify-between md:px-[15%] px-2 md:py-20 py-10"
        >
            <motion.div
                variants={textVariants}
                className="w-full md:w-5/12 flex gap-4"
            >
                <motion.div
                    variants={circleVariants}
                    className="flex flex-col justify-center items-center mt-5 md:mt-0"
                >
                    <div className="w-5 h-5 rounded-full bg-[#00af55]" />
                    <div className="w-1 h-40 sm:h-80 violet-gradient" />
                </motion.div>
                <div className="flex flex-col gap-4">
                    <h1
                        className={` text-white font-bold text-4xl md:text-6xl`}
                    >
                        Master the perfect{" "}
                        <span className="text-green-500">skill</span> and start{" "}
                        <span className="text-green-500">developing</span>
                    </h1>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={buttonVariants}
                        className="flex flex-row gap-6 mt-5 items-center"
                    >
                        <Button
                            size={"lg"}
                            className="text-white font-semibold md:text-2xl text-xl px-4 py-6"
                        >
                            Get Started
                        </Button>
                        <Link
                            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            target="_blank"
                        >
                            <Button
                                variant="outline"
                                className="text-white font-semibold md:text-2xl text-xl px-4 py-6"
                            >
                                Watch Demo
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
            <motion.div
                variants={boxVariants}
                className="relative bg-transparent w-5/12"
            >
                <Image
                    src="/books.png" // Replace with your image URL
                    alt="Top Course"
                    width={600}
                    height={600}
                />
            </motion.div>
        </motion.section>
    );
};

export default Hero;
