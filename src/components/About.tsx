"use client";
import SectionWrapper from "@/hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";
import Header from "./ui/Header";
import developer from "@/assets/work-steps.png";

const About = () => {
  return (
    <section>
      <Header text="about me" />
      <div className="mt-10 flex flex-col sm:flex-row justify-start sm:justify-between items-center gap-y-10 gap-x-3">
        <motion.p
          variants={fadeIn("right", "tween", 0.1, 1)}
          className="text-text text-sm sm:text-[18px] md:text-xl max-w-xl leading-[30px]"
        >
          I&apos;m Omar Hassein, a second-year Computer Science student at Ain
          Shams University. <br />
          I&apos;m a front-end developer passionate about building interactive
          and visually appealing web applications. I enjoy learning new
          technologies and continuously improving my skills in React, Next.js,
          TypeScript, and Tailwind CSS. Recently, I’ve also explored libraries
          like Three.js and Framer Motion to create more dynamic user
          experiences. My goal is to design user-friendly interfaces and
          contribute to impactful projects as I grow in my development journey.
        </motion.p>
        <motion.div variants={fadeIn("left", "tween", 0.1, 1)}>
          <Image src={developer} width={300} height={300} alt="developer" />
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
