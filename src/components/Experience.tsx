"use client";

import SectionWrapper from "@/hoc/SectionWrapper";
import Header from "./ui/Header";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { useTranslations } from "next-intl";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa6";

type Metric = {
  value: string;
  label: string;
};

type Phase = {
  title: string;
  description: string;
};

const phaseIcons = [FaCode, FaLaptopCode, FaRocket];

const Experience = () => {
  const t = useTranslations("journey");
  const metrics = t.raw("metrics") as Metric[];
  const phases = t.raw("phases") as Phase[];

  return (
    <section>
      <Header text={t("heading")} />

      <motion.p
        variants={fadeIn("up", "tween", 0.1, 1)}
        className="text-center text-text max-w-3xl mx-auto -mt-14 mb-10 leading-relaxed"
      >
        {t("subheading")}
      </motion.p>

      <motion.div
        variants={fadeIn("", "tween", 0.2, 1)}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
        {metrics.map((metric, idx) => (
          <article
            key={`metric-${idx}`}
            className="bg-gradient border border-primary/20 rounded-2xl px-6 py-7 shadow-lg text-center"
          >
            <h3 className="text-3xl md:text-4xl font-black text-gradient">
              {metric.value}
            </h3>
            <p className="text-text mt-2">{metric.label}</p>
          </article>
        ))}
      </motion.div>

      <motion.div
        variants={fadeIn("", "tween", 0.2, 1.2)}
        className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5"
      >
        {phases.map((phase, idx) => {
          const Icon = phaseIcons[idx] ?? FaCode;

          return (
            <article
              key={`phase-${idx}`}
              className="relative bg-gradient border border-primary/15 rounded-2xl p-6 shadow-xl hover:-translate-y-1 transition-transform"
            >
              <span className="absolute top-4 right-4 text-xs text-primary/70 font-semibold">
                0{idx + 1}
              </span>
              <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center text-xl mb-4">
                <Icon />
              </div>
              <h4 className="text-xl font-bold text-text-secondary mb-2">
                {phase.title}
              </h4>
              <p className="text-text leading-relaxed">{phase.description}</p>
            </article>
          );
        })}
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Experience, "journey");
