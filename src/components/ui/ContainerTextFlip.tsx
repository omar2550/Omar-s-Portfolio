"use client";

import React, { useState, useEffect, useId } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ContainerTextFlipProps {
  words?: string[];
  interval?: number;
  className?: string;
  textClassName?: string;
  animationDuration?: number;
}

export function ContainerTextFlip({
  words = ["Plan", "Design", "Build"],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
}: ContainerTextFlipProps) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const textRef = React.useRef<HTMLDivElement>(null);

  // Update the width based on the current word
  const updateWidthForWord = () => {
    if (textRef.current) {
      const textWidth = textRef.current.scrollWidth + 30; // add padding
      setWidth(textWidth);
    }
  };

  useEffect(() => {
    updateWidthForWord();
  }, [currentWordIndex]);

  // Cycle through words at a set interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <motion.div
      animate={{ width }}
      transition={{ duration: animationDuration / 2000 }}
      className={cn(
        "relative inline-block rounded-lg pt-2 pb-3 text-center text-4xl font-bold md:text-6xl z-30",
        className
      )}
      key={words[currentWordIndex]}
    >
      <motion.div
        transition={{ duration: animationDuration / 1000, ease: "easeInOut" }}
        className={cn(
          "inline-block antialiased [text-rendering:geometricPrecision] [transform:translateZ(0)]",
          textClassName
        )}
        ref={textRef}
        layoutId={`word-div-${words[currentWordIndex]}-${id}`}
      >
        <motion.div className="inline-block">
          {words[currentWordIndex].split("").map((letter, index) => (
            <motion.span
              key={index}
              className="antialiased [text-rendering:geometricPrecision] [transform:translateZ(0)]"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: index * 0.02,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
