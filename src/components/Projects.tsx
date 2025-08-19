"use client";
import SectionWrapper from "@/hoc/SectionWrapper";
import Header from "./ui/Header";
import { HoverEffect } from "./ui/HoverEffect";
import { projects } from "@/data";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section>
      <Header text="Projects" />
      <motion.div variants={fadeIn("", "tween", 0.1, 1)} className="mt-10">
        <HoverEffect items={projects} />
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Projects, "projects");
