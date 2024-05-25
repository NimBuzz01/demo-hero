"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Copyright } from "lucide-react";

export const loaderSlide = {
  initial: { opacity: 0, y: 50 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05 + 0.3,
      duration: 0.6,
    },
  }),
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.6,
    },
  },
};

export const loaderSlideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export default function Loader() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={loaderSlideUp}
      initial="initial"
      exit="exit"
      className="fixed z-50 flex items-center justify-center w-screen h-screen bg-[#fcf6e3]"
    >
      {dimension.width > 0 && (
        <>
          <div className="absolute z-10 text-2xl sm:text-4xl font-bold">
            <motion.p
              variants={loaderSlide}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={0}
              className="mb-1 sm:mb-2"
            >
              Niamat Marjan
            </motion.p>
            <motion.div
              variants={loaderSlide}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={1}
              className="flex items-center gap-2 sm:gap-3"
            >
              <Copyright className="w-6 h-6 sm:w-9 sm:h-9 " /> Plantica &#39;24
            </motion.div>
          </div>

          <svg className="absolute top-0 w-full h-[calc(100%+75rem)]">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              className="fill-[#fcf6e3]"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}
