import { motion, type HTMLMotionProps } from "framer-motion";
import React from "react";
import { cn } from "../../utils/cn";

interface SplitTextProps extends HTMLMotionProps<"div"> {
  text: string;
  delay?: number;
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  delay = 0,
  className,
  ...props
}) => {
  const characters = text.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn("inline-flex overflow-hidden", className)}
      {...props}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          style={{
            display: "inline-block",
            whiteSpace: char === " " ? "pre" : "normal",
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};
