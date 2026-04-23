"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import { fadeIn } from "@/utils/motion";

import SectionWrapper from "@/hoc/SectionWrapper";
import Header from "./ui/Header";
import MagicButton from "./ui/MagicButton";
import { FaGithub, FaLinkedin, FaLocationArrow, FaWhatsapp } from "react-icons/fa6";
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
      <div className="flex mt-10 flex-col gap-2 md:flex-row md:gap-0 justify-between items-center">
        <p className="text-sm md:text-base font-light md:font-normal">
          Copyright © {new Date().getFullYear()} Omar
        </p>

        <div className="flex items-center gap-6 md:gap-3">
          <a
            href="https://github.com/omar2550"
            target="_blank"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <FaGithub width={20} height={20} />
          </a>
          <a
            href="https://wa.me/201152039882"
            target="_blank"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <FaWhatsapp width={20} height={20} />
          </a>
          <a
            href="www.linkedin.com/in/omar-hassein-b29671351"
            target="_blank"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <FaLinkedin width={20} height={20} />
          </a>
        </div>
      </div>
    </section>
  );
};


export default SectionWrapper(Contact, "contact");
