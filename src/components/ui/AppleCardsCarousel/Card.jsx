import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../ lib/utils.js";

export const Card = ({ card, index, layout }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "relative w-[300px] md:w-[400px] h-[400px] md:h-[500px] bg-gray-800 text-white rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:z-10 transition-all duration-300",
        layout && "absolute top-0 left-0"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="w-full h-2/3 object-cover"
      />
      <div className="p-4">
        <p className="text-sm uppercase text-gray-400">{card.category}</p>
        <h3 className="text-lg font-bold">{card.title}</h3>
      </div>
    </motion.div>
  );
};
