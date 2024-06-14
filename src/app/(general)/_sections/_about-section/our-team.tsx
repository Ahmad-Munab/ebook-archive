"use client";

import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../../style";
import { fadeIn, textVariant } from "../../../../utils/motion";
import { testimonials } from "../../constants";

type FeedbackCardProps = {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
};
const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}: FeedbackCardProps) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full text-center mx-auto"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
      <div className="mt-7 flex justify-center items-center gap-1">
        <div className="flex-1 flex flex-col text-center">
          <p className="text-white font-medium text-[16px] items-center justify-center flex flex-col">
            <img
              src={image}
              alt={`feedback_by-${name}`}
              className="w-20 h-20 rounded-full object-cover mb-[10%]"
            />
            <span>
              <span className="blue-text-gradient">@</span> {name}
            </span>
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const OurTeam = () => {
  return (
    <div className={` bg-black-100 text-center`}>
      <div
        className={`bg-black-100 rounded-2xl ${styles.padding} min-h-[300px] mx-auto`}
      >
        <motion.div variants={textVariant()} className="mx-auto">
          <h2 className={`${styles.sectionHeadText} text-primary`}>Our Team</h2>
        </motion.div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
