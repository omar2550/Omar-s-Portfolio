import { SparklesCore } from "./Sparkles";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";

const Header = ({ text }: { text: string }) => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <h1 className="text-gradient text-3xl sm:text-[2.5rem] md:text-[4rem] text-center font-black uppercase">
          {text}
        </h1>
        <div className="w-full h-40 relative mx-auto">
          {/* Gradients */}
          <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-1/2 -translate-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-1/2 -translate-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1000}
            className="w-full h-full"
            particleColor="#3A3A85"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-bg [mask-image:radial-gradient(350px_200px_at_top,transparent_10%,white)]"></div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
