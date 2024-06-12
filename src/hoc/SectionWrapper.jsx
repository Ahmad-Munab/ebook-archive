import { motion } from "framer-motion";

import { styles } from "../app";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-100xl mx-auto relative z-0`}
      >
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
