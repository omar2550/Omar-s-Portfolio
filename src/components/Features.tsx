"use client";
import { motion } from "framer-motion";
import Header from "./ui/Header";
import { fadeIn } from "@/utils/motion";
import { Button } from "./ui/Button";
import { features } from "@/data";
import SectionWrapper from "@/hoc/SectionWrapper";
import { useTranslations } from "next-intl";

const Features = () => {
  const t = useTranslations("features");

  return (
    <section>
      <Header text={t("heading")} />
      <motion.div
        variants={fadeIn("", "tween", 0.1, 1.5)}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10"
      >
        {features.map(({ Icon }, i) => (
          <Button
            key={`feat-${i}`}
            className="border-slate-800"
            duration={Math.floor(Math.random() * 10000 + 10000)}
          >
            <div
              className="flex flex-row items-center p-3 py-6 md:p-5 lg:p-10 gap-2
            "
            >
              <Icon className="w-25 h-25" />
              <div className="lg:ms-5">
                <h4 className="text-primary text-lg lg:text-xl">{t.raw(`list`)[i]}</h4>
              </div>
            </div>
          </Button>
        ))}
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Features, "features");
