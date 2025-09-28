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
      <div className="mt-10 flex flex-col sm:flex-row justify-start sm:justify-between items-center gap-y-10 gap-x-3">
        <motion.p
          variants={fadeIn("right", "tween", 0.1, 1)}
          className="text-text text-sm sm:text-[18px] md:text-xl max-w-xl leading-[30px]"
        >
          {t("intro")}
        </motion.p>
        <motion.div variants={fadeIn("left", "tween", 0.1, 1.5)}>
          <Image
            src={developer}
            width={300}
            height={300}
            alt="developer"
            style={{ height: "auto", width: "100%" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
