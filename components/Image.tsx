import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import React from "react";

const slideUp = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: "0%", opacity: 1 },
};

const Image = ({ className }: { className?: string }) => {
  return (
    <motion.div
      className={cn(
        "relative w-1/2 aspect-square rounded-3xl flex items-center justify-center overflow-hidden",
        className
      )}
    >
      <motion.img
        variants={slideUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 1.2, ease: "circOut" }}
        src="/flowers.jpg"
        className="w-full h-full rounded-3xl"
        style={{ objectFit: "contain" }}
      ></motion.img>
    </motion.div>
  );
};

export default Image;
