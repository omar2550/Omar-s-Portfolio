"use client";
import Header from "./ui/Header";
import { HoverEffect } from "./ui/HoverEffect";
import { projects } from "@/data";
import SectionWrapper from "@/hoc/SectionWrapper";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations("projects");

  return (
    <section className="padding max-w-7xl mx-auto relative z-0">
      <Header text={t("heading")} />
      <motion.div variants={fadeIn("", "tween", 0.1, 1.5)} className="mt-10">
        <HoverEffect items={projects} />
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Projects, "projects");
