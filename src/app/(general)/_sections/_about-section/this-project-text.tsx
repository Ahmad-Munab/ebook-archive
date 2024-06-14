import React from "react";
import { styles } from "../../../style";

const ThisProjectText = () => {
  return (
    <div className="h-max w-full bg-black-100 flex flex-col md:flex-row gap-5 items-center justify-center md:px-[15%] px-2 md:py-20 py-10">
      <h3 className={`${styles.sectionSubText} text-center`}>
        This project aims to enhance our team&apos;s collaboration skills and
        explore cutting-edge technologies following industry best practices.
      </h3>
    </div>
  );
};

export default ThisProjectText;
