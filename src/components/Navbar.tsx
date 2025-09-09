"use client";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { motion as m, AnimatePresence as Animate } from "framer-motion";
import { cn } from "@/lib/utils";
import HamburgerButton from "./ui/HamburgerButton";
import Link from "next/link";

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
  const [themeMenu, setThemeMenu] = useState(false);

  const themeRef = useRef<HTMLDivElement>(null);
  const themeHamburRef = useRef<HTMLDivElement>(null);

  const applyTheme = (newTheme: string) => {
    if (newTheme === "system") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", newTheme);
    }

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (newTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      isDark
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
    }
  };

  // Handle theme menu
  useEffect(() => {
    const handleClose = (e: MouseEvent | TouchEvent | PointerEvent) => {
      if (themeRef.current && !themeRef.current.contains(e.target as Node))
        setThemeMenu(false);
    };
    document.addEventListener("pointerdown", handleClose);
    return () => document.removeEventListener("pointerdown", handleClose);
  }, []);

  // Change the theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";

    applyTheme(savedTheme);

    // on change the system settings
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem("theme")) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        e.matches
          ? document.documentElement.classList.add("dark")
          : document.documentElement.classList.remove("dark");
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

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

  return (
    <AnimatePresence mode="wait">
      <motion.div
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
          `${
            visible ? "fixed top-0 inset-x-0" : "absolute top-0 left-0"
          } flex items-center justify-between w-full bg-gradient shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] paddingX py-4`,
          className
        )}
      >
        <Link href="#home">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-gradient">
            OMAR
          </h1>
        </Link>
        <div className="hidden sm:flex items-center justify-center">
          {navItems.map((navItem, idx) => (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative text-primary items-center flex space-x-1 duration-300 hover:text-primary-light hover:bg-white/10 p-4 rounded-3xl"
              )}
            >
              <span className="text-sm">{navItem.name}</span>
            </a>
          ))}
          <div className="text-sm relative" ref={themeRef}>
            <button
              className="text-primary items-center flex space-x-1 duration-300 hover:text-primary-light hover:bg-white/10 p-4 rounded-3xl cursor-pointer border-none outline-none"
              onClick={() => setThemeMenu(!themeMenu)}
              aria-haspopup="true"
              aria-expanded={themeMenu}
            >
              Theme
            </button>
            <Animate>
              {themeMenu && (
                <m.ul
                  role="menu"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute top-7 right-0 bg-gradient p-3 space-y-2 shadow-xl text-primary"
                >
                  <li
                    role="menuitem"
                    tabIndex={0}
                    className="cursor-pointer hover:text-primary-light duration-300"
                    onClick={() => applyTheme("light")}
                  >
                    Light
                  </li>
                  <li
                    role="menuitem"
                    tabIndex={0}
                    className="cursor-pointer hover:text-primary-light duration-300"
                    onClick={() => applyTheme("system")}
                  >
                    System
                  </li>
                  <li
                    role="menuitem"
                    tabIndex={0}
                    className="cursor-pointer hover:text-primary-light duration-300"
                    onClick={() => applyTheme("dark")}
                  >
                    Dark
                  </li>
                </m.ul>
              )}
            </Animate>
          </div>
        </div>
        <HamburgerButton
          exceptionRefs={[themeHamburRef as React.RefObject<HTMLElement>]}
        >
          <div className="flex justify-start flex-col bg-gradient shadow-xl absolute top-10 right-0">
            {navItems.map((navItem, idx) => (
              <a
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative text-primary items-center flex space-x-1 duration-300 hover:text-primary-light hover:bg-white/10 p-3 md:p-6 rounded-3xl"
                )}
              >
                <span className="text-sm">{navItem.name}</span>
              </a>
            ))}
            <div className="text-sm relative" ref={themeHamburRef}>
              <button
                className="text-primary items-center flex space-x-1 duration-300 hover:text-primary-light cursor-pointer hover:bg-white/10 p-3 rounded-3xl border-none outline-none"
                onClick={() => setThemeMenu(!themeMenu)}
                aria-haspopup="true"
                aria-expanded={themeMenu}
              >
                Theme
              </button>
              <Animate>
                {themeMenu && (
                  <m.ul
                    role="menu"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute top-0 left-[-90%] -translate-x-1/2 bg-gradient p-3 space-y-2 shadow-xl text-primary"
                  >
                    <li
                      role="menuitem"
                      tabIndex={0}
                      className="cursor-pointer hover:text-primary-light duration-300"
                      onClick={() => applyTheme("light")}
                    >
                      Light
                    </li>
                    <li
                      role="menuitem"
                      tabIndex={0}
                      className="cursor-pointer hover:text-primary-light duration-300"
                      onClick={() => applyTheme("system")}
                    >
                      System
                    </li>
                    <li
                      role="menuitem"
                      tabIndex={0}
                      className="cursor-pointer hover:text-primary-light duration-300"
                      onClick={() => applyTheme("dark")}
                    >
                      Dark
                    </li>
                  </m.ul>
                )}
              </Animate>
            </div>
          </div>
        </HamburgerButton>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
