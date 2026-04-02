"use client";

import { motion, Variants } from "framer-motion";
import { type ReactNode } from "react";

export type RevealVariant = "up" | "down" | "left" | "right" | "scale" | "blur";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number; // in milliseconds
  className?: string;
  variant?: RevealVariant;
  duration?: number;
  initialOffset?: number;
  blur?: boolean;
}

const getVariants = (variant: RevealVariant, offset: number, blur: boolean): Variants => {
  const initialBlur = blur ? "12px" : "0px";
  
  switch (variant) {
    case "up":
      return {
        hidden: { opacity: 0, y: offset, filter: `blur(${initialBlur})` },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      };
    case "down":
      return {
        hidden: { opacity: 0, y: -offset, filter: `blur(${initialBlur})` },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      };
    case "left":
      return {
        hidden: { opacity: 0, x: offset, filter: `blur(${initialBlur})` },
        visible: { opacity: 1, x: 0, filter: "blur(0px)" },
      };
    case "right":
      return {
        hidden: { opacity: 0, x: -offset, filter: `blur(${initialBlur})` },
        visible: { opacity: 1, x: 0, filter: "blur(0px)" },
      };
    case "scale":
      return {
        hidden: { opacity: 0, scale: 0.85, filter: `blur(${initialBlur})` },
        visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
      };
    case "blur":
      return {
        hidden: { opacity: 0, filter: `blur(${initialBlur})` },
        visible: { opacity: 1, filter: "blur(0px)" },
      };
    default:
      return {
        hidden: { opacity: 0, y: offset },
        visible: { opacity: 1, y: 0 },
      };
  }
};

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  className = "",
  variant = "up",
  duration = 0.8,
  initialOffset = 25,
  blur = false
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      variants={getVariants(variant, initialOffset, blur)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        ease: [0.22, 1, 0.36, 1],
        delay: delay / 1000,
      }}
    >
      {children}
    </motion.div>
  );
}

// ----------------------------------------------------
// NATIVE STAGGER GROUP
// ----------------------------------------------------

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number; // fractional seconds
  delayChildren?: number; // fractional seconds
}

export function StaggerReveal({ 
  children, 
  className = "", 
  staggerDelay = 0.1, 
  delayChildren = 0 
}: StaggerRevealProps) {
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delayChildren,
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerChildProps {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  duration?: number;
  initialOffset?: number;
  blur?: boolean;
}

export function StaggerChild({
  children,
  className = "",
  variant = "up",
  duration = 0.8,
  initialOffset = 25,
  blur = false
}: StaggerChildProps) {
  return (
    <motion.div
      className={className}
      variants={getVariants(variant, initialOffset, blur)}
      transition={{
        duration,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
