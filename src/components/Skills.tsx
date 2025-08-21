"use client";
import SectionWrapper from "@/hoc/SectionWrapper";
import Header from "./ui/Header";
import { technologies } from "@/data";
import BallCanvas from "./canvas/Ball";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(
      typeof window !== "undefined" ? window.innerWidth <= 768 : true
    );
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      <Header text="my skills" />
      <motion.div
        variants={fadeIn("", "tween", 0.1, 1)}
        className="mt-10 flex flex-wrap justify-center items-center gap-10"
      >
        {!isMobile &&
          technologies.map((tech) => (
            <div key={tech.name} className="w-28 h-28">
              <BallCanvas icon={tech.icon.src} />
            </div>
          ))}
        {isMobile &&
          technologies.map((tech, idx) => (
            <div key={tech.name}>
              <TechCard icon={tech.icon.src} name={tech.name} idx={idx} />
            </div>
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
        className="w-full bg-gradient p-[1px] rounded-[20px] shadow-xl flex justify-center items-center py-5 px-12"
      >
        <Image src={icon} alt={name} width={200} height={200} />
      </motion.div>
    </Tilt>
  );
};

export default SectionWrapper(Skills, "skills");
