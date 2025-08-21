"use client";
import { motion } from "framer-motion";
import Header from "./ui/Header";
import { fadeIn } from "@/utils/motion";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";
import { features } from "@/data";
import SectionWrapper from "@/hoc/SectionWrapper";

const Features = () => {
  return (
    <section>
      <Header text="Features" />
      <motion.div
        variants={fadeIn("", "tween", 0.1, 1.5)}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10"
      >
        {features.map(({ feat, Icon }, i) => (
          <HoverBorderGradient
            key={`feat-${i}`}
            containerClassName="rounded-full"
            className="flex justify-center items-center flex-col sm:flex-row sm:py-10 gap-3 text-center sm:text-start"
          >
            <div className="text-text-secondary flex justify-center items-center text-5xl">
              <Icon />
            </div>
            <h4 className="text-primary">{feat}</h4>
          </HoverBorderGradient>
        ))}
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Features, "features");
