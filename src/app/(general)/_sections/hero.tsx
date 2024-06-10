import React from "react";
import { styles } from "../../style";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../../hoc";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-blue-200 flex items-center justify-center"
    >
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className=" text-[#915eff]">Amaan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop front end websites <br className="sm:block hidden" /> and
            I'm currently learning back end, <br className="sm:block hidden" />{" "}
            Computer Science and more programming stuff
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#00af55]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
