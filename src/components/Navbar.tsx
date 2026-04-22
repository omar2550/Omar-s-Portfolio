"use client";
import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import HamburgerButton from "./ui/HamburgerButton";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const Navbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  const themeHamburRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const t = useTranslations("nav");

  const locale = useLocale();
  const router = useRouter();
  const pathName = usePathname();

  const changeLanguage = (newLang: string) => {
    if (newLang !== locale) {
      const segments = pathName.split("/");
      segments[1] = newLang;

      const newPath = segments.join("/") || "/";
      router.replace(newPath);
      router.refresh();
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        dir="ltr"
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className={cn(
          `${visible ? "fixed top-0 inset-x-0" : "absolute top-0 left-0"
          } flex items-center justify-between w-full bg-gradient/95 backdrop-blur-xl border-b border-primary/15 shadow-[0px_8px_30px_-14px_rgba(14,116,144,0.45)] z-[5000] px-3 py-4`,
          className
        )}
      >
        <Link href="#home">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-gradient">
            OMAR
          </h1>
        </Link>

        {/* Navbar For Large Devices */}

        <div className="hidden md:flex items-center justify-center gap-1" dir="ltr">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative text-primary items-center flex space-x-1 duration-300 hover:text-primary-light hover:bg-primary/10 px-2 py-1.5 rounded-xl text-sm"
              )}
            >
              {t(navItem.name)}
            </Link>
          ))}
          <div>
            {locale === "ar" ? (
              <button
                className="text-primary items-center flex space-x-1 duration-300 hover:text-primary-light hover:bg-primary/10 text-sm px-2 py-1.5 rounded-xl cursor-pointer border-none outline-none"
                onClick={() => changeLanguage("en")}
              >
                EN
              </button>
            ) : (
              <button
                className="text-primary items-center flex space-x-1 duration-300 hover:text-primary-light hover:bg-primary/10 text-sm px-2 py-1.5 rounded-xl cursor-pointer border-none outline-none"
                onClick={() => changeLanguage("ar")}
              >
                AR
              </button>
            )}
          </div>
          <Link href="#contact">
            <span className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-md shadow-primary/30 hover:bg-primary-dark ml-1">
              {t("cta")}
            </span>
          </Link>
        </div>

        {/* Navbar For mobiles */}

        <HamburgerButton
          exceptionRefs={[themeHamburRef as React.RefObject<HTMLElement>]}
        >
          <div
            className={`flex justify-start flex-col bg-gradient border border-primary/20 rounded-xl shadow-xl absolute p-2 top-10 right-0 min-w-44`}
          >
            {navItems.map((navItem, idx) => (
              <a
                key={`link=${idx}`}
                href={navItem.link}
                className={
                  "relative text-primary items-center flex space-x-1 transition-all duration-300 hover:text-primary-light hover:translate-x-1 p-3 rounded-lg"
                }
              >
                <span className="text-sm">{t(navItem.name)}</span>
              </a>
            ))}
            <div>
              {locale === "ar" ? (
                <button
                  className="text-primary items-center flex space-x-1 duration-300 hover:text-primary-light hover:bg-primary/10 px-3 py-2 rounded-xl cursor-pointer border-none outline-none"
                  onClick={() => changeLanguage("en")}
                >
                  EN
                </button>
              ) : (
                <button
                  className="text-primary items-center flex space-x-1 duration-300 hover:text-primary-light hover:bg-primary/10 px-3 py-2 rounded-xl cursor-pointer border-none outline-none"
                  onClick={() => changeLanguage("ar")}
                >
                  AR
                </button>
              )}
            </div>
            <Link href="#contact" className="mx-3 mt-1 mb-2">
              <span className="inline-flex justify-center w-full bg-primary text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-md shadow-primary/30">
                {t("cta")}
              </span>
            </Link>
          </div>
        </HamburgerButton>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
