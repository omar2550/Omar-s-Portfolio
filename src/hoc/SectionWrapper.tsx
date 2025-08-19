import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { ComponentType } from "react";

const SectionWrapper = (Component: ComponentType, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="padding max-w-7xl mx-auto relative z-0"
      >
        <span id={idName} className="hash-span">
          <Component />
        </span>
      </motion.section>
    );
  };

export default SectionWrapper;
