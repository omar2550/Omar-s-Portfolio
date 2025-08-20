"use client";
import { cn } from "@/lib/utils";
import { ContainerTextFlip } from "./ui/ContainerTextFlip";
import Webdev from "./canvas/Webdev";
import { motion } from "framer-motion";
import { zoomIn } from "@/utils/motion";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative paddingX h-screen flex w-full items-center justify-center bg-bg">
      <div
        className="absolute top-0 left-0 flex h-[50rem] w-full bg-bg
         items-center justify-center"
      >
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_0.07px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_0.07px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_0.07px,transparent_1px),linear-gradient(to_bottom,#262626_0.07px,transparent_1px)]"
          )}
        />
        <div
          className="pointer-events-none absolute inset-0 flex items-center 
          justify-center bg-bg
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="relative w-[90vw] h-full z-20 flex justify-center sm:justify-between gap-y-10 items-center flex-col sm:flex-row text-center sm:text-start">
        <motion.div
          variants={zoomIn()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div>
            <h1 className="text-gradient text-3xl sm:text-[2.5rem] md:text-[4rem] font-black">
              You Dream, <br />I{" "}
              <ContainerTextFlip textClassName="text-primary text-3xl sm:text-[2.5rem] md:text-[4rem]" />
            </h1>
            <p className="text-sm sm:text-[18px] md:text-xl text-primary mt-2 sm:w-sm md:w-md">
              Hi, I’m Omar
              <br />A Front-End Developer with a passion for creating beautiful
              and functional user interfaces.
            </p>
          </div>
          <div className="flex justify-center sm:justify-start items-center mt-7 gap-5 flex-col sm:flex-row">
            <Link href="#about">
              <button className="py-3 px-5 text-sm sm:text-[16px] bg-primary-light text-white font-bold duration-400 hover:bg-primary hover:scale-[1.1] border-none outline-none rounded-md cursor-pointer">
                Get Started
              </button>
            </Link>
            <a
              href="https://github.com/omar2550"
              target="_blank"
              className="text-sm sm:text-[16px] text-primary flex gap-2"
            >
              My Github <FaLocationArrow />
            </a>
          </div>
        </motion.div>
        <div className="hidden sm:block w-full h-[200px] md:h-[300px]">
          <Webdev />
        </div>
      </div>
    </section>
  );
};

export default Hero;
