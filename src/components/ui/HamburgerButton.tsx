"use client";

import { ReactNode, useState, useRef, useEffect, RefObject } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HamburgerButton({
  children,
  exceptionRefs = [],
}: {
  children: ReactNode;
  exceptionRefs?: RefObject<HTMLElement>[];
}) {
  const [open, setOpen] = useState(false);

  const openRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleToggle = (e: MouseEvent | TouchEvent | PointerEvent) => {
      if (
        openRef.current &&
        !openRef.current.contains(e.target as Node) &&
        !exceptionRefs.some((ref) => ref.current.contains(e.target as Node))
      )
        setOpen(false);
    };

    document.addEventListener("pointerdown", handleToggle);

    return () => document.removeEventListener("pointerdown", handleToggle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="sm:hidden relative">
      <button
        ref={openRef}
        onClick={() => setOpen((prev) => !prev)}
        className="relative w-10 h-10 flex items-center justify-center cursor-pointer"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <motion.span
          initial={false}
          animate={open ? "open" : "closed"}
          variants={{
            closed: { rotate: 0, y: -6 },
            open: { rotate: 45, y: 0 },
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute w-6 h-0.5 bg-text-secondary rounded"
        />

        <motion.span
          initial={false}
          animate={open ? "open" : "closed"}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute w-6 h-0.5 bg-text-secondary rounded"
        />

        <motion.span
          initial={false}
          animate={open ? "open" : "closed"}
          variants={{
            closed: { rotate: 0, y: 6 },
            open: { rotate: -45, y: 0 },
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute w-6 h-0.5 bg-text-secondary rounded"
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
