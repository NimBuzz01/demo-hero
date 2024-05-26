"use client";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import React from "react";

const Subtitle = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.005, // 0.1s gap between each letter
      },
    },
  };

  const letterVariants = {
    hidden: { y: "100%" },
    visible: {
      y: "0%",
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className={cn("relative inline-flex max-w-lg", className)}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-50px", once: true }}
        className="flex flex-wrap"
      >
        {words.map((word, wordIndex) => (
          <div key={wordIndex} className="flex overflow-hidden">
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={`${wordIndex}-${letterIndex}`}
                variants={letterVariants}
                className="text-base sm:text-lg lg:text-xl font-medium tracking-wide"
              >
                {letter}
              </motion.span>
            ))}
            {/* Add a non-breaking space for the gap between words */}
            <motion.span
              variants={letterVariants}
              className="text-base sm:text-xl font-medium tracking-wide"
            >
              &nbsp;
            </motion.span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Subtitle;
