import React from "react";
import { motion } from "framer-motion";

export const Carousel = ({ items }) => {
  return (
    <motion.div
      className="relative w-full max-w-5xl mx-auto"
      drag="x"
      dragConstraints={{ left: -300, right: 0 }}
    >
      <div className="flex gap-5 justify-center">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="relative"
            style={{
              zIndex: items.length - index,
              transform: `translateX(-${index * 20}px)`,
            }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
