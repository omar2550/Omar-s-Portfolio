"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { HiExternalLink } from "react-icons/hi";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

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

  const t = useTranslations("projects");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {(hoveredIndex === idx || isMobile) && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200/80 dark:bg-slate-800/[0.85] block rounded-3xl"
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
                <a href={item?.liveLink}
                  target="_blank"
                >
                  <CardImage src={item.image} alt={item.title} />
                  <CardTitle>{t(`project${idx + 1}.title`)}</CardTitle>
                </a>
                <CardDescription>
                  {t(`project${idx + 1}.description`)}
                </CardDescription>
              </div>
              <div className="flex justify-between flex-wrap sm:flex-nowrap gap-y-3 items-center my-3">
                <Cardtechs techs={item.tech} />
                <a
                  href={item.link}
                  target="_blank"
                  className="absolute -inset-1 text-text-secondary"
                >
                  <FaGithub width={20} height={20} />
                </a>
              </div>
            </div>
          </Card>
        </div>
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
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient border border-primary/10 dark:border-white/[0.18] group-hover:border-primary/30 relative z-20 shadow-xl transition-all duration-300 group-hover:-translate-y-1",
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
  return <Image src={src} alt={alt} className="rounded-lg shadow-md" />;
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
        "text-primary text-lg font-bold tracking-wide mt-5",
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
        "mt-2 text-text tracking-wide leading-relaxed text-sm line-clamp-3",
        className
      )}
    >
      {children}
    </p>
  );
};

import { useLocale } from "next-intl";
import { FaGithub } from "react-icons/fa6";
export const Cardtechs = ({
  techs,
}: {
  techs: React.ComponentType<{ size?: number; color?: string }>[];
}) => {
  const locale = useLocale();

  return (
    <div className="flex justify-center items-center">
      {techs.map((Icon, i) => (
        <div
          key={`project-tech-${i}`}
          className="border border-white/[0.25] rounded-full w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center bg-slate-500 dark:bg-slate-800 shadow"
          style={{
            transform: `translateX(${locale === "ar" ? "" : "-"}${10 * i}px)`,
          }}
        >
          <Icon color="#FFF" size={18} />
        </div>
      ))}
    </div>
  );
};
