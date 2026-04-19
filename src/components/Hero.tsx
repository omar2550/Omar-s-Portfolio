"use client";
import { cn } from "@/lib/utils";
import { ContainerTextFlip } from "./ui/ContainerTextFlip";
import Webdev from "./canvas/Webdev";
import { motion } from "framer-motion";
import { zoomIn } from "@/utils/motion";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("hero");

  return (
    <section
      id="home"
      className="relative paddingX min-h-screen flex w-full items-center justify-center bg-bg pt-24 md:pt-20"
    >
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 w-[40vw] h-[40vw] rounded-full bg-accent/15 blur-3xl" />

      {/* Grid Background */}
      <div
        className="absolute top-0 left-0 flex h-[50rem] w-full bg-bg
         items-center justify-center"
      >
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:36px_36px]",
            "[background-image:linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,rgba(51,65,85,0.32)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,65,85,0.32)_1px,transparent_1px)]"
          )}
        />
        <div
          className="pointer-events-none absolute inset-0 flex items-center
          justify-center bg-bg
          [mask-image:radial-gradient(ellipse_at_center,transparent_18%,black)]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto w-full h-full z-20 flex justify-center md:justify-between gap-y-10 items-center flex-col md:flex-row text-center md:text-start">
        <motion.div
          variants={zoomIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-xl"
        >
          <div>
            <h1 className="block md:hidden text-gradient text-3xl font-black leading-tight">
              {t("title1")} <br /> {t("title2")}
            </h1>
            <h1 className="hidden md:block text-gradient text-3xl md:text-[3rem] font-black leading-tight">
              {t("subtitle1")} <br />
              {t("subtitle2")}{" "}
              <ContainerTextFlip
                words={[t("word1"), t("word2"), t("word3")]}
                textClassName="text-primary text-3xl md:text-[3rem]"
              />
            </h1>
            <p className="text-md md:text-[18px] md:text-xl text-primary mt-4 md:w-md leading-relaxed">
              {t("introHeader")}
              <br />
              {t("introDesc")}
            </p>
          </div>
          <div className="flex justify-center md:justify-start items-center mt-8 gap-4 flex-col md:flex-row">
            <Link href="#projects">
              <button className="py-3 px-6 text-md md:text-[16px] bg-primary text-white font-bold duration-300 hover:bg-primary-dark hover:-translate-y-0.5 border-none outline-none rounded-xl cursor-pointer shadow-lg shadow-primary/30">
                {t("getStarted")}
              </button>
            </Link>
            <a
              href="/cv.pdf"
              download={true}
              className="text-md md:text-[16px] text-primary flex gap-2 items-center py-2 px-4 rounded-xl border border-primary/20 hover:bg-primary/10 transition-colors"
            >
              {t("myCV")} <FaDownload />
            </a>
          </div>
        </motion.div>
        <div className="hidden md:block w-full h-[260px] md:h-[360px] lg:h-[420px]">
          <Webdev />
        </div>
      </div>
    </section>
  );
};

export default Hero;
