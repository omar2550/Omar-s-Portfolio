"use client";
import Header from "./ui/Header";
import { HoverEffect } from "./ui/HoverEffect";
import { projects } from "@/data";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="padding max-w-7xl mx-auto relative z-0" id="project">
      <Header text="Projects" />
      <motion.div
        variants={fadeIn("", "tween", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-10"
      >
        <HoverEffect items={projects} />
      </motion.div>
    </section>
  );
};

export default Projects;
