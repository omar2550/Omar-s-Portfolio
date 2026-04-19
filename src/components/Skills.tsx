"use client";
import SectionWrapper from "@/hoc/SectionWrapper";
import Header from "./ui/Header";
import { technologies } from "@/data";
import BallCanvas from "./canvas/Ball";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { useTranslations } from "next-intl";

const Skills = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(
      typeof window !== "undefined" ? window.innerWidth <= 768 : true
    );
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const t = useTranslations("skills");

  return (
    <section>
      <Header text={t("heading")} />
      <motion.div
        variants={fadeIn("", "tween", 0.1, 1)}
        className="mt-10 flex flex-wrap justify-center items-center gap-10"
      >
        {!isMobile &&
          technologies.map((tech) => (
            <div key={tech.name} className="w-28 h-28 relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <BallCanvas icon={tech.icon.src} />

              {/* Tooltip */}
              <AnimatePresence>
                {(
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    whileHover={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                    transition={{ duration: 0.5 }}

                    className="absolute inset-0 w-full"
                  >
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gradient text-white px-2 py-1 rounded text-sm whitespace-nowrap pointer-events-none">
                      {tech.name}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-primary/15" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        {isMobile &&
          technologies.map((tech, idx) => (
            <TechCard key={tech.name} icon={tech.icon.src} name={tech.name} idx={idx} />
          ))}
      </motion.div>
    </section>
  );
};

type TechCardProps = {
  idx: number;
  name: string;
  icon: string;
};

const TechCard = ({ icon, name, idx }: TechCardProps) => {
  return (
    <Tilt
      className="w-[250px]"
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
    >
      <motion.div
        variants={fadeIn("right", "spring", idx * 0.5, 0.75)}
        className="w-full bg-gradient p-[1px] rounded-[20px] shadow-xl flex flex-col justify-center items-center py-5 px-12"
      >
        <Image src={icon} alt={name} width={200} height={200} />
        <p className="text-sm text-white">{name}</p>
      </motion.div>
    </Tilt>
  );
};

export default SectionWrapper(Skills, "skills");
