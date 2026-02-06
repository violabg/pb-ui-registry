"use client";

import { motion, type Variants } from "framer-motion";

type AnimationVariant =
  | "fade"
  | "slide-up"
  | "slide-left"
  | "slide-right"
  | "scale"
  | "glitch";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: AnimationVariant;
  once?: boolean;
}

const variants: Record<AnimationVariant, Variants> = {
  fade: {
    hidden: { opacity: 0, filter: "blur(8px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
  "slide-up": {
    hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  "slide-left": {
    hidden: { opacity: 0, x: 40, filter: "blur(6px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  "slide-right": {
    hidden: { opacity: 0, x: -40, filter: "blur(6px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9, filter: "blur(8px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
  },
  glitch: {
    hidden: { opacity: 0, x: -5, skewX: -5 },
    visible: { opacity: 1, x: 0, skewX: 0 },
  },
};

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  variant = "slide-up",
  once = true,
}: FadeInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger container for grid animations
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ staggerChildren: staggerDelay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
