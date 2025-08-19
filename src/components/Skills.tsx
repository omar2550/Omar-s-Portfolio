"use client";
import SectionWrapper from "@/hoc/SectionWrapper";
import Header from "./ui/Header";
import { technologies } from "@/data";
import BallCanvas from "./canvas/Ball";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const Skills = () => {
  return (
    <section>
      <Header text="my skills" />
      <motion.div
        variants={fadeIn("", "tween", 0.1, 1)}
        className="mt-10 flex flex-wrap justify-center items-center gap-10"
      >
        {technologies.map((tech) => (
          <div key={tech.name} className="w-28 h-28">
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Skills, "skills");
