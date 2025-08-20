"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { HiExternalLink } from "react-icons/hi";

import React, { useEffect, useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    liveLink: string;
    image: StaticImageData;
    tech: React.ComponentType<{ size?: number; color?: string }>[];
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-3",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          target="_blank"
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {(hoveredIndex === idx || isMobile) && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="flex justify-between flex-col w-full h-full">
              <div>
                <CardImage src={item.image} alt={item.title} />
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </div>
              <div className="flex justify-between flex-wrap sm:flex-nowrap gap-y-3 items-center my-3">
                <Cardtechs techs={item.tech} />
                <button
                  className="flex items-center gap-1.5 text-sm text-text-secondary bg-transparent border-none outline-none"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(item.liveLink, "_blank", "noopener,noreferrer");
                  }}
                >
                  <p className="line-clamp-1">Check Live Server</p>
                  <HiExternalLink />
                </button>
              </div>
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient border border-transparent dark:border-white/[0.2] group-hover:border-bg relative z-20 shadow-xl",
        className
      )}
    >
      <div className="relative z-50 h-full">{children}</div>
    </div>
  );
};
export const CardImage = ({
  src,
  alt,
}: {
  src: StaticImageData;
  alt: string;
}) => {
  return <Image src={src} alt={alt} className="rounded-lg" />;
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h2
      className={cn(
        "text-primary text-lg font-bold tracking-wide mt-6",
        className
      )}
    >
      {children}
    </h2>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 text-text tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
export const Cardtechs = ({
  techs,
}: {
  techs: React.ComponentType<{ size?: number; color?: string }>[];
}) => {
  return (
    <div className="flex justify-center items-center">
      {techs.map((Icon, i) => (
        <div
          key={`project-tech-${i}`}
          className="border border-white/[0.2] rounded-full w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center bg-slate-400 dark:bg-slate-800"
          style={{
            transform: `translateX(-${10 * i}px)`,
          }}
        >
          <Icon color="#FFF" size={18} />
        </div>
      ))}
    </div>
  );
};
