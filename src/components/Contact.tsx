"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import { fadeIn } from "@/utils/motion";

import SectionWrapper from "@/hoc/SectionWrapper";
import Header from "./ui/Header";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import grid from "@/assets/footer-grid.svg"

// import emailjs from "@emailjs/browser";

const Contact = () => {

  console.log(grid)

  const t = useTranslations("contact");

  return (
    <section className="mt-10">
      <Header text={t("heading")} />
      <div className="w-full min-h-96 absolute left-0 bottom-0">
        <img
          src={grid.src}
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>
      <div className="relative">
        <motion.div
          variants={fadeIn("", "tween", 0.1, 1.5)}
          className="flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-center ">
            {t("message1")} <span className="text-gradient">{t("message2")}</span> {t("message3")}
          </h1>
          <p className="text-white md:mt-10 my-5 text-center">
            {t("para")}
          </p>
          <a href="mailto:omr222000@gmail.com">
            <MagicButton
              title={t("talk")}
              icon={<FaLocationArrow />}
              position="left"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};


export default SectionWrapper(Contact, "contact");
