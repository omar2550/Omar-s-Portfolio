"use client";
import SectionWrapper from "@/hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";
import Header from "./ui/Header";
import developer from "@/assets/work-steps.png";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("aboutMe");

  return (
    <section>
      <Header text={t("heading")} />
      <div className="flex flex-col md:flex-row justify-start sm:justify-between items-center gap-y-10 gap-x-6">
        <motion.p
          variants={fadeIn("right", "tween", 0.1, 1)}
          className="text-text text-sm md:text-[18px] md:text-xl md:w-1/2 leading-[30px] bg-gradient border border-primary/15 rounded-2xl p-6 shadow-lg"
        >
          {t("intro")}
        </motion.p>
        <motion.div variants={fadeIn("left", "tween", 0.1, 1.5)}
        >
          <motion.div
            animate={{ y: [0, -20] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            <Image
              src={developer}
              width={340}
              height={300}
              alt="developer"
              style={{ height: "auto", width: "100%" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
