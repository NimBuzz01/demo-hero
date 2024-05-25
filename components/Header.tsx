import { motion } from "framer-motion";
import { MenuIcon } from "lucide-react";
import React, { useState } from "react";

const navLinks = [
  { name: "Works", href: "#" },
  { name: "Services", href: "#" },
  { name: "Contact", href: "#" },
];

const slideDown = {
  initial: {
    y: -200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const underlineVariants = {
  hidden: {
    width: "0%",
  },
  visible: {
    width: "100%",
  },
};

const Header = () => {
  return (
    <motion.div
      variants={slideDown}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="absolute top-0 w-full flex justify-between items-center p-5 sm:p-10"
    >
      <h1 className="text-2xl font-semibold tracking-widest font-serif">
        plantica
      </h1>
      <div className="hidden sm:flex items-center gap-4 sm:gap-10 font-medium">
        {navLinks.map((link, index) => (
          <NavLink key={index} href={link.href}>
            {link.name}
          </NavLink>
        ))}
      </div>
      <MenuIcon className="sm:hidden rounded-full hover:bg-yellow-50 cursor-pointer transition-all p-1 w-8 h-8" />
    </motion.div>
  );
};

export default Header;

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.a
      href={href}
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      <motion.div
        className="absolute bottom-0 left-0 bg-black h-0.5"
        variants={underlineVariants}
        initial="hidden"
        animate={hovered ? "visible" : "hidden"}
      />
    </motion.a>
  );
};
