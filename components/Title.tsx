"use client";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import React from "react";

const Title = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02, // 0.1s gap between each letter
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
    <div
      className={cn(
        "relative text-cmsecondary inline-flex max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl 2xl:max-w-5xl",
        className
      )}
    >
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
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold"
              >
                {letter}
              </motion.span>
            ))}
            {/* Add a non-breaking space for the gap between words */}
            <motion.span
              variants={letterVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl uppercase font-bold"
            >
              &nbsp;
            </motion.span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Title;
